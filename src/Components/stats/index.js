import React from "react";
import "../../index.css"

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Stats(){
    return <footer className="stats">
        <em>👜You have X items and your list,and you already packed X (X%) </em>
    </footer>
}

export default Stats