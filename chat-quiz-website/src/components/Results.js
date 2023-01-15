import React, { useEffect, useState } from "react";
import { storeDB } from "../firebase";
import { Table, Thead, Tr, Th, Th1, Th2, Photo, UserName, UserInfo } from "../styled-components/resultsStyle";


function Results() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        storeDB.collection("users").onSnapshot((querySnapshot) => {
            const usersArr = []
            querySnapshot.forEach((doc) => {
                usersArr.push(doc.data())
            })
            setUsers(usersArr)
        })
    }, [])


    return (
        <Table>
            <Thead>
                <Tr>
                    <Th1>user</Th1>
                    <Th>scores</Th>
                </Tr>
            </Thead>
            <tbody>
                {users.map(user =>
                    <Tr key={user.user}>
                        <Th1 >
                            <UserInfo>
                                <Photo src={user.photoURL} />
                                <UserName>{user.displayName}</UserName>
                            </UserInfo>
                        </Th1>
                        <Th2>
                            {user.result}
                        </Th2>
                    </Tr>)}
            </tbody>
        </Table>
    )
}

export default Results