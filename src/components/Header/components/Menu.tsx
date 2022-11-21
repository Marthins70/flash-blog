import { ActiveLink } from "./ActiveLink";

export function Menu() {
    return(
        <nav className="mx-20 flex justify-start items-center gap-x-4">
            <ActiveLink href="/">
                Home
            </ActiveLink>
            <ActiveLink href="/posts">
                Posts
            </ActiveLink>
        </nav>
    )
}