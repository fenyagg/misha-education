import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface ILayoutProps {
  children: ReactNode;
}
export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
});

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>{children}</div>
  );
};
