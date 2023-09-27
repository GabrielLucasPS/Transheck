import s from './layout.module.css';
import { ReactElement } from 'react';
import Navbar from '../navbar';

type Props = {
    children: ReactElement;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>


    );
}

export default Layout;