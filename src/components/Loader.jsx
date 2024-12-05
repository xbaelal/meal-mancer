const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="rotating-loader">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="lightgray"
          strokeWidth="5"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#17bebb"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="125.6"
          strokeDashoffset="125.6"
        />
      </svg>
    </div>
  );
};

export default Loader;
