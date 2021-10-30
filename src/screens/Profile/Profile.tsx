import React, { useEffect, useState } from "react";
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
  HSpace,
} from "../Profile/styles";
import smallLogo from "../../assets/smallLogo.png";
import GithubRepoCard from "../../components/GithubRepoCard/GithubRepoCard";
import { useLocation } from "react-router";

interface UsernameState {
  username: string;
}

interface UserData {
  name: string;
  login: string;
  location: string;
  company: string;
  following: string;
  followers: string;
  stars?: string;
  public_repos: string;
  avatar_url: string;
}

interface UserReposList {
  name: string;
  description: string;
  forks_count: string;
  language: string;
  stargazers_count: string;
}

const Profile: React.FC = () => {
  const { state } = useLocation<UsernameState>();
  const { username } = state;

  const [userData, setUserData] = useState<UserData>();
  const [userRepos, setUserRepos] = useState<[UserReposList]>();

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    setUserData(userData);
  };

  const getUserRepo = async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const userRepos = await response.json();

    setUserRepos(userRepos);
  };

  useEffect(() => {
    getUserData();
    getUserRepo();
  }, []);

  return (
    <Container>
      <Holder>
        <Header>
          <Logo src={smallLogo} />
          <MdArrowBack style={{ marginRight: "30px" }} size="40px" />
        </Header>
        <User>
          <ProfileImage>
            <img src={userData?.avatar_url} alt="Profile pic." />
          </ProfileImage>
          <ProfileDetails>
            <Identification>
              <h1>{userData?.name}</h1>
              <span>@{userData?.login}</span>
            </Identification>
            <More>
              <LocAndWork>
                <MdLocationOn color="#8752cc" />
                &nbsp;{userData?.location}
                <HSpace />
                <MdHomeWork color="#8752cc" />
                &nbsp;{userData?.company}
              </LocAndWork>
              <Social>
                <MdGroups color="#8752cc" />
                &nbsp;{userData?.following}
                <HSpace />
                <MdOutlineGroups color="#8752cc" />
                &nbsp;{userData?.followers}
                <HSpace />
                <MdStar color="#8752cc" />
                &nbsp;-
              </Social>
            </More>
          </ProfileDetails>
          <Repositories>
            <RepositoryWrapper>
              <span>Total de repositórios</span>
              <RepositoryCounter>
                <RiGitRepositoryFill color="#8752cc" />
                &nbsp;{userData?.public_repos}
              </RepositoryCounter>
            </RepositoryWrapper>
          </Repositories>
        </User>
        <UserRepos>
          {userRepos?.map((element, index) => (
            <GithubRepoCard
              key={index}
              name={element?.name}
              description={element?.description}
              stars={element?.stargazers_count}
              forks={element?.forks_count}
              tech={element?.language}
            />
          ))}
        </UserRepos>
      </Holder>
    </Container>
  );
};

export default Profile;
