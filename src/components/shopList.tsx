import type { GetShopDataResult } from '@/api/getShopData';
import type { Shop } from '@/api/mock';
import { PAGE_FETCH_LIMIT } from '@/utils/constants';
import type { useInfiniteQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef, type JSX } from 'react';
import Header from './header';
import ShopItem from './shopItem';
import ShopLoader from './shopLoader';

interface ShopListProps {
  shops: Shop[];
  queryParams: Omit<
    ReturnType<typeof useInfiniteQuery<GetShopDataResult>>,
    'data'
  >;
}

export default function ShopList(props: ShopListProps): JSX.Element {
  const { shops, queryParams } = props;

  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: queryParams.hasNextPage ? shops.length + 1 : shops.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 396,
    overscan: PAGE_FETCH_LIMIT / 2,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    if (!lastItem) return;

    if (
      lastItem.index >= shops.length - 1 &&
      queryParams.hasNextPage &&
      !queryParams.isFetchingNextPage
    ) {
      queryParams.fetchNextPage();
    }
  }, [
    queryParams.hasNextPage,
    queryParams.fetchNextPage,
    shops.length,
    queryParams.isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <div
      ref={parentRef}
      className="h-svh w-full overflow-auto scroll-smooth py-3"
    >
      <Header />
      {queryParams.isLoading ? (
        <>
          <div className="bg-foreground/10 container mx-auto my-3 h-96 max-h-96 animate-pulse rounded-lg" />
          <div className="bg-foreground/10 container mx-auto my-3 h-96 max-h-96 animate-pulse rounded-lg" />
        </>
      ) : (
        <main
          style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          className="relative container mx-auto w-full"
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const isLoaderRow = virtualRow.index > shops.length - 1;
            const shop = shops[virtualRow.index];
            return (
              <div
                key={virtualRow.index}
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className="absolute top-0 left-0 w-full py-1.5"
              >
                {isLoaderRow ? (
                  <ShopLoader hasNextPage={queryParams.hasNextPage} />
                ) : (
                  <ShopItem shop={shop} />
                )}
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
}
