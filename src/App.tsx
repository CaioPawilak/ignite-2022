
import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './styles/global.module.scss'

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <Sidebar />
          <Feed />
        </div>
        {
          /*
          */
        }

      </div>
    </>
  )
}

//export default App
