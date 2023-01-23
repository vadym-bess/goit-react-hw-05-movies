import { NavLink, Outlet } from 'react-router-dom';
import css from './NavBar.module.css';
import { Suspense } from 'react';

export const NavBar = () => {
  return (
    <>
      <div className={css.navBarThumb}>
        <NavLink
          className={css.button}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={css.button}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
          })}
          to="/movies"
        >
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
