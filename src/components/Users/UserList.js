import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../actions/users";

const UserList = () => {
    const users = useSelector(state => state.users.users);
    console.log(users, "fetching users");
    const dispatch = useDispatch();

    return (
        <div>
            <button className='ui button primary' onClick={() => dispatch(fetchUsers(users))}>Show</button>
            <hr/>
            <br/>
            <div className='ui three column grid'>
                {users && users.map(user => {
                    return (
                        <div className='ui card' style={{margin: '10px auto'}}>
                            <div className='content'>
                                <div className="header">
                                    {user.title}
                                </div>
                                <div className="description">
                                    {user.body}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default UserList;