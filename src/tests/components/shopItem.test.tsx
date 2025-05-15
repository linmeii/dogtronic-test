import { mockData } from '@/api/mock';
import ShopItem from '@/components/shopItem';
import { ThemeProvider } from '@/components/themeProvider';
import '@/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { page } from '@vitest/browser/context';
import type { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      {children}
    </ThemeProvider>
  </QueryClientProvider>
);

describe('COMPONENT [ShopItem]', () => {
  const testShop = mockData[0];

  it('should render the shop item component', async () => {
    render(<ShopItem shop={testShop} />, { wrapper });
    await expect.element(page.getByText(`#${testShop.id}`)).toBeInTheDocument();
  });

  it('should display shop type correctly', async () => {
    const { baseElement } = render(<ShopItem shop={testShop} />, { wrapper });
    const screen = page.elementLocator(baseElement);
    await expect.element(screen.getByText(testShop.type)).toBeInTheDocument();
  });

  it('should display formatted address correctly', async () => {
    const { baseElement } = render(<ShopItem shop={testShop} />, { wrapper });
    const screen = page.elementLocator(baseElement);
    const formattedAddress = testShop.address.replace(
      /\s+\d{2}-\d{3}\s*,/,
      ','
    );
    await expect
      .element(screen.getByText(formattedAddress))
      .toBeInTheDocument();
  });

  it('should render the shop image with correct alt text', async () => {
    const { baseElement } = render(<ShopItem shop={testShop} />, { wrapper });
    const screen = page.elementLocator(baseElement);
    const formattedAddress = testShop.address.replace(
      /\s+\d{2}-\d{3}\s*,/,
      ','
    );
    const image = screen.getByRole('img');
    await expect.element(image).toHaveAttribute('alt', formattedAddress);
  });
});
