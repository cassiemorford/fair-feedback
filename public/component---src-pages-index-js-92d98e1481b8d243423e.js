(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4JlD":function(e,t,s){"use strict";s("rGqo"),s("yt8O"),s("RW0V"),s("bWfx"),s("a1Th"),s("h7Nl"),s("Btvt"),s("LK8F");var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,s,a){return t=t||"&",s=s||"=",null===e&&(e=void 0),"object"==typeof e?n(A(e),(function(A){var a=encodeURIComponent(o(A))+s;return r(e[A])?n(e[A],(function(e){return a+encodeURIComponent(o(e))})).join(t):a+encodeURIComponent(o(e[A]))})).join(t):a?encodeURIComponent(o(a))+s+encodeURIComponent(o(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function n(e,t){if(e.map)return e.map(t);for(var s=[],o=0;o<e.length;o++)s.push(t(e[o],o));return s}var A=Object.keys||function(e){var t=[];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.push(s);return t}},"7/tb":function(e,t,s){e.exports=s.p+"static/email-65dad09470c786bbdb67fe570e205187.gif"},CxY0:function(e,t,s){"use strict";s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("mGWK"),s("SRfc"),s("Tze0"),s("pIFo"),s("KKXr"),s("V+eJ"),s("OG14");var o=s("GYWy"),r=s("Nehr");function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=w,t.resolve=function(e,t){return w(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?w(e,!1,!0).resolveObject(t):t},t.format=function(e){r.isString(e)&&(e=w(e));return e instanceof n?e.format():n.prototype.format.call(e)},t.Url=n;var A=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(l),u=["%","/","?",";","#"].concat(h),c=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,g=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},E={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},f=s("s4NR");function w(e,t,s){if(e&&r.isObject(e)&&e instanceof n)return e;var o=new n;return o.parse(e,t,s),o}n.prototype.parse=function(e,t,s){if(!r.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),a=-1!==n&&n<e.indexOf("#")?"?":"#",l=e.split(a);l[0]=l[0].replace(/\\/g,"/");var w=e=l.join(a);if(w=w.trim(),!s&&1===e.split("#").length){var I=i.exec(w);if(I)return this.path=w,this.href=w,this.pathname=I[1],I[2]?(this.search=I[2],this.query=t?f.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var S=A.exec(w);if(S){var R=(S=S[0]).toLowerCase();this.protocol=R,w=w.substr(S.length)}if(s||S||w.match(/^\/\/[^@\/]+@[^@\/]+/)){var C="//"===w.substr(0,2);!C||S&&d[S]||(w=w.substr(2),this.slashes=!0)}if(!d[S]&&(C||S&&!E[S])){for(var y,N,v=-1,T=0;T<c.length;T++){-1!==(D=w.indexOf(c[T]))&&(-1===v||D<v)&&(v=D)}-1!==(N=-1===v?w.lastIndexOf("@"):w.lastIndexOf("@",v))&&(y=w.slice(0,N),w=w.slice(N+1),this.auth=decodeURIComponent(y)),v=-1;for(T=0;T<u.length;T++){var D;-1!==(D=w.indexOf(u[T]))&&(-1===v||D<v)&&(v=D)}-1===v&&(v=w.length),this.host=w.slice(0,v),w=w.slice(v),this.parseHost(),this.hostname=this.hostname||"";var b="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!b)for(var k=this.hostname.split(/\./),O=(T=0,k.length);T<O;T++){var B=k[T];if(B&&!B.match(p)){for(var L="",U=0,Q=B.length;U<Q;U++)B.charCodeAt(U)>127?L+="x":L+=B[U];if(!L.match(p)){var j=k.slice(0,T),G=k.slice(T+1),J=B.match(g);J&&(j.push(J[1]),G.unshift(J[2])),G.length&&(w="/"+G.join(".")+w),this.hostname=j.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),b||(this.hostname=o.toASCII(this.hostname));var K=this.port?":"+this.port:"",M=this.hostname||"";this.host=M+K,this.href+=this.host,b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==w[0]&&(w="/"+w))}if(!m[R])for(T=0,O=h.length;T<O;T++){var q=h[T];if(-1!==w.indexOf(q)){var P=encodeURIComponent(q);P===q&&(P=escape(q)),w=w.split(q).join(P)}}var Y=w.indexOf("#");-1!==Y&&(this.hash=w.substr(Y),w=w.slice(0,Y));var x=w.indexOf("?");if(-1!==x?(this.search=w.substr(x),this.query=w.substr(x+1),t&&(this.query=f.parse(this.query)),w=w.slice(0,x)):t&&(this.search="",this.query={}),w&&(this.pathname=w),E[R]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){K=this.pathname||"";var F=this.search||"";this.path=K+F}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",s=this.pathname||"",o=this.hash||"",n=!1,A="";this.host?n=e+this.host:this.hostname&&(n=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(A=f.stringify(this.query));var a=this.search||A&&"?"+A||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||E[t])&&!1!==n?(n="//"+(n||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):n||(n=""),o&&"#"!==o.charAt(0)&&(o="#"+o),a&&"?"!==a.charAt(0)&&(a="?"+a),t+n+(s=s.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+o},n.prototype.resolve=function(e){return this.resolveObject(w(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(r.isString(e)){var t=new n;t.parse(e,!1,!0),e=t}for(var s=new n,o=Object.keys(this),A=0;A<o.length;A++){var a=o[A];s[a]=this[a]}if(s.hash=e.hash,""===e.href)return s.href=s.format(),s;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),l=0;l<i.length;l++){var h=i[l];"protocol"!==h&&(s[h]=e[h])}return E[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(e.protocol&&e.protocol!==s.protocol){if(!E[e.protocol]){for(var u=Object.keys(e),c=0;c<u.length;c++){var p=u[c];s[p]=e[p]}return s.href=s.format(),s}if(s.protocol=e.protocol,e.host||d[e.protocol])s.pathname=e.pathname;else{for(var g=(e.pathname||"").split("/");g.length&&!(e.host=g.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==g[0]&&g.unshift(""),g.length<2&&g.unshift(""),s.pathname=g.join("/")}if(s.search=e.search,s.query=e.query,s.host=e.host||"",s.auth=e.auth,s.hostname=e.hostname||e.host,s.port=e.port,s.pathname||s.search){var m=s.pathname||"",f=s.search||"";s.path=m+f}return s.slashes=s.slashes||e.slashes,s.href=s.format(),s}var w=s.pathname&&"/"===s.pathname.charAt(0),I=e.host||e.pathname&&"/"===e.pathname.charAt(0),S=I||w||s.host&&e.pathname,R=S,C=s.pathname&&s.pathname.split("/")||[],y=(g=e.pathname&&e.pathname.split("/")||[],s.protocol&&!E[s.protocol]);if(y&&(s.hostname="",s.port=null,s.host&&(""===C[0]?C[0]=s.host:C.unshift(s.host)),s.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===g[0]?g[0]=e.host:g.unshift(e.host)),e.host=null),S=S&&(""===g[0]||""===C[0])),I)s.host=e.host||""===e.host?e.host:s.host,s.hostname=e.hostname||""===e.hostname?e.hostname:s.hostname,s.search=e.search,s.query=e.query,C=g;else if(g.length)C||(C=[]),C.pop(),C=C.concat(g),s.search=e.search,s.query=e.query;else if(!r.isNullOrUndefined(e.search)){if(y)s.hostname=s.host=C.shift(),(b=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=b.shift(),s.host=s.hostname=b.shift());return s.search=e.search,s.query=e.query,r.isNull(s.pathname)&&r.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!C.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var N=C.slice(-1)[0],v=(s.host||e.host||C.length>1)&&("."===N||".."===N)||""===N,T=0,D=C.length;D>=0;D--)"."===(N=C[D])?C.splice(D,1):".."===N?(C.splice(D,1),T++):T&&(C.splice(D,1),T--);if(!S&&!R)for(;T--;T)C.unshift("..");!S||""===C[0]||C[0]&&"/"===C[0].charAt(0)||C.unshift(""),v&&"/"!==C.join("/").substr(-1)&&C.push("");var b,k=""===C[0]||C[0]&&"/"===C[0].charAt(0);y&&(s.hostname=s.host=k?"":C.length?C.shift():"",(b=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=b.shift(),s.host=s.hostname=b.shift()));return(S=S||s.host&&C.length)&&!k&&C.unshift(""),C.length?s.pathname=C.join("/"):(s.pathname=null,s.path=null),r.isNull(s.pathname)&&r.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=e.auth||s.auth,s.slashes=s.slashes||e.slashes,s.href=s.format(),s},n.prototype.parseHost=function(){var e=this.host,t=a.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},GYWy:function(e,t,s){(function(e,o){var r;s("mGWK"),s("pIFo"),s("KKXr"),function(n){t&&t.nodeType,e&&e.nodeType;var A="object"==typeof o&&o;A.global!==A&&A.window!==A&&A.self;var a,i=2147483647,l=36,h=1,u=26,c=38,p=700,g=72,m=128,d="-",E=/^xn--/,f=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},S=l-h,R=Math.floor,C=String.fromCharCode;function y(e){throw new RangeError(I[e])}function N(e,t){for(var s=e.length,o=[];s--;)o[s]=t(e[s]);return o}function v(e,t){var s=e.split("@"),o="";return s.length>1&&(o=s[0]+"@",e=s[1]),o+N((e=e.replace(w,".")).split("."),t).join(".")}function T(e){for(var t,s,o=[],r=0,n=e.length;r<n;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<n?56320==(64512&(s=e.charCodeAt(r++)))?o.push(((1023&t)<<10)+(1023&s)+65536):(o.push(t),r--):o.push(t);return o}function D(e){return N(e,(function(e){var t="";return e>65535&&(t+=C((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=C(e)})).join("")}function b(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,s){var o=0;for(e=s?R(e/p):e>>1,e+=R(e/t);e>S*u>>1;o+=l)e=R(e/S);return R(o+(S+1)*e/(e+c))}function O(e){var t,s,o,r,n,A,a,c,p,E,f,w=[],I=e.length,S=0,C=m,N=g;for((s=e.lastIndexOf(d))<0&&(s=0),o=0;o<s;++o)e.charCodeAt(o)>=128&&y("not-basic"),w.push(e.charCodeAt(o));for(r=s>0?s+1:0;r<I;){for(n=S,A=1,a=l;r>=I&&y("invalid-input"),((c=(f=e.charCodeAt(r++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||c>R((i-S)/A))&&y("overflow"),S+=c*A,!(c<(p=a<=N?h:a>=N+u?u:a-N));a+=l)A>R(i/(E=l-p))&&y("overflow"),A*=E;N=k(S-n,t=w.length+1,0==n),R(S/t)>i-C&&y("overflow"),C+=R(S/t),S%=t,w.splice(S++,0,C)}return D(w)}function B(e){var t,s,o,r,n,A,a,c,p,E,f,w,I,S,N,v=[];for(w=(e=T(e)).length,t=m,s=0,n=g,A=0;A<w;++A)(f=e[A])<128&&v.push(C(f));for(o=r=v.length,r&&v.push(d);o<w;){for(a=i,A=0;A<w;++A)(f=e[A])>=t&&f<a&&(a=f);for(a-t>R((i-s)/(I=o+1))&&y("overflow"),s+=(a-t)*I,t=a,A=0;A<w;++A)if((f=e[A])<t&&++s>i&&y("overflow"),f==t){for(c=s,p=l;!(c<(E=p<=n?h:p>=n+u?u:p-n));p+=l)N=c-E,S=l-E,v.push(C(b(E+N%S,0))),c=R(N/S);v.push(C(b(c,0))),n=k(s,I,o==r),s=0,++o}++s,++t}return v.join("")}a={version:"1.4.1",ucs2:{decode:T,encode:D},decode:O,encode:B,toASCII:function(e){return v(e,(function(e){return f.test(e)?"xn--"+B(e):e}))},toUnicode:function(e){return v(e,(function(e){return E.test(e)?O(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return a}.call(t,s,t,e))||(e.exports=r)}()}).call(this,s("YuTi")(e),s("yLpj"))},Nehr:function(e,t,s){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},PvdP:function(e,t){e.exports="data:image/gif;base64,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"},QmrC:function(e,t,s){e.exports=s.p+"static/feedback-a46ea211b1d7d192cb7594108873ac47.gif"},RXBc:function(e,t,s){"use strict";s.r(t);var o=s("q1tI"),r=s.n(o),n=s("Bl7J"),A=s("vrFN"),a=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://forms.gle/a4voJ5hKYtNct5gbA"},r.a.createElement("span",{className:"underline"},"submit")," other words or phrases"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.cass.codes"},"made by ",r.a.createElement("span",{className:"underline"},"cassie")))},i=(s("pIFo"),s("Oyvg"),s("FheJ"));s("CxY0");var l=function(e){var t,s;function o(t){var s;return(s=e.call(this,t)||this).handleChange=function(e){var t=e.target.value;t=t.toLowerCase();var o=s.props.words,r=[];o&&(o.forEach((function(e){var s=e.word,o=new RegExp(s);t.indexOf(s)>=0&&r.push(e),t=t.replace(o,'<span class="word-warning">'+s+"</span>")})),s.props.setUsedWords(r),s.setState({content:void 0,formattedContent:t}))},s.state={content:"",formattedContent:""},s}return s=e,(t=o).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,o.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("textarea",{rows:"10",columns:"30",placeholder:"type here -- your text is never stored or tracked",className:"feedback--textbox",value:this.state.content,onChange:this.handleChange}),r.a.createElement("div",{className:"feedback--output",dangerouslySetInnerHTML:{__html:this.state.formattedContent}}))},o}(o.Component),h=Object(i.withMixpanel)()(l);var u=function(e){var t,s;function o(t){var s;return(s=e.call(this,t)||this).state={},s}return s=e,(t=o).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,o.prototype.render=function(){var e=this.props.word,t=e.reason,s=e.suggestion,o=e.source;return r.a.createElement("div",{className:"word-section"},r.a.createElement("span",{className:"word-warning"},e.word),t&&r.a.createElement("div",null,t+"."),s&&r.a.createElement("div",null,r.a.createElement("span",null,"Try "),r.a.createElement("span",{className:"word--suggestion"},""+s),r.a.createElement("span",null," "," instead"," ")),o&&r.a.createElement("div",{className:"word--learn"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:o},"learn more")))},o}(o.Component),c=Object(i.withMixpanel)()(u);var p=function(e){var t,s;function o(t){var s;return(s=e.call(this,t)||this).state={},s}return s=e,(t=o).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,o.prototype.render=function(){var e=this.props.usedWords;return r.a.createElement("div",{className:"feedback--explanation"},!e.length&&r.a.createElement("div",{className:"feedback--none"},"so far, so good"),!!e.length&&e.map((function(e){return r.a.createElement(c,{word:e})})))},o}(o.Component),g=Object(i.withMixpanel)()(p),m=s("j9ma"),d=s.n(m),E=s("QmrC"),f=s.n(E),w=s("PvdP"),I=s.n(w),S=s("fx5B"),R=s.n(S),C=s("7/tb"),y=s.n(C);var N=function(e){var t,s;function o(t){var s;return(s=e.call(this,t)||this).updateUsedWords=function(e){s.setState({usedWords:e})},s.state={usedWords:[]},s}s=e,(t=o).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s;var i=o.prototype;return i.componentDidMount=function(){this.props.mixpanel.track("Page Load")},i.render=function(){var e=this.state.usedWords;return r.a.createElement(n.a,null,r.a.createElement(A.a,{title:"Fair Feedback"}),r.a.createElement("div",{className:"feedback"},r.a.createElement("div",{className:"feedback--input"},r.a.createElement("div",{className:"feedback--gif"},r.a.createElement("img",{className:"feedback--main-gif",src:f.a,alt:"get feedback on your"}),r.a.createElement("div",{className:"feedback--rotating-gif"},r.a.createElement("img",{className:"feedback--gif-1",src:y.a,alt:"email"}),r.a.createElement("img",{className:"feedback--gif-2",src:R.a,alt:"feedback"}),r.a.createElement("img",{className:"feedback--gif-3",src:I.a,alt:"essay"}))),r.a.createElement(h,{words:d.a,setUsedWords:this.updateUsedWords})),r.a.createElement(g,{usedWords:e})),r.a.createElement(a,null))},o}(o.Component);t.default=Object(i.withMixpanel)()(N)},YuTi:function(e,t,s){s("HAE/"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},fx5B:function(e,t,s){e.exports=s.p+"static/feedback2-056bccd3bb84aa0e107ae7c26359bc5e.gif"},j9ma:function(e,t){var s={GENDERED:{GENDERED:"this word is used disproportionately to describe women",TONE:"this is tone policing",UNTHREATENING:"this word is used to praise women for being non-threatening",INAPPROPRIATE:"it is inappropriate to use this word to describe a coworker",DISAGREEING:'it is often used for people who "disagree while female"',NONINCLUSIVE:"it erases people who don't identify as men"},ABLEIST:{ABLEIST:"it perpetuates ableist language"},CALLOUS:{WAR:"it may be seen as making light of war",DEATH:"it makes light of death"},RACIST:{RACIST_ORIGINS:"this word has racist origins",RACIST:"this is a racist term"},TRANSPHOBIC:{INCLUSIVITY:"this phrase isn't inclusive of everyone",IMPLIED_PREFERENCE:"this implies that someone's gender identity is merely a preference"},MISC:{SLUR:"this is a slur",DERIVED_FROM_SLUR:"this is derived from a slur",BETTER_LANUAGE_EXISTS:"better language exists"}},o=[{word:"bossy",reason:s.GENDERED.GENDERED,suggestion:"decisive",source:"https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/"},{word:"abrasive",reason:s.GENDERED.GENDERED,suggestion:null,source:"https://www.fastcompany.com/3034895/the-one-word-men-never-see-in-their-performance-reviews"},{word:"cute",reason:s.GENDERED.INAPPROPRIATE,suggestion:null,source:null},{word:"aggressive",reason:s.GENDERED.GENDERED,suggestion:"confident, intelligent, decisive, authoritative, assertive",source:"https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/"},{word:"shrill",reason:s.GENDERED.GENDERED,suggestion:null,source:"https://time.com/4268325/history-calling-women-shrill/"},{word:"dramatic",reason:s.GENDERED.GENDERED,suggestion:null,source:null},{word:"bitchy",reason:s.GENDERED.GENDERED,suggestion:"rude",source:null},{word:"bitch",reason:s.GENDERED.GENDERED,suggestion:null,source:null},{word:"ditzy",reason:s.GENDERED.GENDERED,suggestion:"spacey",source:null},{word:"nag",reason:s.GENDERED.GENDERED,suggestion:null,source:null},{word:"ladylike",reason:s.GENDERED.UNTHREATENING,suggestion:null,source:null},{word:"bubbly",reason:s.GENDERED.UNTHREATENING,suggestion:"cheerful",source:null},{word:"sassy",reason:s.GENDERED.UNTHREATENING,suggestion:null,source:null},{word:"chatty",reason:s.GENDERED.UNTHREATENING,suggestion:null,source:null},{word:"emotional",reason:s.GENDERED.DISAGREEING,suggestion:null,source:"https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/"},{word:"hysterical",reason:s.GENDERED.DISAGREEING,suggestion:"passionate",source:"https://www.mcgill.ca/oss/article/history-quackery/history-hysteria#:~:text=Throughout%20history%20hysteria%20has%20been,rest%20of%20the%20body's%20health."},{word:"flaky",reason:s.GENDERED.DISAGREEING,suggestion:null,source:null},{word:"moody",reason:s.GENDERED.DISAGREEING,suggestion:"unpredictable",source:null},{word:"oversensitive",reason:s.GENDERED.DISAGREEING,suggestion:"sensitive",source:null},{word:"man hours",reason:s.GENDERED.NONINCLUSIVE,suggestion:"person hours, developer days",source:null},{word:"guys",reason:s.GENDERED.NONINCLUSIVE,suggestion:"folks, y'all, everyone",source:"https://time.com/5688255/you-guys/"}],r=[{word:"crazy",reason:s.ABLEIST.ABLEIST,suggestion:"illogical",source:"https://www.npr.org/2019/07/08/739643765/why-people-are-arguing-to-stop-using-the-words-crazy-and-insane"},{word:"insane",reason:s.ABLEIST.ABLEIST,suggestion:"illogical",source:"https://www.npr.org/2019/07/08/739643765/why-people-are-arguing-to-stop-using-the-words-crazy-and-insane"},{word:"lame",reason:s.ABLEIST.ABLEIST,suggestion:null,source:null},{word:"stupid",reason:s.ABLEIST.ABLEIST,suggestion:"irrational",source:null},{word:"dumb",reason:s.ABLEIST.ABLEIST,suggestion:"avoiding this word",source:null},{word:"lunatic",reason:s.ABLEIST.ABLEIST,suggestion:null,source:null},{word:"looney",reason:s.ABLEIST.ABLEIST,suggestion:null,source:null},{word:"psycho",reason:s.ABLEIST.ABLEIST,suggestion:"unpredictable",source:null},{word:"schizo",reason:s.ABLEIST.ABLEIST,suggestion:"unpredictable",source:null},{word:"senile",reason:s.ABLEIST.ABLEIST,suggestion:"avoiding this word",source:null},{word:"sociopath",reason:s.ABLEIST.ABLEIST,suggestion:"heartless",source:null},{word:"maniac",reason:s.ABLEIST.ABLEIST,suggestion:"unpredicatable",source:null},{word:"moron",reason:s.ABLEIST.ABLEIST,suggestion:"avoiding this word",source:null},{word:"nuts",reason:s.ABLEIST.ABLEIST,suggestion:null,source:null},{word:"sanity check",reason:s.ABLEIST.ABLEIST,suggestion:"asking for validation",source:null}],n=[{word:"war room",reason:s.CALLOUS.WAR,suggestion:"ship room",source:null},{word:"war story",reason:s.CALLOUS.WAR,suggestion:"avoiding this word",source:null},{word:"killswitch",reason:s.CALLOUS.DEATH,suggestion:"switch, emergency switch",source:null},{word:"kill switch",reason:s.CALLOUS.DEATH,suggestion:"switch, emergency switch",source:null},{word:"postmortem",reason:s.CALLOUS.DEATH,suggestion:"retrospective",source:null},{word:"premortem",reason:s.CALLOUS.DEATH,suggestion:"pre-release risk assesment",source:null},{word:"post-mortem",reason:s.CALLOUS.DEATH,suggestion:"retrospective",source:null},{word:"pre-mortem",reason:s.CALLOUS.DEATH,suggestion:"pre-release risk assesment",source:null}],A=[{word:"peanut gallery",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#3peanut-gallery-3"},{word:"sold down the river",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#9-sold-down-the-river-9"},{word:"redlining",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.nytimes.com/2017/08/24/upshot/how-redlinings-racist-effects-lasted-for-decades.html"},{word:"redline",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.nytimes.com/2017/08/24/upshot/how-redlinings-racist-effects-lasted-for-decades.html"},{word:"eenie, meenie, miney, mo",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#10-eenie-meenie-miney-moe-10"},{word:"hip hip hooray",reason:s.RACIST.RACIST_ORIGINS,suggestion:"hooray",source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#11-hip-hip-hooray-11"},{word:"uppity",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#2-uppity-2"},{word:"master",reason:s.RACIST.RACIST_ORIGINS,suggestion:"primary or main",source:null},{word:"slave",reason:s.RACIST.RACIST_ORIGINS,suggestion:"replica",source:null},{word:"whitelist",reason:s.RACIST.RACIST_ORIGINS,suggestion:"allowlist",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/"},{word:"blacklist",reason:s.RACIST.RACIST_ORIGINS,suggestion:"denylist",source:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/"},{word:"ghetto",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://time.com/5684505/ghetto-word-history/"},{word:"brownbag",reason:s.RACIST.RACIST_ORIGINS,suggestion:null,source:"https://en.wikipedia.org/wiki/Brown_Paper_Bag_Test"}],a=[{word:"he or she",reason:s.TRANSPHOBIC.INCLUSIVITY,suggestion:"they",source:null},{word:"he/she",reason:s.TRANSPHOBIC.INCLUSIVITY,suggestion:"they",source:null},{word:"him/her",reason:s.TRANSPHOBIC.INCLUSIVITY,suggestion:"them",source:null},{word:"him or her",reason:s.TRANSPHOBIC.INCLUSIVITY,suggestion:"them",source:null},{word:"preferred pronouns",reason:s.TRANSPHOBIC.IMPLIED_PREFERENCE,suggestion:"pronouns",source:null},{word:"self-identifies",reason:s.TRANSPHOBIC.IMPLIED_PREFERENCE,suggestion:"is",source:null}],i=[{word:"gypsy",reason:s.MISC.SLUR,suggestion:null,source:"https://now.org/blog/the-g-word-isnt-for-you-how-gypsy-erases-romani-women/"},{word:"gyp ",reason:s.MISC.DERIVED_FROM_SLUR,suggestion:null,source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#4-gyp-4"},{word:"diverse candidate",reason:s.MISC.BETTER_LANGUAGE_EXISTS,suggestion:"candidate from an underrepresented population",source:null},{word:"eskimo",reason:s.MISC.BETTER_LANGUAGE_EXISTS,suggestion:"Inuit",source:"https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#8-eskimo-8"}],l=[].concat(o,r,n,A,a,i);e.exports=l},kd2E:function(e,t,s){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}s("a1Th"),s("h7Nl"),s("Btvt"),s("LK8F"),s("V+eJ"),s("pIFo"),s("KKXr"),e.exports=function(e,t,s,n){t=t||"&",s=s||"=";var A={};if("string"!=typeof e||0===e.length)return A;var a=/\+/g;e=e.split(t);var i=1e3;n&&"number"==typeof n.maxKeys&&(i=n.maxKeys);var l=e.length;i>0&&l>i&&(l=i);for(var h=0;h<l;++h){var u,c,p,g,m=e[h].replace(a,"%20"),d=m.indexOf(s);d>=0?(u=m.substr(0,d),c=m.substr(d+1)):(u=m,c=""),p=decodeURIComponent(u),g=decodeURIComponent(c),o(A,p)?r(A[p])?A[p].push(g):A[p]=[A[p],g]:A[p]=g}return A};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,s){"use strict";t.decode=t.parse=s("kd2E"),t.encode=t.stringify=s("4JlD")}}]);
//# sourceMappingURL=component---src-pages-index-js-92d98e1481b8d243423e.js.map