(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),i=a(3),b=a(4),o=a(6),s=a(5);var d=function(e){var t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("button",{id:e.title,type:"button",onClick:function(){return n(e)}},e.title)}))),c.a.createElement("div",null,t.find((function(e){return e.id===a})).content))},u=(a(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:"Tab 1",selectedTabId:"tab-1"},e.onTabSelected=function(t){t.tab.title!==e.state.selectedTab&&e.setState({selectedTab:t.title,selectedTabId:t.id})},e}return Object(b.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is",this.state.selectedTab,c.a.createElement(d,{tabs:u,selectedTabId:this.state.selectedTabId,onTabSelected:this.onTabSelected})))}}]),a}(c.a.Component);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.17565e71.chunk.js.map