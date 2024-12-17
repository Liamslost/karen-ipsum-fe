// import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <>
      <h1>KAREN - IPSUM</h1>
      <form>
        <div>
          <label>Mood</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label>
            sentences
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            parragraphs
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
        </div>
          <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
}

export default App;
