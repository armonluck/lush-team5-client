// Importing required modules and components from Chakra UI and local files
import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Spacer, IconButton, Heading} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import OverlappingCircles from './OverlappingCircles';
import B1 from "../assets/bathbombs/Bathbomb_1-transformed.png";
import B4 from "../assets/bathbombs/Bathbomb_4-transformed.png";
import B5 from "../assets/bathbombs/Bathbomb_5-transformed.png";
import './CircleSlider.scss';


export const circleData = [
  {
    heading: 'Sustainability',
    circles: [
      {
        size: '200px',
        Label: '86LB',
        subLabel: 'Plastic containers recycled in-house',
        left: 'calc(50% - 80px)',
        top: 'calc(50% + 10px)',
        zIndex: 2,
        imageUrl: B4,
      },
      {
        size: '200px',
        Label: '12LB',
        subLabel: 'Paper saved shopping paperless',
        left: 'calc(50% + 15px)',
        top: 'calc(50% - 65px)',
        zIndex: 1,
        imageUrl: B1,
      },
      {
        size: '200px',
        Label: '74%',
        subLabel: 'Reduced emissions',
        left: 'calc(50% + 40px)',
        top: 'calc(50% + 30px)',
        zIndex: 3,
        imageUrl: B5,
      },
    ],
  },
  {
    heading: 'Social Change',
    circles: [
      {
        size: '200px',
        Label: '54%',
        subLabel: 'Donated to human rights sector',
        left: 'calc(50% - 80px)',
        top: 'calc(50% + 10px)',
        zIndex: 2,
        imageUrl: B4,
      },
      {
        size: '200px',
        Label: '23%',
        subLabel: 'Animal protection sector',
        left: 'calc(50% + 15px)',
        top: 'calc(50% - 65px)',
        zIndex: 1,
        imageUrl: B1,
      },
      {
        size: '200px',
        Label: '5%',
        subLabel: 'Climate change sector',
        left: 'calc(50% + 40px)',
        top: 'calc(50% + 30px)',
        zIndex: 3,
        imageUrl: B5,
      },
    ],
  },
  {
    heading: 'Campaigning',
    circles: [
      {
        size: '200px',
        Label: '131.64%',
        subLabel: 'Donated via Charity Pot purchases',
        left: 'calc(50% - 80px)',
        top: 'calc(50% + 10px)',
        zIndex: 2,
        imageUrl: B4,
      },
      {
        size: '200px',
        Label: '100%',
        subLabel: 'Error 404 is fully funded',
        left: 'calc(50% + 15px)',
        top: 'calc(50% - 65px)',
        zIndex: 1,
        imageUrl: B1,
      },
      {
        size: '200px',
        Label: '47%',
        subLabel: 'Contributed towards!',
        left: 'calc(50% + 40px)',
        top: 'calc(50% + 30px)',
        zIndex: 3,
        imageUrl: B5,
      },
    ],
  },
];
// CircleSlider Component
// This component represents a slider for displaying overlapping circles.
const CircleSlider = () => {
  // State to hold the current index of the active circle
  const [currentIndex, setCurrentIndex] = useState(0);
  // Total number of circles in the slider
  const totalCircles = 3;
  // Ref to hold the scroll container
  const scrollRef = useRef(null);
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
    <Flex  direction="column" align="center" h="50vh" overflowX="" overflowY="hidden">
        <Flex ref={scrollRef} className="custom-scrollbar" direction="row" overflow="auto" overflowY="hidden" w="100%" py={4} mt="20px" ml="2px">     
        {circleData.map((group, groupIndex) => (
          <Box key={`group${groupIndex}`} w="100%" mb="2rem" pb="4rem" h="100vh" pt="25rem" mx={40}>
            <OverlappingCircles
              isActive={true}
              data={group.circles}
              heading={group.heading}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
// Export the CircleSlider component
export default CircleSlider;