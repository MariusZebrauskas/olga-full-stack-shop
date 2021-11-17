import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { LoadingContext } from '../../context/LoadingContext';
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
import { MainWrapper } from './stylesLogIn';
import { CurrenPerson } from '../../context/AuthContex';
import Warning from '../../Shared/warning/Warning';

const Login = ({ changeComponent, language, history }) => {
  const [loggedIn, setLoggedIn] = useContext(CurrenPerson);
  const [loadingDb, setLoadingDb] = useContext(LoadingContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState('Email');
  const [Password, setPassword] = useState('Password');
  const [rememberMe, setRememberMe] = useState('Remember Me');
  const [forgotPassword, setforgotPassword] = useState('Forgot Password');
  const [singIn, setSingIn] = useState('Sing In');
  const [dontHaveAnAccount, setDontHaveAnAccount] = useState('Don`t Have An Account');
  const [register, setRegister] = useState('Register');
  const [oneNow, setOneNow] = useState('One Now');
  const [warningMessage, setWarningMessage] = useState();
  const [autoCompleate, setAutoCompleate] = useState(false);
  const autoCompleateHandler = () => {
    setAutoCompleate(!autoCompleate);
  };
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

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  });
  const login = (e) => {
    e.preventDefault();
    setWarningMessage(null);
    setLoadingDb(true);

    axios
      .post('/auth/login', { email: emailRef.current.value, password: passwordRef.current.value })
      .then((response) => {
        // items going to local storrage
        // FIXME:push items to local storrage
        setLoadingDb(false);
        if (autoCompleate) {
          console.log('cliked autocompleate');
        }
        const { data } = response;
        setLoggedIn(data);
      })
      .catch((err) => {
        setLoadingDb(false);
        if (err) {
          setWarningMessage(err.message);
          return;
        }
      });
  };
  const forgotPasswordHandler = (e) => {
    e.preventDefault();
    history.push(`recover`);
  };
  return (
    <RenderingStyles>
      <MainWrapper>
        <Wrapper>
          <IconWrapper>
            <div>
              <UserIcon></UserIcon>
            </div>
          </IconWrapper>
          <Form onSubmit={login}>
            <WrapperUserName>
              <div>
                <User></User>
              </div>
              <NameInput
                ref={emailRef}
                type='email'
                onChange={() => setWarningMessage('')}
                placeholder={email}
                required
              />
            </WrapperUserName>

            <WrapperPassword>
              <div>
                <Lock></Lock>
              </div>
              <PasswordInput
                autoComplete='true'
                ref={passwordRef}
                type='password'
                onChange={() => setWarningMessage('')}
                placeholder={Password}
                required
              />
            </WrapperPassword>

            <WrapperRemeberMain>
              <div>
                {/* <input
                  onClick={autoCompleateHandler}
                  type='checkbox'
                  name='remember password'
                  value='false'
                />
                <p>{rememberMe}</p> */}
              </div>
              <div>
                <ForgotPassword onClick={forgotPasswordHandler}>{forgotPassword}?</ForgotPassword>
              </div>
            </WrapperRemeberMain>

            <SingIn type='submit'>{loadingDb ? <ClipLoader size='1.3rem' /> : singIn}</SingIn>
            {warningMessage && <Warning>{warningMessage}</Warning>}

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
