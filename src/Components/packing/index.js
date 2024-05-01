import React from "react";
import "../../index.css"


function PackingList({item,onDeleteItems}){
    return <div className="list">
    <ul >{
        item.map((item)=><Item item={item} onDeleteItems={onDeleteItems} key={item.id}/>
        )
    }</ul>
    </div>
}

const Item=({item,onDeleteItems})=>{
return  <li>
    <span style={item.packed ? {textDecoration:"line-through"}:{}}>
    {item.quantity} {item.description}
    </span>
    <button onClick={()=>onDeleteItems(item.id)}>❌</button>
</li>

}
export default PackingList