import React from 'react';
import { Button, Text, Box } from '@chakra-ui/react';


// Below code hows how Chakra UI may be impleneted in a component
function Placeholder() {
    return (
        <Box bg='tomato' w='100px' h='100px'>
            <Text fontSize='32px'>
                Placeholder
            </Text>
            <Button mt='32px' colorScheme='red' _hover={{ background: 'blue' }} _focus={{ background: 'yellow', color: 'black' }}>Click Me</Button>
        </Box>
    )
}

export default Placeholder;
