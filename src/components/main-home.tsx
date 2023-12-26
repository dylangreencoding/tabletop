import { PageDispatchContext } from "../app";
import video from "../videos/myvideo.mp4";
import { useContext } from "react";

export default function MainHome() {
  const dispatch = useContext(PageDispatchContext);
  return (
    <div className="homepage">
      <div className="homepage-inner">
        <main>
          <h1>Dylan Green</h1>
          <p>TypeScript Developer</p>
          <p>
            <a
              className="a-bold"
              href="https://github.com/dylangreencoding"
              target="_blank"
            >
              github.com/dylangreencoding
            </a>
          </p>

          <div>
            <p>This site is under development.</p>
            <p>Thanks for coming.</p>
            <p>
              Check out the{" "}
              <span
                className="fake-link"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "goto/dashboard" });
                }}
              >
                new dashboard
              </span>
              .
            </p>
            <p>A silent video commemorating the old site:</p>
          </div>
          <p>
            <video src={video} width="300" controls></video>
          </p>
        </main>
      </div>
    </div>
  );
}
