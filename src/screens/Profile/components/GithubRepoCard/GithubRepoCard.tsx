import React from "react";
import { MdStar } from "react-icons/md";
import { VscRepoForked } from "react-icons/vsc";
import { BsFileCodeFill } from "react-icons/bs";

import { Container, RepositoryName, RepositoryDescription, RepositoryStats } from "./styles";
import { HSpace } from "../../styles";

interface GithubRepo {
  name: string;
  description: string;
  stars: string;
  forks: string;
  tech: string;
}

const GithubRepoCard: React.FC<GithubRepo> = ({
  name,
  description,
  stars,
  forks,
  tech,
}) => {
  return (
    <Container>
      <RepositoryName>{name}</RepositoryName>
      <RepositoryDescription>{description}</RepositoryDescription>
      <RepositoryStats>
        <MdStar color="#8752CC" />&nbsp;{stars}
        <HSpace />
        <VscRepoForked color="#8752CC" />&nbsp;{forks}
        <HSpace />
        <BsFileCodeFill color="#8752CC" />&nbsp;{tech}
      </RepositoryStats>
    </Container>
  );
};

export default GithubRepoCard;
