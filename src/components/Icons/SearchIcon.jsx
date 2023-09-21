import { Icon, createIcon } from '@chakra-ui/react'

export const SearchIcon = createIcon({
  displayName: 'SearchIcon',
  viewBox: '0 0 24 24',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill='none'
      d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke={props => props.color || 'white'} // Use the 'color' prop as the stroke color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
})
export default SearchIcon;