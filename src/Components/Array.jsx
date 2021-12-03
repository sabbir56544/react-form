import React from 'react'
import ArrayList from './ArrayList'


const Array = () => {
    return (
        <div>
            <div className="container">
                <div className="container mt-5">
                    
                      {
                          ArrayList.map((item) => {
                                return (
                                    <>
                                        <div className="card" key={item.id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text"><small className="text-muted">{item.date}</small></p>
                                            </div>
                                        </div>
                                    </>
                                )
                          })
                      }
                      
                    
                </div>

              
            </div>
        </div>
    )
}

export default Array
