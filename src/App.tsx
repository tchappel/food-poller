import React, { Component } from "react";
import "bulma/css/bulma.css";
import SnackCardsDisplayer from "./components/SnackCardsDisplayer";
import Header from "./components/Header";
import AppContextProvider from "./appContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContextProvider>
          <Header />
          <SnackCardsDisplayer />
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
