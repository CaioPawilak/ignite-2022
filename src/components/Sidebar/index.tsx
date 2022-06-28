import topBackground from '../../assets/sidebar_background.png'
import userPicture from '../../assets/user-picture.png'
import editProfile from '../../assets/edit-profile-icon.svg'
import styles from './styles.module.scss'

export function Sidebar() {
    return (
        <aside className={styles.wrapper}>
            <img className={styles.backgroundImg} src={topBackground} alt="Sidebar Image Background" />
            <div className={styles.userInfoContainer}>
                <div className={styles.userPictureWrapper}>
                    <img className={styles.userPicture} src={userPicture} alt="Foto do usuário" />
                </div>
                <div className={styles.profile}>
                    <strong className={styles.profileName}> Leslie Alexander</strong>
                    <span className={styles.profileJob}> UI Designer</span> 
                </div>
                <footer className={styles.footerWrapper}>
                    <a className={styles.editProfile}>
                      <img src={editProfile}  alt="" />
                      <p> Editar seu perfil</p>
                    </a>
                </footer>
            </div>
        </aside>
    );
} 

     