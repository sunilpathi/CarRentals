const Pagination = ({ total, perPage, setPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }

  return (
    <div className="text-center my-4">
      {pages.map(p => (
        <button
          key={p}
          className="btn btn-outline-dark m-1"
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
