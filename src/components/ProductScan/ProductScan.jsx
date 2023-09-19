import {
  Box,
  Heading,
  Flex,
  Spacer,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import BathBomb from "../../assets/images/Bathbomb_1-transformed.png";
import vegan from "../../assets/icons/vegan icon.png";
import LighteningIcon from "../../assets/icons/mdi_lightning-bolt.png";
import Productbg from "../../assets/images/bathbomb background.png"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ProductScan.css";

const ProductScan = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = () => {
    console.log("added to cart");
  };
  return (
    <Box className={isShrunk ? "shrinked" : ""}>
      <Box maxW="md" p="0" borderWidth="1px" borderRadius="lg" bg="#2A2323">
        <Flex
          // opacity={isShrunk ? "0" : ""}
          align="center"
          padding="5"
        >
          <CloseIcon
            color="white"
            className={isShrunk ? "close-icon" : ""}
            justifySelf="flex-start"
          />
          <Heading as="h2" size="md" ml="10" color="white" fontFamily='Helvetica' fontSize='15px' fontWeight='400'>
            Lens has found 1 result
          </Heading>
        </Flex>

        <Flex
          direction="column"
          ml="3"
          mr="3"
          mb="3"
          className='product__product-card'
          borderRadius="lg"
        >
          <Flex justify="center" align="center" mb='46px' mt='11px' mr='10px' ml='19px'>
            <Image
              height={isShrunk ? 200 : ""}
              src={BathBomb}
              alt="bathbomb placeholder"
            />
          </Flex>
          <Box>
            <Flex
              align="center"
              justify="flex-start"
              bg="#282121"
              display="inline-flex"
              padding='2'
              borderRadius='md'
              mb='16px'
            >
              <Image src={LighteningIcon} alt="placeholder image" boxSize="5" />
              <Heading as="h3" size="sm" color="white" fontFamily='Helvetica'>
                LIMITED EDITION
              </Heading>
            </Flex>
            <Flex
              padding="2"
              height="40"
              direction="column"
              justify="space-between"
              ml={4}
            >
              <Flex direction="column">
              <Text fontSize={"small"} fontFamily='Helvetica'>BATH BOMB</Text>
              <Spacer/>
              <Flex align='center'>
                <Text fontFamily="Lush Handwritten Compressed">
                  LORD OF MISRULE
                </Text>
                <Image src={vegan} boxSize='4' ml='12px'/>

                </Flex>
                
                
              </Flex>

              <Flex direction="column">
                <Text fontSize={"small"} fontFamily='Helvetica'>Sweet, peppery celebration</Text>
                <Spacer />
                <Flex justify="space-between" width="18%">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Flex>
              </Flex>

              <Flex align="center">
                <Box width="50%">
                  <text fontFamily='Helvetica'>$9.00</text>
                </Box>
                <Flex>
                  <Select
                    mr="2"
                    width="20"
                    bg="white"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                    bgColor='white'
                  >
                    <option value={1}>x1</option>
                    <option value={2}>x2</option>
                    <option value={3}>x3</option>
                    <option value={4}>x4</option>
                  </Select>
                  <Button
                    bg="#6252A3"
                    textColor="white"
                    variant="solid"
                    onClick={addToCart}
                  >
                    Add to cart
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductScan;
