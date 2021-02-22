import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/redux-store";
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('renders learn socialnet', () => {
    render(<BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>);
    const linkElement = screen.getByText(/SocialNet/i);
    expect(linkElement).toBeInTheDocument();
});
