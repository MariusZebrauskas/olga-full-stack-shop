import styled, { css } from 'styled-components';
import { FaGlobeAsia, FaAngleDoubleDown, FaHome, FaUserCheck } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';
// import { ImCross } from 'react-icons/im';

export const MenuRapper = styled.nav`

opacity: 0.98;
display: flex;
align-items: center;
justify-content: space-between;
background: ${(props) => props.theme.colors.black_grey};
position: fixed;
top: 0;
width: 100%;
z-index: 100;
@media (max-width: 768px) {
    height:calc(3.3rem + 2vh);

  }
`;
export const List = styled.ul`
  top: 100%;
  position: absolute;
  background: ${(props) => props.theme.colors.black_grey};
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  transform: translateX(1000px);
  transition: transform ease-in-out 0.2s;

  ${({ slideMenu }) => {
    if (slideMenu === true)
      return css`
        transform: translateX(0);
      `;
  }}
  @media (min-width: 768px) {
    position: relative;
    transform: translateX(0);
    opacity: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    height: calc(3rem + 0.7vw);
    width: auto;
    background: none;
    margin-right: calc(2.4rem + 0.8vw);
  }
  @media (min-width: 1440px) {
    justify-content: ${(props) => (props.loggedIn ? 'space-around' : 'flex-end')};
  }
`;
export const Li = styled.li`
  padding: 1.5em;
  opacity: 0.95;
  border-bottom: 1.2px solid ${(props) => props.theme.colors.grey};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.upperLine &&
    css`
      border-top: 1.2px solid ${(props) => props.theme.colors.grey};
    `}
  ${(props) =>
    props.information &&
    css`
      margin-right: calc(0.5rem + 0.2vw);
    `}

  &:hover a {
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.1);
  }

  &:hover i {
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.2);
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.2);
  }
  &:hover svg.color {
    color: ${(props) =>
      props.loggedIn ? props.theme.colors.loggedInDangger : props.theme.colors.yellow};
  }
  &:hover a.color {
    color: ${(props) =>
      props.loggedIn ? props.theme.colors.loggedInDangger : props.theme.colors.yellow};
  }

  @media (min-width: 768px) {
    border: none;
    padding: 1.5em calc(1.6em + 0.5vw) 1.5em 0em;
    ${(props) => {
      if (props.information) {
        return css`
          &:hover .tablet {
            display: flex;
            transform: scale(1);
            color: ${(props) => props.theme.colors.black};
          }
        `;
      }
    }}
    ${({ desktop }) => {
      if (desktop === 'desktop')
        return css`
          display: none;
          border: none;
        `;
    }}
  }
`;

export const A = styled.a`
  color: ${(props) => (props.color ? props.theme.colors.loggedInCollor : props.theme.colors.grey)};
  font-size: calc(0.8rem + 0.5vw); //1rem;
  transition: transform ease-in-out 150ms;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  @media (min-width: 768px) {
    &.tablet {
      border-radius: 1rem;
      position: absolute;
      top: 110%;
      right: 3%;
      padding: 1rem 2rem;
      color: ${(props) => props.theme.colors.black};
      background: ${(props) => props.theme.colors.grey};
      display: none;
    }
  }
`;

export const Shop = styled(Li)`
  border: none;
  position: relative;
  z-index: 4;
  @media (min-width: 768px) {
    position: absolute;
    right: 0.3rem;
  }
`;
export const ShopItems = styled(A)`
  color: ${(props) => props.theme.colors.grey};
  font-size: calc(0.8rem + 0.5vw); //1rem;
  position: absolute;
  top: 0.5rem;
  left: 4rem;
  @media (min-width: 768px) {
    left: 2rem;
  }
  @media (min-width: 1440px) {
    left: 2.5rem;
    top: 0.3rem;
  }
  @media (min-width: 2560px) {
    left: 2.8rem;
    top: 0.3rem;
  }
`;
export const ShopA = styled(A)`
  display: none;
`;

export const User = styled(FaUserCheck)`
  color: ${(props) => (props.color ? props.theme.colors.loggedInCollor : props.theme.colors.grey)};
  margin: 0rem 0.5em 0 0;

  /* font-size: 0.9rem; */
`;
export const Home = styled(FaHome)`
  color: ${(props) => props.theme.colors.grey};
  margin: 0rem ${({ language }) => (language === 'lt' ? '0.75em' : '0.25em')} 0 0;

`;
export const ShoppingCart = styled(FiShoppingCart)`
  color: ${(props) => props.theme.colors.grey};
  margin: 0rem 0.5em 0 0.5rem;
  font-size: calc(1.3rem + 0.5vw); //0.9rem;
  @media (min-width: 768px) {
    font-size: calc(0.9rem + 0.5vw); //0.9rem;
  }
`;
export const Globe = styled(FaGlobeAsia)`
  color: ${(props) => props.theme.colors.grey};
  margin: 0rem 0.5em 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const ArrowDoubleDown = styled(FaAngleDoubleDown)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    /* margin-right: 0.8em; */
  }
`;

export const CheckCircle = styled(FiCheckCircle)`
  position: absolute;
  right: 1rem;
  color: ${(props) => props.theme.colors.grey};
`;
export const SubmenuLi = styled(Li)`
  a {
    transition: color ease-in-out 0.2s, transform ease-in-out 0.2s;
    margin-left: 0.2rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color ease-in-out 0.2s;
    @media (min-width: 768px) {
      &.tabletSubmenu {
        border-radius: 1rem;
      }
    }
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0.7em 3.3em 1em 1em;
  }
`;

export const SubWrapper = styled.div`
  transition: all ease-in-out 0.2s;
  opacity: ${(props) => (props.openSubMenu ? 1 : 0)};
  pointer-events: ${(props) => (props.openSubMenu === false ? 'none' : 'pointer')};
  @media (min-width: 768px) {
    background: ${(props) => props.theme.colors.black_grey};
    position: absolute;
    top: 100%;
    right: 0%;
    &.radius {
      border-end-end-radius: 0.7rem;
      border-end-start-radius: 0.7rem;
    }
  }
`;
