import Header from '@/components/header';
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

describe('COMPONENT [Header]', () => {
  it('should render the header component', async () => {
    render(<Header />, { wrapper });
    await expect.element(page.getByTestId('header')).toBeInTheDocument();
  });

  it('should toggle theme on button click', async () => {
    const { baseElement } = render(<Header />, { wrapper });
    const screen = page.elementLocator(baseElement);

    const button = screen.getByRole('button');
    const htmlElement = document.documentElement;

    const initialDark = htmlElement.classList.contains('dark');
    const initialLight = htmlElement.classList.contains('light');
    expect(initialDark !== initialLight).toBe(true);

    await button.click();

    if (initialDark) {
      expect(htmlElement.classList.contains('light')).toBe(true);
      expect(htmlElement.classList.contains('dark')).toBe(false);
    } else {
      expect(htmlElement.classList.contains('dark')).toBe(true);
      expect(htmlElement.classList.contains('light')).toBe(false);
    }

    await button.click();

    expect(htmlElement.classList.contains('dark')).toBe(initialDark);
    expect(htmlElement.classList.contains('light')).toBe(initialLight);
  });
});
