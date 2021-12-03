import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Wrapper,
  IconWrapper,
  QuestionIcon,
  WrapperEmail,
  Form,
  Email,
  EmailInput,
  Recover,
  WrapperDontHaveAccount,
  MainWrapper,
  WrapperUserName,
  User,
  NameInput,
  WrapperPassword,
  Lock,
  PasswordInput,
} from './stylesLogIn.js';
import { RenderingStyles } from '../../Shared/renderingStyles';
import Warning from '../../Shared/warning/Warning.js';
import Success from '../../Shared/success/Success.js';

const ForgotPassword = ({ changeComponent, language, history }) => {
  const [email, setEmail] = useState('Email Adress');
  const [recoverAccount, setRecoverAccount] = useState('Recover Account');
  const [dontHaveAnAccount, setDontHaveAnAccount] = useState('Don`t Have An Account');
  const [register, setRegister] = useState('Register');
  const [oneNow, setOneNow] = useState('One Now');
  const [orBackTo, setOrBackTo] = useState('Or Back To');
  const [login, setLogin] = useState('Login');
  const [page, setPage] = useState('Page');
  const [name, setName] = useState('Name');
  const [password, setPassword] = useState('Password');
  const [password2, setPassword2] = useState('Repeat password');
  const [userId, setUserId] = useState(null);
  const [changePassword, setChangePassword] = useState('Change Password');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (language === 'lt') {
      setChangePassword('Pakeisti Slaptažodį');
      setPassword('Naujas Slaptažodis');
      setPassword2('Pakartokite Slaptažodį');
      setName('Slapyvardis');
      setEmail('Elektroninis Paštas');
      setRecoverAccount('Susigražinti Paskyrą');
      setDontHaveAnAccount('Neturite Paskyros');
      setRegister('Registruokis');
      setOneNow('Ir Susikurk Paskyrą');
      setOrBackTo('Grįžti Į');
      setLogin('Prisijungimų');
      setPage('Puslapį');
      setSuccess('Slaptažodis Sėkmingai Pakeistas');
    }
    if (language === 'eng') {
      setChangePassword('Change Password');
      setSuccess('Password Has Been Succesfuly Updated');

      setPassword('New Password');
      setPassword2('Repeat password');
      setName('Name');
      setEmail('Email Adress');
      setRecoverAccount('Recover Account');
      setDontHaveAnAccount('Don`t Have An Account');
      setRegister('Register');
      setOneNow('One Now');
      setOrBackTo('Or Back To');
      setLogin('Login');
      setPage('Page');
    }
    if (language === 'ru') {
      setChangePassword('Измени пароль');
      setPassword('новый пароль');
      setPassword2('Повторите пароль');
      setName('Имя');
      setEmail('Адрес электронной почты');
      setRecoverAccount('Восстановить аккаунт');
      setDontHaveAnAccount('Нет учетной записи');
      setRegister('регистр');
      setOneNow('Один сейчас');
      setOrBackTo('Или назад к');
      setLogin('Авторизоваться');
      setPage('Страница');
      setSuccess('Пароль успешно обновлен');
    }
  }, [language]);

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  const sendEmailRecover = (e) => {
    e.preventDefault();
    axios
      .post('/recover', { email: emailRef.current.value, username: usernameRef.current.value })
      .then((response) => {
        setUserId(response.data.userId);
      })
      .catch((err) => {
        if (err) {
          setError('Ivalid Email Or Username');
          setTimeout(() => {
            history.push('/login');
          }, 3000);
        }
      });
  };

  const deleteError = () => {
    setError(null);
  };

  const changePasswordDB = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== password2Ref.current.value) {
      setError('passwords dont match');
      return;
    }
    axios
      .post('/recover/password', { _id: userId, password: passwordRef.current.value })
      .then((response) => {
        if (response.data.message) {
          setChanged(true);
          setTimeout(() => {
            history.push('/login');
          }, 3000);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <RenderingStyles>
      <MainWrapper>
        <Wrapper>
          <IconWrapper>
            <div>
              <QuestionIcon></QuestionIcon>
            </div>
          </IconWrapper>
          <Form onSubmit={userId ? changePasswordDB : sendEmailRecover} action='submit'>
            {/* ask details to update pasword */}
            {!userId && !error && (
              <>
                <WrapperEmail>
                  <div>
                    <Email></Email>
                  </div>
                  <EmailInput
                    ref={emailRef}
                    name='email'
                    type='email'
                    placeholder={email}
                    required
                    onChange={deleteError}
                  />
                </WrapperEmail>
                <WrapperUserName>
                  <div>
                    <User></User>
                  </div>
                  <NameInput
                    type='text'
                    name='username'
                    placeholder={name}
                    ref={usernameRef}
                    required
                    onChange={deleteError}
                  />
                </WrapperUserName>
              </>
            )}

            {/* new  pasword */}
            {userId && !changed && (
              <>
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
                    onChange={deleteError}
                  />
                </WrapperPassword>

                <WrapperPassword>
                  <div>
                    <Lock></Lock>
                  </div>
                  <PasswordInput
                    ref={password2Ref}
                    type='password'
                    minLength={8}
                    placeholder={password2}
                    required
                    onChange={deleteError}
                  />
                </WrapperPassword>
              </>
            )}
            {!changed && !error && <Recover>{userId ? changePassword : recoverAccount}</Recover>}
            {error && <Warning>{error}</Warning>}
            {changed && <Success>{success}</Success>}

            {!error && (
              <WrapperDontHaveAccount>
                <p>
                  {dontHaveAnAccount}? <b onClick={() => history.push('register')}>{register}</b>{' '}
                  {oneNow}! {orBackTo} <b onClick={() => history.push('login')}>{login}</b> {page}.
                </p>
              </WrapperDontHaveAccount>
            )}
          </Form>
        </Wrapper>
      </MainWrapper>
    </RenderingStyles>
  );
};

export default ForgotPassword;
