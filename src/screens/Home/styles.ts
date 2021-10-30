import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #232324;
`;

export const Logo = styled.img`
  margin-bottom: 60px;
`;

export const TextInput = styled.input`
  width: 300px;
  height: 45px;
  margin-bottom: 60px;

  text-align: center;
  font-size: 18px;
  color: #535353;

  background-color: #232324;

  outline: none;
  border: 0;
  border-bottom: 4px solid #8752cc;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 45px;

  font-size: 18px;
  color: #fff;

  background-color: #8752cc;

  border: 0;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const HSpace = styled.div`
  width: 5px;
`;
