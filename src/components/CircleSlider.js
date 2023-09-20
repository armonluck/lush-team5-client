// Importing required modules and components from Chakra UI and local files
import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Spacer, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import OverlappingCircles from './OverlappingCircles';

// CircleSlider Component
// This component represents a slider for displaying overlapping circles.
const CircleSlider = () => {
  // State to hold the current index of the active circle
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Total number of circles in the slider
  const totalCircles = 4;
  
  // Ref to hold the scroll container
  const scrollRef = useRef(null);

  // Function to handle the "Next" action
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCircles);
  };

  // Function to handle the "Previous" action
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCircles) % totalCircles);
  };

  // Function to scroll to the current active circle
  const scrollToCurrentIndex = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const target = container.children[currentIndex];
      const offset = 120;  // Offset value to adjust scroll position
      const verticalOffset = (container.clientHeight - target.clientHeight) / 2; // Center vertically
      container.scrollLeft = target.offsetLeft - offset;
      container.scrollTop = target.offsetTop - verticalOffset;
    }
  };

  // Set initial scroll position to the first circle
  useEffect(() => {
    scrollToCurrentIndex();
  }, []);

  return (
    <Flex direction="column" align="center" h="100vh" overflowX="auto" overflowY="hidden">
      <Flex ref={scrollRef} direction="row" overflow="auto" w="100%" py={4} ml="2px">
        {/* Render OverlappingCircles components */}
        {/* isActive prop is used to determine the active circle */}
        {[...Array(totalCircles)].map((_, index) => (
          <Box key={index} w="100%" h="100vh" mx={52}>
            <OverlappingCircles isActive={currentIndex === index} />
          </Box>
        ))}
      </Flex>
      <Spacer />
      {/* Navigation Buttons */}
      <Flex mb={4} spacing={4}>
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={() => { handlePrev(); scrollToCurrentIndex(); }}
          marginRight="1rem"
        />
        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          onClick={() => { handleNext(); scrollToCurrentIndex(); }}
          marginLeft="1rem"
        />
      </Flex>
    </Flex>
  );  
};

// Export the CircleSlider component
export default CircleSlider;
