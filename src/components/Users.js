import React from 'react';
import { UserConsumer } from '../Context';
import User from './User';
import posed from 'react-pose';

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

class Users extends React.Component {
    state = {
        isVisible: false,
    };

    changeVisibility = (e) => {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    };

    render() {
        const { isVisible } = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                <div className="card-header col-md-6 mb-4">
                                    <h4 style={{ display: 'inline-block' }}>User List&nbsp;&nbsp;</h4>
                                    <button className='btn btn-primary arrow-button' onClick={this.changeVisibility}>
                                        {isVisible ? 'Hide List' : 'Show List'}
                                    </button>
                                    &nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={this.restore}>Restore</button>
                                </div>
                                <Animation pose={isVisible ? 'visible' : 'hidden'}>
                                    {
                                        users.map(user => {
                                            return (
                                                <User
                                                    key={user.id}
                                                    id={user.id}
                                                    name={user.name}
                                                    department={user.department}
                                                    position={user.position}
                                                />
                                            )
                                        })
                                    }
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        );
    }
}

export default Users;