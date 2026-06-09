import { useState } from "react";

function Calc() {
  const [value, setValue] = useState("0");

  function clear() {
    setValue("");
  }

  function appendToDisplay(val) {
    setValue((value) => value + val);
  }

  function equals() {
    let val = 0;

    try {
      val = eval(value);
      if (value == "Error") {
        clear();
      } else {
        setValue(val);
      }
    } catch {
      setValue("Error");
    }
  }

  return (
    <div className="flex-column flex-1 w-full">
      <Display val={value}></Display>
      <Buttons
        clear={clear}
        appendToDisplay={appendToDisplay}
        equals={equals}
      ></Buttons>
    </div>
  );
}

const Buttons = ({ clear, appendToDisplay, equals }) => {
  return (
    <div className="grid grid-rows-5 grid-cols-4 gap-10 text-black font-bold">
      <button
        onClick={clear}
        className="active:bg-red-200  rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        A/C
      </button>
      <button
        onClick={() => appendToDisplay("+")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        +
      </button>
      <button
        onClick={() => appendToDisplay("%")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        %
      </button>
      <button
        onClick={() => appendToDisplay("/")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        ÷
      </button>

      <button
        onClick={() => appendToDisplay("7")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        7
      </button>
      <button
        onClick={() => appendToDisplay("8")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        8
      </button>
      <button
        onClick={() => appendToDisplay("9")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        9
      </button>
      <button
        onClick={() => appendToDisplay("*")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        *
      </button>

      <button
        onClick={() => appendToDisplay("4")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        4
      </button>
      <button
        onClick={() => appendToDisplay("5")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        5
      </button>
      <button
        onClick={() => appendToDisplay("6")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        6
      </button>
      <button
        onClick={() => appendToDisplay("-")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        -
      </button>

      <button
        onClick={() => appendToDisplay("1")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        1
      </button>
      <button
        onClick={() => appendToDisplay("2")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        2
      </button>
      <button
        onClick={() => appendToDisplay("3")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        3
      </button>
      <button
        onClick={() => appendToDisplay("+")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        +
      </button>

      <button
        onClick={() => appendToDisplay("")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        pi
      </button>
      <button
        onClick={() => appendToDisplay("0")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        0
      </button>
      <button
        onClick={() => appendToDisplay(".")}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        .
      </button>
      <button
        onClick={equals}
        className="active:bg-red-200 rounded-full flex w-12 h-12 bg-sky-50 justify-center items-center p-5"
      >
        =
      </button>
    </div>
  );
};

function Display({ val }) {
  return (
    <div>
      <input
        value={val}
        type="text"
        readOnly
        className="focus:boder-none  text-left w-full font-semibold border-2 h-20 text-2xl rounded-xl mb-10 px-2"
      ></input>
    </div>
  );
}

export default Calc;
