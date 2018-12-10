import Cookies from 'js-cookies';
import {firebaseApp} from '../../firebase.js';

export const setAppCookie = ()=>{ return new Promise( (resolve,reject)=>
    {   var value;
        console.log('pending............')
        value=firebaseApp.auth().currentUser &&
        firebaseApp.auth().currentUser.getIdToken().then(token => {
            console.log('inside set cookies ',token);
                value= Cookies.setItem('token', token, {
                domain: window.location.hostname,
                expire: 1 / 24, // One hour
                path: '/',
                secure: true // If served over HTTPS
            }
        );
        console.log('Value',value);
        return value;  
            
    // props.history.push('/Dashboard');
    //window.location.reload();
    // console.log('cookies is all set',props.history.length);
    })
    .catch(err=>{
        console.log('err',err);    
    });
    
   if(value){resolve(true)}
   else {reject('Didnt resolved')}
});

}

export const unsetAppCookie = () => 
    Cookies.removeItem('token', {
        domain: window.location.hostname,
        path: '/',
    });