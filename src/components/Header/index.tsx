import { ReactNode } from 'react';

import { logoImg } from '../../assets';

import './styles.scss';

type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="content">
        <img src={logoImg} alt="Letmeask" />
        <div>{children}</div>
      </div>
    </header>
  );
}
