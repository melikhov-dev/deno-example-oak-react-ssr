// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from "https://cdn.pika.dev/@pika/react@v16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

const Books = () => (
    <div> 
        <ul>
            <li>DDD</li>
            <li>Clean Architecture</li>
        </ul>
    </div>
)

export const page = (props: {}) => {
    return `<!DOCTYPE html>
    ${ReactDOMServer.renderToString((
        <Books />
    ))}
    `
}