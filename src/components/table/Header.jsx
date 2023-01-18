const Header = () => {
  const classes = {
    thead: "text-xs text-gray-700 uppercase bg-gray-100",
    th: "px-6 py-3",
  };

  const headers = ["product name", "color", "category", "price", "action"];

  return (
    <thead className={classes.thead}>
      <tr>
        {headers.map((header, index) => (
          <th key={index} scope="col" className={classes.th}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
