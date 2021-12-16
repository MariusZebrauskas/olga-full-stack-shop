import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Body = styled.section`
  margin: 2rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Table = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background: #f4f9ed;
  width: 85%;
  max-width: 57rem;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  margin: 0 1rem;
  width: 100%;
  color: black;
  border-bottom: ${(props) => (props.last ? null : '1px solid black')};
  border-radius: ${(props) => (props.first ? '0.53rem 0.53rem 0px 0px' : null)};
  background: #93808e3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #b3b3b3;
  }
  h4 {
    margin: 0.5rem;
  }
`;
export const H1 = styled.h1`
  font-size: calc(1.3rem + 0.1vw);
  width: 90%;
`;
export const FlexContainer = styled.div`
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  line-height: 1.6;
`;
export const H2 = styled.h2`
  margin: 2.5rem 0 0rem 0;

  width: 90%;
  font-size: calc(1rem + 0.1vw);
`;
