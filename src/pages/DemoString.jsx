import React, { useEffect, useState } from "react";
import "../../src/pages/demo.css";

const DemoString = (props) => {
  console.log("props=>>>>>", props);
  const [text, setText] = useState("");
  const [count, setCount] = useState();
  const handletext = (e) => {
    setText(e.target.value);
  };
  const upercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  //   const copytext = () => {
  //     var copy = document.getElementById("myBox");
  //     console.log("copy text ", copy);
  //     copy.select();

  //     navigator.clipboard.writeText(copy.value);
  //   };
  const copytext = () => {
    var copy = document.getElementById("myBox");
    var selectedText = copy.value.substring(
      copy.selectionStart,
      copy.selectionEnd
    );

    if (selectedText.length > 0) {
      navigator.clipboard.writeText(selectedText);
      console.log("Copied word: ", selectedText);
    } else {
      navigator.clipboard.writeText(copy.value);
      console.log("Copied entire text: ", copy.value);
    }
  };
  const removespace = () => {
    var copy = document.getElementById("myBox");

    // var strWithoutSpaces = copy.innerHTML.split(" ").join("");
    var strWithoutSpaces = copy.innerHTML.replace(/\s/g, "");
    setText(strWithoutSpaces);

    console.log("jkhkhkhk space remove", strWithoutSpaces); // Output: "HelloWorld"
  };
  const reversstring = () => {
    var copy = document.getElementById("myBox");
    var reversedStr = copy.innerHTML.split("").reverse().join("");
    setText(reversedStr);
    console.log("revers string ", reversedStr);
  };
  const findselectedworlindex = () => {
    var copy = document.getElementById("myBox");

    if (window.getSelection) {
      var selectedText = window.getSelection().toString();
      var startIndex = copy.value.indexOf(selectedText);

      if (startIndex !== -1) {
        console.log("Selected word: " + selectedText);
        console.log("Index: " + startIndex);
      }
    }
  };
  //   const findmatchworlindex = () => {
  //     var match = "hello";
  //     var copy = document.getElementById("myBox");

  //     var words = copy.innerHTML.split(" ");

  //     var isMatchUsingSplit = words.includes(match);

  //     if (isMatchUsingSplit) {
  //       console.log("'" + match + "' is a match using split().");
  //     } else {
  //       console.log("'" + match + "' is not a match using split().");
  //     }
  //   };
  const findmatchworlindex = () => {
    const match = "hello";
    const copy = document.getElementById("myBox");

    const words = copy.innerHTML.split(" ");

    const matchIndex = words.findIndex((word) => word === match);

    if (matchIndex !== -1) {
      console.log(`'${match}' is a match at index ${matchIndex}.`);
    } else {
      console.log(`'${match}' is not a match.`);
    }
  };

  // useEffect(() => {
  //   // setList(false);
  //   const arr = ["a", "b", "c"];
  //   const letterResult = document.getElementById("ss");
  //   for (const letter of arr) {
  //     const li = document.createElement("li");
  //     li.textContent = letter;
  //     letterResult.appendChild(li);

  //     //   letterResult.insertBefore(li);

  //     //   letterResult.insertAdjacentElement("beforeend", li);
  //   }
  // }, []);

  return (
    <>
      <div className="form-check form-switch float-end">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.togglemode}
        />
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
          on dark mode
        </label>
      </div>
      <div className="container-fluid ">
        <div className="demo">
          {/* <input type="text" onChange={handletext} /> */}
          <textarea
            id="myBox"
            className="teaxtarea"
            rows="8"
            value={text}
            onChange={handletext}
          />
          <button className="buttn" onClick={upercase}>
            click text upercase
          </button>
          <button className="buttn" onClick={lowercase}>
            click text lowercase
          </button>
          <button className="buttn" onClick={copytext}>
            copy text
          </button>
          <button className="buttn" onClick={removespace}>
            remove space
          </button>
          <button className="buttn" onClick={reversstring}>
            revers string
          </button>
          <button className="buttn" onClick={findselectedworlindex}>
            find selected word index of
          </button>
          <button className="buttn" onClick={findmatchworlindex}>
            hello word match and get indexof
          </button>
          {console.log("props ======lll", `${props.mode}`)}
          <h3 className={`text-${props.mode === true ? `primary` : `success`}`}>
            {" "}
            Text priview
          </h3>
          <p>{text}</p>
          <p>
            {" "}
            number of word count : <b> {text?.split(" ").length - 1}</b> and
            character : <b> {text?.length}</b>
          </p>
        </div>
        <div id="ss">{/* <p id="ss"></p> */}</div>
      </div>
    </>
  );
};

export default DemoString;
