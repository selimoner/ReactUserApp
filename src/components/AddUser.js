import React, { Component } from 'react';
import posed from 'react-pose';
import { UserConsumer } from '../Context';

var uniqid = require('uniqid');

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: 'block',
        },
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: 'none',
        },
    },
});

class AddUser extends Component {
    state = {
        isVisible: false,
        name: "",
        department: "",
        position: ""
    };

    changeVisibility = (e) => {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    };

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearInputs = (e) => {
        this.setState({
            name: "",
            department: "",
            position: ""
        })
    }

    addUser = (dispatch, e) => {
        e.preventDefault();
        const { name, department, position } = this.state;
        const newUser = {
            id: uniqid(),
            name: name,
            department: department,
            position: position
        }
        dispatch({ type: "ADD_USER", payload: newUser });
    }

    render() {
        const { isVisible, name, department, position } = this.state;

        return <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className='col-md-6 mb-4'>
                            <hr />
                            <div className='card'>
                                <div className='card-header'>
                                    <h4 style={{ display: 'inline-block' }}>Add User Form&nbsp;&nbsp;</h4>
                                    <button className='btn btn-primary arrow-button' onClick={this.changeVisibility}>
                                        {isVisible ? 'Hide Form' : 'Show Form'}
                                    </button>
                                </div>
                                <Animation pose={isVisible ? 'visible' : 'hidden'}>
                                    <div className='card-body'>
                                        <form onSubmit={this.addUser.bind(this, dispatch)}>
                                            <div className='form-group'>
                                                <label htmlFor='name'>Name:</label>
                                                <input type='text' name='name' id='id' placeholder='Enter Name' className='form-control' value={name} onChange={this.changeValue} />
                                            </div>

                                            <div className='form-group'>
                                                <label htmlFor='department'>Department:</label>
                                                <input
                                                    type='text'
                                                    name='department'
                                                    id='department'
                                                    placeholder='Enter Department'
                                                    className='form-control'
                                                    value={department}
                                                    onChange={this.changeValue}
                                                />
                                            </div>

                                            <div className='form-group'>
                                                <label htmlFor='position'>Position:</label>
                                                <input type='text' name='position' id='position' placeholder='Enter Position' className='form-control' value={position} onChange={this.changeValue} />
                                            </div>
                                            <hr />
                                            <button className='btn btn-primary btn-block' type='submit'>
                                                Add User
                                            </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className='btn btn-danger btn-block' type='reset' onClick={this.clearInputs}>Clear Inputs</button>
                                        </form>
                                    </div>
                                </Animation>
                            </div>
                        </div>
                    );
                }
            }
        </UserConsumer>



    }
}

export default AddUser;
