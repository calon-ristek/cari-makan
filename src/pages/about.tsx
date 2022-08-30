import Container from 'components/Container'
import TabContainer from 'components/TabContainer'
import Image from 'next/image'
import React from 'react'
import ExampleImage from "public/example.jpg"
import Title from 'components/Title'

const AboutPage = () => {
    return (
        <Container>
            <Title>Tentang Kami</Title>
            <TabContainer>
                <h2 className='text-2xl text-center mb-3'>Tim dibalik CariKantin</h2>
                <article>
                    <div>
                        <Image src={ExampleImage} alt="Foto" />
                        <h3>Willian Susanto</h3>
                        <p>Project Manager</p>
                    </div>
                    <div>
                        <Image src={ExampleImage} alt="Foto" />
                        <h3>Kenichi Komala</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div>
                        <Image src={ExampleImage} alt="Foto" />
                        <h3>Maurice Yang</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div>
                        <Image src={ExampleImage} alt="Foto" />
                        <h3>Juan D.Khusuma</h3>
                        <p>Backend Developer</p>
                    </div>
                </article>
                <h2 className='text-2xl text-center'>Visi</h2>
                <h2 className='text-2xl text-center'>Misi</h2>
            </TabContainer>
        </Container>
    )
}

export default AboutPage
