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
                  <p style={{ margin: "3.2rem 0" }}>
                    <video src={video} width="300" controls></video>
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
