import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { Input, Stack , Flex, Box, Heading } from '@chakra-ui/react'
import LoginForm from '../../components/LoginForm/LoginForm'

function LoginPage({setLoggedIn}){


    return(
        <Flex bg= 'black' height='100vh' justifyContent="center" alignItems="center"  >
            <Box>
                <LoginForm setLoggedIn={setLoggedIn}/>    
            </Box>
        </Flex>


    )
}


export default LoginPage;