import React from 'react';

import { Container } from './styles';

type ErrorAlertProps = {
  visible: boolean
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ children, visible }) => {
  return(
    <Container visible={visible}><span>{children}</span></Container>
  );
}

export default ErrorAlert;