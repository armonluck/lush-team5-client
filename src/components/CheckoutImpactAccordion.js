// Importing required modules and components
import React, { useState } from 'react';
import { Box, UnorderedList, ListItem, Text, Flex, Image } from '@chakra-ui/react';
import ChevronDownIcon from '../assets/icons/Vector3x.png';
import InfoIcon from '../assets/icons/info.png';

// CheckoutImpactAccordion Component
const CheckoutImpactAccordion = () => {

// --- State Management Section ---
  
  // State variables for controlling accordion sections
    const [openSustainability, setOpenSustainability] = useState(false);
    const [openCampaigning, setOpenCampaigning] = useState(false);
    const [openEarnedSustainability, setOpenEarnedSustainability] = useState(false);
    const [openEarnedCampaigning, setOpenEarnedCampaigning] = useState(false);

// --- Styling Section ---

  // Styles for list items
  const listItemStyles = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '0',
    marginLeft: '1rem',
    fontFamily: 'Helvetica',
  };

   // Styles for titles
  const titleStyles = {
    width: '100%',
    fontSize: '30px',
    fontWeight: 700,
    lineHeight: '43px',
    letterSpacing: '0em',
    textAlign: 'left',
    margin: '8px 0',
    marginLeft: '16px',
    cursor: 'pointer',
    color: 'white',
  };

  // Styles for accordion container
  const accordionContainerStyles = {
    width: '100%',
    height: '40px',
    padding: '12px',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'width 0.3s ease-in-out',
  };

  // Styles for accordion titles
  const accordionTitleStyles = {
    width: '100%',
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '17px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginLeft: '16px',
    cursor: 'pointer',
    fontFamily: 'Helvetica',
    color: 'black',
  };

    // --- Utility Functions Section ---

  // Function to toggle accordion sections
  const toggleSection = (setter) => () => setter((prev) => !prev);

    // --- UI Rendering Section ---
    
  return (
    <div>
      <Box display="flex" flexDirection="column">
        {/* Your Impact */}
        <Box mb={4}>
          <Text fontSize="lg" style={titleStyles}>Your Impact</Text>
          <Box bg="#f4f2f4" borderRadius="10px" style={accordionContainerStyles} mb={4} onClick={toggleSection(setOpenSustainability)}>            
          <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "0" }}>
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "8px" }}>Sustainability</Text>
                </Flex>
                <Image
                    src={ChevronDownIcon}
                    alt="Chevron Down Icon"
                    boxSize="1em"
                    w="12px"
                    h="6.78px"
                    style={{ transform: openSustainability ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                    />
              </Flex>
            </Text>
            {openSustainability && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
              </UnorderedList>
            )}
          </Box>

          <Box bg="#f4f2f4" borderRadius="10px" style={accordionContainerStyles} mb={4} onClick={toggleSection(setOpenCampaigning)}>            
          <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "0" }}>
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "8px" }}>Campaigning</Text>
                </Flex>
                <Image
                    src={ChevronDownIcon}
                    alt="Chevron Down Icon"
                    boxSize="1em"
                    w="12px"
                    h="6.78px"
                    style={{ transform: openCampaigning ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                />
              </Flex>
            </Text>
            {openCampaigning && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
              </UnorderedList>
            )}
          </Box>
        </Box>

        {/* You've Earned */}
        <Box mb={4}>
          <Text fontSize="lg" style={titleStyles}>You've Earned</Text>
          <Box bg="#f4f2f4" borderRadius="10px" style={accordionContainerStyles} mb={4} onClick={toggleSection(setOpenEarnedSustainability)}>            
          <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "0" }}>
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "8px" }}>Sustainability</Text>
                </Flex>
                <Image
                    src={ChevronDownIcon}
                    alt="Chevron Down Icon"
                    boxSize="1em"
                    w="12px"
                    h="6.78px"
                    style={{ transform: openEarnedSustainability ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                />
              </Flex>
            </Text>
            {openSustainability && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
              </UnorderedList>
            )}
          </Box>

          <Box bg="#f4f2f4" borderRadius="10px" style={accordionContainerStyles} mb={4} onClick={toggleSection(setOpenEarnedCampaigning)}>            
          <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "0" }}>
              <Flex align="center" justify="space-between">
                <Flex align="center">
                  <Image src={InfoIcon} alt="Info Icon" boxSize="1em" w="12px" h="12px" />
                  <Text fontSize="lg" style={{ ...accordionTitleStyles, marginLeft: "8px" }}>Campaigning</Text>
                </Flex>
                <Image
                    src={ChevronDownIcon}
                    alt="Chevron Down Icon"
                    boxSize="1em"
                    w="12px"
                    h="6.78px"
                    style={{ transform: openEarnedCampaigning ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                />
              </Flex>
            </Text>
            {openCampaigning && (
              <UnorderedList ml={4} mt={2} mb={4} spacing={2}>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
                <ListItem style={listItemStyles}>• Data point here</ListItem>
              </UnorderedList>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutImpactAccordion;
