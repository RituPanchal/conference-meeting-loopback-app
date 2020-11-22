import React, { Component } from 'react';
import axios from 'axios';
import MemberItem from './MemberItem';

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        this.getMembers();
    }

    getMembers() {
        axios.get('http://localhost:3000/api/members').then(res => {
            this.setState({ members: res.data }, () => console.log(this.state));
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
            <div className="artBoard">
                <div className="contentBoard">
                    <div className="tableBoard">
                        <table id="emp_table" className="empTable">
                            <thead>
                                <tr>
                                    <th>Team member</th>
                                    <th>Email</th>
                                    <th>Permission level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.members.map((item, index) => {
                                        return (
                                            <MemberItem key={item.id} member={item} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>             
        )
    }
}

export default Members;
