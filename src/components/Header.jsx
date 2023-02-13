import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const classes = {
    body: "h-screen bg-gray-900 text-white",
    header: "bg-black",
    navigation: "container flex justify-between items-center p-4 mx-auto",
    list: "flex gap-6 capitalize",
  };
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <img src="/vite.svg" alt="vite logo" />
        <ul className={classes.list}>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>
          <li>
            <NavLink to="contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
