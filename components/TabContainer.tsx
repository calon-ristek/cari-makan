import {ReactNode} from 'react'

interface TabContainerProps {
    className?: string
    children: ReactNode
}

const TabContainer = ({children, className}: TabContainerProps) => {
    return (
        <section className={`min-h-full w-full flex-auto bg-white rounded-t-3xl p-4 ${className ? className : ''}`}>
            {children}
        </section>
    )
}

export default TabContainer
