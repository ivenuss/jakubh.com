/* eslint-disable import/no-extraneous-dependencies */
import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    image: { type: 'string', required: true },
    icon: { type: 'string', required: true },
    description: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    preview: { type: 'string' },
    repo: { type: 'string' },
    owner: { type: 'string' }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }]
    ]
  }
});

export default contentLayerConfig;
