import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                location: "",
                github: "",
                website: ""
            },
            editMode: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit should toggle editMode to !prevState.editMode
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: !this.state.editMode
        });
    }

    // handleChange should update the state with the new value
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(
            (prevState) => ({
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: value
                }
            })
        );
    }

    render() {

        return (
        <div>
            <h2>Personal Information</h2>
            <form className="personalForm" onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="phone">Phone</label>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" />

                <label htmlFor="github">GitHub</label>
                <input type="text" id="github" name="github" />
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" />
                <button 
                type="submit"
                className="btn"
                >Save
                </button>
            </form>
        </div>
        );
    }
}

export default PersonalInfo;