import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card  width={{ sm: '300px', md: '300px', lg: '300px', xl: '200px' }} borderRadius={10} overflow={'hidden'}>
        <Skeleton height="200px"  />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton