import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';


const ScrollablePicker = ({ onChange }) => {
  // Reference to the scrollable div
  const scrollRef = useRef(null);

  // State to hold the currently selected number
  const [selected, setSelected] = useState(1);

  // Effect to handle scroll events
  useEffect(() => {
    /**
     * handleScroll function
     * 
     * This function calculates the currently selected number based on the scroll position
     * and invokes the onChange callback with the new number.
     */
    const handleScroll = () => {
      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.floor((scrollTop + 15) / 30) + 1;
      setSelected(index);
      if (onChange) {
        onChange(index);
      }
    };

    // Attach the scroll event listener
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    // Cleanup: Remove the scroll event listener
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onChange]);

  return (
    <Center>
      {/* Container for the scrollable picker */}
      <Box position="relative" h="200px" w="100%" mt="40px" mb="40px">
        {/* Scrollable area */}
        <Box ref={scrollRef} overflowY="scroll" h="100%" w="100%">
          {/* Top padding */}
          <Box h="90px" visibility="hidden"></Box>
          {/* Number options */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <Box
              key={num}
              h="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              backgroundColor={selected === num ? '#f5f2f4' : 'transparent'}
            >
              <Text fontSize="lg">{num}</Text>
            </Box>
          ))}
          {/* Bottom padding */}
          <Box h="90px" visibility="hidden"></Box>
        </Box>
        {/* Fading effect at the top */}
        <Box position="absolute" top="0" left="0" right="0" h="70px" background="linear-gradient(to bottom, white, transparent)"></Box>
        {/* Fading effect at the bottom */}
        <Box position="absolute" bottom="0" left="0" right="0" h="70px" background="linear-gradient(to top, white, transparent)"></Box>
      </Box>
    </Center>
  );
};

export default ScrollablePicker;
