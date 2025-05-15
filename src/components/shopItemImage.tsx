import { imageHashes } from '@/api/mock';
import { DEFAULT_BLURHASH } from '@/utils/constants';
import { cn } from '@/utils/helpers';
import { useEffect, useRef, useState, type JSX } from 'react';
import { Blurhash } from 'react-blurhash';

interface ShopItemImageProps {
  imageUrl: string;
  alt: string;
}

export default function ShopItemImage(props: ShopItemImageProps): JSX.Element {
  const { imageUrl, alt } = props;
  const hash = imageHashes[imageUrl] || DEFAULT_BLURHASH;

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.floor(width) || (16 / 9) * 500,
          height: Math.floor(height) || 500,
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setImageLoaded(false);
  }, [imageUrl]);

  return (
    <div
      ref={containerRef}
      className="bg-card absolute inset-0 h-full w-full overflow-hidden"
    >
      {dimensions.height > 0 && dimensions.width > 0 && (
        <div
          data-testid="blurhash-wrapper"
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            imageLoaded ? 'opacity-0' : 'opacity-100'
          )}
        >
          <Blurhash
            data-testid="blurhash"
            hash={hash}
            width={dimensions.width}
            height={dimensions.height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        src={imageUrl}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={cn(
          'h-full w-full transform-gpu object-cover transition-all duration-500 will-change-transform group-hover/shop:scale-110',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
}
