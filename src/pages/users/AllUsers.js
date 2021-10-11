import React from "react";
import { GET_USER } from "../../graphql/users";
import { useQuery } from "@apollo/client";
import User from "./User";

export default function AllUsers(){

    const {loading,data,startPolling} = useQuery(GET_USER);

    function renderUsers(){
        return data.allUsers.map(({_id,uName}) =>{
            return <User title={uName}text={_id}></User>

        })
    }
    return <React.Fragment>
        {loading ? <p>cargando...</p> : <ul>{renderUsers()}</ul>}
    </React.Fragment>
}