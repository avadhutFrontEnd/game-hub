import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={{ sm: '300px', md: '300px', lg: '300px', xl: '200px' }} borderRadius={10} overflow={'hidden'} >{children}</Box>
  )
}

export default GameCardContainer