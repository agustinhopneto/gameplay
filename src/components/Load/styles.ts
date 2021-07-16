import styled, { css } from 'styled-components/native';

interface Props {
  full: boolean;
}

export const Container = styled.View<Props>`
  align-items: center;
  justify-content: center;

  ${props =>
    props.full &&
    css`
      flex: 1;
    `}
`;
