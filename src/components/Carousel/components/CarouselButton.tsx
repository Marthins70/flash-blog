import Link, { LinkProps } from "next/link"

interface CarouselButtonProps extends LinkProps {
    children: string;
}

export function CarouselButton({ children, ...rest }: CarouselButtonProps) {
    return(
        <Link 
            {...rest} 
            className='text-xl 
            text-amber-600 
            uppercase 
            font-bold 
            border-2 
            border-amber-600 
            border-solid 
            px-6 
            py-2 
            mt-4
            hover:bg-amber-600
            hover:text-white
        '>
            {children}    
        </Link>
    )
}