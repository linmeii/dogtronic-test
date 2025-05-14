import { PAGE_FETCH_LIMIT } from '@/utils/constants';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { mockData, type Shop } from './mock';

export function getShopData() {
  return infiniteQueryOptions({
    queryKey: ['getShopData'],
    queryFn: (ctx) => _getShopData(PAGE_FETCH_LIMIT, ctx.pageParam),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 0,
  });
}

async function _getShopData(limit: number, offset: number = 0): Promise<{ data: Shop[]; nextOffset: number }> {
  const startIndex = offset * limit;
  const endIndex = startIndex + limit;
  const data = mockData.slice(startIndex, endIndex);
  // Simulate network delay to behave like a real api call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { data, nextOffset: offset + 1 };
}
