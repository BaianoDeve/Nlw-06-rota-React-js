import { ReactNode } from 'react';

import { logoImg } from '../../assets';
import { Container, Content, Logo, Box, BoxRight } from './styles';
import Switch from 'react-switch';

import { useTheme } from '../../hooks/useTheme';

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Content>
        <BoxRight>
          <Logo src={logoImg} alt="Letmeask" />
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'light' ? false : true}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offHandleColor={theme.colors.primary}
            onHandleColor={theme.colors.primary}
            onColor={theme.colors.separator}
            offColor={theme.colors.white}
          />
        </BoxRight>
        <Box>{children}</Box>
      </Content>
    </Container>
  );
}
