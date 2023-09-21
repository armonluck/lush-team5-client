import { Icon, createIcon } from '@chakra-ui/react';

export const HomeIcon = createIcon({
  displayName: 'HomeIcon',
  viewBox: '0 0 22 22',
  path: (
    <g>
      {/* First path with custom stroke color */}
      <path
        d="M19,11v9h-5v-6h-4v6H5v-9H3.6L12,3.4l8.4,7.6H19z"
        // fill={props => props.color || 'white'}
        stroke='white'
      />

      {/* Second path with default stroke color */}
      <path d="M20,21h-7v-6h-2v6H4v-9H1l11-9.9L23,12h-3V21z M15,19h3v-8.8l-6-5.4l-6,5.4V19h3v-6h6V19z"
    //   stroke={props => props.color || 'none'} 
      fill={props => props.color || 'none'}  />
    </g>
  ),
});




export default HomeIcon;