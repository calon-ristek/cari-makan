import { ReactNode } from 'react'

const Title = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <h1 className={`text-white mx-4 text-4xl my-5 font-semibold ${className}`}>
            {children}
        </h1>
    )
}

export default Title
