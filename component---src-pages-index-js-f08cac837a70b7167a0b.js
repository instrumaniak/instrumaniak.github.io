(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});a(33);var r=a(0),n=a.n(r),o=a(215),i=a(102),l=a(217);t.default=function(e){var t=e.data,a=t.site.siteMetadata,c=t.allMarkdownRemark.edges;return n.a.createElement(r.Fragment,null,n.a.createElement(l.Helmet,null,n.a.createElement("title",null,a.title),n.a.createElement("meta",{name:"description",content:a.description})),n.a.createElement(o.a,null,c.map(function(e,t){var a=e.node,r=a.frontmatter,o=r.title,l=r.category,c=r.tags,s=r.blurb,m=a.fields,u=m.slug,p=m.date;return n.a.createElement("div",{className:"post-card",key:t},n.a.createElement("h2",{className:"post-card__title"},n.a.createElement(i.Link,{className:"post-card__title-link",to:u},o)),n.a.createElement("div",{className:"post-card__info"},p," • ",l," • Tags: ",c.split(" ").join(", ")),n.a.createElement("div",{className:"post-card__blurb"},s))})))};var c="3571478584"},213:function(e){e.exports={data:{site:{siteMetadata:{title:"instrumaniak"}}}}},214:function(e){e.exports={data:{site:{siteMetadata:{site_build_date:"Tue Aug 13 2019"}}}}},215:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(213),i=a(102);var l=function(e){return n.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},n.a.createElement(i.Link,{to:e.to},e.children))},c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(i.StaticQuery,{query:"459041758",render:function(e){var t=e.site.siteMetadata.title;return n.a.createElement("header",{className:"navbar",style:{marginBottom:"2.5rem",padding:"1rem"}},n.a.createElement(i.Link,{to:"/"},n.a.createElement("h3",{style:{display:"inline"}},t)),n.a.createElement("ul",{style:{listStyle:"none",float:"right"}},n.a.createElement(l,{to:"/music"},"Music"),n.a.createElement(l,{to:"/arts"},"Arts"),n.a.createElement(l,{to:"/about"},"About")))},data:o})},r}(r.Component),s=(a(33),a(214)),m=a(216);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement(i.StaticQuery,{query:"1142379737",render:function(e){var t=e.site.siteMetadata.site_build_date;return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"©",t.split(" ").slice(-1)[0],", ",n.a.createElement(i.Link,{to:"/about"},"Raziur Rahman"),". All rights reserved."),n.a.createElement("div",{className:"social"},n.a.createElement("a",{href:"https://twitter.com/instrumaniak",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:["fab","twitter"]})),n.a.createElement("a",{href:"https://github.com/instrumaniak",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:["fab","github-alt"]})),n.a.createElement("a",{href:"https://codepen.io/instrumaniak/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:["fab","codepen"]})),n.a.createElement("a",{href:"https://www.deviantart.com/instrumaniak",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:["fab","deviantart"]})),n.a.createElement("a",{href:"https://www.linkedin.com/in/raziur/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,{icon:["fab","linkedin"]}))))},data:s})},r}(r.Component);var p=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",{style:{maxWidth:700,marginLeft:"auto",marginRight:"auto"}},n.a.createElement(c,null),n.a.createElement("div",{style:{padding:"0 1rem"}},this.props.children),n.a.createElement(u,null))},r}(r.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-index-js-f08cac837a70b7167a0b.js.map