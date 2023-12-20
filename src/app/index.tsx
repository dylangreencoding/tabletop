import { useReducer, createContext } from "react";
import { DashboardWrapper } from "../dashboard";

export const PageContext = createContext<any>(null);

export const PageDispatchContext = createContext<any>(null);

const initialPage = { path: "/dashboard" };

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
        return "/";
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
