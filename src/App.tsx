import "./App.css";
import { ModalTrigger } from "./main";
import { PopoverTrigger } from "./main";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComboBox from "./components/ComboBox";
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
      <PopoverTrigger label="55">555</PopoverTrigger>
      <ModalTrigger
        label="555"
        children={() => <>555</>}
        isDismissable
      ></ModalTrigger>
      <ComboBox
        onSelectionChange={(key) => console.log(key)}
        label="Favorite Animal "
        placeholder="555"
        items={[
          { id: 1, label: "red panda", value: "red panda", isLink: false },
          { id: 2, label: "cat", value: "cat", isLink: false },
          { id: 3, label: "dog", value: "dog", isLink: false },
          { id: 4, label: "aardvark", value: "aardvark", isLink: false },
          { id: 5, label: "kangaroo1", value: "kangaroo", isLink: false },
          { id: 6, label: "snake", value: "snake", isLink: false },
        ]}
        menuTrigger="focus"
        disabledKeys={["cat", "snake"]}
      ></ComboBox>
    </div>
  );
}

export default App;
