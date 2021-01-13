import { useState } from "react";
import styles from "./app.module.css";

function TextArea({ onChange, value, label }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={styles.textContainer}>
      <p>{label}</p>
      <textarea
        className={styles.text}
        value={value}
        onChange={handleChange}
        cols={80}
        rows={30}
      />
    </div>
  );
}

function App() {
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [res, setRes] = useState("");
  const [entries, setEntries] = useState(0);

  const handleClick = () => {
    if (!prev || !next) {
      return;
    }
    try {
      const prevObj = JSON.parse(prev);
      const nextObj = JSON.parse(next);
      const diff = Object.entries(nextObj).reduce((acc, [key, value]) => {
        if (prevObj[key] === value) {
          return acc;
        }
        return { ...acc, [key]: value };
      }, {});
      setRes(JSON.stringify(diff, null, 2));
      setEntries(Object.keys(diff).length);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className={styles.app}>
      <div className={styles.jsonContainer}>
        <TextArea label="Master" onChange={setPrev} value={prev} />
        <TextArea label="Working Branch" onChange={setNext} value={next} />
      </div>
      <button className={styles.button} onClick={handleClick}>
        Diff
      </button>
      <p>Entries: {entries}</p>
      <TextArea label="Result" value={res} onChange={setRes} />
    </div>
  );
}

export default App;
