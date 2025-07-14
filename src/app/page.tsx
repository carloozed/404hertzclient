import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';
import LogoutUser from './components/LogoutUser/LogoutUser';
import SignupForm from './components/SignupForm/SignupForm';

import styles from './page.module.css';

export default function Home() {
  console.log('API_BASE:', process.env.NEXT_PUBLIC_API_BASE_URL);

  return (
    <div className={styles.page}>
      <LoginForm />
      <LogoutUser />
      <SignupForm />
      <Logo height={200} hasLink={false} />
    </div>
  );
}
