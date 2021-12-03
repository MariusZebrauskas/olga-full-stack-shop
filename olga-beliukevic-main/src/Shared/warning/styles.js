import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ background }) => (background ? background : '#f8d7da')};
  color: ${({ color }) => (color ? color : '#880932')};
  padding: 1rem;
  margin: ${({ margin }) => (margin ? margin : null)};
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
