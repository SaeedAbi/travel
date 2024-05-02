import React, {useState} from "react";
import "../../index.css"


function PackingList({item,onDeleteItems,onToggleitems,onClearItems}){
    const [sortBy,setSortBy]=useState('input')
    let sortedItems

    if(sortBy==='input') sortedItems=item
    else if(sortBy==='description') sortedItems=item.slice().sort((a,b)=>a.description.localeCompare(b.description))
    else if(sortBy==='packed') sortedItems=item.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))



    return <div className="list">
    <ul >{
        sortedItems.map((item)=><Item item={item} onDeleteItems={onDeleteItems} onToggleitems={onToggleitems} onClearItems={onClearItems} key={item.id}/>
        )
    }</ul>

        <div className="actions"></div>
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="input">Sort by the input</option>

            <option value="description">Sort by the description</option>

            <option value="packed">Sort by the packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>

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