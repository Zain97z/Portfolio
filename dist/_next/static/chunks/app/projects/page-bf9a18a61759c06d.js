(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{4226:function(e,t,n){Promise.resolve().then(n.bind(n,5943))},5943:function(e,t,n){"use strict";n.r(t),n.d(t,{Progectss:function(){return u}});var i=n(7437),r=n(2265),a=n(6691),o=n.n(a),c=n(9348),l=n(1396),s=n.n(l),p=n(9844),d=n(2843);let u=[{name:"React-Blog",Tipe:"react",imagee:"/projects/react-blog.png",URL:"https://zain97z.github.io/React-Blog/",code:"https://github.com/Zain97z/React-Blog"},{name:"Sniper",Tipe:"static",imagee:"/projects/sniper.png",URL:"https://montagabalhamawy.github.io/Sniper/",code:"https://zain97z.github.io/Sniper/"},{name:"Klinder-Design",Tipe:"wordpress",imagee:"/projects/klinder-design.png",URL:"https://klinder-design.com/",code:"#"},{name:"Klinder",Tipe:"static",imagee:"/projects/klinder.png",URL:"https://zain97z.github.io/Klinder/",code:"https://github.com/Zain97z/Klinder"},{name:"X-O Game",Tipe:"static",imagee:"/projects/x-o.png",URL:"https://zain97z.github.io/X-O-Game/",code:"https://github.com/Zain97z/X-O-Game"},{name:"Notes",Tipe:"static",imagee:"/projects/note.png",URL:"https://zain97z.github.io/Notes/",code:"https://github.com/Zain97z/Notes"}];t.default=function(){let[e,t]=(0,r.useState)("all");return(0,i.jsxs)(p.E.div,{variants:d.Jm,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.1},className:"flex flex-col justify-center gap-y-5 items-center px-3 mt-[-60px] mb-5 xl:mb-8 xl:mt-20",children:[(0,i.jsx)(p.E.div,{variants:(0,d.Ji)("down","tween",.2,1),className:"text-center",children:(0,i.jsx)("h1",{className:"font-500 mt-10 text-2xl text-white font-500 uppercase",children:"Projects"})}),(0,i.jsxs)(p.E.div,{variants:(0,d.Ji)("down","tween",.4,1),className:"flex justify-center items-center xl:gap-x-6 xl:text-xl",children:[(0,i.jsx)("p",{className:"text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ".concat("all"===e&&"font-black bg-white/10"," "),onClick:()=>t("all"),children:"All"}),(0,i.jsx)("p",{className:"text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ".concat("next"===e&&"font-bold bg-white/10"),onClick:()=>t("next"),children:"Next"}),(0,i.jsx)("p",{className:"text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ".concat("react"===e&&"font-bold bg-white/10"),onClick:()=>t("react"),children:"React"}),(0,i.jsx)("p",{className:"text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ".concat("static"===e&&"font-bold bg-white/10"),onClick:()=>t("static"),children:"Static"})]}),(0,i.jsx)(p.E.div,{variants:(0,d.Ji)("up","tween",.6,1),className:"grid grid-cols-2 xl:grid-cols-3 px-2 xl:px-0 gap-x-5 gap-y-7 xl:gap-x-12 xl:gap-y-10",children:u.filter(t=>"all"===e||t.Tipe===e).map((e,t)=>(0,i.jsxs)("div",{className:"relative flex flex-col justify-center items-center group",children:[(0,i.jsx)(o(),{src:e.imagee,width:250,height:100,alt:"",className:"rounded-lg"}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-5 xl:gap-10  absolute top-[20%] xl:top-[30%]",children:[(0,i.jsx)(s(),{href:e.code,className:"border-accent border-solid border-[2px] p-2  rounded-full hover:bg-white/30 hidden group-hover:block transition-all",children:(0,i.jsx)(c.QrQ,{className:"text-accent font-black text-2xl "})}),(0,i.jsx)(s(),{href:e.URL,className:"border-accent border-solid border-[2px] p-2 rounded-full hover:bg-white/30 hidden group-hover:block transition-all",children:(0,i.jsx)(c.y7o,{className:"text-accent font-black text-2xl "})})]}),(0,i.jsx)("p",{className:"mt-2 ",children:e.name})]},t))})]})}},2843:function(e,t,n){"use strict";n.d(t,{Ji:function(){return r},Jm:function(){return i}});let i=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t}}}),r=(e,t,n,i)=>({hidden:{x:"left"===e?100:"right"===e?-100:0,y:"up"===e?100:"down"===e?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:n,duration:i,ease:"easeOut"}}})},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(2265),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};function l(e){return function(t){return i.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,r=e.attr,a=e.size,l=e.title,s=c(e,["attr","size","title"]),p=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==a?i.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}}},function(e){e.O(0,[169,704,396,691,971,472,744],function(){return e(e.s=4226)}),_N_E=e.O()}]);