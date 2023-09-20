import { Box } from '@chakra-ui/react';
import LushLensImage from '../../assets/icons/Lush Lens Signifier.png';
import './LushLens.scss';

const LushLens = () => {
    return (
        <img className='lushLensImage' src={LushLensImage} alt='Lush Lens'></img>
    );
};

export default LushLens;