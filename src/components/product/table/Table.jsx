import Header from "./Header";
import Product from "./Product";

const Table = () => {
  const classes = {
    sectionTable:
      "container mx-auto mt-8 relative overflow-x-auto shadow-md rounded-md",
    table: "w-full text-sm text-left text-gray-500",
  };

  return (
    <section id="table" className={classes.sectionTable}>
      <table className={classes.table}>
        <Header />
        <tbody>
          <Product />
        </tbody>
      </table>
    </section>
  );
};

export default Table;
