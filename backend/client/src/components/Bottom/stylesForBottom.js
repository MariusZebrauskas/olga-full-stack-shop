import styled from 'styled-components';

export const Wrapper = styled.section`
  background: black;
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.2rem;
  padding: 1rem;
  /* margin:5rem 0 0 0; */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 2rem;
  }
`;
export const Right = styled.section`
  place-self: center;
  p {
    padding: 0.1rem 0;
    text-align: center;
    /* FIXME:bad location */
    @media (min-width: 768px) {
      text-align: right;
    }
  }
  @media (min-width: 768px) {
    justify-self: right;
  }

  &:hover strong::after {
    transform: scale(1);
  }
  strong {
    padding: 0 0 0.3rem 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      background-color: #a7a7a7;
      width: 100%;
      height: 0.3rem;
      transform: scale(0);
      border-radius: 1rem;
      transition: all ease-out 0.25s;
    }
  }
`;

export const Copyright = styled.section`
  place-self: center;
  @media (min-width: 768px) {
    justify-self: left;
    /* text-align: right; */
  }
`;
export const P = styled.p`
  font-size: ${(props) => props.theme.colors.fontForm};
`;
export const LogoWrapper = styled.section`
  place-self: center;
  @media (min-width: 768px) {
    justify-self: left;
    /* text-align: right; */
  }
`;
