(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,o,n){"use strict";n.r(o);var s=n("q1tI"),r=n.n(s),t=n("Bl7J"),l=n("vrFN"),a=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"http://www.cass.codes"},"made by ",r.a.createElement("span",{className:"underline"},"cassie")))},u=(n("pIFo"),n("Oyvg"),n("FheJ"));var i=function(e){var o,n;function s(o){var n;return(n=e.call(this,o)||this).handleChange=function(e){var o=e.target.value,s=n.props.words,r=[];s&&(s.forEach((function(e){var n=e.word,s=new RegExp(n);o.indexOf(n)>=0&&r.push(e),o=o.replace(s,'<span class="word-warning">'+n+"</span>")})),console.log(r),r.length&&n.props.setUsedWords(r),n.setState({content:void 0,formattedContent:o}))},n.state={content:"",formattedContent:""},n}return n=e,(o=s).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n,s.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"put feedback here",className:"feedback--textbox",value:this.state.content,onChange:this.handleChange}),r.a.createElement("div",{className:"feedback--output",dangerouslySetInnerHTML:{__html:this.state.formattedContent}}))},s}(s.Component),c=Object(u.withMixpanel)()(i);var d=function(e){var o,n;function s(o){var n;return(n=e.call(this,o)||this).state={},n}return n=e,(o=s).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n,s.prototype.render=function(){var e=this.props.word,o=e.reason,n=e.suggestion,s=e.source;return r.a.createElement("div",{className:"word-section"},r.a.createElement("span",{className:"word-warning"},e.word),o&&r.a.createElement("div",null,o+"."),n&&r.a.createElement("div",null,r.a.createElement("span",null,"Try "),r.a.createElement("span",{className:"word--suggestion"},""+n),r.a.createElement("span",null," "," instead"," ")),s&&r.a.createElement("div",{className:"word--learn"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:s},"learn more")))},s}(s.Component),g=Object(u.withMixpanel)()(d);var E=function(e){var o,n;function s(o){var n;return(n=e.call(this,o)||this).state={},n}return n=e,(o=s).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n,s.prototype.render=function(){var e=this.props.usedWords;return r.a.createElement("div",{className:"feedback--explanation"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(g,{word:e})}))))},s}(s.Component),p=Object(u.withMixpanel)()(E),w=n("j9ma"),I=n.n(w);var h=function(e){var o,n;function s(o){var n;return(n=e.call(this,o)||this).updateUsedWords=function(e){n.setState({usedWords:e})},n.state={usedWords:[]},n}n=e,(o=s).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var u=s.prototype;return u.componentDidMount=function(){this.props.mixpanel.track("Page Load")},u.render=function(){var e=this.state.usedWords;return r.a.createElement(t.a,null,r.a.createElement(l.a,{title:"Fair Feedback"}),r.a.createElement("div",{className:"feedback"},r.a.createElement("div",{className:"feedback--input"},r.a.createElement("h3",null,"Type here:"),r.a.createElement(c,{words:I.a,setUsedWords:this.updateUsedWords})),r.a.createElement(p,{usedWords:e})),r.a.createElement(a,null))},s}(s.Component);o.default=Object(u.withMixpanel)()(h)},j9ma:function(e,o){var n={GENDERED:"this word is used disproportionately to describe women",TONE:"this is tone policing",UNTHREATENING:"this word is used to praise women for being non-threatening",INAPPROPRIATE:"it is inappropriate to use this word to describe a coworker",DISAGREEING:'it is often used for people who "disagree while female"'},s={ABLEIST:"it perpetuates ableist language"},r={WAR:"it may be seen as making light of war",DEATH:"it makes light of death"},t={RACIST_ORIGINS:"this word has racist origins",RACIST:"this is a racist term"},l={INCLUSIVITY:"this phrase isn't inclusive of everyone",IMPLIED_PREFERENCE:"this implies that someone's gender identity is merely a preference"},a={SLUR:"this is a slur",DERIVED_FROM_SLUR:"this is derived from a slur"},u=[{word:"bossy",reason:n.GENDERED,suggestion:"assertive",source:null},{word:"abrasive",reason:n.GENDERED,suggestion:null,source:null},{word:"cute",reason:n.INAPPROPRIATE,suggestion:null,source:null},{word:"aggressive",reason:n.GENDERED,suggestion:null,source:null},{word:"shrill",reason:n.GENDERED,suggestion:null,source:null},{word:"dramatic",reason:n.GENDERED,suggestion:null,source:null},{word:"bitchy",reason:n.GENDERED,suggestion:null,source:null},{word:"bitch",reason:n.GENDERED,suggestion:null,source:null},{word:"ditzy",reason:n.GENDERED,suggestion:null,source:null},{word:"nag",reason:n.GENDERED,suggestion:null,source:null},{word:"ladylike",reason:n.UNTHREATENING,suggestion:null,source:null},{word:"bubbly",reason:n.UNTHREATENING,suggestion:null,source:null},{word:"sassy",reason:n.UNTHREATENING,suggestion:null,source:null},{word:"chatty",reason:n.UNTHREATENING,suggestion:null,source:null},{word:"emotional",reason:n.DISAGREEING,suggestion:null,source:null},{word:"hysterical",reason:n.DISAGREEING,suggestion:null,source:null},{word:"flaky",reason:n.DISAGREEING,suggestion:null,source:null},{word:"moody",reason:n.DISAGREEING,suggestion:null,source:null},{word:"oversensitive",reason:n.DISAGREEING,suggestion:null,source:null}],i=[{word:"crazy",reason:s.ABLEIST,suggestion:null,source:null},{word:"insane",reason:s.ABLEIST,suggestion:null,source:null},{word:"lame",reason:s.ABLEIST,suggestion:null,source:null},{word:"stupid",reason:s.ABLEIST,suggestion:null,source:null},{word:"dumb",reason:s.ABLEIST,suggestion:null,source:null},{word:"lunatic",reason:s.ABLEIST,suggestion:null,source:null},{word:"looney",reason:s.ABLEIST,suggestion:null,source:null},{word:"psycho",reason:s.ABLEIST,suggestion:null,source:null},{word:"schizo",reason:s.ABLEIST,suggestion:null,source:null},{word:"senile",reason:s.ABLEIST,suggestion:null,source:null},{word:"sociopath",reason:s.ABLEIST,suggestion:null,source:null},{word:"maniac",reason:s.ABLEIST,suggestion:null,source:null},{word:"moron",reason:s.ABLEIST,suggestion:null,source:null},{word:"nuts",reason:s.ABLEIST,suggestion:null,source:null},{word:"sanity check",reason:s.ABLEIST,suggestion:"asking for validation",source:null}],c=[{word:"war room",reason:r.WAR,suggestion:null,source:null},{word:"war story",reason:r.WAR,suggestion:null,source:null},{word:"kill switch",reason:r.DEATH,suggestion:null,source:null}],d=[{word:"peanut gallery",reason:t.RACIST_ORIGINS,suggestion:null,source:null},{word:"sold down the river",reason:t.RACIST_ORIGINS,suggestion:null,source:null},{word:"eenie, meenie, miney, mo",reason:t.RACIST_ORIGINS,suggestion:null,source:null},{word:"hip hip hooray",reason:t.RACIST_ORIGINS,suggestion:"hooray",source:null},{word:"uppity",reason:t.RACIST_ORIGINS,suggestion:null,source:null},{word:"master",reason:t.RACIST_ORIGINS,suggestion:"primary or main",source:null},{word:"slave",reason:t.RACIST_ORIGINS,suggestion:"replica",source:null},{word:"whitelist",reason:t.RACIST_ORIGINS,suggestion:"allowlist",source:null},{word:"blacklist",reason:t.RACIST_ORIGINS,suggestion:"denylist",source:null},{word:"ghetto",reason:t.RACIST_ORIGINS,suggestion:null,source:null},{word:"brownbag",reason:t.RACIST_ORIGINS,suggestion:null,source:null}],g=[{word:"he or she",reason:l.INCLUSIVITY,suggestion:"they",source:null},{word:"preferred pronouns",reason:l.IMPLIED_PREFERENCE,suggestion:"pronouns",source:null},{word:"self-identifies",reason:l.IMPLIED_PREFERENCE,suggestion:"is",source:null}],E=[{word:"gypsy",reason:a.SLUR,suggestion:null,source:"https://now.org/blog/the-g-word-isnt-for-you-how-gypsy-erases-romani-women/"},{word:"gyp ",reason:a.DERIVED_FROM_SLUR,suggestion:null,source:"https://now.org/blog/the-g-word-isnt-for-you-how-gypsy-erases-romani-women/"}],p=[].concat(u,i,c,d,g,E);e.exports=p}}]);
//# sourceMappingURL=component---src-pages-index-js-f4b200cb7de73f79096a.js.map