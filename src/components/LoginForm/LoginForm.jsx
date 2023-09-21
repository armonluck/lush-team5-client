// src/components/LoginForm.js
import { Box, Heading, Input, Button, FormControl, Stack, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  // const [headingVisible, setHeadingVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const controls = useAnimation()
  const formRef = useRef();
  const [formHeight, setFormHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto")
  const buttonStyle = {
    bg: "rgb(180, 157, 253)",
    fontFamily: 'Lush Handwritten Compressed',
    fontSize: '24px', 
    lineHeight: 'normal',
    borderRadius: '10px',
    p: '13px 46px',
    w: '169px',
    h: '60px',
    ':hover': { bg: 'white' }
  }

  // const URL = 'http://localhost:5051/api/v1/users'

  // Use useEffect to trigger the heading animation after the component mounts
  useEffect(() => {
    //   setTimeout(() => {
    //     setHeadingVisible(true);
    //   }, 100);

    // Use another timeout to make the form visible after 1 second
    setTimeout(() => {
      setFormVisible(true);
    }, 1500);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formRef.current;
    console.log(username.value, password.value)
    setLoggedIn(true)
    navigate('/home')
  }

  return (
    <Box maxW="full" p="0" bg='#282121'>
      <Flex justifyContent="center" alignItems="center">

        <motion.div
          initial={{ opacity: 0, y: -50 }} // Initial state (hidden)
          animate={{ opacity: 1, y: -200 }} // Visible state
          transition={{ duration: 1.5, delay: 1 }} // Transition duration with delay
        >
          <Heading as="h1" fontSize="4rem" fontFamily='Lush Handwritten Compressed' color="white" marginTop='68px' marginBottom='-20px'>
            LUSH
          </Heading>
        </motion.div>
      </Flex>
      {formVisible &&
        <motion.div
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1 }}  // Visible state
          transition={{ duration: 1.5 }} // Transition duration
          padding='0'
          bg='#282121'

        >
          <form onSubmit={(e) => { handleSubmit(e) }} ref={formRef}>
            <Stack spacing="1rem" width='90vw' mx='40px' fontFamily='Helvetica' >
              <FormControl id="username" paddingBottom='48px'>
                <Input bg='white' borderRadius='5px' fontSize='20px'
                type="text" name='username' placeholder="username" autoComplete="username" />
              </FormControl>
              <FormControl id="password">
                <Input bg='white' borderRadius='5px' fontSize='20px'
                type="password" name='password' placeholder="password" autoComplete="current-password" />
              </FormControl>
              <Link style={{ color: 'white', fontSize: '16px', opacity: '0.7' }} to='/'>Forgot Password?</Link>
            </Stack>
            <Flex mt='4rem' justifyContent="flex-end" alignItems="flex-end">
              <Button type="submit" sx={buttonStyle} marginRight='40px' marginBottom='168px'>
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
