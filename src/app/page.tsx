import LoginForm from './components/LoginForm/LoginForm';
import LogoutUser from './components/LogoutUser/LogoutUser';
import styles from './page.module.css';

export default function Home() {
  console.log('API_BASE:', process.env.NEXT_PUBLIC_API_BASE_URL);

  return (
    <div className={styles.page}>
      <LoginForm />
      <LogoutUser />
      <h1>404Hertz</h1>
      <h2>404Hertz</h2>
      <h3>404Hertz</h3>
      <h4>404Hertz</h4>
      <h5>404Hertz</h5>
      <h6>404Hertz</h6>
    </div>
  );
}
