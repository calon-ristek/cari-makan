import React from 'react'
import { useRouter } from 'next/router'
import { trpc } from 'src/utils/trpc'

const KantinPage = () => {

    const router = useRouter()

    // const { data:kantin, isLoading } = trpc.useQuery(["kantin.get-canteen"], {
    //     faculty: "FMIPA"
    // })

    // console.log(kantin)

    return (
        <div>
            
        </div>
    )
}

export default KantinPage
