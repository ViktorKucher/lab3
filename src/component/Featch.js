import React, {useEffect} from "react";
import {useState} from "react";
import Modal from 'react-bootstrap/Modal';
function Featch(){
        const [arrayItem,setArrayItem]=useState([]);
        const [count,setCount]=useState(0);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(data=>data.json())
                .then(arr=>setArrayItem(arr))
        },[])
        console.log(arrayItem)
        function increment(){
            if(!(count>=arrayItem.length)){
                setCount(count+5);
            }

        }
        function decrement(){
            if(!(count === 0)){
                setCount(count-5);
            }

        }
    return(
        <>
            <p>{count}</p>
            {

                arrayItem.map((item)=>{
                    if(item.id < count || item.id > (count+5)){
                        return
                    }
                    return(
                        <div className={'divItem'}>
                            <img className={'imgItem'} src={item.url} />
                            <span className={'spanItem'}>{item.title}</span>
                            <span className={'spanItem'}>{item.id}</span>
                        </div>)

                })
            }
            <button onClick={decrement}>prev</button>
            <button onClick={increment}>next</button>
            <div>{count+5}...{arrayItem.length}</div>
            <Modal></Modal>
        </>
    )
}
export default Featch;