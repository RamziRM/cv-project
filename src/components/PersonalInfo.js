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
        console.log(this.state.personalInfo);
    }

    render() {

        return (
        <div>
            <h2>Personal Information</h2>
            <form className="personalForm" onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input 
                type="text" 
                id="firstName" 
                name="firstName"
                placeholder="First name"
                required
                onChange={this.handleChange}
                 />
                <label htmlFor="lastName">Last name</label>
                <input 
                type="text" 
                id="lastName" 
                name="lastName"
                placeholder="Last name"
                required
                onChange={this.handleChange}
                 />
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                 id="email" 
                 name="email"
                 required
                 onChange={this.handleChange}
                 />
                <label htmlFor="phone">Phone</label>
                <input 
                type="text" 
                id="phone" 
                name="phone" 
                onChange={this.handleChange}/>
                <label htmlFor="location">Location</label>
                <input 
                type="text" 
                id="location" 
                name="location"
                onChange={this.handleChange}
                />

                <label htmlFor="github">GitHub</label>
                <input 
                type="text" 
                id="github" 
                name="github"
                onChange={this.handleChange}
                />
                <label htmlFor="website">Website</label>
                <input 
                type="text" 
                id="website" 
                name="website" 
                onChange={this.handleChange}
                />
                <button 
                type="submit"
                className="btn"
                >
                    Save
                </button>
            </form>
        </div>
        );
    }
}

export default PersonalInfo;