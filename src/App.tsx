import React, {Component} from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import SnackCardsDisplayer from "./components/SnackCardsDisplayer";
import Header from "./components/Header";
import AppContextProvider from "./Context";

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
