webpackJsonp([1],{31:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),i=n.n(u),s=n(37),c=n.n(s),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f={Accept:"application/vnd.github.v3.html+json"},l=function(e){function t(){var e,n,a,u;r(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={comments:[]},u=n,o(a,u)}return a(t,e),m(t,[{key:"fetchGistComments",value:function(e){return fetch("https://api.github.com/gists/"+e+"/comments",{headers:f}).then(function(e){return e.json()})}},{key:"componentDidMount",value:function(){var e=this;this.fetchGistComments(this.props.gist).then(function(t){return e.setState({comments:t})})}},{key:"render",value:function(){var e=this.state.comments;return 0===e.length?null:i.a.createElement("section",{className:"u-container"},i.a.createElement("h2",{className:"Posts-title"},"Comments"),e.map(function(e){return i.a.createElement("div",{className:"Comment",key:e.id},i.a.createElement("div",{className:"Comment-header"},i.a.createElement("img",{className:"Comment-avatar",src:e.user.avatar_url+"&size=40",alt:e.user.login+" avatar",width:20,draggable:"false"})," ",i.a.createElement("a",{className:"Comment-author",href:e.user.html_url},e.user.login)," ",i.a.createElement("span",{className:"Comment-info"},"OWNER"===e.author_association&&"Author \xb7 ",e.created_at!==e.updated_at&&"Edited \xb7 ",c.a.format(new Date(e.created_at),"HH:mm MMM D, YYYY"))),i.a.createElement("div",{className:"Comment-body markdown-body",dangerouslySetInnerHTML:{__html:e.body_html}}))}))}}]),t}(u.Component);t.default=l},37:function(e,t,n){var r;!function(o){"use strict";function a(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n.push(e[r].substr(0,t));return n}function u(e){return function(t,n,r){var o=r[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~o&&(t.month=o)}}function i(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var s={},c=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,m=/\d\d?/,f=/\d{3}/,l=/\d{4}/,d=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,h=/\[([^]*?)\]/gm,p=function(){},g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],M=["January","February","March","April","May","June","July","August","September","October","November","December"],y=a(M,3),D=a(g,3);s.i18n={dayNamesShort:D,dayNames:g,monthNamesShort:y,monthNames:M,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!==10)*e%10]}};var Y={D:function(e){return e.getDate()},DD:function(e){return i(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return i(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return i(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return String(e.getFullYear()).substr(2)},YYYY:function(e){return e.getFullYear()},h:function(e){return e.getHours()%12||12},hh:function(e){return i(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return i(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return i(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return i(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return i(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return i(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+i(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},v={D:[m,function(e,t){e.day=t}],Do:[new RegExp(m.source+d.source),function(e,t){e.day=parseInt(t,10)}],M:[m,function(e,t){e.month=t-1}],YY:[m,function(e,t){var n=new Date,r=+(""+n.getFullYear()).substr(0,2);e.year=""+(t>68?r-1:r)+t}],h:[m,function(e,t){e.hour=t}],m:[m,function(e,t){e.minute=t}],s:[m,function(e,t){e.second=t}],YYYY:[l,function(e,t){e.year=t}],S:[/\d/,function(e,t){e.millisecond=100*t}],SS:[/\d{2}/,function(e,t){e.millisecond=10*t}],SSS:[f,function(e,t){e.millisecond=t}],d:[m,p],ddd:[d,p],MMM:[d,u("monthNamesShort")],MMMM:[d,u("monthNames")],a:[d,function(e,t,n){var r=t.toLowerCase();r===n.amPm[0]?e.isPm=!1:r===n.amPm[1]&&(e.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(e,t){"Z"===t&&(t="+00:00");var n,r=(t+"").match(/([\+\-]|\d\d)/gi);r&&(n=60*r[1]+parseInt(r[2],10),e.timezoneOffset="+"===r[0]?n:-n)}]};v.dd=v.d,v.dddd=v.ddd,v.DD=v.D,v.mm=v.m,v.hh=v.H=v.HH=v.h,v.MM=v.M,v.ss=v.s,v.A=v.a,s.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},s.format=function(e,t,n){var r=n||s.i18n;if("number"===typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=s.masks[t]||t||s.masks.default;var o=[];return t=t.replace(h,function(e,t){return o.push(t),"??"}),t=t.replace(c,function(t){return t in Y?Y[t](e,r):t.slice(1,t.length-1)}),t.replace(/\?\?/g,function(){return o.shift()})},s.parse=function(e,t,n){var r=n||s.i18n;if("string"!==typeof t)throw new Error("Invalid format in fecha.parse");if(t=s.masks[t]||t,e.length>1e3)return!1;var o=!0,a={};if(t.replace(c,function(t){if(v[t]){var n=v[t],u=e.search(n[0]);~u?e.replace(n[0],function(t){return n[1](a,t,r),e=e.substr(u+t.length),t}):o=!1}return v[t]?"":t.slice(1,t.length-1)}),!o)return!1;var u=new Date;!0===a.isPm&&null!=a.hour&&12!==+a.hour?a.hour=+a.hour+12:!1===a.isPm&&12===+a.hour&&(a.hour=0);var i;return null!=a.timezoneOffset?(a.minute=+(a.minute||0)-+a.timezoneOffset,i=new Date(Date.UTC(a.year||u.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0))):i=new Date(a.year||u.getFullYear(),a.month||0,a.day||1,a.hour||0,a.minute||0,a.second||0,a.millisecond||0),i},"undefined"!==typeof e&&e.exports?e.exports=s:void 0!==(r=function(){return s}.call(t,n,t,e))&&(e.exports=r)}()}});
//# sourceMappingURL=1.11ba7f0e.chunk.js.map