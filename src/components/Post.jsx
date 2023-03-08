import styles from './Post.module.css';
import Comment from './Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} 
                    src="https://github.com/thiagofreitascarneiro.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Thiago Carneiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="11 de maio as 08:13" dateTime='2022-05-11 08:13:30'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀</p>

                <p><a>jane.design/doctorcare</a> </p>

                <p> 
                    <a>#novoprojeto</a>{''}
                    <a>#nlw</a>{''}
                    <a>#rocketseat</a>
                </p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>  
        
    )
}