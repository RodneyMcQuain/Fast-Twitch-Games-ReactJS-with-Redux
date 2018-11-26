(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(18),r=a(13);var o=function(){try{var e=localStorage.getItem("games");if(null===e)return[];var t=JSON.parse(e),a=[];return null!=t&&""!==t.trim()&&(a=t.split(",;:!")),a}catch(n){return[]}}(),l={games:o,selectedGame:0!==o.length?o[0]:""},c=Object(i.a)(function(e,t){switch(t.type){case"SELECT_GAME":return Object(r.a)({},e,{selectedGame:t.game});case"SET_GAMES":return Object(r.a)({},e,{games:t.games});default:return e}},l);c.subscribe(function(){!function(e){try{var t=e.join(",;:!"),a=JSON.stringify(t);localStorage.setItem("games",a)}catch(n){}}(c.getState().games)});var u=c,m=a(8),d=a.n(m),h=(a(27),a(2)),v=a(3),p=a(5),b=a(4),g=a(6),O=a(1);function f(e){return{type:"SELECT_GAME",game:e}}function E(e){return{type:"SET_GAMES",games:e}}a(29),a(7);var j=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={gameValue:a.props.gameValue},a.handleOnChange_GamesDropdown=a.handleOnChange_GamesDropdown.bind(Object(O.a)(Object(O.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.gameValue!==e.gameValue&&this.setState({gameValue:this.props.gameValue})}},{key:"handleOnChange_GamesDropdown",value:function(e){var t=e.target.value;this.setState({gameValue:t}),u.dispatch(f(t))}},{key:"render",value:function(){var e=this.props.games;if(0===e.length)return s.a.createElement("select",{className:"combo-box"},s.a.createElement("option",null,"No Games to Show"));for(var t=[],a=0;a<e.length;a++)t.push(s.a.createElement("option",{key:a,value:e[a]},e[a]));return s.a.createElement("select",{value:this.state.gameValue,onChange:this.handleOnChange_GamesDropdown,className:"combo-box"},t)}}]),t}(n.Component),k=a(9),G=a.n(k),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.statusGood,n=t.statusBad;return a||n?a?(setTimeout(function(){e.props.setStatusGood(!1)},3e3),s.a.createElement(G.a,{transitionName:"cross-fade",transitionEnterTimeout:500,transitionLeaveTimeout:500},s.a.createElement("div",{key:"transitioning-component-1",id:"status-game-to-add",className:"status-good"},"Successful"))):n?(setTimeout(function(){e.props.setStatusBad(!1)},3e3),s.a.createElement(G.a,{transitionName:"cross-fade",transitionEnterTimeout:500,transitionLeaveTimeout:500},s.a.createElement("div",{key:"transitioning-component-2",id:"status-game-to-add",className:"status-bad"},"Duplicate, nothing added"))):void 0:s.a.createElement(G.a,{transitionName:"cross-fade",transitionEnterTimeout:500,transitionLeaveTimeout:500},s.a.createElement("div",{key:"transitioning-component-0"}))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={gameName:"",gameValue:"",statusGood:!1,statusBad:!1},a.handleOnChange_tbGame=a.handleOnChange_tbGame.bind(Object(O.a)(Object(O.a)(a))),a.handleOnClick_btAddGame=a.handleOnClick_btAddGame.bind(Object(O.a)(Object(O.a)(a))),a.handleOnClick_btRemoveGame=a.handleOnClick_btRemoveGame.bind(Object(O.a)(Object(O.a)(a))),a.handleOnClick_btMoveGameToTop=a.handleOnClick_btMoveGameToTop.bind(Object(O.a)(Object(O.a)(a))),a.setStatusBad=a.setStatusBad.bind(Object(O.a)(Object(O.a)(a))),a.setStatusGood=a.setStatusGood.bind(Object(O.a)(Object(O.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"handleOnClick_btAddGame",value:function(e){for(var t=this.state.gameName,a=u.getState().games,n=0;n<a.length;n++)if(a[n]===t)return void this.setState({statusBad:!0},this.setState({statusBad:!1}));a.push(t),u.dispatch(E(a)),this.setState({gameValue:t}),u.dispatch(f(this.state.gameName)),this.setState({gameName:"",statusGood:!0})}},{key:"handleOnClick_btRemoveGame",value:function(e){for(var t=u.getState(),a=t.selectedGame,n=t.games,s=0;s<n.length;s++)if(n[s]===a){n.splice(s,1);break}this.setSelectedGameToFirst()}},{key:"handleOnClick_btMoveGameToTop",value:function(e){for(var t=u.getState().games,a=0;a<t.length;a++)if(t[a]===this.props.selectedGame){t.unshift(t[a]),t.splice(a+1,1);break}u.dispatch(E(t))}},{key:"handleOnChange_tbGame",value:function(e){this.setState({gameName:e.target.value})}},{key:"setStatusBad",value:function(e){this.setState({statusBad:e})}},{key:"setStatusGood",value:function(e){this.setState({statusGood:e})}},{key:"setSelectedGameToFirst",value:function(){var e=u.getState().games;e.length>0?u.dispatch(f(e[0])):0===e.length&&u.dispatch(f(""))}},{key:"render",value:function(){return s.a.createElement("div",{id:"add-game-container"},s.a.createElement("input",{value:this.state.gameName,onChange:this.handleOnChange_tbGame,className:"text-field fa",placeholder:"\uf11b Game to Add"}),s.a.createElement("button",{onClick:this.handleOnClick_btAddGame,id:"btn-game-to-add",className:"btn fa fa-plus"}),s.a.createElement("div",null,s.a.createElement(j,{gameValue:this.state.gameValue,games:u.getState().games}),s.a.createElement("button",{onClick:this.handleOnClick_btRemoveGame,className:"btn fa fa-trash"}),s.a.createElement("button",{onClick:this.handleOnClick_btMoveGameToTop,className:"btn fa fa-arrow-up"})),s.a.createElement(S,{setStatusGood:this.setStatusGood,statusGood:this.state.statusGood,setStatusBad:this.setStatusBad,statusBad:this.state.statusBad}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={hoverOpacity:"",hoverFilter:""},a.handleOnMouseEnter_hoverTitle=a.handleOnMouseEnter_hoverTitle.bind(Object(O.a)(Object(O.a)(a))),a.handleOnMouseLeave_hoverTitle=a.handleOnMouseLeave_hoverTitle.bind(Object(O.a)(Object(O.a)(a))),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return s.a.createElement("a",{href:this.props.url,target:"_blank"},s.a.createElement("div",{className:"stream",onMouseEnter:this.handleOnMouseEnter_hoverTitle,onMouseLeave:this.handleOnMouseLeave_hoverTitle},s.a.createElement("img",{src:this.props.thumbnail}),s.a.createElement("h1",null,this.props.displayName),s.a.createElement("p",null,this.props.title),s.a.createElement("p",null,"\xa0- ",this.props.viewers," viewers"),s.a.createElement("div",{className:"streamHoverParent",style:{opacity:this.state.hoverOpacity,filter:this.state.hoverFilter}},s.a.createElement("div",{className:"streamHoverChild"},this.props.title))))}},{key:"handleOnMouseEnter_hoverTitle",value:function(){var e=this;this.timerID=setTimeout(function(){e.setState({hoverOpacity:".85",hoverFilter:"none"})},750)}},{key:"handleOnMouseLeave_hoverTitle",value:function(){clearTimeout(this.timerID),this.setState({hoverOpacity:"0",hoverFilter:"alpha(opacity = 0)"})}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={isLoaded:!1,streamsApiData:[]},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.apiCall(this.props.selectedGame)}},{key:"componentDidUpdate",value:function(e){this.props.selectedGame!==e.selectedGame&&(this.setState({isLoaded:!1}),this.apiCall(this.props.selectedGame))}},{key:"apiCall",value:function(e){var t=new XMLHttpRequest,a=this.gameToUrl(e);t.open("GET","https://api.twitch.tv/kraken/streams/?game="+a,!0),t.setRequestHeader("Client-ID","mr14v2oijk1jv4n8u49ixkv6raofcd"),t.send(),t.onload=function(){var e=JSON.parse(t.response);t.status>=200&&t.status<400&&this.setState({isLoaded:!0,streamsApiData:e.streams})}.bind(this)}},{key:"gameToUrl",value:function(e){return e.split(" ").join("%20")}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.streamsApiData;if(t){if(0===a.length)return this.createDivForNoStream();for(var n=[],i=0;i<a.length;i++)n.push(this.renderStream(a,i));return s.a.createElement("div",null,n)}return s.a.createElement("div",{id:"preloader-overlay"},s.a.createElement("div",{id:"preloader-spinner"}))}},{key:"createDivForNoStream",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Invalid game name or no one is streaming this game"))}},{key:"renderStream",value:function(e,t){return s.a.createElement(C,{key:t,thumbnail:e[t].preview.small,title:e[t].channel.status,displayName:e[t].channel.display_name,viewers:e[t].viewers,url:e[t].channel.url})}}]),t}(n.Component),_=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,{selectedGame:u.getState().selectedGame}),s.a.createElement(T,{selectedGame:u.getState().selectedGame}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(){d.a.render(s.a.createElement(_,null),document.getElementById("root"))};N(),u.subscribe(N),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[20,2,1]]]);
//# sourceMappingURL=main.4c653a2a.chunk.js.map