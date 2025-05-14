import type { Shop } from '@/api/mock';
import type { useInfiniteQuery } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef, type JSX } from 'react';
import ShopItem from './shopItem';
import { PAGE_FETCH_LIMIT } from '@/utils/constants';
import type { GetShopDataResult } from '@/api/getShopData';
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
    estimateSize: () => 425,
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
    <div ref={parentRef} className="h-svh w-full overflow-auto scroll-smooth">
      <div
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
        className="relative w-full"
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
              className="absolute left-0 top-0 w-full py-1.5"
            >
              {isLoaderRow ? (
                <ShopLoader hasNextPage={queryParams.hasNextPage} />
              ) : (
                <ShopItem shop={shop} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
