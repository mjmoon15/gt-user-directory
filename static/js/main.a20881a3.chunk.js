(this["webpackJsonpgt-user-directory"]=this["webpackJsonpgt-user-directory"]||[]).push([[0],{25:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(19),s=a(20),i=a(24),m=a(23),u=(a(3),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID Picture"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.src,alt:e.firstName})),r.a.createElement("td",null,e.firstName," ",e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone)))))}),h=a(22),p=a.n(h),E=function(){return p.a.get("https://randomuser.me/api/?results=15")},d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.createEmployees=function(){E().then((function(t){return e.setState({users:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.createEmployees()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.users.map((function(e){return r.a.createElement(u,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.large})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a20881a3.chunk.js.map