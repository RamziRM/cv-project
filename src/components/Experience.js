import React, { useState } from "react";
import "../styles/Experience.css";

const Experience = () => {

    const [editMode, setEditMode] = useState(true);
    const [experience, setExperience] = useState({
        name: "",
        title: "",
        startDate: "",
        endDate: "",
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(!editMode)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const { name, title, startDate, endDate, description } = experience;

    if (!editMode) {
        return (
            <div className="read-cont">
                <h2>Experience</h2>
                <p>Company Name: {experience.name}</p>
                <p>Title: {experience.title}</p>
                <p>Start Date: {experience.startDate}</p>
                <p>End Date: {experience.endDate}</p>
                <p>Description: {experience.description}</p>
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
            <h2>Experience</h2>
            <form className= "expForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        onChange={handleChange}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        placeholder="Start Date"
                        required
                        onChange={handleChange}
                        value={startDate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        placeholder="End Date"
                        onChange={handleChange}
                        value={endDate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="Description"
                        required
                        onChange={handleChange}
                        value={description}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Experience;