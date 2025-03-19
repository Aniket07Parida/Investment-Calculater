import React from "react";

export default function ButtonHandle({text,onSelct}) {
    return (
        <button type="submit" onClick={onSelct}>{ text}</button>
    )
}