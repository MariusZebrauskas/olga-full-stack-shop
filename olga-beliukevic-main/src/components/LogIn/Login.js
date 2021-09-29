import React, { useState, useEffect } from 'react';
import {
  Form,
  UserIcon,
  Lock,
  User,
  IconWrapper,
  Wrapper,
  WrapperUserName,
  NameInput,
  WrapperPassword,
  PasswordInput,
  WrapperRemeberMain,
  ForgotPassword,
  SingIn,
  WrapperDontHaveAccount,
} from './stylesLogIn';
import { RenderingStyles } from '../../Shared/renderingStyles';
import { useHistory } from 'react-router';
import { MainWrapper } from './stylesLogIn';

const Login = ({ changeComponent, language, history }) => {
  const [email, setEmail] = useState('Email');
  const [Password, setPassword] = useState('Password');
  const [rememberMe, setRememberMe] = useState('Remember Me');
  const [forgotPassword, setforgotPassword] = useState('Forgot Password');
  const [singIn, setSingIn] = useState('Sing In');
  const [dontHaveAnAccount, setDontHaveAnAccount] = useState('Don`t Have An Account');
  const [register, setRegister] = useState('Register');
  const [oneNow, setOneNow] = useState('One Now');
  useEffect(() => {
    if (language === 'lt') {
      setEmail('Elektroninis Paštas');
      setPassword('Slaptažodis');
      setRememberMe('Prisiminti Slaptažodį');
      setforgotPassword('Pamiršai Slaptažodį');
      setSingIn('Prisijungti');
      setDontHaveAnAccount('Neturite Paskyros');
      setRegister('Registruokis');
      setOneNow('ir susikurk paskyrą čia');
    }
    if (language === 'eng') {
      setEmail('Email');
      setPassword('Password');
      setRememberMe('Remember Me');
      setforgotPassword('Forgot Password');
      setSingIn('Sing In');
      setDontHaveAnAccount('Don`t Have An Account');
      setRegister('Register');
      setOneNow('One Now');
    }
    if (language === 'ru') {
      setEmail('Эл. адрес');
      setPassword('PasswoПарольrd');
      setRememberMe('Запомните меня');
      setforgotPassword('Забыли пароль');
      setSingIn('Войти');
      setDontHaveAnAccount('Нет учетной записи');
      setRegister('регистр');
      setOneNow('Один сейчас');
    }
  }, [language]);

  return (
    <RenderingStyles>
      <MainWrapper>
        <Wrapper>
          <IconWrapper>
            <div>
              <UserIcon></UserIcon>
            </div>
          </IconWrapper>
          <Form action='submit'>
            <WrapperUserName>
              <div>
                <User></User>
              </div>
              <NameInput type='email' placeholder={email} required />
            </WrapperUserName>

            <WrapperPassword>
              <div>
                <Lock></Lock>
              </div>
              <PasswordInput type='password' placeholder={Password} required />
            </WrapperPassword>

            <WrapperRemeberMain>
              <div>
                <input type='checkbox' name='remember password' value='false' />
                <p>{rememberMe}</p>
              </div>
              <div>
                <ForgotPassword onClick={() => history.push('recover')}>
                  {forgotPassword}?
                </ForgotPassword>
              </div>
            </WrapperRemeberMain>

            <SingIn type='submit'>{singIn}</SingIn>

            <WrapperDontHaveAccount>
              <p>
                {dontHaveAnAccount}? <b onClick={() => history.push('register')}>{register}</b>{' '}
                {oneNow}!
              </p>
            </WrapperDontHaveAccount>
          </Form>
        </Wrapper>
      </MainWrapper>
    </RenderingStyles>
  );
};

export default Login;
