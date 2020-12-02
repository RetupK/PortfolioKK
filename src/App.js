import React, { useEffect, useState } from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import { ThemeProvider } from "styled-components";
import theme from './utility/theme/theme';
import { GlobalStyles } from './GlobalStyles.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <HashRouter basename="/">
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;