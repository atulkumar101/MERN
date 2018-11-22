import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from 'react-router';
import App from "../../jsx/App";

import promise from 'promise';
import 'isomorphic-fetch';

app.get("*",(req,res,next) => {
    let auth;
    if(req.session && req.session.auth && req.session.auth.username)
    {
        console.log(req.session.auth.username.toString());
        auth=true;        
    }
    else 
    {
        auth=false;
    }
    const context = {};
    //const jsx=(<App />);

    const reactDom=renderToString(
        <StaticRouter location={req.url} context={context}>
                <App auth={auth}/>
        </StaticRouter>
    )

    console.log('context.url',context.url);
    if (context.url) {
        res.redirect(301, context.url)
    } else {
        //console.log(reactDom);
        //res.writeHead(200,{"Content-Type":"text/html"});
        res.send(htmlTemplate(reactDom,auth));
    }
});


function htmlTemplate (reactDom,auth) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="/style.css">
            <title>
                ReactJS
            </title>
            <script>window.__preloaded__=${auth}</script>
        </head>
        <body>
            <div id="root">${reactDom}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}