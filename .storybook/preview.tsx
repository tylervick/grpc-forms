import { ThemeProvider } from '@/context/theme/ThemeProvider';
import { useTheme } from '@/context/theme/theme-hook';
import '@/globals.css';
import { addons } from '@storybook/preview-api';
import React, { useEffect } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { DocsContainer } from './DocsContainer';

const channel = addons.getChannel();

function Wrapper({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const handleColorScheme = (value: boolean) => setTheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Wrapper>{renderStory()}</Wrapper>
    </ThemeProvider>
  ),
  // (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];

export const parameters = {
  docs: {
    container: DocsContainer,
  },
};
