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
  return (
    <Text fontFamily='LushHandwritten-Bold'>Landing Header</Text>
  )
}

export default LandingHeader;
