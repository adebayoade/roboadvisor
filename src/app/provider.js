'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = {
  maxWidth: '1400px',
};

// export the component theme
const containerTheme = defineStyleConfig({ baseStyle });

export const theme = extendTheme({
  components: {
    Container: containerTheme,
  },
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
