import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import TooltipButton from "./components/Tooltip/Tooltip";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "100%",
        height: "100dvh",
        justifyContent: "center",
        alignContent: "center",
        padding: "50px",
        backgroundColor: "#e6f2ff",
      }}
    >
      <TooltipButton
        tooltip="test"
        delay={0}
        triggerFontSize="1.2rem"
        position="right"
      >
        1
      </TooltipButton>
    </div>
  );
}

export default App;
