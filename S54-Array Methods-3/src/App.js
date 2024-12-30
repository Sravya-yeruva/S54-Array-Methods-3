import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Array Methods-3</h1>
      <button
        type="button"
        onClick={() => {
          let SravyaMarks = [88, , 88, 66, 77, 88];
          let result = SravyaMarks.every((ele, i) => {
            return ele >= 35;
          });
          if (result == true) {
            console.log("Student Passed");
          } else {
            console.log("Student Failed");
          }
        }}
      >
        Every()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [88, 8, 66, 9, 88, 78];
          let result = Marks.some((ele, i) => {
            return ele < 35;
          });
          if (result == true) {
            console.log("Student Failed");
          } else {
            console.log("Student Passed");
          }
        }}
      >
        Some()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [44, 66, 88, 56, 77, 55, 34, 100, 101];
          let result = Marks.filter((ele, i) => {
            return ele < 80;
          });
          console.log(result);
        }}
      >
        Filter()
      </button>

      <button
        type="button"
        onClick={() => {
          let Marks = [66, 89, 99, 66, 74, 77, 56, 88];
          let result = Marks.find((ele, i) => {
            return ele > 70;
          });
          console.log(result);
        }}
      >
        Find()
      </button>

      <button
        type="button"
        onClick={() => {
          let Marks = [72, 89, 99, 66, 74, 77, 56, 88];
          let result = Marks.findIndex((ele, i) => {
            return ele > 70;
          });
          console.log(result);
        }}
      >
        FindIndex()
      </button>

      <button
        type="button"
        onClick={() => {
          let Marks = [72, 89, 99, 66, 74, 77, 56, 88];
          let result = Marks.findLast((ele, i) => {
            return ele > 60;
          });
          console.log(result);
        }}
      >
        FindLast()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [72, 89, 99, 66, 74, 66, 56, 66];
          let result = Marks.findLastIndex((ele, i) => {
            return ele > 70;
          });
          console.log(result);
        }}
      >
        FindLastIndex()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [72, 89, 99, 66, 74, 66, 56, 66];
          let result = Marks.reduce((ele, tot) => {
            return (tot += ele);
          });
          console.log(result);
        }}
      >
        reduce()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [72, 89, 99, 66, 74, 66, 56, 66];
          let result = Marks.reduceRight((ele, tot) => {
            return (tot += ele);
          });
          console.log(result);
        }}
      >
        reduceRight()
      </button>
      <button
        type="button"
        onClick={() => {
          let Marks = [1, 8, 9, 6, 5, 4, 100, 25];
          let result = Marks.sort((a, b) => {
            return a - b;
          });
          console.log(result);
        }}
      >
        Sort()
      </button>
      <button
        type="button"
        onClick={() => {
          let names = ["sravya", "Indu", "pranavi"];
          let result = names.map((ele, i) => {
            return `Miss.${ele}`;
          });
          console.log(result);
        }}
      >
        Map()
      </button>

      <button
        type="button"
        onClick={() => {
          let names = ["Sravya", "Ammu", "indu"];
          let Surnames = ["yeruva", "Suravaram", "jujuri"];
          let result = names.map((ele, i) => {
            return `Miss.${ele} ${Surnames[i]}`;
          });
          console.log(result);
        }}
      >
        Map()
      </button>
    </div>
  );
}

export default App;
