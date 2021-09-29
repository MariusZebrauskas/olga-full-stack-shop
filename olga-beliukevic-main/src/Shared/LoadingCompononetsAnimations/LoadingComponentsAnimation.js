import styled from 'styled-components';
import HashLoader from 'react-spinners/RingLoader';


const Wrapper = styled.section`
  position: absolute;
  width: 98%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const LoadingComponentsAnimation = () => {
  return (
    <>
        <Wrapper>
          <HashLoader />
        </Wrapper>
    </>
  );
};

export default LoadingComponentsAnimation;
