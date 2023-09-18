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
import BathBomb from "../../assets/images/Lush-Melusine-Bath-Bomb.png";
import LighteningIcon from "../../assets/icons/lightning-icon-by-png-tree.png";
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
      <Box maxW="md" p="0" borderWidth="1px" borderRadius="lg" bg="black">
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
          <Heading as="h2" size="md" ml="10" color="white">
            Lens has found 1 result
          </Heading>
        </Flex>

        <Flex
          direction="column"
          ml="3"
          mr="3"
          mb="3"
          bg="white"
          borderRadius="lg"
        >
          <Flex justify="center" align="center" bgBlendMode="overlay">
            <Image
              height={isShrunk ? 200 : ""}
              src={BathBomb}
              alt="placeholder image"
            />
          </Flex>
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
            <Flex
              padding="2"
              height="40"
              direction="column"
              justify="space-between"
              ml={4}
            >
              <Flex direction="column">
                <Text fontFamily="Lush Handwritten Compressed">
                  LORD OF MISRULE
                </Text>
                <Spacer />
                <Text fontSize={"small"}>BATH BOMB</Text>
              </Flex>

              <Flex direction="column">
                <Text fontSize={"small"}>Sweet, peppery celebration</Text>
                <Spacer />
                <Flex justify="space-between" width="18%">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Flex>
              </Flex>

              <Flex align="center">
                <Box width="50%">
                  <text>$9.00</text>
                </Box>
                <Flex>
                  <Select
                    mr="2"
                    width="20"
                    bg="white"
                    placeholder="x2"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
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
