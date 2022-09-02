import Card from "components/Card"
import Container from "components/Container"
import { trpc } from "src/utils/trpc"
import Image from 'next/image'
import Spinner from "public/loading.svg"
import TabContainer from "components/TabContainer"
import Title from "components/Title"
import ExampleImage from "public/example.jpg"
import Link from "next/link"

const ExplorePage = () => {

    const { data: canteens, isLoading: kantinLoading } = trpc.useQuery(["kantin.get-all-kantin"])

    const { data: faculties, isLoading: fakultasLoading } = trpc.useQuery(['kantin.get-faculties'])

    return (
        <Container>
            <section>
                <Title>Explore Page</Title>
            </section>
            <TabContainer>
                <h2 className="text-2xl">Fakultas</h2>
                <section className="flex items-center flex-nowrap overflow-auto">
                    {!fakultasLoading ? faculties?.map(faculty => {
                        return (
                            <Link href={`/kantin/${faculty.name}`} key={faculty.id}>
                                <a className="text-center inline-block m-2">
                                   <div className=" relative w-[75px] h-[75px]">
                                   <Image src={faculty.logo} alt={faculty.name} layout="fill" />
                                   </div>
                                    <h3>{faculty.name}</h3> 
                                </a>
                            </Link>
                        )
                    }) : 
                    <div className="grid items-center min-w-full">
                        <Image src={Spinner} alt="Loading..." width={75} height={75} /> 
                    </div>}
                </section>
                <h2 className="text-2xl">Semua Kantin</h2>
                {!kantinLoading ? canteens?.map(kantin => {
                    return (
                        <Card key={kantin.id} image={ExampleImage} name={kantin.name} faculty={kantin.faculty?.name} rating={"5.0"} reviewCount={kantin._count.Review} />
                    )
                }) : 
                <div className="grid items-center">
                    <Image src={Spinner} alt="Loading..." width={75} height={75} /> 
                </div>
                }
            </TabContainer>
        </Container>
    )
}

export default ExplorePage


