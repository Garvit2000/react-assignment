import { useState } from "react";
import './App.css';


function App() {
  const [text, setText] = useState("");
  const list = {
    smple: "sample",
    cours: "course",
    hlw: "hello",
    brb: "be right back",
    btw: "by the way",
  };
  return (
    <div className="App">
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          const strArr = text.split(" ");
          console.log("strArr",strArr);
          const objArr = Object.getOwnPropertyNames(list);
          console.log("ObjArr",objArr);

          strArr.map((value, index) => {
            const n = objArr.indexOf(value);
            if (n !== -1) {
              strArr[index] = list[objArr[n]];
              console.log(strArr, strArr.join(" "));
              setText(strArr.join(" ") + " ");
            }
            return true;
          });
        }}
      />
    </div>
  );
}

export default App;
