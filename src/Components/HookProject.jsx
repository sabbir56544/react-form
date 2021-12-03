import React, {useEffect, useState} from 'react'

const HookProject = () => {

    const [users, setUser] = useState([])
    const getUsers = async () => {
        // fetch('https://api.github.com/users')
        //     .then(response => response.json())
        //     .then(users => console.log(users))
        const response = await fetch('https://api.github.com/users')
        setUser(await response.json())
        console.log(setUser)
    }
    useEffect(() => {
        getUsers()
        console.log('useEffect')
    }, [])
    return (
        <div>
            <section className="section-products">
                <div className="container">
                        <div className="row justify-content-center text-center">
                                <div className="col-md-8 col-lg-6">
                                        <div className="header">
                                                <h3>Featured Product</h3>
                                                <h2>Popular Products</h2>
                                        </div>
                                </div>
                        </div>
                        <div className="row">

                        {
                            users.map((user) => {
                                return(
                                    <>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div id="product-1" className="single-product">
                                                <div className="part-1">
                                                     <img src={user.avatar_url} alt="" />
                                                </div>
                                                <div className="part-2">
                                                        <h3 className="product-title">Name - {user.login}</h3>
                                                        <h4 className="product-price">NoteId - {user.node_id}  </h4>
                                                        <h4 className="product-price" style={{paddingLeft:'5px'}}>Type - {user.type}</h4>
                                                </div>
                                              
                                        </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                                
                                
                        </div>        
                </div>   
                        
            </section>
                     
        </div>
    )
}

export default HookProject;
