(this.webpackJsonpchiefspaghetti=this.webpackJsonpchiefspaghetti||[]).push([[0],{17:function(e,t,n){e.exports=n(25)},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(22),n(1)),c=n(2);function u(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    padding: 50px 10px;\n"]);return u=function(){return e},e}var s=c.a.div(u());function d(){return r.a.createElement(s,null,r.a.createElement("p",null,"Full Stack Engineer bla bla bla. With a bla bla bla. Lorem ipsum, foo bar baz. loves to bla bla bla.... starwars!"))}var p=n(15),m=n(16),h=n(7),f=n(14);function v(){var e=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    .tag {\n        margin: 5px;\n        padding: 5px;\n        border-radius: 5px;\n    }\n    .date {\n        background-color: grey;\n        color: #ffffff;\n    }\n    .type {\n    }\n"]);return v=function(){return e},e}function b(){var e=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    h1 {\n        margin: 0px;\n    }\n    .expand-arrow {\n        height: 2em;\n        width: 2em;\n        margin-right:20px;\n        color: #209cee;\n        -moz-transition: all 0.4s ease;\n        -webkit-transition: all 0.4s ease;\n        transition: all 0.4s ease;\n    }\n    .down{\n        -moz-transform:rotate(90deg);\n        -webkit-transform:rotate(90deg);\n        transform:rotate(90deg);\n    }\n"]);return b=function(){return e},e}function y(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 5px 10px;\n    margin: 5px 0px;\n    border: 1px solid black;\n    border-radius: 5px;\n"]);return y=function(){return e},e}function g(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    width: 60%;\n    height: calc(100vh - 20px);\n    overflow: auto;\n    /* background-color: pink; */\n"]);return g=function(){return e},e}var x=c.a.div(g()),w=c.a.div(y()),E=c.a.div(b()),k=c.a.div(v()),j={JavaScript:"#f0db4f",React:"#5fd9fb"};function O(){var e=r.a.useState(h.tales.map((function(e,t){return 0!==t}))),t=Object(m.a)(e,2),n=t[0],a=t[1];return r.a.createElement(x,null,h.tales.map((function(e,t){return r.a.createElement(w,{key:t},r.a.createElement(E,null,r.a.createElement("h1",null,e.title),r.a.createElement(f.a,{className:"expand-arrow ".concat(n[t]?"":"down"),onClick:function(){return function(e,t){var n=Object(p.a)(t);n[e]=!n[e],a(n)}(t,n)}})),r.a.createElement(k,null,r.a.createElement("div",{className:"tag date"},e.date),r.a.createElement("div",{className:"tag type",style:{backgroundColor:j[e.type]}},e.type)),r.a.createElement("p",null,e.content[0].value),r.a.createElement("div",null,!n[t]&&e.content.map((function(e,t){var n=e.type,a=e.value;return/^text/.test(n)?r.a.createElement("p",{key:t},a):/^code/.test(n)?r.a.createElement("code",{key:t},a):null}))))})))}function S(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  padding: 50px 10px;\n"]);return S=function(){return e},e}var J=c.a.div(S());function R(){return r.a.createElement(J,null,r.a.createElement("p",null,"Links"),r.a.createElement("p",null,"Links will be here!"),r.a.createElement("p",null,"Very soon"),r.a.createElement("p",null,"ish..."))}function I(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 0px 10px 0px 10px;\n"]);return I=function(){return e},e}var z=c.a.div(I());function N(){return r.a.createElement(z,null,r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement(R,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t){e.exports={tales:[{type:"JavaScript",date:"6/8/2020",title:"I have been using react all wrong!",content:[{type:"pretext",value:"I generally make it a habit to re-evaluatue myself, both as an individual and as a programmer..."},{type:"text",value:"This helps me improve the overall quality of code that i conjure using my Ducky(shoutout! amazing keyboards!) magic wand.\n                            Ever so often it happens that you stumble upon a piece of code that makes you go 'wow, why did i not do it this way'.\n                            A similiar moment happened when i was going through the source of a React theme, the way i have been hiding things in the DOM \n                            is by using this syntax"},{type:"code",value:"{hidden ? null : <p> You can't see me </p>}"},{type:"text",value:"To be honest i have been bothered by this a little bit, it just seems like one additional unnecessay thing, that 'null' servers no purpose.\n                            So when i saw this synatax"},{type:"code",value:"{!hidden && <p> You can't see me </p>}"},{type:"text",value:"I was blown away(just a tiny bit). So from now on, this is going to be my goto."}]},{type:"JavaScript",date:"5/8/2020",title:"Neat way of using Reduce with Objects",content:[{type:"pretext",value:"Recently i found myself in need of adding up some values in an array, \n                    the problem was that these values were present inside objects..."},{type:"text",value:"JavaScript gives us a selection of methods to mangle and transform arrays it's just a matter of choosing the right one. \n                    Reduce seemed like the right nut for this bolt. \n                    It's a neat method, it takes in an accumulator and current value as basic values (other things can be passed as well, see here...).\n                    At first i wrote up this"},{type:"code",value:"let arr = [{ x: 2 }, { x: 22 }, { x: 42 }];"},{type:"text",value:"example array to verify outputs"},{type:"code",value:"arr.reduce((acc, obj) => ({ x: (acc.x + obj.x) })); //Output: { x: 66 }"},{type:"text",value:"The syntax is minimal(which i do prefer),\n                    it returns an object with key x that holds the sum, Job done! or not that seems one more step and we are all about getting it done\n                    with the bare minimum, that is where initial value paramter for Reduce method comes in,"},{type:"code",value:"arr.reduce((acc, obj) => acc + obj.x, 0); //Output: 66"},{type:"text",value:"There we go, just a nice clean number."}]}]}}},[[17,1,2]]]);
//# sourceMappingURL=main.a1370fe4.chunk.js.map