import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';
import LogoutUser from './components/LogoutUser/LogoutUser';
import SignupForm from './components/SignupForm/SignupForm';
import ButtonBlack from './components/Buttons/ButtonBlack/ButtonBlack';
import ButtonWhite from './components/Buttons/ButtonWhite/ButtonWhite';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginForm />
      <LogoutUser />
      <SignupForm />
      <ButtonBlack buttonText={'Black Button'} />
      <ButtonWhite buttonText={'White Button'} />
      <Logo height={200} hasLink={false} />
    </div>
  );
}
