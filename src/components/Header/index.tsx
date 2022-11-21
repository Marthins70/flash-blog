import { HeaderContainer } from "./components/HeaderContainer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>      
    )
}