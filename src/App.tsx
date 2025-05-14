import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState, type JSX } from 'react';
import { getShopData } from './api/getShopData';
import ShopList from './components/shopList';
import type { Shop } from './api/mock';

export default function App(): JSX.Element {
  const { data, ...queryParams } = useInfiniteQuery(getShopData());
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    setShops(data ? data.pages.flatMap((pages) => pages.data) : []);
  }, [data]);

  if (queryParams.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex min-h-svh flex-col bg-zinc-100">
      <div className="container mx-auto flex flex-1 flex-col items-center py-3">
        <ShopList shops={shops} queryParams={{ ...queryParams }} />
      </div>
    </div>
  );
}
