import React from "react";
import "../../index.css"

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Logo(){
    return <div>
        <h1>🌴Far Away👜</h1>
    </div>
}

export default Logo