import React, { FC, ReactNode } from 'react';
import classes from './Layout.module.sass';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props) => (
  <div className={classes.wrapper}>{children}</div>
);
