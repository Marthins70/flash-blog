import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa'
import { SocialSignInButton } from './SocialSignInButton'

export function SignInButtons() {
    return(
        <div className='flex justify-between gap-x-2 w-auto mx-auto mr-48'>
            <SocialSignInButton bgColor='bg-red-700'>
                <FaGoogle color='#FFF' size={20} />
            </SocialSignInButton>

            <SocialSignInButton bgColor='bg-blue-700'>
                <FaFacebook color='#FFF' size={20} />
            </SocialSignInButton>
            
            <SocialSignInButton bgColor='bg-zinc-900'>
                <FaGithub color='#FFF' size={20} />
            </SocialSignInButton>
        </div>
    )
}