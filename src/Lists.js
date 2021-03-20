import React from 'react';
import './Lists.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Lists(props){
    const inputs = props.inputs;
    const itemsList = inputs.map((item)=>{
        return <div className="items" key={item.key}>
            <p>
                <input 
                type="text"
                id={item.key}
                value={item.text}
                onChange = {
                    (event) => {
                        props.update(event.target.value, item.key)
                    } 
                }/>
            <span className="span2">
                <FontAwesomeIcon className="trashIcon" icon='trash' onClick={()=> props.trashItem(item.key)}/>
            </span>
            </p>
        </div>
    })
    return (
        <div>{itemsList} </div>
    )
}

export default Lists;

