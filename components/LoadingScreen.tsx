import Image from 'next/image'
import React from 'react'
import Container from './Container'
import Spinner from "public/loading.svg"
import TabContainer from './TabContainer'
import Title from './Title'

const LoadingScreen = () => {
    return (
        <Container className='z-10'>
            <Title>Mencari makan di UI tak pernah semudah ini</Title>
            <TabContainer className='flex-1 grid place-items-center'>
                <Image src={Spinner} alt="Loading..." />
            </TabContainer>
        </Container>
    )
}

export default LoadingScreen
