import styles from './style.module.css'
import poweredImage from '../../assets/powered.png'

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage} alt="IMC powered by B7Web" width={150}  />
      </div>
    </header>
  )
}