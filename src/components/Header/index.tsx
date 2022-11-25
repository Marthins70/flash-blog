import { HeaderContainer } from "./components/HeaderContainer";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { AccountButtons } from "./components/AccountButtons";

export function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <Menu />
            <AccountButtons />
        </HeaderContainer>      
    )
}