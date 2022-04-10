import React from "react";
import { Duck } from "./demo";

interface DuckItemProps {
    duck: Duck;
}

export default function DuckItem({duck}:DuckItemProps) {
    return(
        <div> 
            <span>{duck.name}</span>
            <button onClick={()=> duck.makeSound!(duck.name + 'quack')}>Make Sound</button>
        </div>

    )
}