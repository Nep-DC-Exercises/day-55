import React, { Component } from "react";
import {
    FaUser,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaPhone,
    FaLock
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Styled from "styled-components";

const TheCard = Styled.div`
    border: solid 1px gray;
    border-radius: 8px;
    padding: 8px;
    max-width: 320px;
`;

export default class Card extends Component {
    state = {
        isUserHovered: true,
        isEmailHovered: false,
        isCalendarHovered: false,
        isMapHovered: false,
        isPhoneHovered: false,
        isLockHovered: false
    };

    toggleUserHover() {
        this.setState(prevState => ({isUserHovered: !prevState.isUserHovered}));
    }

    toggleEmailHover() {
        let isEmailHovered = !this.state.isEmailHovered
        this.setState(
            {isEmailHovered}
        );
    }

    render() {
        const user = this.props.user;
        const isUserHovered = this.state.isUserHovered;
        return (
            <>
                <div>
                    {isUserHovered ? (
                        <div>
                            <img src={user.picture.medium}></img>
                            <p>Hi, My name is</p>
                            <h2>
                                {user.name.first} {user.name.last}
                            </h2>
                        </div>
                    ) : (
                        <p>User is not hovered</p>
                    )}
                </div>
                <div style={{ fontSize: "30px" }}>
                    <FaUser
                        onMouseEnter={this.toggleUserHover}
                        onMouseLeave={this.toggleUserHover}
                    />
                    <MdEmail
                        onMouseEnter={this.toggleEmailHover}
                        onMouseLeave={this.toggleEmailHover}
                    />
                    <FaCalendarAlt />
                    <FaMapMarkerAlt />
                    <FaPhone />
                    <FaLock />
                </div>
            </>
        );
    }
}
