import React from "react";
import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { text } from "stream/consumers";

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column
          text={list.text}
          key={list.id}
          index={i}
        />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
