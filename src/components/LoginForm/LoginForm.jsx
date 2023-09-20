// src/components/LoginForm.js
import { Box, Heading, Input, Button, FormControl,Stack, Flex } from "@chakra-ui/react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation  } from "framer-motion";


const LoginForm = ({}) => {
  const navigate = useNavigate();
  // const [headingVisible, setHeadingVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const controls = useAnimation()
  const formRef = useRef();
  const [formHeight, setFormHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto")
  const buttonStyle = {
    bg: "rgb(180, 157, 253)",
    fontFamily:'Lush Handwritten Compressed',
    ':hover':{ bg: 'white' }
  }

  const URL = 'http://localhost:5000/api/v1/users'

    // Use useEffect to trigger the heading animation after the component mounts
    useEffect(() => {
    //   setTimeout(() => {
    //     setHeadingVisible(true);
    //   }, 100);
  
      // Use another timeout to make the form visible after 1 second
      setTimeout(() => {
        setFormVisible(true);
      }, 5000);
    }, []);
    

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

                       <motion.div
                       initial={{ opacity: 0, y: -50 }} // Initial state (hidden)
                       animate={{ opacity: 1, y: -200 }} // Visible state
                       transition={{ duration: 6, delay: 1 }} // Transition duration with delay
                   >
                <Heading as="h1" fontSize="4rem" fontFamily='Lush Handwritten Compressed' color="white">
                  LUSH
                </Heading>
          </motion.div>

    
        </Flex>
        {formVisible &&
          <motion.div
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1}}  // Visible state
          transition={{ duration: 5 }} // Transition duration
        >
        <form onSubmit={handleSubmit} ref={formRef}>
          <Stack spacing="1rem" width='90vw'>
            <FormControl id="username">
              <Input bg= 'white' type="text" name='username' placeholder="username"/>
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
        </motion.div>
        }
      </Box>

  );
};

export default LoginForm;
