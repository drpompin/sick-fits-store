(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"2y/O":function(t,e,n){"use strict";e.a=function(t){var e={style:"currency",currency:"USD",minimumFractionDigits:2};return t%100===0&&(e.minimumFractionDigits=0),new Intl.NumberFormat("en-US",e).format(t/100)}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?i=!1:(p.add(f),r[s]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=i.default();function h(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.HeadManagerContext=o.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||i()}},VliS:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("wx14"),o=n("h4VS"),i=n("q1tI"),a=n.n(i),u=n("oJmH"),c=n("lTCR"),s=n.n(c),f=a.a.createElement;function l(){var t=Object(o.a)(['\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n\n      # I kept getting the following errors 1,2,3... when I start the application and it prevents me from being able to do\n      # anything on the app. I still don\'t understand the error or the way to go about it. \n      #1. httpLink.js:87 POST http://localhost:4444/ 400 (Bad Request)\n      #2. [GraphQL error]: Message: Cannot query field "orders" on type "User"., Location: [object Object], Path: undefined\n      #3. [Network error]: Error: Response not successful: Received status code 400\n\n\n      # In order that I might able to complete other things on the app, I did this hack and hashed out orders as seen below.\n      # This is a temporary solution until I can figure out a proper solution to the problem\n      # orders {\n      #   id\n      # }\n      cart {\n        id\n        quantity\n        item {\n          id\n          price\n          image\n          title\n          description\n        }\n      }\n    }\n  }\n']);return l=function(){return t},t}var p=s()(l());e.b=function(t){return f(u.Query,Object(r.a)({},t,{query:p}),(function(e){return t.children(e)}))}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),l=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){a(p,s);var f=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=c(t);if(e()){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}(p);function p(t){var i;return r(this,p),i=f.call(this,t),l&&(e.add(o(i)),n(o(i))),i}return i(p,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(p,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),p}(f.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),u=n("Nsbk");var c=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var f,l=s(n("q1tI")),p=n("QmWs"),d=n("g/15"),h=c(n("nOHt"));function v(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new Map,m=window.IntersectionObserver,b={};function g(){return f||(m?f=new m((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){i(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=u(t);if(e()){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:v(t),as:e?v(e):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,u=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),u=u?(0,p.resolve)(c,u):a,t.preventDefault();var s=o.props.scroll;null==s&&(s=u.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](a,u,{shallow:o.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,p.resolve)(t,n);return[o,r?(0,p.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=g();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=l.default.createElement("a",null,e));var i=l.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),l.default.cloneElement(i,a)}}]),n}(l.Component);e.default=w},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},obyI:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r="https://drpompin-sickfits-yoga-prod.herokuapp.com/",o=4},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}}]);