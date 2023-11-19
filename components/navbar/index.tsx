'use client'
import Link from 'next/link';
import s from './navbar.module.css';
import { navigationLinks } from '@/utils/data';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={s.container}>
            <div className={s.navbar}>
                <Link href={'/'} className={s.logo}>
                    <img src="./assets/logo.png" alt="" />
                </Link>
                <div className={s.nav}>
                    {navigationLinks.map((link, index) => (
                        <div key={index} className={pathname === link.path ? s.linkActive : s.navLink}>
                            <Link className={s.navLinkItem} href={link.path}>{link.label}</Link>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    );
}

export default Navbar;