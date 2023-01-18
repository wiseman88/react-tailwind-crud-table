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
        <img src="/public/vite.svg" alt="vite logo" />
        <ul className={classes.list}>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
