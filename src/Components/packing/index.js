import React from "react";
import "../../index.css"


function PackingList({item,onDeleteItems,onToggleitems}){
    return <div className="list">
    <ul >{
        item.map((item)=><Item item={item} onDeleteItems={onDeleteItems} onToggleitems={onToggleitems} key={item.id}/>
        )
    }</ul>
    </div>
}

const Item=({item,onDeleteItems,onToggleitems})=>{
return  <li>
    <input type="checkbox" value={item.packed} onChange={()=>onToggleitems(item.id)}/>
    <span style={item.packed ? {textDecoration:"line-through"}:{}}>
    {item.quantity} {item.description}
    </span>
    <button onClick={()=>onDeleteItems(item.id)}>❌</button>
</li>

}
export default PackingList