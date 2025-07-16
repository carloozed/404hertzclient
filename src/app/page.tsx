import LoginForm from './components/FormComponents/LoginForm/LoginForm';
import Logo from './components/Logo/Logo';
import LogoutUser from './components/FormComponents/LogoutUser/LogoutUser';
import SignupForm from './components/FormComponents/SignupForm/SignupForm';
import ButtonBlack from './components/Buttons/ButtonBlack/ButtonBlack';
import ButtonWhite from './components/Buttons/ButtonWhite/ButtonWhite';
import PasswordReset from './components/FormComponents/PasswordReset/PasswordReset';

import styles from './page.module.css';
import AnalyzeField from './components/FormComponents/AnalyzeField/AnalyzeField';

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
