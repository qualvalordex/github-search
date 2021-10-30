import React from "react";
import {
  MdArrowBack,
  MdLocationOn,
  MdHomeWork,
  MdGroups,
  MdOutlineGroups,
  MdStar,
} from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";

import {
  Container,
  Holder,
  Header,
  Logo,
  User,
  ProfileImage,
  ProfileDetails,
  Identification,
  More,
  LocAndWork,
  Social,
  Repositories,
  RepositoryCounter,
  RepositoryWrapper,
  UserRepos,
  HSpace
} from "../Profile/styles";
import smallLogo from "../../assets/smallLogo.png";
import profileExample from "../../assets/profileExample.png";
import GithubRepoCard from "../../components/GithubRepoCard/GithubRepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Holder>
        <Header>
          <Logo src={smallLogo} />
          <MdArrowBack style={{ marginRight: "30px" }} size="40px" />
        </Header>
        <User>
          <ProfileImage>
            <img src={profileExample} alt="Profile pic." />
          </ProfileImage>
          <ProfileDetails>
            <Identification>
              <h1>Rafaela Drumont</h1>
              <span>@rafa_drumont</span>
            </Identification>
            <More>
              <LocAndWork>
                <MdLocationOn color="#8752cc" />
                &nbsp;São Paulo
                <HSpace />
                <MdHomeWork color="#8752cc" />
                &nbsp;Goggle
              </LocAndWork>
              <Social>
                <MdGroups color="#8752cc" />
                &nbsp;125
                <HSpace />
                <MdOutlineGroups color="#8752cc" />
                &nbsp;85
                <HSpace />
                <MdStar color="#8752cc" />
                &nbsp;48
              </Social>
            </More>
          </ProfileDetails>
          <Repositories>
            <RepositoryWrapper>
              <span>Total de repositórios</span>
              <RepositoryCounter>
                <RiGitRepositoryFill color="#8752cc" />
                &nbsp;85
              </RepositoryCounter>
            </RepositoryWrapper>
          </Repositories>
        </User>
        <UserRepos>
          <GithubRepoCard name="Repo1" description="qualquer merda aqui" stars="10" forks="20" tech="JavaScript" />
          <GithubRepoCard name="Repo2" description="typescript eh bom" stars="16" forks="170" tech="TypeScript" />
          <GithubRepoCard name="Repo3" description="golangueirossss" stars="80k" forks="93" tech="Go" />
        </UserRepos>
      </Holder>
    </Container>
  );
};

export default Profile;
