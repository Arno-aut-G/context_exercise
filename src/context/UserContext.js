import { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext()

export const UserController = (props) => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        axios
            .get('http://localhost:3002/users/')
            .then(res => {
                setUsers(res.data.users)
            })
            .catch(err => {
                console.log(err)
            })
    }



    useEffect(() => {
        fetchData()
    }, [])

    return (
        <UserContext.Provider value={[users]}>
            {props.children}
        </UserContext.Provider>
    )
}

