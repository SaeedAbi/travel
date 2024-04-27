import React from "react";
import Form from "../form";
import PackingList from "../packing";
import Stats from "../stats";
import Logo from "../logo";
import "../../index.css"


const Layout=()=>{
    return <div>
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
    </div>
}

export default Layout