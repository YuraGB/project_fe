import { Link } from "react-router-dom";
import { type ReactNode } from "react";

const HomePage = (): ReactNode => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default HomePage;
