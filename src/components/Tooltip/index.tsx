import React from 'react';

import { Container } from './styles';

interface ContainerProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ContainerProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
