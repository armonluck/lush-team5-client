// src/components/LoginForm.js
import { Box, Heading, Input, Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import {Link} from 'react-router-dom'


const LoginForm = () => {
  return (
    <Box maxW="sm" p="4" borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="md" mb="4" fontFamily='Lush Handwritten Compressed'>
        LUSH
      </Heading>
      <form>
        <Stack spacing="4">
          <FormControl id="username">
            <Input type="text" placeholder="username" />
          </FormControl>
          <FormControl id="password">
            <Input type="password" placeholder="password" />
          </FormControl>
          <Link to='/'>Forgot Password?</Link>

          <Button type="submit" bg="rgb(180, 157, 253)" fontFamily='Lush Handwritten Compressed' _hover={{ bg: 'white' }}>
            SIGN-IN
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
