import React, { useState } from "react";
// Data
import { roman, arabic } from "./data";
// Styles
import './App.css';

const App = () => {
  const [ arabicNumeral, setArabicNumeral ] = useState();
  const [ romanNumeral, setRomanNumeral ] = useState();

  const [ value, setValue ] = useState(null);

  const toRoman = arabicNumeral => {
    if (!arabicNumeral) return;
    let result = '';
    arabic.forEach((numeral, index) => {
      while((arabicNumeral % numeral) < arabicNumeral) {
        result += roman[index];
        arabicNumeral -= numeral;
      }
    });
    setValue(result);
  };

  const fromRoman = romanNumeral => {
    if (!romanNumeral) return;
    let result = 0;
    romanNumeral = romanNumeral.toUpperCase();

    arabic.forEach((numeral, index) => {
      while(!romanNumeral.indexOf(roman[index])) {
        result += numeral;
        romanNumeral = romanNumeral.replace(roman[index], '');
      }
    });
    setValue(result);
  };

  const onHandleArabicChange = value => setArabicNumeral(value);

  const onHandleRomanChange = value => setRomanNumeral(value);

  return (
      <div className="application_container">
        <h1 className="title">Roman Numerals Converter</h1>
        <div className="output__container">
          <span className="output">{value}</span>
        </div>
        <div className="inputs__container">
          <div className="input">
            <button onClick={() => toRoman(arabicNumeral)}>
              To roman
            </button>
            <input placeholder="Enter arabic numeral" onChange={e => onHandleArabicChange(e.currentTarget.value)} />
          </div>
          <div>
            <button onClick={() => fromRoman(romanNumeral)}>
              From roman
            </button>
            <input placeholder="Enter roman numeral" onChange={e => onHandleRomanChange(e.currentTarget.value)} />
          </div>
        </div>
      </div>
  );
}

export default App;
