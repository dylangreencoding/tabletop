import { useReducer, createContext } from "react";
import { DashboardWrapper } from "../dashboard";
import video from "../videos/myvideo.mp4";

export const PageContext = createContext<any>(null);

export const PageDispatchContext = createContext<any>(null);

const initialPage = { path: "/" };

function pageReducer(page: any, action: any) {
  console.log(action.type);
  switch (action.type) {
    case "goto/":
      page.path = "/";
      return { path: "/" };
    case "goto/dashboard":
      page.path = "/dashboard";
      return { path: "/dashboard" };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function App() {
  const [page, dispatch] = useReducer(pageReducer, initialPage);

  const displayPage = () => {
    switch (page.path) {
      case "/":
        return (
          <div className="homepage">
            <div
              style={{
                margin: "0 auto",
                maxWidth: "70rem",
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
              </div>
              <div
                style={{
                  backgroundColor: "hsl(0, 0%, 80%)",
                  color: "#121212",
                  padding: "2.4rem",
                  border: "teal 1px solid",
                  borderRadius: "3px",
                  display: "flex",
                  marginBottom: "12rem",
                }}
              >
                <div>
                  <h2>Hello </h2>
                  <p>Thanks for coming.</p>
                  <p>
                    <span>TL;DR: </span>
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
                  <p>
                    This is here because I am refactoring an old project. I work
                    on this when I have time. I am quite busy at the moment, but
                    plan to slowly develop this into something fun, functional
                    and beautiful.
                  </p>
                  <p>
                    I was a little hesitant to take the old project down,
                    because it was a full stack app with user login and secure
                    chatrooms, but it is dated and I am not as proud of it as I
                    used to be.
                  </p>
                  <p>Here is a silent video in honor of its memory.</p>
                  <p>@ 4 seconds in - auto redirect from http to https</p>
                  <p>
                    @ 1 minute in - map converted to game, keep watching to see
                    chatroom functionality
                  </p>
                  <p>@ 3 minutes in - account verification</p>
                  <p style={{ margin: "3.2rem 0" }}>
                    <video src={video} width="400" controls></video>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "/dashboard":
        return <DashboardWrapper />;
    }
  };

  return (
    <PageContext.Provider value={page}>
      <PageDispatchContext.Provider value={dispatch}>
        <nav
          style={{
            position: "fixed",
            zIndex: "999",
            top: "0",
            right: "0",
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            type="button"
            style={
              page.path === "/"
                ? { backgroundColor: "red" }
                : { backgroundColor: "white" }
            }
            onClick={(e: any) => {
              e.preventDefault();
              dispatch({ type: "goto/" });
            }}
          >
            home
          </button>
          <button
            type="button"
            style={
              page.path === "/dashboard"
                ? { backgroundColor: "red" }
                : { backgroundColor: "white" }
            }
            onClick={(e: any) => {
              e.preventDefault();
              dispatch({ type: "goto/dashboard" });
            }}
          >
            dashboard
          </button>
        </nav>
        {displayPage()}
      </PageDispatchContext.Provider>
    </PageContext.Provider>
  );
}
