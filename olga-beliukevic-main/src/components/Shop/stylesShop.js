import styled from 'styled-components';

import { IoTrashBin } from 'react-icons/io5';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 87vh;
`;

export const ButtonX = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-size: calc(0.5rem + 0.8vw);
  position: fixed;
  z-index: 2;
  right: 1rem;
  top: calc(5rem + 5.5vw);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.grey2};
  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;
  &:hover {
    background-color: ${(props) => props.theme.colors.filtras};
    color: ${(props) => props.theme.colors.yellow};
  }
  
  @media (min-width: 1024px) {
    top: calc(6rem + 3.5vw);
    right: calc(1rem + 2.8vw);
  }
  @media (min-width: 2560px) {
    right: calc(1rem + 2.2vw);
    top: calc(6rem + 2.5vw);

  }
`;
export const GapToMakeSomeSpace = styled.div`
  padding: 4rem;
`;
export const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ShopMainWrapper = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    /* background-color: red; */
    max-width: 1600px;
    margin: calc(2rem + 1vw);
  }
`;
export const LeftWrapper = styled.section`
  @media (min-width: 768px) {
    width: 60%;
  }
`;
export const InfoPanel = styled.div`
  /* background:red; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #80808061;
  width: 100%;
  margin: 0 0 2rem 0;
`;
export const H5 = styled.h5`
  margin-bottom: 0.7rem;
  margin-left: ${({ songs }) => (songs ? 'calc(-0.5rem - 4vw)' : '')};
  font-size: calc(0.5rem + 0.8vw);
`;
export const Item = styled.div`
  padding-left: 1rem;
  width: 40%;
  /* background-color:red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Song = styled.div`
  /* background:green; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.div`
  /* background:blue; */
  padding-right: 1rem;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.7rem 0 0;
`;
//items in bag-------------------------------------------------------------
export const ShopItem = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem;
  h4 {
    font-size: calc(0.8rem + 1vw);
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 0.3rem;
`;

export const LeftBag = styled.div`
  width: 33.33%;
  h4 {
    display: none;
  }
`;

export const MidleBag = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 0 1rem;
  /* background:red; */
  h4:nth-child(2) {
    margin: 0 0 0 1rem;
  }
  h4 {
    @media (min-width: 1440px) {
      /* background-color: red; */
      font-size: calc(.7rem + 0.8vw);
    }
    @media (min-width: 2560px) {
      /* background-color: red; */
      font-size: calc(1rem + 0.8vw);
    }
  }
`;

export const RightBag = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  h4 {
    margin: 0 2rem 0 0;
  }
`;

export const Button = styled(IoTrashBin)`
  font-size: calc(0.8rem + 1vw);
  position: absolute;
  bottom: 0.2rem;
  right: 0.5rem;
  cursor: pointer;
  transition: color ease-in-out 0.1s, transform ease-in-out 0.1s;
  &:hover {
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.5);
  }
  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }
`;
// RIght or bottom---------------------------------------------------------------------
export const RightWrapper = styled.aside`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 768px) {
    margin: 5rem 0 0 0;
    width: 40%;
    position: fixed;
    right: 0rem;
  }
  @media (min-width: 1024px) {
    width: 30%;
    max-width: 580px;
    margin: calc(2rem + 1vw);
  }
`;
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-around;
  h2 {
    font-size: calc(1rem + 1vw);
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 5rem 0;
`;
export const ButtonSecureChekOut = styled.button`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  z-index: 2;
  top: calc(3rem + 4.5vw);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 95%;
  font-size: calc(0.6rem + 1vw);
  background-color: ${(props) => props.theme.colors.grey2};
  transition: background ease-in-out 0.15s, color ease-in-out 0.15s, transform ease-in-out 0.15s;
  &:hover {
    background-color: ${(props) => props.theme.colors.filtras};
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.01);
  }
`;
