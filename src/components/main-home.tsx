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
            <p>Thanks for coming.</p>
            <p>
              Check out the new{" "}
              <span
                className="fake-link"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "goto/dashboard" });
                }}
              >
                grid
              </span>
              .
            </p>
            <p>
              The old site had login and secure chatroom functionality, but it
              was a learning experience and I made a lot of naive mistakes, so I
              scrapped it. Here is a way too long silent video demonstrating its
              functionality:
            </p>
          </div>
          <p>
            <video src={video} width="300" controls></video>
          </p>
        </main>
      </div>
    </div>
  );
}
