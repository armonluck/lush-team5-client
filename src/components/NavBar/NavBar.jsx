import { Flex, Box, Input, FormControl } from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-alt-svgrepo-com.svg";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera-svgrepo-com.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-cart-01-svgrepo-com.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/account-svgrepo-com.svg";
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect, useRef } from "react";

function NavBar(isLoggedIn){
    const [searchPopup, setSearchPopup] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [selectedIcon, setSelectIcon] = useState('')
    const searchIconRef = useRef(null);
    const navigate = useNavigate();



    const popup = ()=>{

        if(searchPopup){
            setSearchPopup(false); 
            setSelectIcon('');
        } 
        else{
            setSearchPopup(true)
            setSelectIcon('search');
        }
    }

    const handleSubmit = (e)=>{
        navigate('/search')
        setSearchPopup(false)
    }

  // Event listener for detecting clicks outside the search icon
  const handleClickOutside = (event) => {
    if (searchIconRef.current && !searchIconRef.current.contains(event.target)) {
      setSearchPopup(false);
    }
  };
  
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return(
        <Flex flexDirection='column' justifyContent="center" position="fixed" bottom={searchPopup?"-3rem":"0"} alignItems='center' width='100vw' 
        transition='border 5s ease-in-out, border-radius 0s'
        borderRadius={searchPopup?"25px":"none"} 
        borderBottom="none"
        borderTop={searchPopup?'1px solid grey':"none"} 
        borderRight={searchPopup?'1px solid grey':"none"} 
        borderLeft={searchPopup?'1px solid grey':"none"}
        paddingBottom={searchPopup?"3rem":"none"}
        >
            {searchPopup?
            <Box margin='1rem' onMouseLeave={()=>setSearchPopup(false)}> 
                <Flex flexDirection='column' alignItems='center'>
                    <Box width='80vw'>
                        {/* <SearchIcon/> */}
                            <Input onChange={(e)=>{setSearchInput(e.currentTarget.value)}} 
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit(e);
        }
                            }}
                            bg= 'white' type="text" name='search' placeholder="Search..."  width="100%" border='none'  _focusVisible='none'/>

                    </Box>
                </Flex>
            </Box>
            :null
            }
            <Flex flexDirection='column' alignItems='center' bg='#282121'>
                <Box paddingBottom='0rem' width='100vw' padding='0.5rem'>
                    <Flex flexDirection='row' justifyContent="space-between" alignItems='center'>
                        <Box padding='1rem'>
                            <Link to="/" onClick={()=>setSelectIcon('home')}>
                                <HomeIcon height='3vh' width='auto' fill={selectedIcon==='home'?"rgb(180, 157, 253)":'black'}/>
                            </Link>
                        </Box>
                        <Box padding='1rem'>
                            <SearchIcon ref={searchIconRef} height='3vh' width='auto' onClick={popup} fill={selectedIcon==='search'?"rgb(180, 157, 253)":'none'} stroke={selectedIcon==='search'?"rgb(180, 157, 253)":'black'}/>
                        </Box>
                        <Box padding='1rem'>
                            <Link to="/" onClick={()=>setSelectIcon('camera')}>
                                <CameraIcon height='3vh' width='auto'  fill={selectedIcon==='camera'?"rgb(180, 157, 253)":'black'}/>
                            </Link>
                        </Box>
                        <Box padding='1rem'>
                            <Link to='/cart' onClick={()=>setSelectIcon('cart')}>
                                <CartIcon height='3vh' width='auto'  fill={selectedIcon==='cart'?"rgb(180, 157, 253)":'black'} stroke={selectedIcon==='cart'?"rgb(180, 157, 253)":'black'}/>
                            </Link>
                        </Box>
                        <Box padding='1rem'>
                            <Link to={isLoggedIn?'/profile':'/login'} onClick={()=>setSelectIcon('account')}>
                                <AccountIcon height='3vh' width='auto'  fill={selectedIcon==='account'?"rgb(180, 157, 253)":'black'}/>
                            </Link>
                        </Box>
                    </Flex>
                </Box>
                <Box width='50%' borderTop='3px solid white' padding='1vh'>
                </Box>

            </Flex>
        </Flex>
    )
}

export default NavBar;