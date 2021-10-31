import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import { Container, Logo, TextInput, Button, HSpace } from "./styles";
import bigLogo from "../../assets/bigLogo.png";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const Home: React.FC = () => {
  const ERROR_NOT_FOUND = "O usuário não foi encontrado.";

  const history = useHistory();
  const search = useLocation().search;
  const errorFlag = new URLSearchParams(search).get('error');
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = useCallback(
    ({ target }) => {
      setUsername(target.value);
    },
    [username]
  );

  const handleRedirect = useCallback(() => {
    history.push({
      pathname: "/profile",
      search: "",
      state: { username },
    });
  }, [username]);

  useEffect(() => {
    if (errorFlag) {
      setError(true);
      const timeout = setTimeout(() => {
        setError(false);
        history.replace({ pathname:'/' });
      }, 5000);
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [errorFlag]);

  return (
    <Container>
      <ErrorAlert visible={error}>{ERROR_NOT_FOUND}</ErrorAlert>
      <Logo src={bigLogo} />
      <TextInput
        placeholder="Enter username"
        value={username}
        onChange={handleChange}
      />
      <Button onClick={handleRedirect} disabled={username.length === 0}>
        Search <HSpace /> <MdSearch size="20px" />
      </Button>
    </Container>
  );
};

export default Home;
