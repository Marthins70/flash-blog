import { signOut, useSession } from 'next-auth/react'
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { AccountInformation } from './AccountInformation'
import { SocialSignInButton } from './SocialSignInButton'

export function AccountButtons() {
    const { data: session } = useSession()

    if(!session) {
        return(
            <div className='flex justify-between gap-x-2 w-auto mx-auto mr-48'>
                <SocialSignInButton bgColor='bg-red-700' loginProvider='google'>
                    <FaGoogle color='#FFF' size={20} />
                </SocialSignInButton>
    
                <SocialSignInButton bgColor='bg-blue-700' loginProvider='facebook'>
                    <FaFacebook color='#FFF' size={20} />
                </SocialSignInButton>
                
                <SocialSignInButton bgColor='bg-zinc-900' loginProvider='github'>
                    <FaGithub color='#FFF' size={20} />
                </SocialSignInButton>
            </div>
        )
    }

    return (
        <div className='flex justify-between gap-x-2 w-auto mx-auto mr-48'>
            <AccountInformation session={session} />
            <a onClick={() => signOut()} className="flex justify-center items-center pl-2 border-l border-solid border-white cursor-pointer">
                <FiLogOut size={30} color="#d97706" />
            </a>
        </div>
    )
}