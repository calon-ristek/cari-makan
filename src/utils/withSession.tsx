import LoadingScreen from "components/LoadingScreen"
import { signIn, useSession } from "next-auth/react"
import { ComponentType, PropsWithChildren } from "react"

const withSession = (Component: ComponentType<PropsWithChildren>) => {
    return function WithSession (props: PropsWithChildren) {

        const {data: session, status } = useSession()

        if (status === "loading") return <LoadingScreen />

        if (status === "unauthenticated" && !session) signIn()

        if (status === "authenticated" && session) {
            const newProps = {...props, session}
            return <Component {...newProps} />
        }
    }
}

export default withSession
