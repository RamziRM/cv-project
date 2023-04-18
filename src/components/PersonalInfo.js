import React, { useState } from "react";
import "../styles/PersonalInfo.css";

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        github: "",
        website: ""
    });

    const [editMode, setEditMode] = useState(true);

    // handleSubmit should toggle editMode to !prevState.editMode
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(!editMode);
    }

    // handleChange should update the state with the new value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevState) => ({
            ...prevState,
            [name]: value
            }));
    }
    
    const { firstName, lastName, email, phone, location, github, website } = personalInfo;
    // if editMode is false, render the personal info
    if (!editMode) {
        return (
            <div className="read-cont">
                <h2>Personal Information</h2>
                <p><strong>First name:</strong> {personalInfo.firstName}</p>
                <p>Last name: {personalInfo.lastName}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
                <p>Location: {personalInfo.location}</p>
                <p>GitHub: {personalInfo.github}</p>
                <p>Website: {personalInfo.website}</p>
                <button 
                type="button"
                className="btn"
                onClick={handleSubmit}
                >
                    Edit
                </button>
            </div>
        );
    }

    return (
    <div>
        <h2>Personal Information</h2>
        <form className="personalForm" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input 
            type="text" 
            id="firstName" 
            name="firstName"
            placeholder="First name"
            required
            onChange={handleChange}
            value={firstName}
                />
            <label htmlFor="lastName">Last name</label>
            <input 
            type="text" 
            id="lastName" 
            name="lastName"
            placeholder="Last name"
            required
            onChange={handleChange}
            value={lastName}
                />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email" 
                name="email"
                required
                onChange={handleChange}
                value={email}
                />
            <label htmlFor="phone">Phone</label>
            <input 
            type="text" 
            id="phone" 
            name="phone" 
            onChange={handleChange}
            value={phone}
            />
            <label htmlFor="location">Location</label>
            <input 
            type="text" 
            id="location" 
            name="location"
            onChange={handleChange}
            value={location}
            />

            <label htmlFor="github">GitHub</label>
            <input 
            type="text" 
            id="github" 
            name="github"
            onChange={handleChange}
            value={github}
            />
            <label htmlFor="website">Website</label>
            <input 
            type="text" 
            id="website" 
            name="website" 
            onChange={handleChange}
            value={website}
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

export default PersonalInfo;