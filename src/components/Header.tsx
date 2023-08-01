import styles from './Header.module.css'

import socialLogo from '../assets/MD-Social-logo2.jpg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={socialLogo} alt="Logotipo da MD Social" />
    </header>
  );
}

