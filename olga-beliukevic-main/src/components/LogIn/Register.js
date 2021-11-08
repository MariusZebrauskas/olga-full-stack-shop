import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  NewUser,
  Wrapper,
  IconWrapper,
  Form,
  Email,
  EmailInput,
  WrapperEmail,
  RegisterButton,
  WrapperDontHaveAccount,
  WrapperUserName,
  User,
  NameInput,
  WrapperPassword,
  Lock,
  PasswordInput,
} from './stylesLogIn';
import { RenderingStyles } from '../../Shared/renderingStyles';
import { MainWrapper } from './stylesLogIn';
import axios from 'axios';
import Warning from '../../Shared/warning/Warning';
import Success from '../../Shared/success/Success';

const Register = ({ changeComponent, language, history }) => {

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('Email Adress');
  const [name, setName] = useState('Name');
  const [password, setPassword] = useState('Password');
  const [registerAccount, setRegisterAccount] = useState('Register Account');
  const [doYouWantTo, setDoYouWantTo] = useState('Do you want to');
  const [revoverAccount, setRevoverAccount] = useState('Recover Account?');
  const [back, setBack] = useState(' Back to ');
  const [login, setLogin] = useState('Login');
  const [page, setPage] = useState('Page');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (language === 'eng') {
      setEmail('Email Adress');
      setName('Name');
      setPassword('Password');
      setRegisterAccount('Register Account');
      setDoYouWantTo('Do you want to');
      setRevoverAccount('Recover Account?');
      setBack(' Back to ');
      setLogin('Login');
      setPage('Page');
    } else if (language === 'lt') {
      setEmail('Elektroninis Paštas');
      setName('Slapyvardis');
      setPassword('Slaptažodis');
      setRegisterAccount('Registruoti paskyrą');
      setDoYouWantTo('Ar Norite');
      setRevoverAccount('Susigražinti Paskyrą?');
      setBack(' Grįžti Į ');
      setLogin('Prisijungimų');
      setPage('Puslapį');
    } else if (language === 'ru') {
      setEmail('Адрес электронной почты');
      setName('Имя');
      setPassword('Пароль');
      setRegisterAccount('Регистрация Аккаунта');
      setDoYouWantTo('хотите ли вы');
      setRevoverAccount('Восстановить аккаунт?');
      setBack(' Вернуться к ');
      setLogin('Авторизоваться');
      setPage('Страница');
    }
  }, [language]);

  const register = async (e) => {
    e.preventDefault();
    //  chek email is it containing valid values
    const values = /.com|.lt|.de|.pl|.gb|.ru/g;
    let userEmail = emailRef.current.value.toLowerCase();

    const exists = [...userEmail.matchAll(values)].length > 0;
    if (!exists) {
      setError('Invalid Email');
      return;
    }

    // post data to backend
    await axios
      .post('/auth/register', {
        username: await nameRef.current.value,
        email: await emailRef.current.value,
        password: await passwordRef.current.value,
      })
      .then((res) => {
        if (res.data.register == false) {
          setSuccess(null);
          setError('Email is allready in use');
        } else if (res.data.register == true) {
          setError(null);
          setSuccess('Account has been successfully registered');
          setTimeout(() => {
            history.push('/login');
          }, 3000);
        } else {
          console.log('res:', res);
          setSuccess(null);
          setError('something went wrong please refresh page');
          setTimeout(() => {
            history.push('/register');
          }, 1500);
        }
      })
      .catch((error) => {
        console.log('register error' + error);
      });
  };

  const removeWarnings = () => {
    if (error) {
      setError(null);
      return;
    } else if (success) {
      setSuccess(null);
      return;
    }
  };

  return (
    <RenderingStyles>
      <MainWrapper>
        <Wrapper>
          <IconWrapper>
            <div>
              <NewUser></NewUser>
            </div>
          </IconWrapper>
          <Form onSubmit={register}>
            <WrapperEmail>
              <div>
                <Email></Email>
              </div>
              <EmailInput
                onChange={removeWarnings}
                ref={emailRef}
                name='email'
                type='email'
                placeholder={email}
                required
              />
            </WrapperEmail>

            <WrapperUserName>
              <div>
                <User></User>
              </div>
              <NameInput
                onChange={removeWarnings}
                ref={nameRef}
                type='text'
                placeholder={name}
                required
              />
            </WrapperUserName>

            <WrapperPassword>
              <div>
                <Lock></Lock>
              </div>
              <PasswordInput
                ref={passwordRef}
                type='password'
                minLength={8}
                placeholder={password}
                required
              />
            </WrapperPassword>

            <RegisterButton type='submit'>
              {registerAccount}
            </RegisterButton>
            <WrapperDontHaveAccount>
              <p>
                {doYouWantTo} <b onClick={() => history.push('recover')}>{revoverAccount}</b>
                {back}
                <b onClick={() => history.push('login')}>{login}</b> {page}?
              </p>
            </WrapperDontHaveAccount>
            {error && <Warning>{error}</Warning>}
            {success && <Success>{success}</Success>}
          </Form>
        </Wrapper>
      </MainWrapper>
    </RenderingStyles>
  );
};

export default Register;
