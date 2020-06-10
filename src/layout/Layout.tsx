import React, { FC, ReactNode } from 'react';
import classes from './Layout.module.sass';

// TODO: пропсы везде называем по такому шаблону IUsersModalProps и это интерфейс
type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props) => (
  <div className={classes.wrapper}>{children}</div>
);
