import Link from '@/node_modules/next/link'
import style from '../styles/home.module.css'

export default function Home() {
    return (
        <main className={style.homeContainer}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.contentImg}>
                        <img src="./assets/transporte.jpg" alt="" />
                    </div>
                    <div className={style.contentInfo}>
                        <h2 className={style.title1}>Somos a Transheck, sua encomenda no melhor caminho.</h2>
                        <h2 className={style.title2}>Seguindo pelo caminho da trasparencia.</h2>
                        <Link className={style.botao} href={'/'}>Rastrear encomenda</Link >
                    </div>
                </div>
                <img className='cursor-pointer h-[440px] mb-[15px]' src="./assets/veic.png" alt="" />
            </div>
        </main>
    )
}
