import type { Shop } from '@/api/mock';
import type { JSX } from 'react';
import ShopItemImage from './shopItemImage';

interface ShopItemProps {
  shop: Shop;
}

export default function ShopItem(props: ShopItemProps): JSX.Element {
  const { shop } = props;

  const formatAddress = (address: string) => {
    return address.replace(/\s+\d{2}-\d{3}\s*,/, ',');
  };

  return (
    <article className="group/shop relative flex h-96 max-h-96 w-full flex-col justify-between gap-y-4 overflow-hidden rounded-lg bg-transparent p-10">
      <ShopItemImage
        imageUrl={shop.imageUrl}
        alt={formatAddress(shop.address)}
      />
      <div className="relative z-10 mt-auto">
        <small className="mb-2.5 inline-flex min-h-5 items-center gap-1 bg-neutral-50 px-2 py-1 text-xs text-neutral-900">
          <span>#{shop.id}</span>
          <span className="font-light tracking-tight">{shop.type}</span>
        </small>
        <h1 className="text-2xl font-bold text-neutral-50 md:text-3xl lg:text-5xl">
          {formatAddress(shop.address)}
        </h1>
      </div>
    </article>
  );
}
