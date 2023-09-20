import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

const ScrollablePicker = ({ onChange }) => {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.floor((scrollTop + 15) / 30) + 1;
      setSelected(index);
      if (onChange) {
        onChange(index);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onChange]);

  return (
    <Center>
      <Box position="relative" h="200px" w="100%" mt="40px" mb="40px">
        <Box ref={scrollRef} overflowY="scroll" h="100%" w="100%">
          <Box h="100px" visibility="hidden"></Box>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <Box
              key={num}
              h="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              backgroundColor={selected === num ? 'lightblue' : 'transparent'}
            >
              <Text fontSize="lg">{num}</Text>
            </Box>
          ))}
          <Box h="135px" visibility="hidden"></Box>
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
