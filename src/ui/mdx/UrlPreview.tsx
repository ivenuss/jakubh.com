import React from 'react';
import useSWR from 'swr';
import fetcher from '~/lib/fetcher';
import clsx from 'clsx';
import { HideImage } from '~/icons';
import type { OgUrlResponse } from '~/types';

interface UrlPreviewProps {
  url: string;
  isHorizontal?: boolean;
}

// https://stackoverflow.com/a/25703406
const getDomainName = (url: string) => {
  const reg = new RegExp(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/gim
  );
  return reg.exec(url)?.[1] || 'unknown';
};

export const UrlPreview: React.FC<UrlPreviewProps> = ({
  url,
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
        'group my-5 flex w-full max-w-full overflow-hidden rounded-lg border border-gray-300 dark:border-primary-600 md:rounded-xl',
        isHorizontal ? 'flex-row' : 'flex-col'
      )}
    >
      <div
        className={clsx(
          'grid place-items-center border-b border-gray-300 bg-cover bg-center bg-no-repeat dark:border-primary-600',
          isHorizontal
            ? 'aspect-square h-24 w-24 md:h-32 md:w-32'
            : 'aspect-video'
        )}
        style={{
          backgroundImage: `url(${data?.ogImage?.url})`
        }}
      >
        <HideImage className="-z-[1] text-4xl text-gray-600 dark:text-primary-600" />
      </div>

      <div
        className={clsx(
          'flex w-full flex-col p-3 transition-colors group-hover:bg-gray-100/50 dark:group-hover:bg-primary-800 md:p-3.5',
          { 'justify-center': isHorizontal }
        )}
      >
        <div className="block overflow-hidden text-left leading-[1.325rem]">
          <div className="truncate text-gray-600 dark:text-primary-300">
            {getDomainName(data.requestUrl)}
          </div>
          <div className="truncate text-black dark:text-primary-100">
            {data.ogTitle}
          </div>
          <div className="hidden truncate text-gray-700 dark:text-primary-200 sm:block">
            {data.ogDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlPreview;
