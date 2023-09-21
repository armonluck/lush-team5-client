import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';
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
    Link,
} from '@chakra-ui/react';

import '../styles/_fonts.scss';

function LandingHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    //API url & key
    const local_api = "http://localhost:7373";

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
                fontFamily='LushHandwritten-Bold' fontSize='24px' color='#B9A6F0' fontWeight='700' lineHeight='normal' textShadow='-4px 5px 14px rgba(255, 255, 255, 0.15)'>
                Welcome to Lush
            </Heading>
            <Text marginTop='4px' fontFamily='LushHandwritten-Bold' fontSize='40px' color='#FFF' lineHeight='normal' fontWeight='700' textTransform='uppercase'>
                Hi, Natasha
            </Text>

            <Card mt='37px' borderRadius='999px' textAlign='center' bg='#F3F2F3' boxShadow='-4px 5px 14px 0px rgba(255, 255, 255, 0.15)' h='42px' d='flex' align='center' justify='center'>
                <CardBody>
                    <Text color='#000' fontFamily='Helvetica' fontWeight='700' fontSize='16px' lineHeight='normal'>
                        Your Store: {selectedStore?.store_name}.
                    </Text>
                </CardBody>
            </Card>

            <Button onClick={onOpen} variant='unstyled' fontFamily='Helvetica' fontSize='12px' textDecoration='underline' fontWeight='400' color='#FFF' lineHeight='normal'>
                change store
            </Button>
            <Flex width='100%' h='100%' alignContent='center' justifyContent='center'>
                <Drawer
                    placement='top'
                    size='full'
                    isOpen={isOpen}
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    margin='auto'
                >
                    <DrawerOverlay />
                    <DrawerContent bg='#645C5C'>
                        <DrawerCloseButton color='white' />
                        <DrawerHeader></DrawerHeader>

                        <DrawerBody>
                            <InputGroup color='#FFF'>
                                <InputLeftElement>
                                    <SearchIcon />
                                </InputLeftElement>

                                <Input
                                    variant='outline'
                                    border='1px solid #FFF'
                                    borderRadius='0'
                                    placeholder='Enter zipcode...'
                                />
                                <InputRightElement>
                                    <Icon marginRight='10px' color='#FFF' w='20px' h='20px' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M1.66663 9.99999H4.16663M15.8333 9.99999H18.3333M9.99996 1.66666V4.16666M9.99996 15.8333V18.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path id="Vector_2" d="M9.99996 15.8333C13.2216 15.8333 15.8333 13.2217 15.8333 9.99999C15.8333 6.77833 13.2216 4.16666 9.99996 4.16666C6.7783 4.16666 4.16663 6.77833 4.16663 9.99999C4.16663 13.2217 6.7783 15.8333 9.99996 15.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </Icon>
                                </InputRightElement>
                            </InputGroup>

                            <Flex direction='column'>
                                <Heading as='h2' color='#FFF' fontFamily='Helvetica' fontSize='15px' fontWeight='700' lineHeight='normal' marginTop='20px' marginBottom='9px'>
                                    Current Store:
                                </Heading>
                                <Card
                                    key={selectedStore?.id}
                                    direction='row'
                                    overflow='hidden'
                                    variant='unstyled'
                                    borderRadius='0'
                                    bg='#645C5C'
                                    color='#FFF'
                                >
                                    <Image
                                        objectFit='cover'
                                        bg='#D9D9D9'
                                        w='115px'
                                        h='115px'
                                        mr='1rem'
                                        src={selectedStore?.image}
                                        alt='Image of a store front'
                                    />

                                    <Stack>
                                        <CardBody>
                                            <Heading fontFamily='Helvetica' fontSize='1rem' lineHeight='normal' fontWeight='700' pb='4px'>
                                                {selectedStore?.store_name}
                                            </Heading>

                                            <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' pb='24px'>
                                                Distance {selectedStore?.distance} miles
                                            </Text>
                                            <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' >
                                                {selectedStore?.street}
                                            </Text>
                                            <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' m='0'>
                                                {selectedStore?.city}
                                            </Text>
                                        </CardBody>
                                        <CardFooter>
                                        </CardFooter>
                                    </Stack>
                                </Card>

                                <Heading as='h2' color='#FFF' fontFamily='Helvetica' fontSize='15px' fontWeight='700' lineHeight='normal' marginTop='22px' marginBottom='9px'>
                                    Stores near you:
                                </Heading>
                                {stores
                                    .filter((store) => selectedStore?.id !== store?.id)
                                    .map((store) => (
                                        <Card
                                            key={store.id}
                                            direction='row'
                                            overflow='hidden'
                                            variant='unstyled'
                                            borderRadius='0'
                                            mb='20px'
                                            bg='#645C5C'
                                            color='#FFF'
                                        >
                                            <Image
                                                onClick={() => handleStoreClick(store.id)}
                                                objectFit='cover'
                                                bg='#D9D9D9'
                                                w='115px'
                                                h='115px'
                                                mr='1rem'
                                                src={store?.image}
                                                alt='Image of a store front'
                                            />

                                            <Stack>
                                                <CardBody>
                                                    <Heading fontFamily='Helvetica' fontSize='1rem' lineHeight='normal' fontWeight='700' pb='4px'>
                                                        {store?.store_name}
                                                    </Heading>

                                                    <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' pb='24px'>
                                                        Distance {store?.distance} miles
                                                    </Text>
                                                    <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' >
                                                        {store?.street}
                                                    </Text>
                                                    <Text fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' m='0'>
                                                        {store?.city}
                                                    </Text>
                                                </CardBody>
                                                <CardFooter>
                                                </CardFooter>
                                            </Stack>
                                        </Card>
                                    ))}
                            </Flex>

                        </DrawerBody>

                        {/* <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>
                                Save
                            </Button>
                        </DrawerFooter> */}
                    </DrawerContent>
                </Drawer>
            </Flex>

            <Heading paddingTop='20px' color='#E2D7FC' textShadow='-4px 5px 14px rgba(255, 255, 255, 0.15)' fontFamily='LushHandwritten-Bold' fontSize='30px' fontWeight='700' lineHeight='normal'>
                Your Impact:
            </Heading>
            <Text py='9px' color='#FFF' fontFamily='Helvetica' fontSize='15px' fontWeight='400' lineHeight='normal'>
                “We Believe” has been Lush's mantra since we first opened. Your shopping experience should also reflect that. At Lush, do good by shopping well - see your impact with every purchase below!
            </Text>
            <Link color='#FFF' fontFamily='Helvetica' fontSize='12px' fontWeight='400' lineHeight='normal' textDecoration='underline'
            href='https://weare.lush.com/lush-life/our-impact-reports/go-circular/' isExternal>
                Read more <ExternalLinkIcon mx='2px' />
            </Link>
        </Box>
    )
}

export default LandingHeader;
