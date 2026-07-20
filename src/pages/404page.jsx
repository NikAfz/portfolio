import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="page404">
      <p className="page404__eyebrow">404</p>
      <h1 className="page404__title">Page not found</h1>
      <p className="page404__text">That route doesn’t exist — head back home.</p>
      <Link to="/" className="btn btn--primary">
        Back home
      </Link>
    </main>
  );
}

export default Page404;
