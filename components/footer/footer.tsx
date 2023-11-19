import Link from 'next/link';
import s from './footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.infoTitle}>
                        <h3> <strong>TRANSHECK</strong></h3>
                    </div>
                    <ul>
                        <Link href="/">Home</Link>
                        <Link href="/">Veículos</Link>
                    </ul>
                </div >
                <div className={s.info}>
                    <div className={s.infoTitle}>
                        <h3> <strong>Sobre nós</strong></h3>
                    </div>
                    <ul>
                        <li>
                            Rua Joaquim das Chagas, 1233
                        </li>
                        <li>

                            Bairro: Varzea

                            CEP: 38700-356
                        </li>
                        <li className='text-center'>
                            Ligue para (34) 99791-3110
                        </li>

                    </ul>
                </div>
                <div className={s.infoSocials}>
                    <div className={s.infoTitle}>
                        <h3>NOSSAS REDES SOCIAIS</h3>
                    </div>
                    <div className={s.socials}>
                        <Link target="_blank" href={""} className={s.icon} > <img className={s.face} src="./assets/face.png" alt="" /></Link>
                        <Link target="_blank" href={""} className={s.icon} > <img className={s.insta} src="./assets/insta.png" alt="" /></Link>
                        <Link target="_blank" href={""} className={s.icon} > <img className={s.whats} src="./assets/whats.png" alt="" /></Link>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Footer;