import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom';
import axios from 'axios';

class MemberItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: props.member,
            mute: false
        }
    }

    
    onRemove = () => {
        let memberId = this.state.member.id;
        axios.delete(`http://localhost:3000/api/members/${memberId}`)
        .then(res => this.props.history.push('/'))
        .then(res => this.setState({ member: res.data }, () => console.log(this.state)))
        .catch(err => console.log(err))
        
        window.location.reload();
    }

    handleMute = e => {
        this.setState({
          mute: !this.state.mute
        });
      }

    render() {
        if (!this.props) return null;
        const classNames = this.state.mute ? "user_image fa fa-microphone": "user_image fa fa-microphone-slash";

        return (
                <tr>
                    <td>
                        <i onClick={this.handleMute} className={classNames}></i>
                        <span>{this.state.member.name}</span>
                        </td>
                    <td><span>{this.state.member.email}</span></td>
                    <td>{this.state.member.permission}</td>
                    <td onClick={this.onRemove}><i className="fa fa-trash"></i></td>
                    <td><Link to={`/members/${this.state.member.id}`}><i className="material-icons tiny">more_vert</i></Link></td>
                </tr>
            )
        }
}

export default withRouter(MemberItem);