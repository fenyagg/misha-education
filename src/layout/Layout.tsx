import React, { FC, ReactElement } from 'react';
import classes from './Layout.module.sass';

type Props ={
  children: ReactElement;
};

export const Layout: FC<Props> = ({ children }: Props) => (
  <div className={classes.wrapper}>
    {children}
  </div>
);
