import Card from 'components/Card'
import Container from 'components/Container'
import TabContainer from 'components/TabContainer'
import Title from 'components/Title'
import React from 'react'
import { trpc } from 'src/utils/trpc'
import withSession from 'src/utils/withSession'
import ExampleImage from "public/example.jpg"
import Image from 'next/image'
import Spinner from "public/loading.svg"

const SavedPage = () => {

    const { data: canteens, isLoading } = trpc.useQuery(["user.get-bookmarked"])

    return (
        <Container>
            <Title>Bookmarks</Title>
            <TabContainer>
                <h2 className='text-center text-2xl'>Kantin yang Tersimpan</h2>
                {isLoading ? 
                <div className="grid place-items-center">
                    <Image src={Spinner} alt="Loading..." />
                </div>
                : 
                <>
                    {canteens && canteens.length > 0 &&
                        canteens.map(kantin => {
                            return (
                                <Card key={kantin.id} image={ExampleImage} name={kantin.name} faculty={kantin.faculty} rating="5.0" reviewCount={10} />
                            )
                        })
                    }
                </>
            }
            </TabContainer>
        </Container>
    )
}

export default withSession(SavedPage)
