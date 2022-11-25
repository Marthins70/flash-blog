import { signIn, SignInResponse } from "next-auth/react"
import { ReactNode } from "react"

interface SocialSignInButtonProps {
    children: ReactNode;
    bgColor: string;
    loginProvider: string;
}

export function SocialSignInButton({ children, bgColor, loginProvider}: SocialSignInButtonProps) {
    return(
        <a className={`${bgColor} w-10 h-10 rounded-full flex items-center justify-center cursor-pointer`} onClick={() => signIn(loginProvider)}>
            {children}
        </a>
    )
}