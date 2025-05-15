import { MoonStarIcon, SunIcon } from 'lucide-react';
import type { JSX } from 'react';
import { useTheme } from './themeProvider';

export default function Header(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <header
      data-testid="header"
      className="bg-card container mx-auto mb-1.5 flex h-96 max-h-96 flex-col rounded-lg p-10"
    >
      <h1 className="text-card-foreground text-2xl font-bold tracking-wider md:text-3xl lg:text-5xl">
        Shoplist
      </h1>
      <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed font-normal sm:text-lg">
        I created this page as part of a test assignment - its purpose is to
        present an optimized list of shops.
      </p>
      <p className="text-muted mt-2.5 max-w-3xl text-sm leading-relaxed font-normal sm:text-lg">
        Scroll down to see how it works - and don&apos;t forget to customize the
        look of the page to your style using the button located just below this
        text {':)'}
      </p>
      <button
        onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
        className="text-background bg-muted/50 hover:bg-muted/90 mt-auto inline-flex size-9 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0"
      >
        {isDarkTheme ? <MoonStarIcon /> : <SunIcon />}
      </button>
      <small className="text-muted mt-2.5 text-xs">
        made by Maciej Ciechomski
      </small>
    </header>
  );
}
