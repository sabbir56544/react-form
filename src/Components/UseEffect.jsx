import React, {useEffect, useState} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)

    const chageEffect = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if(count === 0) {
            document.title = `clicks`
        }
        else {
            document.title = `Clicks (${count})`
        }
        console.log('useEffect') // second priroty
    }, [count])
    console.log('render') // first priority

    return (
        <div>
            <div className="container">
                <div className="container">
                    <h1>useEffect - {count}</h1>
                    <div className="container">
                        <button className="btn btn-success" onClick={chageEffect}>Click</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
