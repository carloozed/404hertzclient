import LoginForm from './components/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';
import LogoutUser from './components/LogoutUser/LogoutUser';
import SignupForm from './components/SignupForm/SignupForm';
import ButtonBlack from './components/Buttons/ButtonBlack/ButtonBlack';
import ButtonWhite from './components/Buttons/ButtonWhite/ButtonWhite';
import PasswordReset from './components/PasswordReset/PasswordReset';

import styles from './page.module.css';
import AnalyzeField from './components/AnalyzeField/AnalyzeField';

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginForm />
      <LogoutUser />
      <SignupForm />
      <ButtonBlack buttonText={'Sign Up'} />
      <ButtonWhite buttonText={'Log In'} />
      <PasswordReset />
      <AnalyzeField />
      <Logo height={200} hasLink={false} />
    </div>
  );
}
