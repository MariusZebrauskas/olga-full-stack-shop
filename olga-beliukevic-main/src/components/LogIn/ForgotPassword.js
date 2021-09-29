import React, { useState, useEffect } from 'react';
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
} from './stylesLogIn.js';
import { RenderingStyles } from '../../Shared/renderingStyles';

const ForgotPassword = ({ changeComponent, language, history }) => {
  const [email, setEmail] = useState('Email Adress');
  const [recoverAccount, setRecoverAccount] = useState('Recover Account');
  const [dontHaveAnAccount, setDontHaveAnAccount] = useState('Don`t Have An Account');
  const [register, setRegister] = useState('Register');
  const [oneNow, setOneNow] = useState('One Now');
  const [orBackTo, setOrBackTo] = useState('Or Back To');
  const [login, setLogin] = useState('Login');
  const [page, setPage] = useState('Page');
  useEffect(() => {
    if (language === 'lt') {
      setEmail('Elektroninis Paštas');
      setRecoverAccount('Susigražinti Paskyrą');
      setDontHaveAnAccount('Neturite Paskyros');
      setRegister('Registruokis');
      setOneNow('Ir Susikurk Paskyrą');
      setOrBackTo('Grįžti Į');
      setLogin('Prisijungimų');
      setPage('Puslapį');
    }
    if (language === 'eng') {
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
      setEmail('Адрес электронной почты');
      setRecoverAccount('Восстановить аккаунт');
      setDontHaveAnAccount('Нет учетной записи');
      setRegister('регистр');
      setOneNow('Один сейчас');
      setOrBackTo('Или назад к');
      setLogin('Авторизоваться');
      setPage('Страница');
    }
  }, [language]);

  return (
    <RenderingStyles>
      <MainWrapper>
        <Wrapper>
          <IconWrapper>
            <div>
              <QuestionIcon></QuestionIcon>
            </div>
          </IconWrapper>
          <Form action='submit'>
            <WrapperEmail>
              <div>
                <Email></Email>
              </div>
              <EmailInput name='email' type='email' placeholder={email} required />
            </WrapperEmail>
            <Recover>{recoverAccount}</Recover>
            <WrapperDontHaveAccount>
              <p>
                {dontHaveAnAccount}? <b onClick={() => history.push('register')}>{register}</b>{' '}
                {oneNow}! {orBackTo} <b onClick={() => history.push('login')}>{login}</b> {page}.
              </p>
            </WrapperDontHaveAccount>
          </Form>
        </Wrapper>
      </MainWrapper>
    </RenderingStyles>
  );
};

export default ForgotPassword;
