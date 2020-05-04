import React, { Component } from 'react'

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {

    state = {
        name: "Pinal from Global context"
    };

    render() {
        return (
            <GlobalContext.Provider
                value={{ state: this.state }}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}