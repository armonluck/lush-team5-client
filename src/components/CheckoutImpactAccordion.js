// Import the required modules and components
import React, { useState } from 'react';
import { Box, UnorderedList, ListItem, Text, Flex, Image, Heading, Accordion, AccordionItem, Icon, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
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
      <Heading as='h2' color='#FFF' fontFamily='LushHandwritten-Bold' fontSize='30px' fontWeight='700' lineHeight='normal' my='20px'>
        Your Impact
      </Heading>
      <Accordion allowToggle bg='#282121'>
        <AccordionItem marginBottom='4px' bg='#F3F2F3' color='#000' borderRadius='10px' fontFamily='Helvetica' lineHeight='normal'>
          <h3>
            <AccordionButton fontSize='15px' fontWeight='700'>
              <Icon xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 13" fill="none" marginRight='8px'>
                <path d="M6 12.5C2.6862 12.5 0 9.8138 0 6.5C0 3.1862 2.6862 0.5 6 0.5C9.3138 0.5 12 3.1862 12 6.5C12 9.8138 9.3138 12.5 6 12.5ZM6 11.3C7.27304 11.3 8.49394 10.7943 9.39411 9.89411C10.2943 8.99394 10.8 7.77304 10.8 6.5C10.8 5.22696 10.2943 4.00606 9.39411 3.10589C8.49394 2.20571 7.27304 1.7 6 1.7C4.72696 1.7 3.50606 2.20571 2.60589 3.10589C1.70571 4.00606 1.2 5.22696 1.2 6.5C1.2 7.77304 1.70571 8.99394 2.60589 9.89411C3.50606 10.7943 4.72696 11.3 6 11.3ZM6 5.3C6.15913 5.3 6.31174 5.36321 6.42426 5.47574C6.53679 5.58826 6.6 5.74087 6.6 5.9V8.9C6.6 9.05913 6.53679 9.21174 6.42426 9.32426C6.31174 9.43679 6.15913 9.5 6 9.5C5.84087 9.5 5.68826 9.43679 5.57574 9.32426C5.46321 9.21174 5.4 9.05913 5.4 8.9V5.9C5.4 5.74087 5.46321 5.58826 5.57574 5.47574C5.68826 5.36321 5.84087 5.3 6 5.3ZM6 4.7C5.84087 4.7 5.68826 4.63679 5.57574 4.52426C5.46321 4.41174 5.4 4.25913 5.4 4.1C5.4 3.94087 5.46321 3.78826 5.57574 3.67574C5.68826 3.56321 5.84087 3.5 6 3.5C6.15913 3.5 6.31174 3.56321 6.42426 3.67574C6.53679 3.78826 6.6 3.94087 6.6 4.1C6.6 4.25913 6.53679 4.41174 6.42426 4.52426C6.31174 4.63679 6.15913 4.7 6 4.7Z" fill="black" />
              </Icon>
              <Box as="span" flex='1' textAlign='left'>
                Sustainability
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} fontSize='12px' fontWeight='400' lineHeight='normal'>
            <UnorderedList>
              <ListItem pb='16px'>
                Saved 0.72lb plastic
              </ListItem>
              <ListItem pb='16px'>
                Saved 0.05lb paper
              </ListItem>
              <ListItem>
                Helped reach our goal of reducing carbon emission by 40%
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem marginBottom='4px' bg='#F3F2F3' color='#000' borderRadius='10px' fontFamily='Helvetica' lineHeight='normal'>
          <h3>
            <AccordionButton fontSize='15px' fontWeight='700'>
              <Icon xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 13" fill="none" marginRight='8px'>
                <path d="M6 12.5C2.6862 12.5 0 9.8138 0 6.5C0 3.1862 2.6862 0.5 6 0.5C9.3138 0.5 12 3.1862 12 6.5C12 9.8138 9.3138 12.5 6 12.5ZM6 11.3C7.27304 11.3 8.49394 10.7943 9.39411 9.89411C10.2943 8.99394 10.8 7.77304 10.8 6.5C10.8 5.22696 10.2943 4.00606 9.39411 3.10589C8.49394 2.20571 7.27304 1.7 6 1.7C4.72696 1.7 3.50606 2.20571 2.60589 3.10589C1.70571 4.00606 1.2 5.22696 1.2 6.5C1.2 7.77304 1.70571 8.99394 2.60589 9.89411C3.50606 10.7943 4.72696 11.3 6 11.3ZM6 5.3C6.15913 5.3 6.31174 5.36321 6.42426 5.47574C6.53679 5.58826 6.6 5.74087 6.6 5.9V8.9C6.6 9.05913 6.53679 9.21174 6.42426 9.32426C6.31174 9.43679 6.15913 9.5 6 9.5C5.84087 9.5 5.68826 9.43679 5.57574 9.32426C5.46321 9.21174 5.4 9.05913 5.4 8.9V5.9C5.4 5.74087 5.46321 5.58826 5.57574 5.47574C5.68826 5.36321 5.84087 5.3 6 5.3ZM6 4.7C5.84087 4.7 5.68826 4.63679 5.57574 4.52426C5.46321 4.41174 5.4 4.25913 5.4 4.1C5.4 3.94087 5.46321 3.78826 5.57574 3.67574C5.68826 3.56321 5.84087 3.5 6 3.5C6.15913 3.5 6.31174 3.56321 6.42426 3.67574C6.53679 3.78826 6.6 3.94087 6.6 4.1C6.6 4.25913 6.53679 4.41174 6.42426 4.52426C6.31174 4.63679 6.15913 4.7 6 4.7Z" fill="black" />
              </Icon>
              <Box as="span" flex='1' textAlign='left'>
                Campaigning
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} fontSize='12px' fontWeight='400' lineHeight='normal'>
            <UnorderedList>
              <ListItem>
                CAD $9.00 to Toronto Women's Shelter
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Heading as='h2' color='#FFF' fontFamily='LushHandwritten-Bold' fontSize='30px' fontWeight='700' lineHeight='normal' my='20px'>
        Your Rewards
      </Heading>
      <Accordion allowToggle bg='#282121' mb='20px'>
        <AccordionItem marginBottom='4px' bg='#F3F2F3' color='#000' borderRadius='10px' fontFamily='Helvetica' lineHeight='normal'>
          <h3>
            <AccordionButton fontSize='15px' fontWeight='700'>
              <Icon xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 13" fill="none" marginRight='8px'>
                <path d="M6 12.5C2.6862 12.5 0 9.8138 0 6.5C0 3.1862 2.6862 0.5 6 0.5C9.3138 0.5 12 3.1862 12 6.5C12 9.8138 9.3138 12.5 6 12.5ZM6 11.3C7.27304 11.3 8.49394 10.7943 9.39411 9.89411C10.2943 8.99394 10.8 7.77304 10.8 6.5C10.8 5.22696 10.2943 4.00606 9.39411 3.10589C8.49394 2.20571 7.27304 1.7 6 1.7C4.72696 1.7 3.50606 2.20571 2.60589 3.10589C1.70571 4.00606 1.2 5.22696 1.2 6.5C1.2 7.77304 1.70571 8.99394 2.60589 9.89411C3.50606 10.7943 4.72696 11.3 6 11.3ZM6 5.3C6.15913 5.3 6.31174 5.36321 6.42426 5.47574C6.53679 5.58826 6.6 5.74087 6.6 5.9V8.9C6.6 9.05913 6.53679 9.21174 6.42426 9.32426C6.31174 9.43679 6.15913 9.5 6 9.5C5.84087 9.5 5.68826 9.43679 5.57574 9.32426C5.46321 9.21174 5.4 9.05913 5.4 8.9V5.9C5.4 5.74087 5.46321 5.58826 5.57574 5.47574C5.68826 5.36321 5.84087 5.3 6 5.3ZM6 4.7C5.84087 4.7 5.68826 4.63679 5.57574 4.52426C5.46321 4.41174 5.4 4.25913 5.4 4.1C5.4 3.94087 5.46321 3.78826 5.57574 3.67574C5.68826 3.56321 5.84087 3.5 6 3.5C6.15913 3.5 6.31174 3.56321 6.42426 3.67574C6.53679 3.78826 6.6 3.94087 6.6 4.1C6.6 4.25913 6.53679 4.41174 6.42426 4.52426C6.31174 4.63679 6.15913 4.7 6 4.7Z" fill="black" />
              </Icon>
              <Box as="span" flex='1' textAlign='left'>
                Lush Points
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} fontSize='12px' fontWeight='400' lineHeight='normal'>
            <UnorderedList>
              <ListItem pb='16px'>
                You've earned 32 Lush points!
              </ListItem>
              <ListItem pb='16px'>
                62% until Your next Free Reward!
              </ListItem>
              <ListItem>
                You've Earned 2X The Lush from Lord of Misrule!
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CheckoutImpactAccordion;
