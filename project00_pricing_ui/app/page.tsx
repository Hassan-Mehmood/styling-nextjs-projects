'use client';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import { BsCheckCircleFill } from 'react-icons/bs';

const inter = Inter({
  subsets: [],
  weight: ['800', '500'],
});

export default function Home() {
  return (
    <ChakraProvider>
      <Box as="main">
        {/* Purple Box*/}
        <Box
          minH="394px"
          textAlign={['left', 'left', 'center']}
          px="1rem"
          py="2.75rem"
          bgColor="#6B46C1"
          textColor="#fff"
        >
          <Heading fontSize="30px" mb="15px" className={inter.className}>
            Simple pricing for your business
          </Heading>
          <Text fontSize="18px" textColor="#F7FAFC" className={inter.className} fontWeight="500">
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
        {/*Price Box*/}
        <Box
          display={['block', 'block', 'flex']}
          alignItems={['', '', 'center']}
          mx={['20px', '20px', 'auto']}
          mt="-140px"
          mb="35px"
          maxW="994px"
          width={['', '', '95%']}
          borderRadius="12px"
          overflow="hidden"
          boxShadow="rgba(0, 0, 0, 0.55) 0px 2px 8px;"
          bgColor="#fff"
        >
          <Box bgColor="#F0EAFB" textAlign="center" py={['35px', '', '80px']} textColor="#171923">
            <Heading as="h2" className={inter.className} fontSize="24px">
              Premium PRO
            </Heading>
            <Heading as="h3" my="10px" className={inter.className} fontWeight="800" fontSize="48px">
              $329
            </Heading>
            <Text mb="20px" fontSize="18px" fontWeight="500">
              billed just once
            </Text>
            <Button
              bgColor="#805AD5"
              textColor="#fff"
              minW="282px"
              className={inter.className}
              fontWeight="400"
              fontSize="16px"
              mx={['0px', '0px', '48px']}
              _hover={{
                backgroundColor: '#503886',
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box px="14px" pb="35px" className={inter.className}>
            <Text textColor="#2D3748" fontSize="18px" mt={['35px', '', '0px']}>
              Access these features when you get this pricing package for your business.
            </Text>
            <Box display="flex" alignItems="center" mt="25px">
              <BsCheckCircleFill />
              <Text ml="5px"> International calling and messaging API</Text>
            </Box>
            <Box display="flex" alignItems="center" mt="10px">
              <BsCheckCircleFill />
              <Text ml="5px"> Additional phone numbers</Text>
            </Box>
            <Box display="flex" alignItems="center" mt="10px">
              <BsCheckCircleFill />
              <Text ml="5px"> Automated messages via Zapier</Text>
            </Box>
            <Box display="flex" alignItems="center" mt="10px">
              <BsCheckCircleFill />
              <Text ml="5px"> 24/7 support and consulting</Text>
            </Box>
          </Box>
        </Box>
        {/*Last Section*/}
        <Box
          display={['block', 'block', 'flex']}
          alignItems={['', '', 'center']}
          justifyContent={['', '', 'space-around']}
          m={['30px 30px 140px', '', '0px auto']}
          maxW="994px"
          width={['', '', '95%']}
          className={inter.className}
        >
          <Text textColor="#171923" mb={['10px', '', '0px']}>
            30 days money back Guarantree
          </Text>
          <Text textColor="#171923" mb={['10px', '', '0px']} mx={['0px', '0px', '45px']}>
            No setup fees 100% hassle-free
          </Text>
          <Text textColor="#171923">No monthly subscription Pay once and for all</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
