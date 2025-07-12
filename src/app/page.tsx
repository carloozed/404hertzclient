import styles from './page.module.css';

export default function Home() {
  console.log('API_BASE:', process.env.NEXT_PUBLIC_API_BASE_URL);

  return <div className={styles.page}></div>;
}
