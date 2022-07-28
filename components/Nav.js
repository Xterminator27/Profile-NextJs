import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/modify'><a>Modify</a></Link>
                </li>
                <li>
                    <Link href='/add'><a>Add</a></Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav