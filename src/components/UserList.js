import { UserContext } from '../context/UserContext';
import { useContext } from 'react'

const UserList = () => {
    const [users] = useContext(UserContext)
    console.log(users)

    return (
        <>
            <ul>
                {users.map((user, index) => {
                    return (
                        <>
                            <li>{user.username}</li>
                            <li>{user.languages}</li>
                        </>)
                })}
            </ul>
        </>
    )
}

export default UserList
/*
            username
            email
            password
            first_name
            last_name
            nationality
            languages
            living_in_germany
            user_role */