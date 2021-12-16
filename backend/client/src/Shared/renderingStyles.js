import styled, { keyframes } from 'styled-components';



export const onRender = keyframes`
from{
  opacity:0;
  transform:  scaleY(1.02); 
  transform-origin: top;

}
to{
  opacity:1;
  transform:  scaleY(1);
  transform-origin: top;
}
`;

export const RenderingStyles = styled.section`
  width: '100%';
  animation: ${onRender} 0.3s ease-in;
`;
