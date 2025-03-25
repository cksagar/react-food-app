import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Page not found</h1>
      <h2>
        {error.status}: {error.statusText}
      </h2>
      <h3>{error.error.message}</h3>
    </div>
  );
};

export default Error;
