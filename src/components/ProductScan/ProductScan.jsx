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
} from "@chakra-ui/react";
import { CloseIcon, StarIcon } from "@chakra-ui/icons";
import BathBomb from "../../assets/images/Lush-Melusine-Bath-Bomb.png";
import LighteningIcon from "../../assets/icons/lightning-icon-by-png-tree.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './ProductScan.css'

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
  return (
    <Box maxW='md' p="0" borderWidth="1px" borderRadius="lg" bg="#C4C4C473" className={isShrunk ? "shrinked" : ""}>
      <Flex padding='4' justify="flex-start" align="center">
        <CloseIcon className={isShrunk ? "hiddenCloseIcon" : ""}/>
        {/* <Heading as="h2" size="md" ml="6">
          Lens has found 1 result
        </Heading> */}
      </Flex>

      <Box bgBlendMode="overlay">
        <Image src={BathBomb} alt="placeholder image" />
      </Box>
      <Box>
        <Flex
          align="center"
          justify="flex-start"
          bg="black"
          display="inline-flex"
        >
          <Image src={LighteningIcon} alt="placeholder image" boxSize="5" />
          <Heading as="h3" size="sm" color="white">
            LIMITED EDITION
          </Heading>
        </Flex>
        <Flex padding='2' height='40' direction='column' justify='space-between' ml={4}>
          <Flex direction='column'>
            <Text fontFamily="Lush Handwritten Compressed">
              LORD OF MISRULE
            </Text>
            <Spacer/>
            <Text fontSize={"small"}>BATH BOMB</Text>
          </Flex>

          <Flex direction='column'>
            <Text fontSize={"small"}>Sweet, peppery celebration</Text>
            <Spacer/>
            <Flex justify="space-between" width="18%">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Flex>
          </Flex>

          <Flex align='center'>
            <Box width="50%">
              <text>$9.00</text>
            </Box>
            <Flex>
              <Select mr='2' width="15" bg="white" placeholder="x2">
                <option value={1}>x1</option>
                <option value={2}>x2</option>
                <option value={3}>x3</option>
                <option value={4}>x4</option>
              </Select>
              <Button bg="black" textColor="white" variant="solid">
                Add to cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductScan;
