import { MOCK_FETCH_DELAY, PAGE_FETCH_LIMIT } from '@/utils/constants';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { mockData, type Shop } from './mock';

/**
 * Type of data that our mock
 * function will return
 */
export type GetShopDataResult = {
  data: Shop[];
  nextOffset: number | null;
};

/**
 * I've been taught to use this pattern where 'private function'
 * (one that fetches data and is used only by the following function)
 * is leaded by _ suffix
 */
export async function _getShopData(
  limit: number,
  offset: number = 0
): Promise<GetShopDataResult> {
  const startIndex = offset * limit;
  const endIndex = startIndex + limit;
  const data = mockData.slice(startIndex, endIndex);
  const hasMoreData = endIndex < mockData.length;
  // Simulate network delay to behave like a real api call
  await new Promise((resolve) => setTimeout(resolve, MOCK_FETCH_DELAY));
  return { data, nextOffset: hasMoreData ? offset + 1 : null };
}

/**
 * This would be a 'public function' that is used for component to fetch data.
 * In this case it exports complete reusable hook options of react-query
 */
export function getShopData() {
  return infiniteQueryOptions({
    queryKey: ['getShopData'],
    queryFn: (ctx) => _getShopData(PAGE_FETCH_LIMIT, ctx.pageParam),
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 0,
  });
}
