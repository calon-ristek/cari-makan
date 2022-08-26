import Card from "components/Card"
import Container from "components/Container"
import { trpc } from "src/utils/trpc"


const ExplorePage = () => {

    const { data: canteens, isLoading } = trpc.useQuery(["kantin.get-all-kantin"])

    console.log(canteens)

    return (
        <Container>
            <section>
                <h1 className="text-3xl text-white">Explore Page</h1>
            </section>
            <section className="h-full w-full bg-white rounded-t-3xl p-3">
                <h2 className="text-2xl text-semibold">Semua Kantin</h2>
                {/* {!isLoading ? canteens?.map(kantin => {
                    return (
                        <Card key={kantin.id} name={kantin.name}  />
                    )
                }) : <h1>Loading...</h1>} */}
            </section>
        </Container>
    )
}

export default ExplorePage
