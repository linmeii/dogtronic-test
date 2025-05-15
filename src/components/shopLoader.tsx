import type { JSX } from 'react';

interface ShopLoaderProps {
  hasNextPage: boolean;
}

export default function ShopLoader(props: ShopLoaderProps): JSX.Element {
  const { hasNextPage } = props;

  return (
    <div
      data-testid="shop-loader"
      className="bg-background container mx-auto flex h-96 max-h-96 w-full flex-col items-center justify-center p-4"
    >
      {hasNextPage ? (
        <div
          data-testid="shop-loader-spinner"
          className="text-muted inline-block size-10 animate-spin rounded-full border-5 border-current border-t-transparent"
        />
      ) : (
        <p className="mx-auto text-base leading-relaxed font-normal lg:text-lg">
          Nothing more to load
        </p>
      )}
    </div>
  );
}
