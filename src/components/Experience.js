import React, { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: true,
            experience: {
                name: "",
                title: "",
                startDate: "",
                endDate: "",
                description: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
                experience: {
                    ...prevState.experience,
                    [name]: value
                }
            })
        );
    }

    render() {
        const { editMode, experience } = this.state;
        const { name, title, startDate, endDate, description } = experience;

        if (!editMode) {
            return (
                <div>
                    <h2>Experience</h2>
                    <p>Company Name: {experience.name}</p>
                    <p>Title: {experience.title}</p>
                    <p>Start Date: {experience.startDate}</p>
                    <p>End Date: {experience.endDate}</p>
                    <p>Description: {experience.description}</p>
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
                <h2>Experience</h2>
                <form className= "expForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            value={description}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default Experience;