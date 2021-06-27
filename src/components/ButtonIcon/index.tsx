import { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  iconImg?: string;
  iconTitle?: string;
};

export function ButtonIcon({
  iconImg,
  iconTitle,
  children,
  ...props
}: ButtonProps) {
  return (
    <button {...props}>
      {iconImg !== '' && <img src={iconImg} alt={iconTitle} />}
      {children !== '' && children}
    </button>
  );
}
