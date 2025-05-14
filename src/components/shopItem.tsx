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
    <article className="group/shop w-full relative flex h-full max-h-[425px] flex-col justify-between gap-y-4 overflow-hidden rounded-lg bg-transparent p-10">
      <ShopItemImage
        imageUrl={shop.imageUrl}
        alt={formatAddress(shop.address)}
      />
      <div className="relative z-10 mt-auto">
        <small className="text-xs inline-flex items-center bg-white text-black p-1 min-h-5 gap-2.5 mb-2.5">
          #{shop.id} {shop.type}
        </small>
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-5xl">
          {formatAddress(shop.address)}
        </h1>
      </div>
    </article>
  );
}
