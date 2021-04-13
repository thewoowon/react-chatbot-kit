module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-util-kit")},function(e,t,a){"use strict";a.r(t),a.d(t,"Chatbot",(function(){return M})),a.d(t,"createChatBotMessage",(function(){return i})),a.d(t,"createClientMessage",(function(){return u})),a.d(t,"createCustomMessage",(function(){return l}));var r=a(0),n=a.n(r),o=a(1),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:!0})},l=function(e,t,a){return s(s({},c(e,t)),a)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(e)return e.apply(void 0,t)};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var d=({styles:e={},...t})=>n.a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),n.a.createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),h=function(e){var t=e.message,a=e.customComponents;return n.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},n.a.createElement(o.ConditionallyRender,{ifTrue:a.userChatMessage,show:m(a.userChatMessage,{message:t}),elseShow:n.a.createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,n.a.createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),n.a.createElement(o.ConditionallyRender,{ifTrue:a.userAvatar,show:m(a.userAvatar),elseShow:n.a.createElement("div",{className:"react-chatbot-kit-user-avatar"},n.a.createElement("div",{className:"react-chatbot-kit-user-avatar-container"},n.a.createElement(d,{className:"react-chatbot-kit-user-avatar-icon"})))}))},g=function(){return n.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},n.a.createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},n.a.createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},p=function(){return n.a.createElement("div",{className:"chatbot-loader-container"},n.a.createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{stroke:"none",fill:"none"},n.a.createElement("g",{id:"chatbot-loader",fill:"#fff"},n.a.createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),n.a.createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),n.a.createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))},v=function(){return(v=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=function(e,t){for(var a=0,r=t.length,n=e.length;a<r;a++,n++)e[n]=t[a];return e},y=function(e){var t=e.message,a=e.withAvatar,s=e.loading,c=e.messages,i=e.customComponents,l=e.setState,u=e.customStyles,f=e.delay,d=e.id,h=Object(r.useState)(!1),y=h[0],w=h[1];Object(r.useEffect)((function(){!function(e,t){var a=750;f&&(a+=f),setTimeout((function(){var a=b([],e).find((function(e){return e.id===d}));a&&(a.loading=!1,a.delay=void 0,t((function(e){var t=e.messages,r=t.findIndex((function(e){return e.id===d}));return t[r]=a,v(v({},e),{messages:t})})))}),a)}(c,l)}),[f,d]),Object(r.useEffect)((function(){f?setTimeout((function(){return w(!0)}),f):w(!0)}),[f]);var E={},O={};return u&&(E.backgroundColor=u.backgroundColor,O.borderRightColor=u.backgroundColor),n.a.createElement(o.ConditionallyRender,{ifTrue:y,show:n.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},n.a.createElement(o.ConditionallyRender,{ifTrue:a,show:n.a.createElement(o.ConditionallyRender,{ifTrue:i.botAvatar,show:m(i.botAvatar),elseShow:n.a.createElement(g,null)})}),n.a.createElement(o.ConditionallyRender,{ifTrue:i.botChatMessage,show:m(i.botChatMessage,{message:t,loader:n.a.createElement(p,null)}),elseShow:n.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:E},n.a.createElement(o.ConditionallyRender,{ifTrue:s,show:n.a.createElement(p,null),elseShow:n.a.createElement("span",null,t)}),n.a.createElement(o.ConditionallyRender,{ifTrue:a,show:n.a.createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:O})}))}))})};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var E=({styles:e={},...t})=>n.a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),n.a.createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"})),O=function(){return(O=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},S=function(e,t){for(var a=0,r=t.length,n=e.length;a<r;a++,n++)e[n]=t[a];return e},k=function(e){var t=e.state,a=e.setState,s=e.widgetRegistry,i=e.messageParser,l=e.customComponents,u=e.actionProvider,m=e.botName,f=e.customStyles,d=e.headerText,g=e.customMessages,p=e.placeholderText,v=e.validator,b=t.messages,w=Object(r.useRef)(null),k=Object(r.useState)(""),C=k[0],j=k[1],x=function(){setTimeout((function(){w.current&&(w.current.scrollTop=w.current.scrollHeight)}),50)};Object(r.useEffect)((function(){x()}));var P=function(e){var r=g[e.type],o={setState:a,state:t,scrollIntoView:x,actionProvider:u};return e.widget?n.a.createElement(n.a.Fragment,null,r(o),s.getWidget(e.widget,O(O({},t),{scrollIntoView:x}))):r(o)},N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{message:e.message,key:e.id,customComponents:l}),s.getWidget(e.widget,O(O({},t),{scrollIntoView:x})))},T=function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var a=e[t-1];return!("bot"===a.type&&!a.widget)}(b,r,e.withAvatar);var i=O(O({},e),{setState:a,state:t,customComponents:l,widgetRegistry:s,messages:b});return e.widget?n.a.createElement(n.a.Fragment,null,n.a.createElement(y,O({customStyles:f.botMessageBox,scrollIntoView:x,withAvatar:c},i,{key:e.id})),n.a.createElement(o.ConditionallyRender,{ifTrue:!i.loading,show:s.getWidget(i.widget,O(O({},t),{scrollIntoView:x}))})):n.a.createElement(y,O({customStyles:f.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:l,messages:b,setState:a}))},M=function(){a((function(e){return O(O({},e),{messages:S(S([],e.messages),[c(C,"user")])})})),x(),j("")},R={};f&&f.chatButton&&(R.backgroundColor=f.chatButton.backgroundColor);var A="Conversation with "+m;d&&(A=d);var B="Write your message here";return p&&(B=p),n.a.createElement("div",{className:"react-chatbot-kit-chat-container"},n.a.createElement("div",{className:"react-chatbot-kit-chat-inner-container"},n.a.createElement(o.ConditionallyRender,{ifTrue:l.header,show:l.header&&l.header(u),elseShow:n.a.createElement("div",{className:"react-chatbot-kit-chat-header"},A)}),n.a.createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:w},b.map((function(e,t){return"bot"===e.type?T(e,t):function(e){return"user"===e.type}(e)?N(e):function(e,t){return!!t[e.type]}(e,g)?P(e):void 0})),n.a.createElement("div",{style:{paddingBottom:"15px"}})),n.a.createElement("div",{className:"react-chatbot-kit-chat-input-container"},n.a.createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){e.preventDefault(),v&&"function"==typeof v?v(C)&&(M(),i.parse(C)):(M(),i.parse(C))}},n.a.createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:B,value:C,onChange:function(e){return j(e.target.value)}}),n.a.createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:R},n.a.createElement(E,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},C=function(){return(C=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},j=function(e,t){var a=this;this.addWidget=function(e,t){var r=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;a[r]={widget:n,props:s,mapStateToProps:o,parentProps:C({},t)}},this.getWidget=function(e,t){var r=a[e];if(r){var n,o=C(C(C(C({scrollIntoView:t.scrollIntoView},r.parentProps),"object"==typeof(n=r.props)?n:{}),a.mapStateToProps(r.mapStateToProps,t)),{setState:a.setState,actionProvider:a.actionProvider});return r.widget(o)}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,a){return e[a]=t[a],e}),{})},this.setState=e,this.actionProvider=t},x=function(e){var t=e.message;return n.a.createElement("div",{className:"react-chatbot-kit-error"},n.a.createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),n.a.createElement("div",{className:"react-chatbot-kit-error-container"},n.a.createElement(y,{message:t,withAvatar:!0,loading:!1,id:1,customComponents:{},messages:[]})),n.a.createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))},P=function(){return(P=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},N=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},T=function(e,t){for(var a=0,r=t.length,n=e.length;a<r;a++,n++)e[n]=t[a];return e},M=function(e){var t=e.actionProvider,a=e.messageParser,o=e.config,s=e.headerText,c=e.placeholderText,l=e.saveMessages,m=e.messageHistory,f=e.validator,d=N(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","validator"]);if(!o||!t||!a)return n.a.createElement(x,{message:"I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"});var h=function(e,t){var a=[];return e.initialMessages||a.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),(new t).parse||a.push("Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."),a}(o,a);if(h.length){var g=h.reduce((function(e,t){return e+=t}),"");return n.a.createElement(x,{message:g})}var p=function(e){return e.state?e.state:{}}(o);m&&Array.isArray(m)&&(o.initialMessages=T([],m));var v=Object(r.useState)(P({messages:T([],o.initialMessages)},p)),b=v[0],y=v[1],w=Object(r.useRef)(b.messages);Object(r.useEffect)((function(){w.current=b.messages})),Object(r.useEffect)((function(){return m&&Array.isArray(m)&&y((function(e){return P(P({},e),{messages:m})})),function(){l&&"function"==typeof l&&l(w.current)}}),[]);var E=function(e){return e.customStyles?e.customStyles:{}}(o),O=function(e){return e.customComponents?e.customComponents:{botMessageBox:{},chatButton:{}}}(o),S=function(e){return e.botName?e.botName:"Bot"}(o),C=function(e){return e.customMessages?e.customMessages:{}}(o),M=new t(i,y,u,d),R=new j(y,M),A=new a(M,b);return function(e){return e.widgets?e.widgets:[]}(o).forEach((function(e){return R.addWidget(e,d)})),n.a.createElement(k,{state:b,setState:y,widgetRegistry:R,actionProvider:M,messageParser:A,customMessages:C,customComponents:P({},O),botName:S,customStyles:P({},E),headerText:s,placeholderText:c,validator:f})};t.default=M}]);