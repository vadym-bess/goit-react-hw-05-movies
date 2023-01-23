import { NavLink, Outlet } from 'react-router-dom';
import css from './NavBar.module.css';
import { Suspense } from 'react';
import clsx from 'clsx';

export const NavBar = () => {
  return (
    <>
      <div className={css.navBarThumb}>
        <NavLink className={css.button} to="/">
          Home
        </NavLink>
        <NavLink className={clsx(css.button)} to="/movies">
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
