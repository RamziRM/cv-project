import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor() {
        super();
        this.state = {
        name: "React",
        };
    }
    render() {
        return (
        <div>
            <h2>Personal Information</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Phone</label>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" />

                <label htmlFor="github">GitHub</label>
                <input type="text" id="github" name="github" />
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" />
            </form>
        </div>
        );
    }
}

export default PersonalInfo;