import styled from 'styled-components';

type ContainerProps = {
  visible: boolean
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 15px;
  right: 15px;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;

  width: 80%;
  max-width: 300px;
  height: 50px;
  padding: 15px;

  color: #B2B2B2;
  
  border: 0;
  border-left: 4px solid #8752CC;
  background-color: #201F1F;
  border-radius: 8px;
`;
