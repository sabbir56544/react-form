import React, {useState} from 'react'



const UseState = () => {

    const [text, setText] = useState()

    const [ntime, setTime] = useState()

    const date = new Date()
    const time = date.getHours()

    const changeSubmit = () => {
        setText('Welcome Sabbir')
        if (time > 12){
            setTime('Good Night')
        }
        else{
            setTime('Good Morning')
        }
    
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="container mt-5">
                    <h1 className="text-dark">{text} {ntime}</h1>
                    <button className="btn btn-primary" onClick={changeSubmit}>Click Me</button>
                </div>
            </div>
        </div>
    )
}

export default UseState
