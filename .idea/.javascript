exports.Y=function() {
    return _;
};

var x= require('./_');
x.Y();



export function add(a, b) {
  return a + b;
}

import { add } from './math.js';
console.log(add(16, 26)); // 42



Application Programming Interface
like waiter
Communication
Endpoint
Abstract


Simple Object Access Protocol SOAP
Remote Procedure Call RPC
Representational State Transfer REST


window.navigator.vibrate(200) or [200] in ms

window.navigator.vibrate(0) or []



fetch('').then(response=> {
//response.ok==true
//response.status
//response.statusText
//response.json()
//response.text()
//response.blob //Binary Large Object

objectYR = URL.createObjectURL(blob)

})

AJAX-Asynchronous Javascript And XML
var request = new XMLHttpRequest();

//request.onreadystatechange=
request.onload= function() {
//request.status==200
//request.readyState===4
=request.responseText;
};

request.reponseType='text';
request.open('GET', url);
request.send();




Promises
new Prmoise(function(resolve, reject){
//resolve()
//reject
}).then()
.catch()

pending
fulfilled
rejected


Promise.all([])
Promise.race([])
Promise.reject()
Promise.resolve()

async function() {
await function () //return Promise
} 
//implicit Promise

sequentialStart
concurrentStart
stillSerial Promise.all
parallel Promise.then


var = setTimeout(()=> {}, milliseconds)
clearTimeout(var)






var = setInterval(()=> {}, milliseconds)
clearInterval(var)






Javascript Object
.json
MIME type application/json
single quotes are not valid
JSON.parse()
JSON.stringify() 




Notification.requestPermission()
-granted
-denied

return Promises
var img='';
var text='';
var notification = new Notification('',{body:text, icon:img});

setTimeout(notification.close.bind(notification), 4000);

if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
var geoSuccess=(position) =>{
position.coords.latitute
position.coords.longitute
}
var geoError=(error)=> {
}
}

watchPosition()
clearWatch()

Library 
-jQuery, React
developer is in control
vs Inversion of Control 
Framework
-Angular
control is inverted
framework calls developer's code

Cookies
vs
WebStorage
-sessionStorage
-localStorage
IndexedDB
Cache API








https://pixabay.com/


https://www.browserstack.com/
http://browsershots.org/


Javascript
----------
-lightweight
-cross-platform
-dynamic
-interpreted or JIT-compiled programming language
-object-oriented language
-scripting language
-runtime 
-prototype-based object model
-free-form language
-case-sensitive
-unicode character
-dynamically typed language

/*
-Rendering Engine
Internet Explorer - Trident
Firefox - Gecko
Safari - Webkit
Chrome & Opera -Blink (fork Webkit)
*/

Engine
-SpiderMonkey(C/C++)-Firefox
-Rhino(Java)-
-Google's V8-Chrome
-SquirrelFish/Nitro-Safari
-Carakan-Opera
-Chakra-Internet Explorer



Variable
--------
var 
default undefined
undeclared access ReferenceError exception
let
const
_ $

undefined false NaN
null 0 & false
 

-Variable Scope
-Variable Hoisting
-Function Hoisting

1.Boolean
2.null
3.undefined
4.Number
5.String
6.Symbol
7.Object

parseInt()
parseFloat()
(+'1.1') + (+'1.1') // 2.2  

Falsy Value
false
undefined
nulll
0
NaN
""

Exception
---------
try 
{throw " "} or {throw new Error('')}
catch
finally

Promises
--------
Pending
FulFilled
Rejected
Settled

new Promise((resolve,reject) =>{
resolve('');
reject(Error(''));
}).then(
).catch(
)  


for(var variable in object) //propertynames
for(var variable in object) //propertyvalues


Function
--------
*Primitive parameters - passed by value
*Non-Primitive parameters - passed by address such as array or user-defined object

.name
.length
//.caller
//.arguments

.apply(this, array or array-like object)
.call(this, argument list)
.bind(this)

.toString()

-Recursion 
*Stack
*Private - Variable defined inside cannot be accessed from anywhere outside function
*Inherit-Function can access all variables & functions defined in its parent except this = window or undefined

-Nested Function
Closure-Encapsulate
function(outside arg)(inside arg)
or
x=funtion(outside arg);
y=x(inside arg);

Name Conflict
*More inner scopes take precedence
*Inner-most scope - highest precedence
*Outer-most scope - Lowest precedence

arg-array-like object
arguments.length
arguments[]

default parameter
function(args=1)
rest parameter
function(...args)

-Arrow Functions
*does not have its own this, arguments,super, or new.target
*anonymous

eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()

Operators
---------
Destructuring-array/object
var [] = x;

Exponentiation 2 ** 3 returns 8

delete sets to undefined & return true or false
but cannot delete var

typeof 
javascript:void(0)
in
_ instanceof objectType

Expressions
-----------
Spread operator ...args

Binary
0B or 0b
range 0-1
Ocatal 
0 or 0o
range0-7
Hexadecimal
0X or 0x
range0-9A-F
Exponentiation
1E1 or 1e1

Date
----
var date= new Date();
set()
get()
to()
.parse & UTC
.getDay()
.getMonth()
.getFullYear()
.getHours()
.getMinutes()
.getSeconds()
.getTime() //milliseconds since Jan 1, 197, 00:00:00
.setTime()

String
------
var str= ''
var str= ""
var str=new String('')
var str=``

immutable array-like objects
charAt() charCodeAt() codePointAt()
indexOf() lastIndexOf() 
startsWith() endsWith() includes()
concat()
fromCharCode() fromCodePoint()
split()
slice()
substring() substr()
match() replace() search()
toLowerCase() toUpperCase()
repeat()
trim() trimEnd() trimStart()
valueOf() toString()

.sort()
.Intl()

Array
-----
var arr = new Array();
var arr = Array();
var arr = []
var arr = Array.of()

.length
.forEach
.map

.filter()
.every()
.some()
.reduce()
.reduceRight()

.concat()
.join(delimiter=',')
.push()
.pop()
.shift()
.unshift()
.slice()
.reverse
.sort()
.indexOf()
.lastIndexOf()

Map
---
var map=new Map()
*insertion order
map.set('','');
map.size()
map.get()
map.has()
map.delete()
map.clear()
for(var [key,value] of map)

Set
---
*insertion order
*unique value
var set = new Set()
set.add()
set.has()
set.delete()
set.size()
for(var i of set)
Array.from
[...set]
set=new Set(arr)

Objects
-------
var obj=new Object()
Object.create()

*String type as key type
*not valid identifier - accessed square bracket notation












Prototype-based lang
create class at runtime time
Javascript weakly typed language
 false || true
instanceOf 

.
[]

var person1={}
var person1= new Person('_');
function Person(_) {
this._=_;
}

var person1=new Object({_});
var person2=Object.create(person1);

inherit object
.prototype.
.__proto__


Asynchronous
const promise = function(something);
promise.then(success,failure);

Queue

new Promise((resolve,reject)=> {
resolve()
//reject()
})
.then(()=>{
//throw new Error('Error');
})
.catch(()=>{
})

or

async function () {
const result = await function();
}

