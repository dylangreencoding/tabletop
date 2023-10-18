import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <main>
        <p>
          <Link to={"./dashboard"}>Go to dashboard &rarr;</Link>
        </p>
      </main>
    </div>
  );
}

export default HomePage;
