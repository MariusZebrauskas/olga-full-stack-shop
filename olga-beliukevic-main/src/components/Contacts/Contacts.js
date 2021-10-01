import React, { useRef, useEffect, useState, useContext } from 'react';
import { CurrenPerson } from '../../context/AuthContex';
import styled from 'styled-components';
import backgroundImg from './3.jpg';
import { RenderingStyles } from '../../Shared/renderingStyles';

const Body = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled.form`
  background-color: #8276766e;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: box-shadow 0.21s ease-in-out;
  @media (min-width: 540px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 2560px) {
    width: 20%;
  }
  &:hover& {
    box-shadow: 12px 11px 18px 1px #26192fad;
  }
  &::after {
    content: ' ';
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem black, inset -2px -3px 1rem 0rem #411156;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    filter: blur(0.4rem);
    position: absolute;
    z-index: -11;
  }
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0px -0.0625rem 0.25rem 0.0625rem #7a4c82, -0.1875rem -0.125rem 1rem 0px #1a1438ad;
    z-index: -10;
  }
`;

const ContactUsHeader = styled.h1`
  font-size: calc(1.5rem + 0.1vw);
  font-weight: 600;
  /* color: #dcdbd9; */
  color: ${(props) => props.theme.colors.grey};
`;
const NameAndEmail = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
`;
const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 0.75rem 0;
  label {
    padding: 0.5rem 0;
    font-weight: 600;
    font-size: ${(props) => props.theme.colors.fontForm};
  }
`;
const Input = styled.input`
  padding: 1rem;
  font-size: ${(props) => props.theme.colors.fontForm};
  pointer-events: none;
`;
const Email = styled.div`
  width: 100%;

  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem 0 1.8rem 0;
  label {
    padding: 0.5rem 0;
    font-weight: 600;
    font-size: ${(props) => props.theme.colors.fontForm};
  }
`;

const MessageWrapper = styled.div`
  width: 80%;
  padding: 0 0 2rem 0;
`;
const TextArea = styled.textarea`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.colors.fontForm};
  padding: 1rem;
`;
const Button = styled.button`
  width: 80%;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.colors.fontForm};

  margin: 0 0 0.7rem 0;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
  &:hover {
    background-color: #d0cece;
    color: #009688;
  }
`;

// Logic ************************************************************************************************
//focus on render and enter button logic
const Contacts = ({ language }) => {
  const nameFocus = useRef(null);
  const emailFocus = useRef(null);
  const messageFocus = useRef(null);
  const textAreaFocus = useRef(null);
  useEffect(() => {
    messageFocus.current.focus();
  }, []);

  //languages
  const [header, setHeader] = useState('Contact Us');
  const [replyMessage, setReplyMessage] = useState('Jūsų laiškas sėkmingai išsiustas');
  const [namePlaceHolder, setNamePlaceHolder] = useState('Full Name');
  const [nameLabel, setNameLabel] = useState('Name');
  const [emailPlaceHolder, setEmailPlaceHolder] = useState('Enter Your Email Address');
  const [emailLabel, setEmailLabel] = useState('Email');
  const [textAreaPlaceHolder, setTextAreaPlaceHolder] = useState('Please enter your message');
  const [buttonText, setButtonText] = useState('Send Email');

  useEffect(() => {
    if (language === 'lt') {
      setHeader('E-Mail Žinutė');
      setReplyMessage('Jūsų laiškas sėkmingai išsiustas, su jumis bus susisiekta netrukus.');
      setNameLabel('Slapyvardis');
      setNamePlaceHolder('Jūsų Vardas Ir Pavardė');
      setEmailLabel('Elektroninis Paštas');
      setEmailPlaceHolder('Jūsų Elektroninis Paštas');
      setTextAreaPlaceHolder('Rašykite Teksto Žinute Čia...');
      setButtonText('Išsiūsti Elektroninį Laišką');
    }
    if (language === 'eng') {
      setHeader('Contact Us');
      setReplyMessage('You have sent the email successfully, we will contact you shortly.');
      setNameLabel('Username');
      setNamePlaceHolder('Your Name And Surname');
      setEmailLabel('Email');
      setEmailPlaceHolder('Your Email');
      setTextAreaPlaceHolder('Write Your Text Message Here...');
      setButtonText('Send Email');
    }
    if (language === 'ru') {
      setHeader('Свяжитесь с нами');
      setReplyMessage('Вы успешно отправили письмо, мы свяжемся с вами в ближайшее время.');
      setNameLabel('Имя пользователя');
      setNamePlaceHolder('Ваше имя и фамилия');
      setEmailLabel('Электронное письмо');
      setEmailPlaceHolder('Ваш адрес электронной почты');
      setTextAreaPlaceHolder('Напишите здесь свое текстовое сообщение ...');
      setButtonText('Отправить электронное письмо');
    }
  }, [language]);
  const [loggedIn] = useContext(CurrenPerson);
  const sendMessage = () => {
    if (messageFocus) {
      setTimeout(() => {
        messageFocus.current.value = '';
      }, 300);
    }
  };
  return (
    <RenderingStyles>
      <Body>
        <ContactUsHeader>{header}</ContactUsHeader>
        <Form target='_blank' action='https://formsubmit.co/zebrauskas.mar@gmail.com' method='POST'>
          <input type='hidden' name='_autoresponse' value={replyMessage} />
          <NameAndEmail>
            <Name>
              <label htmlFor='name'>{nameLabel}:</label>
              <Input
                type='text'
                name='name'
                placeholder={namePlaceHolder}
                required
                value={loggedIn ? loggedIn.data.username.charAt(0).toUpperCase() + loggedIn.data.username.slice(1) : ''}
              />
            </Name>
            <Email>
              <label htmlFor='name'>{emailLabel}:</label>
              <Input
                type='email'
                name='email'
                placeholder={emailPlaceHolder}
                required
                value={loggedIn ? loggedIn.data.email : ''}
              />
            </Email>
          </NameAndEmail>

          <MessageWrapper>
            <TextArea
              placeholder={textAreaPlaceHolder}
              name='message'
              rows='10'
              required
              ref={messageFocus}
            ></TextArea>
          </MessageWrapper>

          <Button onClick={sendMessage} type='submit'>
            {buttonText}
          </Button>
        </Form>
      </Body>
    </RenderingStyles>
  );
};

export default Contacts;
