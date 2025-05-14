import type { JSX } from 'react';

interface ShopLoaderProps {
  hasNextPage: boolean;
}

export default function ShopLoader(props: ShopLoaderProps): JSX.Element {
  const { hasNextPage } = props;

  return (
    <div className="w-full flex items-center justify-center h-full max-h-[425px] flex-col bg-white p-4">
      {hasNextPage ? (
        <div className="animate-spin inline-block size-10 border-5 border-current border-t-transparent text-neutral-600 rounded-full dark:text-neutral-500" />
      ) : (
        <p className="font-normal leading-relaxed mx-auto lg:text-lg text-base">
          Nothing more to load
        </p>
      )}
    </div>
  );
}
