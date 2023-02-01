'use client';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: [],
  weight: '800',
});

export default function Home() {
  return (
    <ChakraProvider>
      <Box as="main">
        {/* Purple Box*/}
        <Box px="1rem" py="2.75rem" bgColor="#6B46C1" textColor="#fff">
          <Heading className={inter.className}>Simple pricing for your business</Heading>
          <Text>Plans that are carefully crafted to suit your business</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
