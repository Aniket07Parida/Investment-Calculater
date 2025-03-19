import React, { useState } from "react";
import CoreComponents from "./CoreComponents";
import { Data } from "./Data";
import { EXAMPLES } from "./Example";
import About from "./About";
import ButtonHandle from "./Button";

import './index.css'; 

export default function App() {
    const [content, setContent] = useState(null);

    function handelSelect(selectedButton) {
        setContent(selectedButton);
    }

    return (
        <>
            <header>
                <h1>React Essential</h1>
                <p>Core React concepts you will need for almost any app you are going to build!</p>
            </header>
            <div className="container">
                <h3>Core Concepts</h3>
                <ul>
                    {Data.map(item => 
                        <CoreComponents 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.image} />
                    )}
                </ul>
            </div>
            
            <h2 id="example">Example</h2>
            <menu className="Button">
                <ButtonHandle onSelct={() => handelSelect('components')} text={'Components'}/>
                <ButtonHandle onSelct={() => handelSelect('jsx')} text={'JSX'}/>
                <ButtonHandle onSelct={() => handelSelect('props')} text={'Props'}/>
                <ButtonHandle onSelct={() => handelSelect('state')} text={'State'}/>
            </menu>
            <div className="contant" >
                {!content && <p>Please select a topic.</p>}
                {content && EXAMPLES[content] && (
                    <About 
                        title={EXAMPLES[content].title}
                        description={EXAMPLES[content].description}
                        code={EXAMPLES[content].code}
                    />
                )}
            </div>
        </>
    );
}