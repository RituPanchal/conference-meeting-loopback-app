import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MemberDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member_details: ''
        }
    }

    componentDidMount() {
        this.getMember();
    }

    getMember() {
        axios.get(`http://localhost:3000/api/members/${this.props.match.params.id}`).then(res => {
            this.setState({ member_details: res.data }, () => console.log(this.state));
        }).catch(err => console.log(err));
    }

    onRemove = () => {
        let memberId = this.state.member_details.id;
        axios.delete(`http://localhost:3000/api/members/${memberId}`)
            .then(res => this.props.history.push('/'))
            .catch(err => console.log(err));
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
                    <span>{this.state.member_details.name}</span> 
                </div>

                <ul class="collection">
                    <li class="collection-item avatar">
                        <i className="fa fa-user circle"></i>
                        <span class="title"> {this.state.member_details.email}</span>
                        <span className="options">
                            <i className="trash fa fa-trash right" onClick={this.onRemove}></i>
                            <span>
                                <Link to={`/members/edit/${this.state.member_details.id}`}>
                                    <i className="fa fa-pencil-square-o right" aria-hidden="true"></i>
                                </Link>
                            </span>
                        </span>
                        <p>
                            {this.state.member_details.permission}
                        </p>
                        
                    </li>
                </ul>
            
                
            </div>
        )
    }
}

export default MemberDetails;