import React, { Component } from "react";
import PropTypes from "prop-types";
import { UserConsumer } from "../Context";

class User extends Component {

    state = {
        isVisible: false
    }
    onClickEvent = (number, e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_USER", payload: id });
    }
    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        // Destructing
        const { id, name, department, position } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;

                        return (

                            <div className="col-md-6 mb-4" >
                                <hr />
                                <div className="card" style={isVisible ? { backgroundColor: "#96c4c3", color: "white" } : null}>
                                    <div className="card-header d-flex justify-content-between" onClick={this.onClickEvent.bind(this, 21)}>
                                        <h4 className="d-inline" >{id}- {name}</h4>
                                        <button className="btn btn-warning btn-block" type="button">Update</button>
                                        <button onClick={this.onDeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></button>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">Department : {department}</p>
                                            <p className="card-text">Position : {position}</p>
                                        </div> : null
                                    }

                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}

User.defaultProps = {
    name: "No name provided.",
    department: "No department provided.",
    position: "No position info provided."
}

export default User;
