import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Abudz', 'Aaron', 'Aiman', 'Amber', 'Aiman']
    const persons = [
        {
            id: 1,
            name: 'Abudz',
            age: 35,
            skill: 'Telco'
        },
        {
            id: 2,
            name: 'Aaron',
            age: 34,
            skill: 'Driving'
        },
        {
            id: 3,
            name: 'Aiman',
            age: 28,
            skill: 'Structural'
        },
        {
            id: 4,
            name: 'Amber',
            age: 17,
            skill: 'CF'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index + 1} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
