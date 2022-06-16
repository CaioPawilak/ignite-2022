import styles from './styles.module.scss'
import igniteLogo from '../../assets/Ignite_logo.svg'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Ignite Logo" />
                <h1>Ignite Feed</h1>
            </header>

        </>
    );
}
