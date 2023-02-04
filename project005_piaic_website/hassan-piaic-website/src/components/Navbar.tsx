'use client';
import { Box, Flex } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box as="nav">
      <Flex>
        <Box>Logo</Box>
        <Box>Navlinks</Box>
      </Flex>
    </Box>
  );
}
