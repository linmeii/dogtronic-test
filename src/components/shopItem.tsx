import type { Shop } from '@/api/mock';
import { cn } from '@/utils/helpers';
import type { JSX } from 'react';

interface ShopItemProps {
  className?: string;
  item: Shop;
}

export default function ShopItem(props: ShopItemProps): JSX.Element {
  const { className, item } = props;
  return (
    <article
      className={cn(
        'group/shop w-full relative flex h-full max-h-[500px] flex-col justify-between gap-y-4 overflow-hidden rounded bg-white p-4',
        className
      )}
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <img
          src={`${item.imageUrl}`}
          loading="lazy"
          alt="shop image"
          className="h-full w-full transform-gpu object-cover transition-transform duration-300 will-change-transform group-hover/shop:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 mt-auto">
        <div className="inline-flex items-center gap-2.5">
          <small className="text-sm leading-relaxed font-light text-white">
            {item.id}
          </small>
          <div className="focus:ring-ring inline-flex items-center rounded-md border bg-white/80 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
            {item.type}
          </div>
        </div>
        <h1 className="text-base leading-snug font-light tracking-normal text-white lg:text-xl">
          {item.address}
        </h1>
      </div>
    </article>
  );
}
