const Error = ({ error }) => {
  if (error) {
    const { response } = error;
    const { status, statusText } = response;

    return (
      <main className="error" data-testid="error">
        <h2 className="error__header">Whoops!</h2>
        <p className="error__main" data-testid="error__msg">
          {status} &ndash; {statusText}
        </p>
      </main>
    );
  }

  return (
    <main className="error" data-testid="error">
      <h2 className="error__header">Whoops!</h2>
      <p className="error__main" data-testid="error__msg">
        404 &ndash; Not Found
      </p>
    </main>
  );
};

export default Error;
