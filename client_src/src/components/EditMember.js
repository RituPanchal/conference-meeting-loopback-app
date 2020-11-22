import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditMember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            permission: ''
        }
        this.nameRef = React.createRef();
    }

    componentDidMount() {
        this.getMemberDetails();
    }

    getMemberDetails() {
        axios.get(`http://localhost:3000/api/members/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email,
                    permission: res.data.permission,
                }, () => console.log('details', this.state));
            })
            .catch(err => console.log(err));
    }

    handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    editMember(newMember) {
        axios.request({
            method: "PUT",
            url: `http://localhost:3000/api/members/${this.state.id}`,
            data: newMember
        })
            .then(response => { this.props.history.push('/') })
            .catch(err => console.log(err))
    }

    onSubmit(e) {
        const newMember = {
            name: this.nameRef.current.value,
            email: this.emailRef.value,
            permission: this.permissionRef.value
        }
        this.editMember(newMember);
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
                    <span>Edit Member</span>
                    {/* <h1>Edit Member</h1> */}
                </div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref={this.nameRef} value={this.state.name} onChange={(e) => this.handleOnChange(e)} />
                        <label className="active" htmlFor="name">Name:</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" ref={element => this.emailRef = element} value={this.state.email} onChange={(e) => this.handleOnChange(e)} />
                        <label className="active" htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="permission" ref={element => this.permissionRef = element} value={this.state.permission} onChange={(e) => this.handleOnChange(e)} />
                        <label className="active" htmlFor="permission">Permission Level:</label>
                    </div>
                    <input type="submit" value="Update" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditMember;