import React from 'react';

let myUser;
if (localStorage.getItem('user')) {
    try {
        myUser = JSON.parse(localStorage.getItem('user'))
        console.log(myUser.id);
    } catch (error) { }
}


const Info = () => {
    return (<>
        <h1>inpormation:</h1>
        <div style={{ "border": "solid 1px", "backgroundColor": "purple" }}>
            <h3>name : {myUser?.name}</h3>
            <h3>email : {myUser?.email}</h3>
            <h2>address :</h2>
            <h3> street : {myUser?.address?.street}</h3>
            <h3>city : {myUser?.address?.city}</h3>
            <h3>phone : {myUser?.phone}</h3>
            <h3>website : {myUser?.website}</h3>
            <h2>company : </h2>
            <h3>name: {myUser?.company?.name}</h3>
            <h3>catchPhrase: {myUser?.company?.catchPhrase}</h3>
            <h3>bs:  {myUser?.company?.bs} </h3>

        </div>
    </>
    )
}

export default Info;

