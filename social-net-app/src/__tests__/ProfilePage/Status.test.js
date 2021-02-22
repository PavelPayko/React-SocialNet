import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Status from "../../components/ProfilePage/Profile/Status/Status";
import classes from '../../components/ProfilePage/Profile/Status/Status.module.css'

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Button component", () => {
    test("statusBody should content props status value", () => {
        act(() => {
            ReactDOM.render( <Status status={'test status'} setStatus={() => {}} myProfile={true}/>, container);
        });
        const status = container.getElementsByClassName(classes.statusBody)[0];
        expect(status.textContent).toBe("test status");
    });

    test("input value should be props status value", () => {
        act(() => {
            ReactDOM.render( <Status status={'test status'} setStatus={() => {}} myProfile={true}/>, container);
        });
        const edit = container.getElementsByClassName(classes.statusEdit)[0];
        act(() => {
            edit.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        const input = container.getElementsByClassName(classes.input)[0];
        expect(input.value).toBe('test status');
    });
});