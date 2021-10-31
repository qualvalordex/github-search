import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 280px;
  height: 135px;
  margin: 5px;
  padding: 15px;

  border-radius: 8px;

  background-color: #201F1F;
`;

export const RepositoryName = styled.h1`
   margin-bottom: 5px; 
    
    font-size: 18px;
    color: #B3B3B3;
`;

export const RepositoryDescription = styled.span`
    margin-bottom: 15px;

    font-size: 14px;
    color: #B3B3B3;
`;

export const RepositoryStats = styled.div`
    display: flex;
    flex-direction: row;
`;