import { ReactNode } from "react"

interface HeaderContainerProps {
    children: ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
    return(
        <header className="
            w-full 
            h-16 
            bg-slate-800 
            flex 
            justify-start
            items-center 
            font-bold 
            line-tight border-b 
            border-amber-600
        ">
            {children}
        </header>
    )
}