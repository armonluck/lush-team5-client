import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Icon,
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react';

import '../styles/_fonts.scss';

function LandingHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    //API url & key
    const local_api = "http://localhost:7272";

    //State variables for video details and current/selected video
    const [stores, setStores] = useState([]);
    const [selectedStore, setSelectedStore] = useState({});

    //handleStoreClick Function
    const handleStoreClick = (storeId) => {
        const selectedStoreData = stores.find((store) => store.id === storeId);
        if (selectedStoreData) {
            setSelectedStore(selectedStoreData);
        } else {
            console.error(`Store with ID ${storeId} not found.`)
        }
    };

    //GET data for a single selected store
    useEffect(() => {
        if (selectedStore && selectedStore.id) {
            axios
                .get(`${local_api}/stores/${selectedStore.id}`)
                .then((response) => {
                    setSelectedStore(response.data);
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .get(`${local_api}/stores/1`) //Default store ID
                .then((response) => {
                    setSelectedStore(response.data);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    //GET all stores and set state
    useEffect(() => {
        axios
            .get(`${local_api}/stores`)
            .then((response) => {
                setStores(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Box p='20px' bg='#282121'>
            <Heading
                fontFamily='LushHandwritten-Bold' fontSize='1.5rem' color='#B9A6F0' lineHeight='normal' textShadow='-4px 5px 14px rgba(255, 255, 255, 0.15)'>
                Welcome to Lush
            </Heading>
            <Text marginTop='4px' fontFamily='Helvetica' fontSize='1rem' color='#FFF' lineHeight='normal' textTransform='uppercase'>
                Hi, Natasha
            </Text>

            <Card mt='37px' borderRadius='999px' textAlign='center' bg='#F3F2F3' boxShadow='-4px 5px 14px 0px rgba(255, 255, 255, 0.15)' h='42px' d='flex' align='center' justify='center'>
                <CardBody>
                    <Text fontFamily='LushHandwritten-Bold' fontWeight='700' fontSize='16px' lineHeight='normal'>
                        Your Store: {selectedStore?.street}.
                    </Text>
                </CardBody>
            </Card>
        </Box>
    )
}

export default LandingHeader;
