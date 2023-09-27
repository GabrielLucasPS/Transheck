import Link from 'next/link'
import style from '../styles/config.module.css'


export default function configuracoes() {
    return (
        <main className={style.homeContainer}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className="grid grid-cols-2 gap-12">
                        <div className={style.configBtn}>
                            <img src="./assets/datas.png" alt="" />
                            <h2 className={style.configBtnText}>Configurar Datas</h2>
                        </div>
                        <div className={style.configBtn}>
                            <img src="./assets/faturas.png" alt="" />
                            <h2 className={style.configBtnText}>Importar Faturas</h2>
                        </div>
                        <div className={style.configBtn}>
                            <img src="./assets/ajuda.png" alt="" />
                            <h2 className={style.configBtnText}>Solicitar ajuda</h2>
                        </div>
                        <div className={style.configBtn}>
                            <img src="./assets/conta.png" alt="" />
                            <h2 className={style.configBtnText}>Conta</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

