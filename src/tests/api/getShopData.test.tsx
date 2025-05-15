import { _getShopData, getShopData } from '@/api/getShopData';
import { mockData } from '@/api/mock';
import { PAGE_FETCH_LIMIT } from '@/utils/constants';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { renderHook } from 'vitest-browser-react';

const queryClient = new QueryClient();
const queryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('API [getShopData]', () => {
  describe('PRIVATE _getShopData', () => {
    it('should return correct data for the first page', async () => {
      const firstPage = await _getShopData(PAGE_FETCH_LIMIT);
      expect(firstPage.data).toEqual(mockData.slice(0, PAGE_FETCH_LIMIT));
      expect(firstPage.nextOffset).toEqual(1);
    });

    it('should return correct data for the next page', async () => {
      const nextPage = await _getShopData(PAGE_FETCH_LIMIT, 1);
      expect(nextPage.data).toEqual(
        mockData.slice(PAGE_FETCH_LIMIT, PAGE_FETCH_LIMIT * 2)
      );
      expect(nextPage.nextOffset).toEqual(2);
    });

    it('should return null nextOffset when there is no more data', async () => {
      const lastPage = Math.ceil(mockData.length / PAGE_FETCH_LIMIT) - 1;
      const result = await _getShopData(PAGE_FETCH_LIMIT, lastPage);
      expect(result.nextOffset).toBeNull();
    });
  });

  describe('PUBLIC getShopData', () => {
    it('should return correct query options', () => {
      const options = getShopData();
      expect(options.queryKey).toEqual(['getShopData']);
      expect(options.queryFn).toBeDefined();
      expect(options.initialPageParam).toBe(0);
    });

    it('should fetch correct page data (inf.query)', async () => {
      const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
        wrapper: queryWrapper,
      });
      await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(result.current.data?.pages).toEqual([
        {
          data: [...mockData.slice(0, PAGE_FETCH_LIMIT)],
          nextOffset: 1,
        },
      ]);
    });

    it('should fetch more pages (inf.query)', async () => {
      const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
        wrapper: queryWrapper,
      });
      await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(result.current.data?.pages).toEqual([
        {
          data: [...mockData.slice(0, PAGE_FETCH_LIMIT)],
          nextOffset: 1,
        },
      ]);
      result.current.fetchNextPage();
      await vi.waitFor(() =>
        expect(result.current.data?.pages).toEqual([
          {
            data: [...mockData.slice(0, PAGE_FETCH_LIMIT)],
            nextOffset: 1,
          },
          {
            data: [...mockData.slice(PAGE_FETCH_LIMIT, PAGE_FETCH_LIMIT * 2)],
            nextOffset: 2,
          },
        ])
      );
    });
  });
});
