/* eslint-disable import/no-extraneous-dependencies */
import {
  ComputedFields,
  defineDocumentType,
  LocalDocument,
  makeSource
} from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const getSlug = (doc: LocalDocument) =>
  doc._raw.sourceFileName.replace(/\.mdx$/, '');

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: getSlug
  },
  icon: {
    type: 'string',
    resolve: (doc) => `/static/images/projects/${getSlug(doc)}/icon.png`
  },
  image: {
    type: 'string',
    resolve: (doc) => `/static/images/projects/${getSlug(doc)}/thumbnail.png`
  },
  previewImage: {
    type: 'string',
    resolve: (doc) => `/static/images/projects/${getSlug(doc)}/preview.png`
  }
};

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
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
