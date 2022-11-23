import { ReactNode } from "react"

interface SocialSignInButtonProps {
    children: ReactNode;
    bgColor: string;
}

export function SocialSignInButton({ children, bgColor }: SocialSignInButtonProps) {
    return(
        <div className={`${bgColor} w-10 h-10 rounded-full flex items-center justify-center cursor-pointer`}>
            {children}
        </div>
    )
}