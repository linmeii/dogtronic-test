import { mockData } from '@/api/mock';
import ShopItem from '@/components/shopItem';
import { ThemeProvider } from '@/components/themeProvider';
import '@/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { page } from '@vitest/browser/context';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      {children}
    </ThemeProvider>
  </QueryClientProvider>
);

describe('COMPONENT [ShopItemImage]', () => {
  const testShop = mockData[0];

  it('should render blurhash when image is loading', async () => {
    const { baseElement } = render(<ShopItem shop={testShop} />, { wrapper });
    const screen = page.elementLocator(baseElement);
    await expect.element(screen.getByTestId('blurhash')).toBeInTheDocument();
  });

  it('should hide blurhash when image is loaded', async () => {
    const { baseElement } = render(<ShopItem shop={testShop} />, { wrapper });
    const screen = page.elementLocator(baseElement);
    await vi.waitFor(() =>
      expect.element(screen.getByTestId('blurhash-wrapper')).toHaveStyle({
        opacity: '0',
      })
    );
  });
});
