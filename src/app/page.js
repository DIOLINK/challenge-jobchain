import Image from 'next/image';
import cerrar from '../assets/Cerrar.svg';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.floating}>
        <input
          id="input__mail"
          className={styles.floating__input}
          name="email"
          type="text"
          placeholder="Escribe tu correo electrónico"
        />
        <label
          for="input__mail"
          className={styles.floating__label}
          data-content="Correo electrónico"
        >
          Correo electrónico
        </label>
        <Image
          src={cerrar}
          alt="cerrar"
          width={25}
          height={25}
          className={styles.closeIcon}
        />
      </div>
    </main>
  );
}
