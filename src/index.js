import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Lesson_Katakana = {
  data: [
    { de: "A", jp: "ア" },
    { de: "E", jp: "エ" },
    { de: "I", jp: "イ" },
    { de: "O", jp: "オ" },
    { de: "U", jp: "ウ" }
  ]
};

const Lesson_Lektion_7 = {
  data: [
    {
      de: "schneiden",
      jp: "きります",
      kanji: "切ります",
      romaji: "kirimasu"
    },
    {
      de: "(ab-) schicken (Packet, Päckchen, Fax, Email)",
      jp: "おくります",
      kanji: "送ります",
      romaji: "okurimasu"
    },
    {
      de: "geben, schenken (Sachen gehen in den Besitz des Partners über",
      jp: "あげます",
      romaji: "agemasu"
    },
    {
      de: "erhalten, bekommen (Sachen gehen in den eigenen Besitz über)",
      jp: "もちいます",
      romaji: "mochiimasu"
    },
    {
      de: "verleihen",
      jp: "かします",
      romaji: "kashimasu",
      kanji: "貸します"
    },
    {
      de: "borgen, sich ausleihen",
      jp: "かけます",
      romaji: "kakemasu",
      kanji: "掛けます"
    }
  ]
};

class DataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = Lesson_Lektion_7;
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => (
            <li key={item.jp}>
              {item.jp} - {item.de}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    return (
      <div>
        <p>Question</p>
        <p>
          <b>{this.props.input}</b>
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <DataSource />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
