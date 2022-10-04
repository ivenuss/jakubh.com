import React from 'react';
import useSWR from 'swr';
import fetcher from '~/lib/fetcher';
import clsx from 'clsx';
import { HideImage } from '~/icons';
import type { OgUrlResponse } from '~/types/types';

interface UrlPreviewProps {
  url: string;
  redirect?: boolean;
  isHorizontal?: boolean;
}

// https://stackoverflow.com/a/25703406
const getDomainName = (url: string) => {
  const reg = new RegExp(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim
  );
  return reg.exec(url)[1];
};

export const UrlPreview: React.FC<UrlPreviewProps> = ({
  url,
  redirect = true,
  isHorizontal = false
}) => {
  const { data, error } = useSWR<OgUrlResponse>(
    `/api/og-url?url=${url}`,
    fetcher
  );

  if (!data || error) return null;

  return (
    <div
      className={clsx(
        'group flex w-full max-w-full my-5 rounded-lg md:rounded-xl overflow-hidden border border-gray-300 dark:border-primary-600',
        isHorizontal ? 'flex-row' : 'flex-col'
      )}
    >
      <div
        className={clsx(
          'grid place-items-center bg-cover bg-center bg-no-repeat border-b border-gray-300 dark:border-primary-600',
          isHorizontal
            ? 'aspect-square w-24 h-24 md:w-32 md:h-32'
            : 'aspect-video'
        )}
        style={{
          backgroundImage: `url(${data?.ogImage.url})`
        }}
      >
        <HideImage className="text-4xl text-gray-600 dark:text-primary-600 -z-[1]" />
      </div>

      <div
        className={clsx(
          'w-full flex flex-col p-3 md:p-3.5 transition-colors group-hover:bg-gray-100/50 dark:group-hover:bg-primary-800',
          { 'justify-center': isHorizontal }
        )}
      >
        <div className="block text-left leading-[1.325rem] overflow-hidden">
          <div className="truncate text-gray-600 dark:text-primary-300">
            {getDomainName(data.requestUrl)}
          </div>
          <div className="truncate text-black dark:text-primary-100">
            {data.ogTitle}
          </div>
          <div className="hidden sm:block truncate text-gray-700 dark:text-primary-200">
            {data.ogDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlPreview;
