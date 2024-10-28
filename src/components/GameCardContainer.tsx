import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    // Fixed "width" is Removed
    <Box borderRadius={10} overflow={'hidden'} >{children}</Box>
  )
}

export default GameCardContainer