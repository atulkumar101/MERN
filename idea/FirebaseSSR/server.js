const express = require("express");
// const React = require("react");
import React from 'react';
import { renderToString } from "react-dom/server";
import App from "./src/components/App.jsx";
//import {store} from './store';
import {Provider} from 'react-redux';
import {StaticRouter,matchPath } from 'react-router-dom';
import cookieParser from 'cookie-parser';
import setLoginReducer from './src/Reducers';
import {setLogin} from './src/Actions';
import { createStore } from "redux";

//Get Routes

import FetchRoute from './src/Routes.js'
// admin service account setup
const admin =  require('firebase-admin');
//var serviceAccount = require('./serviceaccount.json');

const adminFirebase=admin.initializeApp({
  credential: admin.credential.cert({
    "project_id": "testingreact-d4cdf",
    "private_key_id": "18a03411462c1e8ce5a0b8fe9652e3e66c85c62c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoVwFQ2vEp4bWl\noLx0LxS4bxZn706vtLeHzfyieDfa5JrMW87S/lHbo5SLQNy1FGASOypmhCINC3Mw\nTJF05u0SEXDdcWYiMZSvuJB/J1cOX9rpg9YbGYQYTmVOLg4e2i4at7GLLEtlbVTg\nbaj5kiSidNt8HsUt0VmrTqbXPdR+URPyRGPbwBD9jEOtVe/1f+ElCFSnW5XktmbW\n0FrhBirQvGVsVajgum8v7unnLPsD0YiGncqRiArnlTX8XVex4L99ONDLGcC1zJ74\ni0CmiIgdotQsyvYWAj01YbbpRjV5VmYXA4gJxKdFyUmMA9gmVrkcUyZQQFVphpwH\nb5LJT7IXAgMBAAECggEAEnSDaOqv22sVdSSDietAHB4q+IG0VdqmmkVbZ9vCfTAT\nG8oJiSPSM+r26zNVCacZBzakUIaLjcmOZcz8egf3v+4t5PZnKjgsTagayKM2oz/1\nVHoccW52hwxP2pEoVs/i6RFFbiAQ3fxCp14Y/c9nTnDS6oRxvTMBNSDTdVp1HtSK\n1Ei8/FM55IbFbfx5uVUjvDtPYT1JGQvCVOIEOVHTgWEouV6BzE24ekUIzctFpQ2n\nBnTZrWgzGdkZg/bt5SgBI+68c/Qdy0VqzJQFYfGVHcDhAYXOnmNvsfPjvRb+gtJN\ntgmP3CEuYBm/i2BI22GdvBX86QZZbTUfHoIRhx0aKQKBgQDRvz9uZ7wyozupI2C3\nk6eFb6l1KN1vVPC7+GZd9f5bRTTOqrjB27qAZDsPfIQ3LjuxvCULaRBr81QyZVfa\ntnr5bZkkk+pZ6X3jb1NYsRtzSaaRQ/VYaGFfW7ajZ1xiCToxE7R4YkkEkxbevFct\nt04dndRnaI7x+qUCKOVQKWvC6QKBgQDNdjdfWFipYoQUX+GrW245XwAY+fV1p9uL\nBx2TBhia25wJg/tFI3smt+K0b0C81tDbu9Z99O6V1kB0aXa3JVyzeFQj0JiiONlD\nChU4mRQoN4sedoChw0oytubSaTygvHedwr4MWHuEP2FH+lYa0ZIvV5KWD17H04ez\nBpyk9WSs/wKBgQDNLHN0IG1sa1i0/zJg4UMBuFTfknXprgE/HqGkUDncNjqN31qT\n58jsRx+u6nK7N7KVDiJ+ouu5bXFzSsdB3zc0Pw2LRlX8VfcbP48cN0NO50DU4NFj\nBdgaW7Cw7y7jh3sw/sGO8TXUD75Ta5Er2x/CwN1Bunn6IuC+2BpY6+vJ4QKBgDrM\nQO5tNvpKcifuhINoZ/PNJxb+uWsRPXfc8m63yOTQQihK9+aCT+T1rNAcIneoNh8b\n8zcamAiTRuDJqaqh65SEs/eH45ZRFIPl58rJrAYSVyLBoPAqFhrLUuUWLr6FEOo5\n5+9ahwaCqNFTZ77HCMG5mv6MqYAgHe5yzvM6MrR7AoGAEHAQnvVjNCgDapFQmMf6\nozBTBf91WS7A0s8nuHz7NfCSlgfVTY6QrGBK0/bWH61bdF+9XIcnQkhiNeQzMBvy\nxXdDYxZA1gFq5GJv3bx7ARFgigRrXKXzB58zMfyuJ/BXUAxjsT4f7D5LkuaX/RY7\nTei2NTKDLtAi8s6BZEedwtA=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ivrsp@testingreact-d4cdf.iam.gserviceaccount.com",  
    }
    ),
  databaseURL: 'https://testingreact-d4cdf.firebaseio.com'
});

const app= express();

// console.log('inside server.js');
app.use(express.static('public/'));

app.use(cookieParser());


const template = (preloaded,html) => (`
    <!DOCTYPE html>
    <html lang="en">
    <head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <link rel="stylesheet" href="main.css" />
    <title>MyServer</title>
    <script>window.__preloaded__=${JSON.stringify(preloaded)}</script>
    </head>
    <body>
    <div id='root'>${html}</div>

    <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
    <script src='/main.js'></script>
    </body>
    </html>
        `);




app.get('*',(req,res)=>{
   
    //create Store

    const store= createStore(setLoginReducer);
    
    const LoadedRoute = FetchRoute.find(route=>matchPath(req.url,route))||null;

   // console.log('LoadedRoute',LoadedRoute);
    if(LoadedRoute){
        console.log('Working');
        
    }
    else{
        res.send(404,"Page Doesnt exist");
        
    }

    console.log('url',req.url);
    
    if(req.url === '/favicon.ico'){
        res.send(404,"404");
    }

    else{


var {token}=req.cookies;

// console.log(token);

// console.log('cookies',req.cookies)

// console.log('current user',firebaseApp.auth().currentUser);
// console.log('req.url',req.url)
// console.log('Verifying token', token);
let markup,html,context={};
if(!token){
//    console.log( 'token not defined')
    store.dispatch(setLogin(false));
    markup = (
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App />     
            </StaticRouter>
        </Provider>)
        html = renderToString( markup);
        console.log('context.url',context)
        const preloaded = store.getState(); 
        if (context.url) {
            // Somewhere a `<Redirect>` was rendered
            res.redirect(301, context.url)
          }else{
        // template
        res.send(template(preloaded,html));
          }
}
else{
    // // console.log('console defined');
    
adminFirebase.auth().verifyIdToken(token)
    .then(decodedToken => {
        const uid = decodedToken.sub;
        // console.log('User is authenticated for this request', uid);
        store.dispatch(setLogin(true));
        console.log('dispatching true');
        
        // renderWithUser();
    })
    .catch(err => {
        // auth=false;
        store.dispatch(setLogin(false));
        console.log('dispatching false');
        
        // console.error('WARNING token invalid or user not found', err);
        // renderWithoutUser();
    })
    .then(()=>{
         markup = (
            <Provider store={store}>
                <StaticRouter context={{}} location={req.url}>
                    <App />     
                </StaticRouter>
            </Provider>)
            html = renderToString( markup);

            const preloaded = store.getState(); 
            if (context.url) {
                // Somewhere a `<Redirect>` was rendered
                res.redirect(301, context.url)
              }else{
            res.send(template(preloaded,html));
              }
    })
    ;
}
    /* const markup = (
    <Provider store={store}>
        <StaticRouter context={{}} location={req.url}>
            <App />     
        </StaticRouter>
    </Provider>)
    const html = renderToString( markup); */
    // console.log(html);
    // console.log(context.url);
/*     const preloaded = store.getState(); 
 */
    

    /* if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        res.redirect(301, context.url)
      } else { */
    /* res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
    <link rel="stylesheet" href="main.css" />
    <title>MyServer</title>
    <script>window.__preloaded__=${JSON.stringify(preloaded)}</script>
    </head>
    <body>
    <div id='root'>${html}</div>
    
    <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
    <script src='/main.js'></script>
    </body>
    </html>
        `
    ); */
    
// }


    }
    



});

app.listen(8090, ()=>console.log('listen on 8090'));