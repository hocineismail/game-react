(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{37:function(e,t,r){},39:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(8),s=r.n(n),a=r(9),i=(r(25),r(37),r(15)),o=r(2),l=r(16),j=r(26),u="APP_START",d="APP_RESTART",h="ON_CHANGE_SCORE",b={started:!1,score:[0,0],history:[],resultCurrentBattle:[{unit:"",score:0},{unit:"",score:0}],round:0};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{started:!0});case h:return Object(o.a)(Object(o.a)({},e),{},{history:[].concat(Object(i.a)(e.history),[{player:t.payload.currentBattle[0].unit,player_score:t.payload.currentBattle[0].score,computer:t.payload.currentBattle[1].unit,computer_score:t.payload.currentBattle[1].score}]),resultCurrentBattle:t.payload.currentBattle,round:e.round+1,score:[e.score[0]+t.payload.currentBattle[0].score,e.score[1]+t.payload.currentBattle[1].score]});case d:return{started:!1,score:[0,0],history:[],resultCurrentBattle:[{unit:"",score:0},{unit:"",score:0}],round:0};default:return e}}var x=function(e){return e.score},f=function(e){return e.round};var y=r(48),p=r.p+"static/media/9zly_8ztc_210511.f30bf659.jpg",v=["Cavalry","Archers","Pikemen"],m=r(6),g=function(e){return Math.floor(Math.random()*Math.floor(e))};function C(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),r=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){var e=g(3);return[].concat(Object(i.a)(v),[v[e]])}();n(e)}),[n]),r}var B=r.p+"static/media/archers.382e773f.jpg",S=r.p+"static/media/cavalry.bc9e04cf.jpg",P=r.p+"static/media/pikeman.f911dfd8.jpg",k=r(1),T={onChangeScore:function(e){return{type:h,payload:{currentBattle:e}}}},A=Object(a.b)(null,T)((function(e){var t=e.onChangeScore,r=C();return Object(k.jsx)("div",{className:"text-center",style:{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"},children:v.map((function(e){return Object(k.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return function(e){var c=g(4),n=function(e){switch(e){case"Cavalry:Archers":case"Archers:Pikemen":case"Pikemen:Cavalry":return[1,-1];case"Cavalry:Pikemen":case"Archers:Cavalry":case"Pikemen:Archers":return[-1,1];default:return[-1,-1]}}(e+":"+r[c]),s=[{unit:e,score:n[0]},{unit:r[c],score:n[1]}];t(s)}(e)},children:Object(k.jsx)("img",{src:"Cavalry"===e?S:"Archers"===e?B:P,style:{width:"100px",maxHeight:"130px"}})},e)}))})}));var w=function(){return Object(k.jsx)("span",{className:"loading",children:"Loading..."})};r(39);var E=Object(a.b)((function(e){return{score:x(e)}}))((function(e){var t=e.score;return Object(k.jsxs)("div",{className:"score",children:[Object(k.jsxs)("div",{style:{float:"left"},children:["You: ",t[0]]}),Object(k.jsxs)("div",{style:{float:"right"},children:["Copmuter: ",t[1]]})]})})),N=r(51),_=r(49),R=r(45);var H=function(e){var t=e.history,r=Object(c.useState)(!1),n=Object(m.a)(r,2),s=n[0],a=n[1],i=function(){return a(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{variant:"primary",className:"btn-fight",onClick:function(){return a(!0)},children:"Show battle's history"}),Object(k.jsxs)(_.a,{show:s,onHide:i,children:[Object(k.jsx)(_.a.Header,{closeButton:!0,children:Object(k.jsx)(_.a.Title,{children:"Result"})}),Object(k.jsx)(_.a.Body,{children:Object(k.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"Player(You)"}),Object(k.jsx)("th",{children:"Computer"}),Object(k.jsx)("th",{children:"Score"})]})}),Object(k.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t+1}),Object(k.jsx)("td",{children:e.player}),Object(k.jsx)("td",{children:e.computer}),Object(k.jsx)("td",{children:Object(k.jsxs)("b",{children:[e.player_score," - ",e.computer_score]})})]},"key-".concat(t))}))})]})}),Object(k.jsx)(_.a.Footer,{children:Object(k.jsx)(N.a,{variant:"secondary",className:"btn-fight",onClick:i,children:"Close"})})]})]})};var M=Object(a.b)((function(e){return{score:x(e),history:function(e){return e.history}(e)}}))((function(e){var t=e.score,r=e.history;return Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsx)("h2",{children:"Game is finished with 20 round and totol Score is"}),Object(k.jsxs)("h1",{children:["PLayer(You): ",t[0],"| Computer: ",t[1],Object(k.jsx)("br",{}),"Winner is: ",t[0]>t[1]?"YOU":"COMPUTER"]}),Object(k.jsx)(H,{history:r})]})})),F=r(50),Y=r(46),L=r(47);var I=Object(a.b)((function(e){return{resultCurrentBattle:function(e){return e.resultCurrentBattle}(e),round:f(e)}}))((function(e){var t=e.round,r=e.resultCurrentBattle;return Object(k.jsx)(F.a,{style:{minHeight:"50vh"},children:Object(k.jsxs)(F.a.Body,{children:[Object(k.jsxs)(F.a.Title,{children:["Round: ",t," it left: ",20-t]}),Object(k.jsx)("div",{style:{fontSize:"50"},children:t?Object(k.jsxs)(Y.a,{children:[Object(k.jsx)(L.a,{style:{marginLeft:"100px"},children:Object(k.jsxs)(F.a,{children:[Object(k.jsx)(F.a.Body,{children:Object(k.jsx)(F.a.Title,{children:" YOU "})}),Object(k.jsx)("h2",{children:r[0].score}),Object(k.jsxs)("div",{style:{cursor:"pointer"},children:[Object(k.jsx)("img",{src:"Cavalry"===r[0].unit?S:"Archers"===r[0].unit?B:P,style:{width:"100px",maxHeight:"130px"}})," ",Object(k.jsx)("h3",{children:r[0].unit})]})]})}),Object(k.jsx)(L.a,{style:{marginRight:"100px"},children:Object(k.jsx)(F.a,{children:Object(k.jsxs)(F.a.Body,{children:[Object(k.jsx)(F.a.Title,{children:" COMPTER "}),Object(k.jsx)("h2",{children:r[1].score}),Object(k.jsx)("div",{style:{cursor:"pointer"},children:Object(k.jsx)("img",{src:"Cavalry"===r[1].unit?S:"Archers"===r[1].unit?B:P,style:{width:"100px",maxHeight:"130px"}})}),Object(k.jsx)("h3",{children:r[1].unit})]})})})]}):Object(k.jsx)("b",{children:"CHOOSE YOU NEXT MOVE"})})]})})})),U=(r(42),{onStart:function(){return{type:u}}}),z=Object(a.b)((function(e){return{started:function(e){return e.started}(e),round:f(e)}}),U)((function(e){var t=e.started,r=e.round,n=e.onStart;return Object(c.useEffect)((function(){t||n()}),[t,n]),t?20===r?Object(k.jsx)(M,{}):Object(k.jsx)("div",{className:"app",style:{backgroundImage:"url(".concat(p,")")},children:Object(k.jsxs)(y.a,{className:"text-center",children:[Object(k.jsx)(E,{}),Object(k.jsx)(I,{}),Object(k.jsx)(A,{})]})}):Object(k.jsx)(w,{})})),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,52)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),s(e),a(e)}))},G=Object(l.createStore)(O,Object(j.composeWithDevTools)(Object(l.applyMiddleware)()));s.a.render(Object(k.jsx)(a.a,{store:G,children:Object(k.jsx)(z,{})}),document.getElementById("root")),D()}},[[43,1,2]]]);
//# sourceMappingURL=main.1e4ca300.chunk.js.map