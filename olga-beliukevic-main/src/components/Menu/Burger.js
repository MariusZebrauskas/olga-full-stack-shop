import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const BurgerRapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin:2em;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Line = styled.div`
  height: 0.4rem;
  width: 2rem;
  background: ${(props) => props.theme.colors.grey};
  border-radius: 0.3rem;
  position: relative;
  transition: all 500ms ease-in-out;
  ${({ openMenu }) =>
    openMenu &&
    css`
      transform: translateX(-3rem);
      background: transparent;
      cursor: default;
    `}

  &:before {
    content: ' ';
    height: 0.4rem;
    width: 2rem;
    background: ${(props) => props.theme.colors.grey};

    border-radius: 0.3rem;
    position: absolute;
    top: -0.5rem;
    transition: all 500ms ease-in-out;
    ${({ openMenu }) =>
      openMenu &&
      css`
        transform: rotate(45deg) translate(2.4rem, -1.7rem);
      `}
  }
  &:after {
    content: ' ';
    height: 0.4rem;
    width: 2rem;
    background: ${(props) => props.theme.colors.grey};

    border-radius: 0.3rem;
    position: absolute;
    top: 0.5rem;
    transition: all 500ms ease-in-out;
    ${({ openMenu }) =>
      openMenu &&
      css`
        transform: rotate(-45deg) translate(2.4rem, 1.7rem);
      `}
  }
`;

const Burger = ({ slideLeft,setOpenMenu, openMenu }) => {
  const openMenuButton = () => {
    setOpenMenu(!openMenu); //to move burger planks
    slideLeft(); //setstate true false to slide menu
  };
  //remove  X if resize
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', trackWidth);
    if (width >= 768) {
      setOpenMenu(false);
    }
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [width]);

  return (
    <BurgerRapper onClick={openMenuButton}>
      <Line openMenu={openMenu}></Line>
    </BurgerRapper>
  );
};

export default Burger;
