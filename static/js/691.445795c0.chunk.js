"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[691],{4691:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(9439),a=t(2791),s=t(9434),c=t(3634),u="Contact_wrapper__K-zLN",i="Contact_text__Wq-3f",o="Contact_button__F+kJb",l=t(184),m=function(e){var n=e.id,t=e.name,r=e.number,a=(0,s.I0)();return(0,l.jsxs)("div",{className:u,children:[(0,l.jsxs)("p",{className:i,children:[t," "]}),(0,l.jsxs)("span",{children:["- ",r]}),(0,l.jsx)("button",{type:"button",className:o,onClick:function(){return a((0,c.GK)(n))},children:"Delete"})]})},f=function(e){return e.contacts.loading},_=function(e){return e.contacts.items},d="ContactList_list__csErn",x=function(e){var n=e.filter,t=(0,s.v9)(_);return(0,l.jsx)("ul",{className:d,children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,r=e.number;return(0,l.jsx)("li",{children:(0,l.jsx)(m,{id:n,name:t,number:r})},n)}))})},h="ContactEditor_form__U4ufl",b="ContactEditor_input__Nbns0",j="ContactEditor_button__yGZhk",p=function(){var e=(0,s.I0)();return(0,l.jsxs)("form",{className:h,onSubmit:function(n){n.preventDefault();var t=n.currentTarget,r=t.elements.name.value,a=t.elements.number.value;if(""!==r&&""!==a)return e((0,c.uK)({name:r,number:a})),void t.reset();alert("Contact cannot be empty. Enter some text!")},children:[(0,l.jsxs)("label",{children:["Name: ",(0,l.jsx)("input",{name:"name",className:b})]}),(0,l.jsxs)("label",{children:["Number: ",(0,l.jsx)("input",{name:"number",type:"tel",className:b})]}),(0,l.jsx)("button",{type:"submit",className:j,children:"Add contact"})]})},v="Filter_input__N7T3z",C=function(e){var n=e.filter,t=e.onChangeInput;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("hr",{}),"Find contacts -",(0,l.jsx)("input",{className:v,onChange:t,value:n,type:"text",name:"filter"})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})};function N(){var e=(0,s.I0)(),n=(0,s.v9)(f);(0,a.useEffect)((function(){e((0,c.yF)())}),[e]);var t=(0,a.useState)(""),u=(0,r.Z)(t,2),i=u[0],o=u[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Your Contacts"}),(0,l.jsx)(p,{}),(0,l.jsx)(C,{filter:i,onChangeInput:function(e){o(e.currentTarget.value)}}),(0,l.jsx)("div",{children:n&&"Request in progress..."}),(0,l.jsx)(x,{filter:i})]})}}}]);
//# sourceMappingURL=691.445795c0.chunk.js.map