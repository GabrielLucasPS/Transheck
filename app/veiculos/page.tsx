import Link from 'next/link'
import style from './veiculos.module.css'

export default function veiculos() {
    return (
        <div className={style.container}>
            <div className={style.container_row}>
                <div className={style.container_box}>
                    <div className={style.box_info}>
                        <img src="/assets/caminhao.png" alt="" />

                        <h2>Caminhão numero 1</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div>
                    <div className={style.box_status}>
                        <h2>Disponivel</h2>
                        <img src="./imagens/check.png" alt="" />
                    </div>
                    d
                </div>


                <div className={style.container_box}>
                    <div className={style.box_info}>
                        <img src="/assets/caminhao.png" alt="" />

                        <h2>Caminhão numero 2</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div>
                    <div className={style.box_status} >
                        <h2>Disponivel</h2>
                        <img src="./imagens/x.png" alt="" />
                    </div >
                </div >

                <div className={style.container_box} >
                    <div className={style.box_info} >
                        <img src="/assets/caminhao.png" alt="" />

                        <h2>Caminhão numero 3</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div >
                    <div className={style.box_status} >
                        <h2>Disponivel</h2>
                        <img src="./imagens/x.png" alt="" />
                    </div >
                </div >
            </div >

            <div className={style.container_row} >
                <div className={style.container_box} >
                    <div className={style.box_info}>
                        <img src="/assets/caminhao.png" alt="" />

                        <h2>Caminhão numero 4</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div >
                    <div className={style.box_status} >
                        <h2>Disponivel</h2>
                        <img src="./imagens/check.png" alt="" />
                    </div >
                </div >

                <div className={style.container_box} >
                    <div className={style.box_info} >
                        <img src="/assets/caminhao.png" alt="" />

                        <h2>Caminhão numero 5</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div >
                    <div className={style.box_status} >
                        <h2>Disponivel</h2>
                        <img src="./imagens/check.png" alt="" />
                    </div >
                </div >

                <div className={style.container_box} >
                    <div className={style.box_info} >
                        <img src="/assets/caminhao.png" alt="" />
                        <h2>Caminhão numero 6</h2>
                        <p>Lorem ipsum latsat donet, magna balah</p>
                    </div >
                    <div className={style.box_status}>
                        <h2>Disponivel</h2>
                        <img src="./imagens/check.png" alt="" />
                    </div >
                </div >
            </div >

        </div >
    );

}
