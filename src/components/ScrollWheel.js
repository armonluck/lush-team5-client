import React, { useEffect, useRef } from 'react';
import { Box, Center, Button } from '@chakra-ui/react';

const ScrollWheel = ({ onChange }) => {
  const wheelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wheelRef.current) {
        const scrollTop = wheelRef.current.scrollTop;
        const index = Math.floor(scrollTop / 30);
        onChange(index + 1); 
      }
    };

    if (wheelRef.current) {
      wheelRef.current.addEventListener('scroll', handleScroll);
      wheelRef.current.scrollTop = 0;  
    }

    return () => {
      if (wheelRef.current) {
        wheelRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onChange]);

  const saveScrollPosition = () => {

  };

  return (
    <Center>
      <Box position="relative" w="90%">
        <Box
          ref={wheelRef}
          overflowY="scroll"
          h="320px"
          w="100%"
          css={{
            scrollSnapType: 'y mandatory',
            scrollSnapType: '-webkit-mandatory',
            scrollSnapType: '-ms-mandatory',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <Box
              key={num}
              h="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              css={{
                scrollSnapAlign: 'center',
              }}
            >
              {num}
            </Box>
          ))}
        </Box>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="linear-gradient(white 10%, transparent 30%, transparent 70%, white 90%)"
          pointerEvents="none"
          zIndex="1"
        ></Box>
        <Box
          position="absolute"
          left="0%"
          right="0%"
          height="30px"
          top="50%"
          transform="translateY(-50%)"
          backgroundColor="lightgray"
          opacity="30%"
          borderRadius="10px"
          zIndex="2"
          pointerEvents="none"
        ></Box>
      </Box>
      <Button onClick={saveScrollPosition}></Button>
    </Center>
  );
};

export default ScrollWheel;
