import React from 'react'
import { useRouter } from 'next/router'
import { trpc } from 'src/utils/trpc'
import Container from 'components/Container'
import Title from 'components/Title'
import TabContainer from 'components/TabContainer'
import Link from 'next/link'
import LoadingScreen from 'components/LoadingScreen'
import Image from 'next/image'
import ExampleImage from "public/example.jpg"
import { AnnotationIcon, StarIcon, ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid'

const KantinPage = () => {

    const router = useRouter()

    const { data: kantin, isLoading } = trpc.useQuery(["kantin.get-canteen", {name: router.query.name && router.query.name.toString().toUpperCase()}], {
        retry: false,
        cacheTime: 1000
    })

    if (isLoading) {
        return <LoadingScreen />
    }

    if (!kantin) {
        return (
            <Container>
                <Title>Kantin {router.query.name && router.query.name.toString().toUpperCase()} tak ada...</Title>
                <TabContainer>
                    <Link href="/kantin">
                        <a className='btn btn-primary w-full text-lg'>Kembali ke explore</a>
                    </Link>
                </TabContainer>
            </Container>
        )
    }

    return (
        <div>
            <div className='relative w-full h-[200px]'>
                <Image src={ExampleImage} alt={kantin.name} layout="fill" className='-z-[1]' />
            </div>
            <TabContainer className='-mt-5 z-[2]'>
                <h1 className='mb-1 text-2xl'>{kantin.name} - {kantin.faculty.name}</h1>
                <div className="flex items-center gap-2">
                    <p className="flex items-center text-lg"><StarIcon className='w-6 h-6 text-yellow-400 mr-1' /> 5.0</p>
                    <p className="flex items-center text-lg"><AnnotationIcon className='w-6 h-6' /> {kantin.Review.length}</p>
                </div>
                <section>
                    <h2 className='text-xl my-1'>Deskripsi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse deleniti in nulla animi, sequi ullam explicabo veniam distinctio atque qui unde non, a voluptatibus quibusdam. Iste, illum in!</p>
                </section>
                <section>
                    <h2 className='text-xl my-1'>Lokasi</h2>
                    <iframe className='w-full rounded-md' src={kantin.embedUrl} frameBorder="0"></iframe>
                </section>
                <section>
                    <h2 className='text-xl my-1'>Review</h2>
                    {kantin.Review.map((review, index: number) => {
                        return (
                            <aside key={index}>
                                <div className='flex items-center justify-between'>
                                    <h3>Maurice Yang</h3>
                                    <p className="flex items-center text-lg"><StarIcon className='w-6 h-6 text-yellow-400 mr-1' /> {review.score}</p>
                                </div>
                                <p>{review.message}</p>
                                <div className="flex items-center gap-3">
                                    <p className='flex items-center'><ThumbUpIcon className='w-6 h-6 text-primary-light' /> {review._count.Upvotes}</p>
                                    <p className='flex items-center'><ThumbDownIcon className='w-6 h-6 text-primary-light' /> {review._count.Downvotes}</p>
                                </div>
                            </aside>
                        )
                    })}
                </section>
            </TabContainer>
        </div>
    )
}

export default KantinPage
