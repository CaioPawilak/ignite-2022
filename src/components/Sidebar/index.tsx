import topBackground from '../../assets/sidebar_background.png'
import userPicture from '../../assets/user-picture.png'
import styles from './styles.module.scss'

export function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.backgroundImg} src={topBackground} alt="Sidebar Image Background" />
            <div className={styles.userInfoContainer}>
                <div className={styles.userPictureWrapper}>
                    <img className={styles.userPicture} src={userPicture} alt="Foto do usuário" />
                </div>

            </div>
        </div>
    );
}

