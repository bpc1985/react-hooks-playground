(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,e,t){n.exports=t(53)},53:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(11),r=t.n(i),l=t(33),c=t(9),d=t(2),u=t(29),s=t.n(u),p=t(3);function m(){var n=Object(p.a)(["\n  width: 100%;\n  padding-bottom: 56.25%;\n  position: relative;\n"]);return m=function(){return n},n}var b=d.c.div(m());function f(){var n=Object(p.a)(["\n  position: relative;\n  -webkit-box-flex: 2;\n  -ms-flex: 2 0 900px;\n  flex: 2 0 900px;\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return f=function(){return n},n}var h=d.c.div(f()),v=function(n){var e=n.active,t=n.autoplay,o=n.endCallback,i=n.progressCallback;return a.a.createElement(h,null,a.a.createElement(b,null,a.a.createElement(s.a,{width:"100%",height:"100%",style:{position:"absolute",top:"0"},playing:t,controls:!0,url:e.video,onEnded:o,onProgress:i})))};function x(){var n=Object(p.a)(['\n  background: #696969;\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: #fff;\n  padding: 0 20px;\n  margin: 0 0 20px 0;\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n']);return x=function(){return n},n}var w=d.c.div(x());function g(){var n=Object(p.a)(["\n  background: #565656;\n  font-size: 0.8em;\n  padding: 2px 5px;\n  height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 5px;\n"]);return g=function(){return n},n}var y=d.c.div(g()),k=function(n){var e=n.active,t=n.total;return a.a.createElement(w,null,a.a.createElement("p",null,e.title),a.a.createElement(y,null,e.num," / ",t))};function E(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: none;\n  border: ',";\n  font-size: 1.6em;\n  color: ",";\n  min-height: 50px;\n  padding: 10px 20px;\n  margin: 0 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ",";\n  cursor: pointer;\n  position: relative;\n\n  ::before {\n    display: ",';\n    content: "";\n    width: 10px;\n    min-height: 10px;\n    background: #409f4e;\n    border-radius: 50px;\n    position: absolute;\n    left: 0;\n    top: 19px;\n  }\n\n  .wbn-player__video-nr {\n    flex-grow: 1; /* default 0 */\n    max-width: 30px;\n    padding-right: 20px;\n    border-right: 2px solid #565656;\n  }\n\n  .wbn-player__video-name,\n  .wbn-player__video-name a {\n    flex-grow: 10; /* default 0 */\n    padding: 0 0 0 10px;\n    color: ',";\n    text-align: left;\n    text-decoration: none;\n    display: block;\n  }\n\n  .wbn-player__video-time {\n    background: #565656;\n    min-width: 45px;\n    color: #fff;\n    font-size: 0.8em;\n    padding: 0px 5px;\n    height: 20px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 0 0 0 5px;\n  }\n\n  .wbn-player__video-download {\n    flex-grow: 1; /* default 0 */\n    color: ",';\n    margin: 0 0 0 20px;\n    max-width: 30px;\n    padding: 0 20px;\n    border-left: 2px solid #565656;\n    font-family: "fontello";\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  .wbn-player__video-download a {\n    color: ',";\n  }\n\n  .active {\n    opacity: 0.1;\n  }\n"]);return E=function(){return n},n}var O=d.c.div(E(),function(n){return n.active?"2px dotted #696969":"none"},function(n){return n.theme.color},function(n){return n.active?"5px":"0"},function(n){return n.active||!n.played?"none":"block"},function(n){return n.theme.color},function(n){return n.played?"#fff":n.theme.color},function(n){return n.played&&!n.active?"#fff":n.theme.color}),j=function(n){var e=n.video,t=n.active,o=n.played;return a.a.createElement(O,{active:t,played:o},a.a.createElement("div",{className:"wbn-player__video-nr"},e.num),a.a.createElement("div",{className:"wbn-player__video-name"},e.title),a.a.createElement("div",{className:"wbn-player__video-time"},e.duration))},_=t(54),I=function(n){return function(e){var t=Object(c.a)({},e,{video:Object(c.a)({},e.video,{title:a.a.createElement(_.a,{to:{pathname:"/".concat(e.video.id),autoplay:!0}},e.video.title)})});return a.a.createElement(n,t)}};function M(){var n=Object(p.a)(["\n  padding: 0 20px 0 20px;\n  overflow-y: auto;\n  height: 28vw;\n  max-height: 500px;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 2px;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]);return M=function(){return n},n}var S=d.c.div(M()),N=I(j),C=function(n){var e=n.videos,t=n.active;return a.a.createElement(S,null,e.map(function(n){return a.a.createElement(N,{key:n.id,video:n,active:n.id===t.id,played:n.played})}))};function H(){var n=Object(p.a)(['\n  font-family: "Hind", sans-serif;\n  font-weight: 800;\n  font-size: 1.6em;\n  color: ',';\n  padding: 0;\n  margin: 20px;\n\n  /* CSS taken from https://www.w3schools.com/howto/howto_css_switch.asp */\n  /* The switch - the box around the slider */\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 40px;\n    height: 24px;\n  }\n\n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 16px;\n    width: 16px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  input:checked + .slider {\n    background-color: #9b870c;\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  input:checked + .slider:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n  }\n\n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 30px;\n  }\n\n  .slider.round:before {\n    border-radius: 50%;\n  }\n']);return H=function(){return n},n}var P=d.c.div(H(),function(n){return n.theme.color}),T=function(n){var e=n.nightModeCallback,t=n.nightMode;return a.a.createElement(P,null,a.a.createElement("span",null,"Nightmode: "),a.a.createElement("label",{className:"switch"},a.a.createElement("input",{type:"checkbox",checked:t,onChange:e}),a.a.createElement("span",{className:"slider round"})))};function V(){var n=Object(p.a)(["\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 450px;\n  flex: 1 1 450px;\n  overflow: hidden;\n  color: white;\n  /* height: 0;\n  padding-top:50px;\n  padding-bottom: 36%; */\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n    display: block;\n  }\n"]);return V=function(){return n},n}var X=d.c.div(V()),J=function(n){var e=n.videos,t=n.active,o=n.nightModeCallback,i=n.nightMode;return a.a.createElement(X,null,a.a.createElement(T,{nightModeCallback:o,nightMode:i}),a.a.createElement(k,{active:t,total:e.length}),a.a.createElement(C,{videos:e,active:t}))};function z(){var n=Object(p.a)(["\n  background: ","; /* #353535; */\n  border: ",";\n  max-width: 1800px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-direction: row;\n  max-height: 863px;\n  transition: all 0.5s ease;\n\n  @media screen and (max-width: 1400px) {\n    display: block;\n    max-height: 10000px;\n  }\n"]);return z=function(){return n},n}var D=d.c.div(z(),function(n){return n.theme.bgcolor},function(n){return n.theme.border}),K={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#405c63",bgcolorPlayed:"#526d4e",border:"none",borderPlayer:"none",color:"#fff"},B={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlayed:"#7d9979",border:"1px solid #353535",borderPlayer:"none",color:"#353535"},Y={playlist:[{num:1,title:"Yanni - For All Seasons",id:"uKgue7YnNBo",duration:"9:33",video:"https://www.youtube.com/embed/uKgue7YnNBo"},{num:2,title:"Yanni - World Dance",id:"Fn8lodDV4Zw",duration:"5:06",video:"https://www.youtube.com/embed/Fn8lodDV4Zw"},{num:3,title:"Kitaro - Matsuri",id:"XhxbShjpwEU",duration:"7:34",video:"https://www.youtube.com/embed/XhxbShjpwEU"},{num:4,title:"Kitaro - Earth and Heaven",id:"DHuoneQoJO8",duration:"10:56",video:"https://www.youtube.com/embed/DHuoneQoJO8"},{num:5,title:"There Is Only You In My Heart",id:"lXVy3layeps",duration:"05:20",video:"https://www.youtube.com/embed/lXVy3layeps"},{num:6,title:"Karunesh - Japanese Spring",id:"K18A-CTPc7I",duration:"05:43",video:"https://www.youtube.com/embed/K18A-CTPc7I"},{num:7,title:"DJ NONSTOP 2018 | Si\xeau Bass C\u1ef1c Kh\u1ee7ng Ph\xea SML",id:"sYF5RdwnmXc",duration:"48:06",video:"https://www.youtube.com/embed/sYF5RdwnmXc"},{num:8,title:"Sonata Arctica - The Misery",id:"kqi82tk0Lvk",duration:"05:06",video:"https://www.youtube.com/embed/kqi82tk0Lvk"},{num:9,title:"BONUS - Xin L\u1ed7i Em - C\u1ea9m Ly & Minh Tuy\u1ebft",id:"tGgj_u1kP9k",duration:"05:45",video:"https://www.youtube.com/embed/tGgj_u1kP9k"},{num:10,title:"BONUS - Nh\u1ea1c Phim T\xe2n Anh H\xf9ng X\u1ea1 \u0110i\xeau 2017",id:"RS_DpiWfSJI",duration:"02:23",video:"https://www.youtube.com/embed/RS_DpiWfSJI"}],playlistId:"hung-music-playlist-id-123456789"},F=function(n){var e=Object(c.a)({},Y),t=JSON.parse(localStorage.getItem("".concat(e.playlistId))),i=Object(o.useState)({videos:t?t.videos:e.playlist,activeVideo:t?t.activeVideo:e.playlist[0],nightMode:!t||t.nightMode,playlistId:t?t.playlistId:e.playlistId,autoplay:!1}),r=Object(l.a)(i,2),u=r[0],s=r[1];Object(o.useEffect)(function(){localStorage.setItem("".concat(u.playlistId),JSON.stringify(Object(c.a)({},u)))},[u]),Object(o.useEffect)(function(){var e=n.match.params.activeVideoId;if(void 0!==e){var t=u.videos.findIndex(function(n){return n.id===e});s(Object(c.a)({},u,{activeVideo:u.videos[t],autoplay:n.location.autoplay}))}else n.history.push({pathname:"/".concat(u.activeVideo.id),autoplay:!1})},[n.match.params.activeVideoId]);return a.a.createElement(d.a,{theme:u.nightMode?K:B},null!==u.videos?a.a.createElement(D,null,a.a.createElement(v,{active:u.activeVideo,autoplay:J.autoplay,endCallback:function(){var e=n.match.params.activeVideoId,t=u.videos.findIndex(function(n){return n.id===e}),o=t===u.videos.length-1?0:t+1;n.history.push({pathname:"/".concat(u.videos[o].id),autoplay:!1})},progressCallback:function(n){n.playedSeconds>10&&n.playedSeconds<11&&s(Object(c.a)({},u,{videos:u.videos.map(function(n){return n.id===u.activeVideo.id?Object(c.a)({},n,{played:!0}):n})}))}}),a.a.createElement(J,{videos:u.videos,active:u.activeVideo,nightModeCallback:function(){s(Object(c.a)({},u,{nightMode:!u.nightMode}))},nightMode:u.nightMode})):null)},L=t(55),R=t(57),W=t(56);function U(){var n=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-size: 10px;\n    font-family: 'Hind', sans-serif;\n  }\n"]);return U=function(){return n},n}var A=Object(d.b)(U()),q=function(){return a.a.createElement(L.a,{basename:"/react-hooks-videoplayer/"},a.a.createElement(a.a.Fragment,null,a.a.createElement(R.a,null,a.a.createElement(W.a,{exact:!0,path:"/",component:F}),a.a.createElement(W.a,{exact:!0,path:"/:activeVideoId",component:F})),a.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.a95b1292.chunk.js.map