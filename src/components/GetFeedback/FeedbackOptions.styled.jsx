import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
`;
