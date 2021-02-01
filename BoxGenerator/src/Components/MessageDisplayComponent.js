import React from 'react'

const MessageDisplayComponent = (props) => {

    return (
        <div>
    
    
    <>
            <h1>Current Message</h1>
            <div>{ props.message.map((item, index)=> {
            let style ={background:item, height:"250px", width:"250px" , display: "inline-block" , margin: "10px"};
            return  <div key={index} item ={item} style={style}> </div>
            }) }</div>

        </>
            
        </div>
    )
}

export default MessageDisplayComponent
