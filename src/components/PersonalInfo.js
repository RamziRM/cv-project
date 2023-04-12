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
        this.handleChange = this.handleChange.bind(this);
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
        
        const { editMode, personalInfo } = this.state;
        // if editMode is false, render the personal info
        if (!editMode) {
            return (
                <div>
                    <h2>Personal Information</h2>
                    <p>First name: {personalInfo.firstName}</p>
                    <p>Last name: {personalInfo.lastName}</p>
                    <p>Email: {personalInfo.email}</p>
                    <p>Phone: {personalInfo.phone}</p>
                    <p>Location: {personalInfo.location}</p>
                    <p>GitHub: {personalInfo.github}</p>
                    <p>Website: {personalInfo.website}</p>
                    <button 
                    type="button"
                    className="btn"
                    onClick={this.handleSubmit}
                    >
                        Edit
                    </button>
                </div>
            );
        }

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
                 onChange={this.handleSubmit}
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