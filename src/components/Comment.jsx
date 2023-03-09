import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export default function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/thiagofreitascarneiro.png" alt="" />  

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Carneiro</strong>
                            <time title="11 de maio as 08:13" dateTime='2022-05-11 08:13:30'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>  
        </div>
    )
}