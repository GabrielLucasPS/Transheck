import Link from 'next/link'
import style from './rastrear.module.css'

export default function rastrear() {
    return (
        <div>
            <div className={style.rastreio}>
                <div className={style.ras}>
                    <p>
                        RASTREIE SUA ENCOMENDA
                    </p>
                </div>
                <div className={style.cpf}>
                    <p className={style.p1}>
                        cpf ou cnpj
                    </p>
                </div>
                <div className={style.pro}>
                    <p className={style.p1}>
                        PROCURAR
                    </p>
                </div>
            </div>

            <div className={style.container_info}>
                <div className={style.dia}>
                    <img src="/assets/caminhao.png" alt="" />
                    <p>Saiu de Patos de Minas- MG as 13:00 29/08/2023</p>
                    <p>Chegará em Tiros - MG as 18:30 30/08/2023 </p>
                    <p>Ultima atualização 13:56 29/08/2023</p>
                    <a href="Saber mais" className={style.h6}>Saber mais</a>
                </div>
                <div className={style.dia}>
                    <img src="/assets/caminhao.png" alt="" />
                    <p>Saiu de Tiros- MG as 13:00 29/08/2023</p>
                    <p>Chegará em Patos de Minas - MG as 18:30 30/08/2023 </p>
                    <p>Ultima atualização 13:56 29/08/2023</p>
                    <a href="Saber mais" className={style.h6}>Saber mais</a>
                </div>
                <div className={style.dia}>
                    <img src="/assets/caminhao.png" alt="" />
                    <p>Saiu de Patos de Minas- MG as 13:00 29/08/2023</p>
                    <p>Chegará em São Paulo - MG as 18:30 30/08/2023 </p>
                    <p>Ultima atualização 13:56 29/08/2023</p>
                    <a href="Saber mais" className={style.h6}>Saber mais</a>
                </div>
            </div>

        </div>

    );

}
