import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState, type JSX } from 'react';
import { getShopData } from './api/getShopData';
import type { Shop } from './api/mock';
import ShopList from './components/shopList';

export default function App(): JSX.Element {
  const { data, ...queryParams } = useInfiniteQuery(getShopData());
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    setShops(data ? data.pages.flatMap((pages) => pages.data) : []);
  }, [data]);

  return (
    <div className="flex min-h-svh flex-col">
      <ShopList shops={shops} queryParams={{ ...queryParams }} />
    </div>
  );
}
