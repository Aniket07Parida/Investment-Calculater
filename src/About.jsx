import React from "react";

export default function About({ title, description, code }) {
    return (
        <>
            <div >
                <h2>{title}</h2>
                <p>{description}</p>
                <code>{code}</code>
            </div>
        </>
    )
}