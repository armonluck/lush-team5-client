// Import the required modules and components
import React, { useState } from 'react';
import { Box, UnorderedList, ListItem, Text, Flex, Image } from '@chakra-ui/react';
import ChevronDownIcon from '../assets/icons/Vector3x.png';
import InfoIcon from '../assets/icons/info.png';

// CheckoutImpactAccordion Component
const CheckoutImpactAccordion = () => {
  // State variables for controlling accordion sections
  const [openSustainability, setOpenSustainability] = useState(false);
  const [openCampaigning, setOpenCampaigning] = useState(false);
  const [openEarnedSustainability, setOpenEarnedSustainability] = useState(false);
  const [openEarnedCampaigning, setOpenEarnedCampaigning] = useState(false);

  // Function to toggle accordion sections
  const toggleSection = (setter) => () => setter((prev) => !prev);

  // UI Rendering Section
  return (
    <div>
      <Box display="flex" flexDirection="column">
        {/* Your Impact */}
        <Box mb={4}>
          <Text fontSize="lg" className="titleStyles">
            Your Impact
          </Text>
          <Box
            bg="#f4f2f4"
            borderRadius="10px"
            className="accordionContainerStyles"
            mb={4}
            onClick={toggleSection(setOpenSustainability)}
          >
            <Text fontSize="lg" className="accordionTitleStyles">
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" className="accordionTitleStyles">
                    Sustainability
                  </Text>
                </Flex>
                <Image
                  src={ChevronDownIcon}
                  alt="Chevron Down Icon"
                  boxSize="1em"
                  w="12px"
                  h="6.78px"
                  style={{
                    ml: '-20px',
                    transform: openSustainability ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Flex>
            </Text>
            {openSustainability && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2} style={{ listStyleType: 'disc' }}>
                <ListItem className="listItemStyles">Saved 0.72lb plastic</ListItem>
                <ListItem className="listItemStyles">Saved 0.05lb paper</ListItem>
                <ListItem className="listItemStyles">Helped reach our goal of reducing carbon emissions by 40%</ListItem>
              </UnorderedList>
            )}
          </Box>

          {/* Campaigning */}
          <Box
            bg="#f4f2f4"
            borderRadius="10px"
            className="accordionContainerStyles"
            mb={4}
            onClick={toggleSection(setOpenCampaigning)}
          >
            <Text fontSize="lg" className="accordionTitleStyles">
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" className="accordionTitleStyles">
                    Campaigning
                  </Text>
                </Flex>
                <Image
                  src={ChevronDownIcon}
                  alt="Chevron Down Icon"
                  boxSize="1em"
                  w="12px"
                  h="6.78px"
                  style={{
                    transform: openCampaigning ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Flex>
            </Text>
            {openCampaigning && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem className="listItemStyles">CAD $9.00 to Toronto Women's Shelter</ListItem>
              </UnorderedList>
            )}
          </Box>
        </Box>

        {/* You've Earned */}
        <Box mb={4}>
          <Text fontSize="lg" className="titleStyles">
            You've Earned
          </Text>
          <Box
            bg="#f4f2f4"
            borderRadius="10px"
            className="accordionContainerStyles"
            mb={4}
            onClick={toggleSection(setOpenEarnedSustainability)}
          >
            <Text fontSize="lg" className="accordionTitleStyles">
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" className="accordionTitleStyles">
                    Lush Points
                  </Text>
                </Flex>
                <Image
                  src={ChevronDownIcon}
                  alt="Chevron Down Icon"
                  boxSize="1em"
                  w="12px"
                  h="6.78px"
                  style={{
                    transform: openEarnedSustainability ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </Flex>
            </Text>
            {openEarnedSustainability && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem className="listItemStyles">You’ve earned Lush points!</ListItem>
                <ListItem className="listItemStyles">62% until Your next Free Reward!</ListItem>
                <ListItem className="listItemStyles">You've Earned 2X The Lush from Lord of Misrule!</ListItem>
              </UnorderedList>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutImpactAccordion;
