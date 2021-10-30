import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: #b2b2b2;
  background-color: #232324;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1920px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  padding: 0 30px;

  /* background-color: #f00; */
`;

export const Logo = styled.img``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-grow: 1; */
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  /* background-color: #0ff; */
`;

export const ProfileImage = styled.div`
  img {
    width: 150px;
    margin: 25px;

    border-radius: 50%;
  }

  /* background-color: #00f; */
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  padding: 15px;

  /* background-color: #f00; */
`;

export const Identification = styled.div`
  margin-bottom: 25px;

  h1 {
    font-size: 24px;
    color: #8752cc;
  }

  span {
    font-size: 16px;
    color: #b2b2b2;
  }
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: #f00; */
`;

export const LocAndWork = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 10px;
`;

export const Social = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Repositories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 15px;

    /* background-color: #0f0; */
`;

export const RepositoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 170px;
    height: 80px;
    padding: 10px;
    
    background-color: #201F1F;

    border-radius: 8px;
`;

export const RepositoryCounter = styled.div`
    margin-top: 10px;
`;

export const HSpace = styled.div`
    width: 10px;
`;