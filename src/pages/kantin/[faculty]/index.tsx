import { useRouter } from 'next/router'
import { trpc } from 'src/utils/trpc'
import Container from 'components/Container'
import Title from 'components/Title'
import TabContainer from 'components/TabContainer'
import Link from 'next/link'
import LoadingScreen from 'components/LoadingScreen'
import Image from 'next/image'
import Card from 'components/Card'
import ExampleImage from "public/example.jpg"

const KantinPage = () => {

    const router = useRouter()

    const { data: fakultas, isLoading } = trpc.useQuery(["kantin.get-kantin-by-faculty", {faculty: router.query.faculty && router.query.faculty.toString().toUpperCase()}], {
        retry: 1,
        cacheTime: 1000
    })


    if (isLoading) {
        return <LoadingScreen />
    }

    if (!fakultas) {
        return (
            <Container>
                <Title>Fakultas {router.query.faculty && router.query.faculty.toString()} tak ada...</Title>
                <TabContainer>
                    <Link href="/kantin">
                        <a className='btn btn-primary w-full text-lg'>Kembali ke explore</a>
                    </Link>
                </TabContainer>
            </Container>
        )
    }

    // console.log(kantin)
    return (
        <Container>
            <div className='flex items-center px-3 py-7'>
                <div>
                    <Image src={fakultas.logo} alt={fakultas.name} width={75} height={75} objectFit="cover" className="bg-white rounded-full" />
                </div>
                <Title>
                    {fakultas.name}
                </Title>
            </div>
            
            <TabContainer className='-mt-5 z-[2]'>
                <h2 className='mb-1 text-2xl'>Semua Kantin di {fakultas.name}</h2>
                {fakultas.Kantin.map(kantin => {
                    return (
                        <Card key={kantin.id} image={kantin.imageUrl || ExampleImage} name={kantin.name} faculty={fakultas.name} rating={"5.0"} reviewCount={kantin._count.Review} />
                    )
                })}
            </TabContainer>
        </Container>
    )
}

export default KantinPage
