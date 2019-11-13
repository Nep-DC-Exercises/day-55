import React, { Component } from "react";
import Styled from "styled-components";
import { loadData } from "../utils/loadData";
import Card from "./Card"

const List = Styled.ul`
    list-style-type: none;
    margin: 1rem auto;
    padding: 16px;
`;

export default class CardList extends Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const response = await loadData(`https://randomuser.me/api/?results=2`);
        const users = response.results;
        this.setState({
            users
        });
    }

    render() {
        const { users } = this.state;
        return (
            <List>
                {users.map(user => (
                    <li key={user.login.uuid}>
                        <Card user={user} />
                    </li>
                ))}
            </List>
        );
    }
}
