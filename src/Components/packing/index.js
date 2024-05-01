import React from "react";
import "../../index.css"

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 12, packed: false }
];

function PackingList({item}){
    return <div className="list">
    <ul >{
        item.map((item)=><Item item={item} key={item.id}/>
        )
    }</ul>
    </div>
}

const Item=({item})=>{
return  <li>
    <span style={item.packed ? {textDecoration:"line-through"}:{}}>
    {item.quantity} {item.description}
    </span>
    <button>❌</button>
</li>

}
export default PackingList