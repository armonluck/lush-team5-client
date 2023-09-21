import React, { useState, useEffect } from 'react';
import { Box, Tooltip, Text, Flex, VStack, Image, Heading } from '@chakra-ui/react';
import B1 from "../assets/bathbombs/Bathbomb_1-transformed.png";
import B4 from "../assets/bathbombs/Bathbomb_4-transformed.png";
import B5 from "../assets/bathbombs/Bathbomb_5-transformed.png";

// Circle Component
// This component represents an individual circle with a label and sub-label.
const Circle = ({ size, label, subLabel, left, top, zIndex, imageUrl, isActive }) => {
  const [currentLabel, setCurrentLabel] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [suffix, setSuffix] = useState('');

  // Function to format the sub-label text
  const formatText = (text) => {
    const words = text.split(' ');
    const lines = [];

    for (let i = 0; i < words.length; i += 2) {
      lines.push(`${words[i]} ${words[i + 1] || ''}`);
    }

    return lines;
  };

  const formattedSubLabel = formatText(subLabel);

  // Effect to handle label animation and cleanup
  useEffect(() => {
    console.log("Is active: ", isActive);
    console.log("Current label: ", currentLabel);
    console.log("Interval ID: ", intervalId);

    if (!isActive) {
      console.log("Component is not active. Resetting...");
      setCurrentLabel(0);
      if (intervalId) {
        clearInterval(intervalId);
      }
      return;
    }

    const numericalPart = parseFloat(label.replace(/[^\d.-]/g, ''));
    console.log("Numerical part: ", numericalPart);

    const nonNumericalPart = label.replace(/[\d.-]/g, '');
    setSuffix(nonNumericalPart);

    if (intervalId) {
      console.log("Clearing existing interval...");
      clearInterval(intervalId);
    }

    const totalDuration = 2000;
    const intervalDuration = totalDuration / numericalPart;
    console.log("Setting up new interval with duration: ", intervalDuration);

    const id = setInterval(() => {
      console.log("Inside setInterval");
      setCurrentLabel((prev) => {
        if (prev < numericalPart) {
          return prev + 1;
        } else {
          clearInterval(id);
          return numericalPart;
        }
      });
    }, intervalDuration);

    setIntervalId(id);

    return () => {
      if (intervalId) {
        console.log("Cleaning up...");
        clearInterval(intervalId);
      }
    };
  }, [label, isActive]);

  return (
    // Tooltip and Circle rendering
    <Tooltip
      label={
        <>
          <Text display="block" mb={1}>
            {`${currentLabel}${suffix} - ${subLabel}`}
          </Text>
        </>
      }
      placement="top"
      hasArrow
      bg="blue.500"
      color="white"
      fontSize="md"
      borderRadius="md"
      p={2}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
    >
      <Box
        w={size}
        h={size}
        borderRadius="full"
        position="absolute"
        left={left}
        top={top}
        zIndex={zIndex}
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      >
        <Heading>
        </Heading>
        <Image
          src={imageUrl}
          alt={label}
          w="100%"
          h="100%"
          borderRadius="full"
          opacity={0.7}
          position="absolute"
          zIndex={zIndex - 1}
        />
        <VStack spacing={1} zIndex={zIndex + 1} alignItems="flex-start">
          <Text fontSize="xl" fontWeight="bold">
            {`${currentLabel}${suffix}`}
          </Text>
          <Box textAlign="left">
            {formattedSubLabel.map((line, index) => (
              <Text key={index} fontSize="xs">
                {line}
              </Text>
            ))}
          </Box>
        </VStack>
      </Box>
    </Tooltip>
  );
};

// OverlappingCircles Component
// This component is a container for multiple Circle components.
const OverlappingCircles = ({ isActive }) => {
    return (
      <Flex
        w="100%"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="relative"
        color='#FFF'
      >

        {/* Individual Circle components */}
        <Circle
          key={`circle1`} // Use a unique key for each Circle
          size="200px"
          label="86LB"
          subLabel="Plastic Containers Recycled"
          left="calc(50% - 105px)"
          top="calc(48% + 05px)"
          zIndex={3}
          imageUrl={B4}
          isActive={isActive}
        />
        <Circle
          key={`circle2`} // Use a unique key for each Circle
          size="150px"
          label="12LB"
          subLabel="Paper saved by going paperless"
          left="calc(50% + 50px)"
          top="calc(50% - 75px)"
          zIndex={1}
          imageUrl={B1}
          isActive={isActive}
        />
        <Circle
          key={`circle3`} // Use a unique key for each Circle
          size="100px"
          label="$50.64"
          subLabel="To Claypot"
          left="calc(50% + 70px)"
          top="calc(50% + 55px)"
          zIndex={3}
          imageUrl={B5}
          isActive={isActive}
        />
      </Flex>
    );
  };
  

export default OverlappingCircles;
