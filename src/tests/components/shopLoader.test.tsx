import ShopLoader from '@/components/shopLoader';
import { ThemeProvider } from '@/components/themeProvider';
import '@/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { page } from '@vitest/browser/context';
import { type ReactNode } from 'react';
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

describe('COMPONENT [ShopLoader]', () => {
  it('should render the spinner', async () => {
    const { baseElement } = render(<ShopLoader hasNextPage />, { wrapper });
    const screen = page.elementLocator(baseElement);
    await expect
      .element(screen.getByTestId('shop-loader-spinner'))
      .toBeInTheDocument();
  });

  it('should render the text', async () => {
    const { baseElement } = render(<ShopLoader hasNextPage={false} />, {
      wrapper,
    });
    const screen = page.elementLocator(baseElement);
    await expect
      .element(screen.getByText('Nothing more to load'))
      .toBeInTheDocument();
  });
});
