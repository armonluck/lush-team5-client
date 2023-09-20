import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { Input, Stack , Flex, Box, Heading } from '@chakra-ui/react'
import LoginForm from '../../components/LoginForm/LoginForm'

function LoginPage(){


    return(
        <Flex bg= 'black' height='100vh' justifyContent="center" alignItems="center"  >
            <Box>
                <LoginForm/>    
            </Box>
        </Flex>


    )
}


export default LoginPage;