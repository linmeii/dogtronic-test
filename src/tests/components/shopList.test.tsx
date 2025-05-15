import { getShopData } from '@/api/getShopData';
import { mockData } from '@/api/mock';
import ShopList from '@/components/shopList';
import { ThemeProvider } from '@/components/themeProvider';
import '@/index.css';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { page } from '@vitest/browser/context';
import { type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, renderHook } from 'vitest-browser-react';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      {children}
    </ThemeProvider>
  </QueryClientProvider>
);

describe('COMPONENT [ShopList]', () => {
  it('should render loading state correctly', async () => {
    const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
      wrapper,
    });
    const { baseElement } = render(
      <ShopList
        shops={[]}
        queryParams={{ ...result.current, isLoading: true }}
      />,
      {
        wrapper,
      }
    );
    const screen = page.elementLocator(baseElement);
    await expect
      .element(screen.getByTestId('shop-skeleton-1'))
      .toBeInTheDocument();
    await expect
      .element(screen.getByTestId('shop-skeleton-2'))
      .toBeInTheDocument();
  });

  it('should render shop items correctly', async () => {
    const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
      wrapper,
    });
    await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
    const shops =
      result.current.data?.pages.flatMap((pages) => pages.data) ?? [];
    const { baseElement } = render(
      <ShopList shops={shops} queryParams={{ ...result.current }} />
    );
    const screen = page.elementLocator(baseElement);
    await expect
      .element(screen.getByText(`#${mockData[0].id}`))
      .toBeInTheDocument();
    await expect
      .element(screen.getByText(`#${mockData[1].id}`))
      .toBeInTheDocument();
  });

  it('should render loader when hasNextPage is true', async () => {
    const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
      wrapper,
    });
    await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
    const shops =
      result.current.data?.pages.flatMap((pages) => pages.data) ?? [];
    const { baseElement } = render(
      <ShopList shops={shops.slice(0, 1)} queryParams={{ ...result.current }} />
    );
    const screen = page.elementLocator(baseElement);
    await expect.element(screen.getByTestId('shop-loader')).toBeInTheDocument();
  });

  it('should call fetchNextPage when scrolling to botom', async () => {
    const { result } = renderHook(() => useInfiniteQuery(getShopData()), {
      wrapper,
    });
    const fetchNextPage = vi.fn(() => result.current.fetchNextPage);
    await vi.waitFor(() => expect(result.current.isSuccess).toBe(true));
    const shops =
      result.current.data?.pages.flatMap((pages) => pages.data) ?? [];
    const { baseElement } = render(
      <ShopList
        shops={shops}
        queryParams={{ ...result.current, fetchNextPage: fetchNextPage() }}
      />
    );
    await vi.waitFor(() => {
      const scrollContainer = baseElement.querySelector('.h-svh');
      expect(scrollContainer).toBeInTheDocument();
    });
    const scrollContainer = baseElement.querySelector('.h-svh');
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
      await vi.waitFor(() => expect(fetchNextPage).toBeCalled(), {
        timeout: 14999,
      });
    }
  });
});
