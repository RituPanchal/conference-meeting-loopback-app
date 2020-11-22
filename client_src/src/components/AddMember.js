import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMember extends Component {

    addMember(newMember) {
        axios.request({
            method: "POST",
            url: "http://localhost:3000/api/members",
            data: newMember
        })
            .then(response => { this.props.history.push('/') })
            .catch(err => console.log(err))
    }

    onSubmit(e) {
        const newMember = {
            name: this.nameRef.value,
            email: this.emailRef.value,
            permission: this.permissionRef.value
        }
        this.addMember(newMember);
        e.preventDefault();
    }

    render() {
        return (
            <div className="details-wrapper">
                <br />
                <Link to="/">
                    <i className="fa fa-long-arrow-left back-btn" aria-hidden="true"></i>
                </Link>
                <br />
                <div className="name">
                    <span>Member Details</span>
                </div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref={element => this.nameRef = element} />
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" ref={element => this.emailRef = element} />
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="permission" ref={element => this.permissionRef = element} />
                        <label htmlFor="permission">Permission Level:</label>
                    </div>
                    <input type="submit" value="Invite" className="btn" />
                </form>
            </div>
        )
    }
}

export default AddMember;