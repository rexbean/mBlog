(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){},182:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),s=(a(82),a(12)),c=a(9),i=a(15),u=a(13),h=a(14),m=a(194),b=(a(83),a(42)),d=a.n(b),p=a(188),g=a(24),f=a(26),E=function(e){return{type:"INIT_BLOG",blogs:e}};a(167);var v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={blog:{title:"",content:"",date:"",type:"",author:""}},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"_loadBlogs",value:function(){var e=localStorage.getItem("blogs");e=e?JSON.parse(e):[],this.props.initBlogs(e)}},{key:"componentWillMount",value:function(){0===this.props.blogs.length?(console.log("is empty"),this._loadBlogs()):this.setState({blog:this.props.blogs[this.props.match.params.blogId]})}},{key:"componentWillReceiveProps",value:function(e){this.setState({blog:e.blogs[this.props.match.params.blogId]})}}]),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{className:"blog"},l.a.createElement("h1",null,this.state.blog.title),l.a.createElement(d.a,{source:this.state.blog.content}))}}]),t}(n.Component),y=Object(g.b)(function(e){return{blogs:e.blogs}},function(e){return{initBlogs:function(t){e(E(t))}}})(v),O=a(191),j=a(192),k=a(76),B=a(189),S=a(197),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={title:a.props.title,content:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e.target.value)}},{key:"render",value:function(){return l.a.createElement(B.a,{className:"mb-3"},l.a.createElement(B.a.Prepend,null,l.a.createElement(B.a.Text,{id:"basic-addon1"},this.state.title)),l.a.createElement(S.a,{value:this.state.content,placeholder:"","aria-label":"","aria-describedby":"basic-addon1",onChange:this.handleChange.bind(this),onBlur:this.handleBlur.bind(this)}))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={content:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.state.content=e.target.value,this.props.onChange&&this.props.onChange(e.target.value)}},{key:"handleKeydown",value:function(e){9===e.keyCode&&(e.preventDefault(),e.target.value=e.target.value+"    ",e.target.focus())}},{key:"render",value:function(){return l.a.createElement("textarea",{value:this.state.content,"data-gramm":"false",onKeyDown:this.handleKeydown,onChange:this.handleChange.bind(this)})}}]),t}(n.Component),w=a(190),N=a(45),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={title:"",options:a.props.options},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.state.title=this.props.options[0].text}},{key:"handleSelect",value:function(e){this.props.onSelect&&this.props.onSelect(e),this.setState({title:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(w.a,{id:"dropdown-basic-button",title:this.state.title},this.state.options.map(function(t,a){return l.a.createElement(N.a.Item,{key:a,href:t.link,eventKey:t.text,onSelect:e.handleSelect.bind(e)},t.text)}))}}]),t}(n.Component);a(182);var T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={title:"",author:"",date:"",content:"",type:"",options:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=new Date;this.setState({date:e.toUTCString()}),this.state.options=[{link:"",text:"project"},{link:"",text:"note"},{link:"",text:"add New..."}]}},{key:"handleSubmit",value:function(){""===this.state.type&&(this.state.type=this.state.options[0].text),this.props.onSubmit&&this.props.onSubmit({title:this.state.title,author:this.state.author,type:this.state.type,date:this.state.date,content:this.state.content})}},{key:"handleDropDownSelect",value:function(e){this.setState({type:e})}},{key:"handleContentChange",value:function(e){this.setState({content:e})}},{key:"handleTitleBlur",value:function(e){this.setState({title:e})}},{key:"handleAuthorBlur",value:function(e){this.setState({author:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"BlogInput"},l.a.createElement("div",{className:"BlogInput"},l.a.createElement(p.a,null,l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:8},l.a.createElement(C,{title:"Title",onBlur:this.handleTitleBlur.bind(this)}))),l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:4},l.a.createElement(C,{title:"Author",onBlur:this.handleAuthorBlur.bind(this)})),l.a.createElement(j.a,{md:4},l.a.createElement(x,{options:this.state.options,onSelect:this.handleDropDownSelect.bind(this)}))),l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:8},l.a.createElement(I,{onChange:this.handleContentChange.bind(this)}))),l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:4}),l.a.createElement(j.a,{md:4},l.a.createElement("p",{id:"DateInput",type:"text"},this.state.date))),l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:1}),l.a.createElement(j.a,{md:3},l.a.createElement(k.a,{variant:"primary",className:"button",onClick:this.handleSubmit.bind(this)}," Save ")),l.a.createElement(j.a,{md:3},l.a.createElement(k.a,{variant:"danger",className:"button"}," Cancel "))),l.a.createElement(O.a,{className:"BlogInput"},l.a.createElement(j.a,{md:2}),l.a.createElement(j.a,{md:8},l.a.createElement(d.a,{className:"result",source:this.state.content})),l.a.createElement(j.a,{md:2})))))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"_submitToGithub",value:function(e){}},{key:"_submitToLocal",value:function(e){localStorage.setItem("blogs",JSON.stringify(e))}},{key:"handleSubmit",value:function(e){if(e){if(!e.title)return alert("Please Input the title");if(!e.content)return alert("Please Input the contetn");console.log(e.title+" "+e.author+" "+e.content+" "+e.date);var t=this.props.blogs,a=[].concat(Object(f.a)(t),[e]);console.log("new blogs"+a),this._submitToLocal(a),this.props.addBlog(e)}}},{key:"render",value:function(){return l.a.createElement(T,{onSubmit:this.handleSubmit.bind(this)})}}]),t}(n.Component),_=Object(g.b)(function(e){return{blogs:e.blogs}},function(e){return{initBlogs:function(t){e(E(t))},addBlog:function(t){console.log("blog"+t),e(function(e){return{type:"ADD_BLOG",blog:e}}(t))}}})(D),L=a(198),P=a(193),W=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={redirect:!1,dest:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this._loadBlogs()}},{key:"_loadBlogs",value:function(){var e=localStorage.getItem("blogs");e=e?JSON.parse(e):[],this.props.initBlogs(e)}}]),Object(c.a)(t,[{key:"handleClick",value:function(e,t){console.log(e),this.setState({redirect:!0,dest:"/blogs/"+e})}},{key:"render",value:function(){var e=this;this.props.blogs;return this.state.redirect?l.a.createElement(L.a,{to:this.state.dest}):l.a.createElement("div",null,l.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," # "),l.a.createElement("th",null," Blog Title "),l.a.createElement("th",null," Type"),l.a.createElement("th",null," Post date"))),l.a.createElement("tbody",null,this.props.blogs.map(function(t,a){return l.a.createElement("tr",{key:a,onClick:e.handleClick.bind(e,a)},l.a.createElement("td",null,a),l.a.createElement("td",null,t.title),l.a.createElement("td",null,t.type),l.a.createElement("td",null,t.date))}))))}}]),t}(n.Component),A=Object(g.b)(function(e){return{blogs:e.blogs}},function(e){return{initBlogs:function(t){e(E(t))}}})(W),G=a(195),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state),console.log("This is the process.env","/mBlog"),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"primary-header"},l.a.createElement(m.a,null,l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{href:""},"Home")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{href:"blogs2"},"Blogs")),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,{href:"new"},"New Post")))),l.a.createElement(G.a,{exact:!0,path:"/blogs",render:function(e){return l.a.createElement(A,{routerProps:e})}}),l.a.createElement(G.a,{path:"/blogs/:blogId",render:function(e){return l.a.createElement(y,{routerProps:e})}}),l.a.createElement(G.a,{path:"/new",render:function(e){return l.a.createElement(_,{routerProps:e})}}))}}]),t}(n.Component),K=a(36);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(196),H=Object(K.b)(function(e,t){switch(e||(e={blogs:[]}),t.type){case"INIT_BLOG":return{blogs:Object(f.a)(t.blogs)};case"ADD_BLOG":return{blogs:[].concat(Object(f.a)(e.blogs),[t.blog])};case"DELETE_BLOG":return{blogs:[].concat(Object(f.a)(e.blogs.slice(0,t.blogIndex)),Object(f.a)(e.blogs.slice(t.blogIndex+1)))};default:return e}});r.a.render(l.a.createElement(g.a,{store:H},l.a.createElement(M.a,{basename:"/mBlog"},l.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports=a(186)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.3161e223.chunk.js.map