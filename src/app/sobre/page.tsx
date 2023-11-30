import styles from './contatos.module.css';

export default function Contato() {
    return (
        <div className={styles.container}>

            <div className={styles.contato}>

                <div className={styles.contatoinfo}>

                    <div className={styles.infotop}>

                        <div className={styles.infobox}>
                            <h2 className='text-3xl font-bold'>Endereço</h2>
                            <p className={styles.email}>Endereço: R. Maj. Gote, 121 - Centro, Patos de Minas - MG, 38700-001</p>
                        </div>
                        <div className={styles.infobox}>
                            <h2 className='text-3xl font-bold'>Telefone</h2>
                            <p className={styles.telefone}><strong>(34) 3822-0918</strong></p>
                        </div>
                    </div>
                    <div className={styles.infobottom}>
                        <div>
                            <h2 className='text-3xl font-bold'>Quem Somos?</h2>
                            <p className='text-xl font-bold text-justify'>
                                Nosso foco principal é atender às necessidades de transporte de nossos clientes de maneira ágil, segura e personalizada. Contamos com uma frota moderna e uma equipe dedicada de profissionais qualificados, garantindo que cada entrega seja realizada com pontualidade e integridade.

                                Além disso, a Transheck valoriza a inovação, incorporando tecnologias avançadas para otimizar processos e oferecer maior visibilidade aos nossos clientes em relação ao rastreamento de suas mercadorias. Buscamos constantemente aprimorar nossos serviços para atender às demandas dinâmicas do mercado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

