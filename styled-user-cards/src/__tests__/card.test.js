import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "../components/Card";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    //clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders user data", async () => {
    const fakeUser = {
        name: {
            first: "Steve",
            last: "Carell"
        },
        email: "Steve@Carell.com"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    await act(async () => {
        render(<Card user={fakeUser} />, container);
    });

    expect(container.querySelector("h2").textContent).toBe(`${fakeUser.name.first} ${fakeUser.name.last}`);
    expect(container.textContent).toContain(fakeUser.email);

    global.fetch.mockRestore();
});
