import React from "react";
import Persons from "./Persons";

function NameList(){
    const names = ['name1', 'name2', 'name1']
//     const persons = [{
//         id:1,
//         name: 'a1',
//         age:20,
//         address:'mumbai'
//     },
//     {
//         id:2,
//         name: 'a1',
//         age:20,
//         address:'mumbai'
//     },
//     {
//         id:3,
//         name: 'a1',
//         age:20,
//         address:'mumbai'
//     },
//     {
//         id:4,
//         name: 'a1',
//         age:20,
//         address:'mumbai'
//     },
// ]
    const nameList =  names.map((name, index)=>(
        <h2 key = {index}>{index}{name}</h2>
    ))

    // const personList =  persons.map((person)=>(
    //    <Persons key = {person.id} person = {person} />
    // ))

    return(
        <div>
           
          {nameList}
          {/* {personList} */}
           
        </div>
    )
}
export default NameList