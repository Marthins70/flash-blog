import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

interface ActiveLinkProps extends LinkProps {
    children: string;
}

export function ActiveLink({ children,  ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter();

    const className = asPath == rest.href ? 'text-amber-600' : 'text-white';

    return(
        <Link className={ `${className} mx-auto px-4 hover:text-amber-500` } {...rest}>
            {children}
        </Link>
    )
}