import Nav from './Nav'
import Header from '../components/Header'
import CustomHead from './CustomHead'
import styles from '../styles/Layout.module.css'

const Laoyout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Laoyout
