import { HeaderContainer } from "./components/HeaderContainer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { SignInButtons } from "./components/SignInButtons";

export function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <Menu />
            <SignInButtons />
        </HeaderContainer>      
    )
}