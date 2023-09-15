// src/components/LoginForm.js
import { Box, Heading, Input, Button, FormControl, FormLabel, Stack, Flex } from "@chakra-ui/react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import { useRef } from "react";



const LoginForm = ({}) => {
  const navigate = useNavigate();
  const formRef = useRef();
  const buttonStyle = {
    bg: "rgb(180, 157, 253)",
    fontFamily:'Lush Handwritten Compressed',
    ':hover':{ bg: 'white' }
  }

  const URL = 'http://localhost:5000/api/v1/users'

  const handleSubmit = (e)=>{
     e.preventDefault();
     const {username, password} = formRef.current;
      console.log(username.value, password.value)
     axios.post(URL,
      {username:username.value, 
        password:password.value})
        .then((response)=>{
          if(response.data.success){
            navigate('../home')
          }
          
        })
        .catch((err)=>console.log(err))
  }
  
  return (
    <Box maxW="sm" p="4">
        <Flex justifyContent="center" alignItems="center">
          <Heading as="h1" fontSize="4rem" mb="10rem" fontFamily='Lush Handwritten Compressed' color="white">
            LUSH
          </Heading>
        </Flex>
        <form onSubmit={handleSubmit} ref={formRef}>
          <Stack spacing="2rem">
            <FormControl id="username">
              <Input bg= 'white' type="text" name='username' placeholder="username" />
            </FormControl>
            <FormControl id="password">
              <Input bg= 'white' type="password" name='password' placeholder="password" />
            </FormControl>
            <Link style={{ color: 'white' }} to='/'>Forgot Password?</Link>
          </Stack>
          <Flex mt='4rem' justifyContent="flex-end" alignItems="flex-end">
              <Button type="submit" sx={buttonStyle}>
                SIGN-IN
              </Button>
          </Flex>
        </form>
      </Box>
  );
};

export default LoginForm;
