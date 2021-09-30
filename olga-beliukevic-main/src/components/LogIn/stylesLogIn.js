import styled from 'styled-components';
import { FaUser, FaRegUser } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsQuestion } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const MainWrapper = styled.section`
  /* background-color: #222132; */
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(#324246, #0d4344);
`;

// styled Login

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: calc(15rem + 5vw);
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(218, 222, 223);
    padding: calc(0.4em + 1.5vw);
    border-radius: 50rem;
    margin: 0 0 2rem 0;
    @media (min-width: 1024px) {
      padding: calc(0.4em + 0.7vw);
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapperUserName = styled.div`
  background-color: green;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(218, 222, 223);
  border-radius: 0.5rem;
  margin: 0 0 1.5rem 0;
  position: relative;

  div {
    position: relative;

    &::before {
      position: absolute;
      content: ' ';
      border-right: 0.2rem solid #2d4246;
      width: calc(2rem + 1vw);
      height: 2.5rem;
      top: calc(0.4rem + 0.5vw);
      left: 1rem;
      right: 0;
      bottom: 0;
    }
  }
`;

export const WrapperIcon = styled.div`
  background-color: green;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const NameInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background:${props => props.theme.colors.inputColor};
  border: none;
  text-align: center;
  margin: 0 1rem 0 0;
  font-size: ${(props) => props.theme.colors.fontForm};
  color: #2d4246;
`;
export const EmailInput = styled(NameInput)``;

export const UserIcon = styled(FaUser)`
  position: relative;
  font-size: calc(3em + 2vw);
  color: #2d4246;
  background:${props => props.theme.colors.inputColor};

  @media (min-width: 1440px) {
    font-size: calc(3em + 0.2vw);
  }
`;
export const QuestionIcon = styled(BsQuestion)`
  position: relative;
  font-size: calc(3em + 2vw);
  color: #2d4246;
  @media (min-width: 1024px) {
    font-size: 3em;
  }
`;
export const NewUser = styled(AiOutlineUserAdd)`
  position: relative;
  font-size: calc(3rem + 1vw);
  color: #2d4246;
  @media (min-width: 1440px) {
    font-size: calc(3rem + 0.4vw);
  }
`;
export const User = styled(FaRegUser)`
  margin: 1rem 2rem 1rem 1rem;
  font-size: calc(1rem + 1vw);
  color: #2d4246;
`;

// password

export const WrapperPassword = styled.div`
  background-color: green;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(218, 222, 223);
  border-radius: 0.5rem;
  margin: 0 0 1rem 0;
  position: relative;

  div {
    position: relative;

    &::before {
      position: absolute;
      content: ' ';
      border-right: 0.2rem solid #2d4246;
      width: calc(2rem + 1vw);
      height: 2.5rem;
      top: calc(0.4rem + 0.5vw);
      left: 1rem;
      right: 0;
      bottom: 0;
    }
  }
`;

export const Lock = styled(BiLock)`
  margin: 1rem 2rem 1rem 1rem;
  font-size: calc(1rem + 1vw);
  color: #2d4246;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background:${props => props.theme.colors.inputColor};
  border: none;
  text-align: center;
  margin: 0 1rem 0 0;
  font-size: ${(props) => props.theme.colors.fontForm};
  color: #2d4246;
`;

// remember me section or forgot password section

export const WrapperRemeberMain = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 2rem 0;
  /* background-color: red; */
  p {
    font-size: calc(0.6rem + 0.1vw);
    letter-spacing: 0.05rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    cursor: pointer;
  }
`;

export const ForgotPassword = styled.p`
  text-decoration-line: underline;
  cursor: pointer;
  font-size: calc(0.7rem + 0.1vw);
  font-weight: bold;
  color: red;
  transition: ease-in-out 0.2s color;
  :hover {
    color: yellow;
  }
`;

// Sing In

export const SingIn = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgb(218, 222, 223);
  border-radius: 0.5rem;
  /* text-align: center; */
  margin: 0 0 1rem 0;
  font-size: ${(props) => props.theme.colors.fontForm};
  color: #2d4246;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #b1babb;
    color: #035b65;
  }
`;

export const Recover = styled(SingIn)``;
export const RegisterButton = styled(SingIn)`
  margin: 2rem 0 0 0;
`;

// dont have anaccount

export const WrapperDontHaveAccount = styled.section`

  p {
    font-size: calc(0.7rem + 0.1vw);
  }
  b {
    font-size: calc(0.8rem +0.1vw);
    cursor: pointer;
    color: red;
    transition: ease-in-out 0.2s color;

    :hover {
      color: yellow;
      text-decoration-line: underline;
    }
  }
`;

// email

export const WrapperEmail = styled(WrapperUserName)``;

export const Email = styled(HiOutlineMail)`
  margin: 1rem 2rem 1rem 1rem;
  font-size: calc(1rem + 1vw);
  color: #2d4246;
`;
