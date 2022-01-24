import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const H4 = styled.h3`
  margin: 0;
  padding: ${props => props.language === "ru" ? "0.4rem 0.3rem" : "0.2rem 0.5rem"};
  font-size: ${props => props.language === "ru" || props.language === "lt"  ? "0.75rem" : "0.9rem"};
  letter-spacing: ${props => props.language === "ru" ? "0.1rem" : "0.135rem"};
`;

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  outline: none;
  background: ${(props) => props.theme.colors.yellow};
  position: absolute;
  bottom: 0.7rem;
  &:hover {
    background-color: #08282f;
    box-shadow: 0px 5px 10px #08282f;
    color: #fff;
  }
`;

const ButtonBuy = ({ language, children, albumOne, id, addToShopCartSingleSong }) => {
  const [itemSold, setItemSold] = useState('ITEM IS IN THE BAG');
  useEffect(() => {
    if (language === 'lt') {
      setItemSold('PIRKINYS JAU KREPŠELYJE');
    }
    if (language === 'eng') {
      setItemSold('ITEM IS IN THE BAG');
    }
    if (language === 'ru') {
      setItemSold('ТОВАР В КОРЗИНЕ');
    }
  }, [language]);

  return (
    <Button onClick={() => addToShopCartSingleSong(albumOne)}>
      {!albumOne.buy ? <H4 language={language} >{children}</H4> : <H4 language={language}>{itemSold}</H4>}
    </Button>
  );
};

export default ButtonBuy;
