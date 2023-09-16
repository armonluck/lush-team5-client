import { Box, Text, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';
import NotchIcon from '../../assets/icons/Notch.svg';
import BatteryIcon from '../../assets/icons/_StatusBar-battery.svg';
import MobileSignalIcon from '../../assets/icons/Mobile Signal.svg';
import WifiIcon from '../../assets/icons/Wifi.svg';
import './StatusBar.scss'

const StatusBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = format(currentTime, 'h:mm', { locale: enUS });

    return (
        <Flex justifyContent='center'>
            <img className='notchIcon' src={NotchIcon} alt='Notch' />
                <Text className='time' color='black'>{formatTime}</Text>
                <Flex position='absolute' right='0' gap='8px' padding='20px 26.6px 15px 0'>
                    <img className='mobileSignalIcon'src={MobileSignalIcon} alt='Mobile Signal' />
                    <img className='wifiIcon'src={WifiIcon} alt='Wifi' />
                    <img className='batteryIcon'src={BatteryIcon} alt='Battery' />
                </Flex>
        </Flex>
    );
};

export default StatusBar;