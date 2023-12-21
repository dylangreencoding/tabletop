import { PageDispatchContext } from "../app";
import video from "../videos/myvideo.mp4";
import { useContext } from "react";

export default function MainHome() {
  const dispatch = useContext(PageDispatchContext);
  return (
    <div className="homepage">
      <div
        style={{
          margin: "0 auto",
          maxWidth: "70svw",
          display: "flex",
          gap: "2.4rem",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "2.4rem 0 2.4rem", textAlign: "center" }}>
          <h1>Dylan Green</h1>
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
            <p>Site under development.</p>
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
            <p>The old site (no sound):</p>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "300px",
          display: "flex",
          gap: "2.4rem",
          flexDirection: "column",
        }}
      >
        <p>
          <video src={video} width="300" controls></video>
        </p>
      </div>
    </div>
  );
}
