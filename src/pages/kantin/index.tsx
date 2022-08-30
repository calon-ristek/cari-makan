import Card from "components/Card"
import Container from "components/Container"
import { trpc } from "src/utils/trpc"
import Image from 'next/image'
import Spinner from "public/loading.svg"
import TabContainer from "components/TabContainer"
import Title from "components/Title"
import ExampleImage from "public/example.jpg"
// import { createSSGHelpers } from "@trpc/react/ssg"
// import { appRouter } from "src/server/router"
// import { createContext } from "src/server/router/context"
// import superjson from 'superjson'
// import { GetServerSidePropsContext } from "next"

const ExplorePage = () => {

    const { data: canteens, isLoading } = trpc.useQuery(["kantin.get-all-kantin"])

    return (
        <Container>
            <section>
                <Title>Explore Page</Title>
            </section>
            <TabContainer>
                <h2 className="text-2xl">Semua Kantin</h2>
                {!isLoading ? canteens?.map(kantin => {
                    return (
                        <Card key={kantin.id} image={ExampleImage} name={kantin.name} faculty={kantin.faculty} rating={"5.0"} reviewCount={10} />
                    )
                }) : 
                <div className="grid items-center">
                    <Image src={Spinner} alt="Loading..." /> 
                </div>
                }
            </TabContainer>
        </Container>
    )
}

export default ExplorePage

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//     const ssg = createSSGHelpers({
//         router: appRouter,
//         ctx: await createContext(),
//         transformer: superjson,
//       })
      
//       ssg.prefetchQuery("kantin.get-all-kantin")

//       return {
//         props: {
//             trpcState: ssg.dehydrate(),
//         }
//       }
// }
