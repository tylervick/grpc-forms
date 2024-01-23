import { ThemeProvider } from '@/components/theme-provider';
import { render as testingLibraryRender } from '@testing-library/react';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        {children}
      </ThemeProvider>
    ),
  });
}
