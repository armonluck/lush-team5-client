import React, { useState, useEffect } from 'react';
import { Box, Tooltip, Text, Flex, VStack, Image, Heading } from '@chakra-ui/react';
import '../chakra-ui-theme/lush-font.css';

// Circle Component
// This component represents an individual circle with a label and sub-label.
const Circle = ({ size, Label, subLabel, left, top, zIndex, imageUrl, isActive, heading }) => {
  const [currentLabel, setCurrentLabel] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [suffix, setSuffix] = useState('');
  const [lastLabel, setLastLabel] = useState(0);

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
    console.log("Is active for Label:", Label, isActive);
    console.log("Current label: ", currentLabel);
    console.log("Interval ID: ", intervalId);

if (!isActive) {
  console.log("Component is not active. Holding last value...");
  setLastLabel(currentLabel); // store the last value
  if (intervalId) {
    clearInterval(intervalId);
  }
  return;
}
    const numericalPart = parseFloat(Label.replace(/[^\d.-]/g, ''));
    console.log("Numerical part for Label:", Label, "is", numericalPart);

    const nonNumericalPart = Label.replace(/[\d.-]/g, '');
    setSuffix(nonNumericalPart);

    if (intervalId) {
      console.log("Cleaning up for Label:", Label);
      clearInterval(intervalId);
    }

    const totalDuration = 2000;
    const intervalDuration = totalDuration / numericalPart;
    console.log("Setting up new interval with duration: ", intervalDuration);

    const id = setInterval(() => {
      console.log("Inside setInterval for Label:", Label);
      setCurrentLabel((prev) => {
        console.log("Updating label for:", Label, "Previous:", prev);
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
  }, [Label, isActive]);

  return (
    <Tooltip
      Label={
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
        <VStack spacing={1} zIndex={zIndex + 1} alignItems="flex-start">
          <Text className='CircleTitle'>
            {isActive ? `${currentLabel}${suffix}` : `${lastLabel}${suffix}`}
          </Text>
          <Box textAlign="left" ml="10px">
            {formattedSubLabel.map((line, index) => (
              <Text key={index}  className='circleSubTitle'>
                {line}
              </Text>
            ))}
          </Box>
        </VStack>
        <Image
          src={imageUrl}
          alt={Label}
          w="100%"
          h="100%"
          borderRadius="full"
          opacity={1}
          position="absolute"
          zIndex={zIndex - 1}
        />
      </Box>
    </Tooltip>
  );
};


const OverlappingCircles = ({ isActive, data, heading}) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      position="relative"
      color='#FFF'
    >
    <Box
        position="absolute"
        top="40%"
        left="-120px"
        transform="translateY(-50%)"
      >
    <div className="H5LushSpecific">
      {heading}
    </div>
      </Box>
      {data.map((circle, index) => (
        <Circle
          key={`circle${index}`}
          size={circle.size}
          Label={circle.Label}
          subLabel={circle.subLabel}
          left={circle.left}
          top={circle.top}
          zIndex={circle.zIndex}
          imageUrl={circle.imageUrl}
          isActive={isActive}
          heading={circle.heading}
        />
      ))}
    </Flex>
  );
};



export default OverlappingCircles;