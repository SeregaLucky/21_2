(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{EKnp:function(e){e.exports=JSON.parse('[{"id":"1","name":"Alex","img":"https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg","numb":["111","222"]},{"id":"2","name":"Tom","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LMWuabkiBCiTUbfzADg8hnoY2CDPSR1gD07GrT5y3tqAWYx_&s","numb":["111"]},{"id":"3","name":"Ania","img":"https://i.pinimg.com/originals/ab/47/5f/ab475fb88ecaacd64f100c69f6a1854b.png","numb":["111","222","333"]},{"id":"4","name":"Boris","img":"https://thumb.tildacdn.com/tild6262-3037-4536-a464-643838303737/-/resize/784x/-/format/webp/20143010160217.jpg","numb":["111"]},{"id":"5","name":"Fly","img":"https://ichef.bbci.co.uk/news/720/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg","numb":["111","2222"]},{"id":"6","name":"Lien","img":"https://zefirka.net/wp-content/uploads/2020/03/neobychnye-koshki-i-kotiki-s-unikalnoj-vneshnostyu-1.jpg","numb":["111"]}]')},OPH6:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("OPH6"),t("8cZI"),t("lmye"),t("wCa+");var a=t("EKnp"),o=t("f4U1"),i=t.n(o),r=document.querySelector(".js_list"),l=a.map((function(e){var n=Math.floor(10*Math.random()),t=Object.assign({},e,{age:n});return i()(t)})).join("");r.insertAdjacentHTML("beforeend",l);var c=function(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(e){console.error("Get state error: ",e)}},s=function(e,n){try{var t=JSON.stringify(n);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e)}},u=document.querySelector(".js_input"),m=document.querySelector(".js_list"),d=c("isChecked");d&&(m.classList.add("active"),u.checked=d),u.addEventListener("change",(function(e){if(e.target.checked)return m.classList.add("active"),void s("isChecked",!0);m.classList.remove("active"),s("isChecked",!1)}));var p=t("jffb"),g=t.n(p),f=document.querySelector(".js_textarea"),h=c("textarea");h&&(f.value=h),f.addEventListener("input",g()((function(e){var n=e.target.value;s("textarea",n)}),300));var b=t("zLwO"),v=new(t.n(b).a)({selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:function(){console.log("FIRST INIT")},onChange:function(){console.log("CHANGE")}}),y=document.querySelector(".prev"),k=document.querySelector(".next");y.addEventListener("click",(function(){return v.prev()})),k.addEventListener("click",(function(){return v.next()}))},f4U1:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,o){return"    <li>"+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,o){var i,r,l=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"<li>\r\n  <h3>Name: "+s("function"==typeof(r=null!=(r=u(t,"name")||(null!=n?u(n,"name"):n))?r:c)?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:2,column:12},end:{line:2,column:20}}}):r)+"</h3>\r\n  <p>Age: "+s("function"==typeof(r=null!=(r=u(t,"age")||(null!=n?u(n,"age"):n))?r:c)?r.call(l,{name:"age",hash:{},data:o,loc:{start:{line:3,column:10},end:{line:3,column:17}}}):r)+'</p>\r\n  <img width="200" src="'+s("function"==typeof(r=null!=(r=u(t,"img")||(null!=n?u(n,"img"):n))?r:c)?r.call(l,{name:"img",hash:{},data:o,loc:{start:{line:4,column:24},end:{line:4,column:31}}}):r)+'" alt="'+s("function"==typeof(r=null!=(r=u(t,"name")||(null!=n?u(n,"name"):n))?r:c)?r.call(l,{name:"name",hash:{},data:o,loc:{start:{line:4,column:38},end:{line:4,column:46}}}):r)+'">\r\n\r\n  <ul>\r\n'+(null!=(i=u(t,"each").call(l,null!=n?u(n,"numb"):n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:7,column:4},end:{line:9,column:13}}}))?i:"")+"  </ul>\r\n</li>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.14c56a0d2080704254ee.js.map