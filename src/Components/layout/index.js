import React, {useState} from "react";
import Form from "../form";
import PackingList from "../packing";
import Stats from "../stats";
import Logo from "../logo";
import "../../index.css"


const Layout=()=>{
    const [items,setItems]=useState([])


    const handleAddItems=(item)=>{
        setItems(items=>[...items,item])
    }

    const handleDeleteItem=(id)=>{
        setItems(items=>items.filter(item=>item.id !== id))
    }

    const handleToggleitem=(id)=>{
        setItems(items=>items.map(item=>item.id===id ? {...item, packed:!item.packed}:item))
    }
    return <div>
        <Logo/>
        <Form onAddItems={handleAddItems} />
        <PackingList item={items} onDeleteItems={handleDeleteItem} onToggleitems={handleToggleitem}/>
        <Stats items={items}/>
    </div>
}

export default Layout