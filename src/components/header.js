import '../styles/header.scss';
import HeaderNav from './header-navigation';
import Branding from './header-branding';

export default function Header() {
    return (

        <header>

            <Branding />

            <HeaderNav />

        </header>

    );
}