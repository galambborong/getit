const Error = ({ error }) => {
  const { response } = error;
  const { status, statusText } = response;
  return (
    <main className="error">
      <h2 className="error__header">Whoops!</h2>
      <p className="error__main">
        {status} &ndash; {statusText}
      </p>
    </main>
  );
};

export default Error;
