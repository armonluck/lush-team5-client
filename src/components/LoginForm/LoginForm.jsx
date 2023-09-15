// src/components/LoginForm.js
import { Box, Heading, Input, Button, FormControl, FormLabel, Stack, Flex } from "@chakra-ui/react";
import {Link} from 'react-router-dom'


const LoginForm = () => {

  const buttonStyle = {
    bg: "rgb(180, 157, 253)",
    fontFamily:'Lush Handwritten Compressed',
    ':hover':{ bg: 'white' }
  }
  
  return (
    <Box maxW="sm" p="4">
        <Flex justifyContent="center" alignItems="center">
          <Heading as="h1" fontSize="4rem" mb="12rem" fontFamily='Lush Handwritten Compressed' color="white">
            LUSH
          </Heading>
        </Flex>
        <form>
          <Stack spacing="4">
            <FormControl id="username">
              <Input bg= 'white' type="text" placeholder="username" />
            </FormControl>
            <FormControl id="password">
              <Input bg= 'white' type="password" placeholder="password" />
            </FormControl>
            <Link style={{ color: 'white' }} to='/'>Forgot Password?</Link>

            <Button type="submit" sx={buttonStyle}>
              SIGN-IN
            </Button>
          </Stack>
        </form>
      </Box>
  );
};

export default LoginForm;
