import styled from 'styled-components';

export const Container = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.separator};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Logo = styled.img`
  max-height: 45px;
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }
`;
