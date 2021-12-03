import React, {useState} from 'react'


const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        name: 'Sabbir Ahmed',
        age: 0,
     })

     const changeObject = () => {
            setMyObject({
                ...myObject, age: myObject.age + 1
            })

     }
    return (
        <div>
            <div className="container">
                <div className="container mt-4">
                    <h3>UseState With Spread Operator</h3>
                    <div>
                        <h5>Hello My name is {myObject.name} . I am {myObject.age} Years old.</h5>
                        <button className="btn btn-primary" onClick={changeObject}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseStateObject
