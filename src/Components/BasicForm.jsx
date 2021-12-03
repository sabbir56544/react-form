import React, {useState} from 'react'

const BasicForm = () => {

    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    
    const [newArray, setArray] = useState([])
    
    
    const changeName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const changeMail = (e) => {
        e.preventDefault();
        setMail(e.target.value)
    }

    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const changeSubmit = (e) => {
        e.preventDefault();
        const newEntry = {id: new Date().getTime().toString(), name: name, mail: mail, password: password}
        setArray([...newArray, newEntry]);
        console.log(newArray)

        setName('')
        setMail('')
        setPassword('')
        
        if (newEntry.name === undefined || newEntry.mail === undefined || newEntry.password === undefined) {
            alert('Please fill out all fields')
        } else {
            alert('Success!')
        }
    }

    return (
        <div>
            <div className="container">
                <div className="container mt-4">
                    <h3>Login Form</h3>
                    <form  onSubmit={changeSubmit} >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" value={name} onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={mail} onChange={changeMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} onChange={changePassword} className="form-control" id="exampleInputPassword1" />
                        </div>
                      
                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                    </form>
                </div>

                <div className="container">
                    {newArray.map((item, id) => {
                        return (
                            <div key={item.id}>
                                <p>Thank you - {item.name} . Check your {item.mail}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default BasicForm
