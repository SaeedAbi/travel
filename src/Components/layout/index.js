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

    return <div>
        <Logo/>
        <Form onAddItems={handleAddItems}/>
        <PackingList item={items}/>
        <Stats/>
    </div>
}

export default Layout