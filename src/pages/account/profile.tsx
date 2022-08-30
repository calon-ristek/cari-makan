import Container from 'components/Container'
import TabContainer from 'components/TabContainer'
import Image from 'next/image'
import { trpc } from 'src/utils/trpc'
import Spinner from "public/loading.svg"
import { signOut } from 'next-auth/react'
import withSession from 'src/utils/withSession'
import Title from 'components/Title'
// import { Session } from 'next-auth'


const ProfilePage = () => {

    const { data: profile, isLoading } = trpc.useQuery(["user.get-profile"], {
        cacheTime: 60 * 1000
    })

    // if (session) {
        
        return (
            <Container>
                <Title>Profil Anda</Title>
                <TabContainer>
                    {isLoading && !profile ? 
                        <div className='grid place-items-center p-2'>
                            <Image src={Spinner} alt="Loading..."/>
                        </div>
                        :
                        <section className='flex flex-col items-center'>
                            <div className='grid place-items-center m-4 mb-0'>
                                <Image className='rounded-full' width={200} height={200} src={profile?.image || ''} alt={profile?.name || ''} />
                            </div>
                            <div className="my-4">
                                <p className='my-3 text-xl'><span className='font-bold'>Nama : </span>{profile?.name}</p>
                                <p className='my-3 text-xl'><span className='font-bold'>Jurusan : </span>{profile?.name}</p>
                                <p className='my-3 text-xl'><span className='font-bold'>Fakultas : </span>{profile?.name}</p>
                                <p className='my-3 text-xl'><span className='font-bold'>Angkatan : </span>{profile?.name}</p>
                            </div>
                            <button onClick={() => signOut({callbackUrl: "/"})} className='btn mt-4 bg-transparent text-red-500 border-red-500 border-2 rounded-3xl w-full shadow-md'>Keluar</button>
                        </section>
                    }
                </TabContainer>
            </Container>
        )
    // } 
    // else {
    //     return (
    //     <Container>
    //             <h1 className='text-white mx-4 text-3xl my-5 font-semibold'>Profil Anda</h1>
    //             <TabContainer>
    //                 <button className='btn w-full' onClick={() => signIn()}>Sign in</button>
    //             </TabContainer>
    //         </Container>
    //     )
    // }
}

export default withSession(ProfilePage)
