(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},145:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(25),n=c.n(a),i=(c(66),c(6)),l=(c(67),c(4)),o=(c(72),c(47)),j=c.n(o),d=c(48),u=c.n(d),b=c(46),h=c.n(b),m=c(3),p=c(0);var O=function(){var e=Object(l.c)((function(e){return e.cart})),t=localStorage.getItem("token");return Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("div",{className:"innerheader",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(m.b,{className:"text-muted logo2",to:"/",children:Object(p.jsx)("h1",{children:"SHOPPA"})})}),Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{className:"searchiconandinput",children:[Object(p.jsx)(h.a,{}),Object(p.jsx)("input",{type:"text",placeholder:"Search products, brands and categories"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary button",children:"SEARCH"})]}),Object(p.jsxs)("div",{className:"user_cart",children:[t?Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)(m.b,{to:"/",className:"text-muted user_name",children:Object(p.jsx)("p",{className:"text-muted",children:localStorage.getItem("username")})}),Object(p.jsx)("button",{className:"btn btn-link text-muted signout",onClick:function(){localStorage.removeItem("token"),window.location.reload()},children:"Sign Out"})]}):Object(p.jsx)(m.b,{className:"text-muted login",to:"/login",children:Object(p.jsx)("p",{className:"text-muted",children:"login"})}),Object(p.jsx)("div",{children:Object(p.jsxs)(m.b,{className:"cart",to:"/cart",children:[Object(p.jsx)("div",{className:"bg-primary cart_count",id:"cart_count",children:e.length}),Object(p.jsxs)("div",{className:"cart_icon",children:[Object(p.jsx)(u.a,{className:"text-muted shoppingcarticon"}),Object(p.jsx)("p",{className:"text-muted",children:"Cart"})]})]})})]})]})})},x=c(16),f=c.n(x),v="GET_DRINKS",N="ADD_TO_CART",g="LOADING_DRINKS",y="REMOVE_FROM_CART",k="INCREASE_QUANTITY",w="DECREASE_QUANTITY",_="USER_DETAILS",S=function(e){return{type:y,payload:e}},I=function(){return function(e){return e({type:g}),f.a.get("http://127.0.0.1:8000/all_drinks/",{Headers:"Token ".concat(localStorage.getItem("token"))}).then((function(t){e({type:v,payload:t.data})})).catch((function(e){return console.log(e)}))}},E=(c(94),c(51)),D=c.n(E),T=c(49),P=c.n(T),C=c(50),A=c.n(C);var K=function(){var e=Object(l.c)((function(e){return e.cart})),t=Object(l.c)((function(e){return e.grandTotal})),c=Object(l.b)();return console.log(e),0===e.length?Object(p.jsxs)("div",{className:"alert-success p-2",align:"center",children:[Object(p.jsx)("h5",{children:"No items in the cart!"}),Object(p.jsx)("p",{children:"items added to the cart will appear here"})]}):Object(p.jsxs)("div",{className:"cart",children:[Object(p.jsxs)("h3",{children:["Cart(",e.length," items)"]}),Object(p.jsxs)("div",{className:"h5 headings",children:[Object(p.jsx)("p",{className:"h5 items",children:"ITEM"}),Object(p.jsx)("p",{className:"h5 quantity",children:"QUANTITY"}),Object(p.jsx)("p",{className:"h5 price",children:"UNIT PRICE"}),Object(p.jsx)("p",{className:"h5 subtotal",children:"SUBTOTAL"})]}),e.map((function(e){return Object(p.jsx)("div",{className:"div",children:Object(p.jsxs)("div",{className:"itemyenyewe",children:[Object(p.jsxs)("div",{className:"itemz",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:e.cover_picture,alt:"a cover"})}),Object(p.jsx)("p",{className:"name",children:e.name})]}),Object(p.jsx)("div",{className:"quantity1",children:Object(p.jsxs)("div",{className:"arrows",children:[Object(p.jsx)(P.a,{onClick:function(){return c((t=e.id,{type:k,payload:t}));var t}}),Object(p.jsx)("p",{children:e.quantity}),Object(p.jsx)(A.a,{onClick:function(){return c((t=e.id,{type:w,payload:t}));var t}})]})}),Object(p.jsx)("div",{className:"price1",children:Object(p.jsx)("p",{children:e.price})}),Object(p.jsx)("div",{className:"subtotal1",children:Object(p.jsx)("p",{children:e.totalPrice})}),Object(p.jsxs)("button",{onClick:function(){return c(S(e.id))},className:"btn btn-outline-primary btn-sm button mt-3",children:[Object(p.jsx)(D.a,{}),"REMOVE"]})]})},e.id)})),Object(p.jsx)("div",{className:"bg-primary grandtotal",children:Object(p.jsxs)("p",{className:"h5",children:["Grand Total: Ksh ",t]})}),Object(p.jsxs)("div",{className:"proceed",children:[Object(p.jsx)(m.b,{to:"/",children:Object(p.jsx)("button",{className:"btn btn-primary back",children:"CONTINUE SHOPPING"})}),Object(p.jsx)(m.b,{to:"/shipping",children:Object(p.jsx)("button",{className:"btn btn-primary to_pay",children:"CONTINUE TO PAY"})})]})]})},R=(c(95),c(96),c(7)),W=c.n(R);var M=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(l.c)((function(e){return e.loading}))?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"drinkslist",children:[e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"WINES AND SPIRITS"}),Object(p.jsxs)(m.b,{to:"/Winesandspirits",className:"link",children:["SEE ALL ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Wines and Spirits"===e.category})).slice(0,5);return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(97);var q=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(p.jsxs)("div",{className:"drinkslist",children:[e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"ENERGY DRINKS"}),Object(p.jsxs)(m.b,{to:"/EnergyDrinks",className:"link",children:["SEE ALL ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Energy Drinks"===e.category})).slice(0,5);return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(98);var F=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(p.jsxs)("div",{className:"drinkslist",children:[e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"SOFT DRINKS"}),Object(p.jsxs)(m.b,{to:"/SoftDrinks",className:"link",children:["SEE ALL ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Soft Drinks"===e.category})).slice(0,5);return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(99);var L=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(p.jsxs)("div",{className:"drinkslist",children:[e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"WATER"}),Object(p.jsxs)(m.b,{to:"/Water",className:"link",children:["SEE ALL ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Water"===e.category})).slice(0,5);return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})},U=c(9),B=(c(100),c(52)),H=c.n(B);c(134);var Y=function(){var e=Object(l.c)((function(e){return e.allDrinks.results})),t=Object(s.useState)([]),c=Object(U.a)(t,2),r=c[0],a=c[1];Object(s.useEffect)((function(){f.a.get("http://127.0.0.1:8000/featured/products/").then((function(e){var t=e.data.results;if(t){var c=t.map((function(e){return Object(p.jsx)("img",{alt:"showcase",src:e.cover_image},e.key)}));a(c)}})).catch((function(e){return console.log(e)}))}),[]);var n={0:{items:1},568:{items:1},1024:{items:2}};return Object(p.jsx)("div",{children:function(){if(e)return Object(p.jsxs)("div",{className:"featured",children:[Object(p.jsxs)("div",{className:"right",children:[Object(p.jsx)(m.b,{to:"/Winesandspirits",className:"h6 text-secondary link",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("img",{alt:"showcase",className:"bottleIcons",src:"https://img.icons8.com/fluent/50/000000/champagne-bottle.png"}),"Wines and Spirits"]})}),Object(p.jsx)(m.b,{to:"/EnergyDrinks",className:"h6 text-secondary link",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("img",{alt:"showcase",className:"bottleIcons",src:"https://img.icons8.com/cute-clipart/64/000000/energy-drink.png"}),"Energy Drinks"]})}),Object(p.jsx)(m.b,{to:"/SoftDrinks",className:"h6 text-secondary link",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("img",{alt:"showcase",className:"bottleIcons",src:"https://img.icons8.com/cotton/64/000000/orange-soda-bottle--v1.png"}),"Soft Drinks"]})}),Object(p.jsx)(m.b,{to:"/Water",className:"h6 text-secondary link",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("img",{alt:"showcase",className:"bottleIcons",src:"https://img.icons8.com/fluent/48/000000/sport-bottle.png"}),"Water"]})})]}),Object(p.jsx)(H.a,{items:r,responsive:n,autoPlayInterval:4e3,autoPlayDirection:"ltr",autoPlay:!0,infinite:!0,fadeOutAnimation:!0,mouseTrackingEnabled:!0,disableAutoPlayOnAction:!0,disableButtonsControls:!0})]})}()})};var G=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(Y,{}),Object(p.jsx)(M,{}),Object(p.jsx)(q,{}),Object(p.jsx)(F,{}),Object(p.jsx)(L,{})]})},V=c(53);c(135);var Q=function(e){var t=e.match.params.post_id,c=Object(l.c)((function(e){return e.loading})),s=Object(l.c)((function(e){return e.allDrinks.results})),r=Object(l.b)(),a=Object(l.c)((function(e){return e.cart}));return c?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"outer1",children:[Object(p.jsxs)("div",{className:"outer",children:[function(){if(s){var e=s.filter((function(e){return e.id===t})),c=function(){var e,c=Object(V.a)(a);try{for(c.s();!(e=c.n()).done;){if(e.value.id===t)return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"text-secondary",style:{borderBottom:"1px solid grey",width:"150px"},children:"Item added to cart"}),Object(p.jsx)("button",{onClick:function(){return r(S(t))},className:"btn btn btn-secondary h6",children:"REMOVE FROM CART"})]})}}catch(s){c.e(s)}finally{c.f()}};return Object(p.jsx)("div",{className:"item",children:e.map((function(e){return Object(p.jsxs)("div",{className:"drink",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:e.cover_picture,alt:"showcase"})}),Object(p.jsxs)("div",{className:"explanations",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("p",{className:"h6",children:e.name}),Object(p.jsx)("p",{children:e.variation}),Object(p.jsxs)("p",{className:"brand",children:["Brand: ",Object(p.jsxs)(m.b,{to:"/",className:"text-info brand",children:[e.brand," | shop your favourite brand"]})]})]}),Object(p.jsxs)("div",{className:"bottom",children:[Object(p.jsxs)("p",{className:"h2",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{children:["Was: Ksh ",e.previous_price]})}),e.discount&&Object(p.jsxs)("p",{className:"text-secondary",children:["Discounted percentage: ",e.discount,"%"]}),c(),Object(p.jsx)("button",{id:"add",onClick:function(){return r({type:N,payload:e})},className:"btn btn btn-primary btn-lg h6",children:"ADD TO CART"})]})]})]},e.id)}))})}}(),Object(p.jsx)("div",{className:"returns",children:s&&Object(p.jsx)("h4",{children:"returns here"})})]}),Object(p.jsxs)("div",{className:"similar brand",children:[s&&Object(p.jsxs)("div",{className:"brandi",children:[Object(p.jsx)("h4",{className:"h4 text-secondary title",children:" Products from the same brand"}),Object(p.jsxs)(m.b,{to:"/",className:"link",children:["back home ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(s){var e=s.filter((function(e){return e.id===t})).map((function(e){return e.brand}))[0],c=s.filter((function(t){return t.brand===e})).slice(0,5);return Object(p.jsx)("div",{className:"drink1",children:c.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",src:e.cover_picture,alt:"showcase"}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]}),Object(p.jsxs)("div",{className:"samecategory similar",children:[s&&Object(p.jsxs)("div",{className:"brandi",children:[Object(p.jsx)("h4",{className:"h4 text-secondary title",children:" Customers also buy these"}),Object(p.jsxs)(m.b,{to:"/"+function(){if(s){var e=s.filter((function(e){return e.id===t})).map((function(e){return e.category}))[0].replace(/\s/g,"");switch(e){case"WinesandSpirits":case"EnergyDrinks":case"SoftDrinks":case"Water":return e;default:return"category not found"}}}(),className:"link",children:["SEE ALL ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(s){var e=s.filter((function(e){return e.id===t})).map((function(e){return e.category})),c=s.filter((function(t){return t.category===e[0]}));return Object(p.jsx)("div",{className:"drink1",children:function(e,t){var c=new Array(t),s=e.length,r=new Array(s);if(t>s)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var a=Math.floor(Math.random()*s);c[t]=e[a in r?r[a]:a],r[a]=--s in r?r[s]:s}return c}(c,5).map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",src:e.cover_picture,alt:"showcase"}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})]})},z=(c(136),c(5));var J=function(){var e=Object(s.useState)(""),t=Object(U.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(""),n=Object(U.a)(a,2),i=n[0],o=n[1],j=Object(s.useState)(""),d=Object(U.a)(j,2),u=d[0],b=d[1],h=Object(s.useState)(""),m=Object(U.a)(h,2),O=m[0],x=m[1],v=Object(s.useState)(""),N=Object(U.a)(v,2),g=N[0],y=N[1],k=Object(z.f)(),w=Object(l.c)((function(e){return e.cart})),_=Object(l.c)((function(e){return e.grandTotal})),S=Object(l.c)((function(e){return e.user}));console.log(S);var I=function(){return w.length>0?w[0]:"null"},E={amount:_,area:u,customer:localStorage.getItem("userId"),delivery:O,drink:I().id,location:i,payment:g,phone:c,quantity:I().quantity};return console.log(E),Object(p.jsxs)("div",{className:"shipping home",children:[Object(p.jsx)("p",{className:"h5",children:"CHECKOUT"}),Object(p.jsxs)("form",{className:"form",children:[Object(p.jsxs)("div",{className:"form-row line_height",children:[Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"inputEmail4 ",children:"Phone Number"}),Object(p.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",id:"inputEmail4",placeholder:"Mobile Phone",required:!0})]}),Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"inputPassword4 line_height",children:"Town/City"}),Object(p.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},type:"text",className:"form-control",id:"inputPassword4",placeholder:"Enter town you live in",required:!0})]})]}),Object(p.jsxs)("div",{className:"form-row line_height",children:[Object(p.jsxs)("div",{className:"form-group col-md-6",children:[Object(p.jsx)("label",{htmlFor:"inputCity",children:"Area/Location"}),Object(p.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},type:"text",className:"form-control",id:"inputCity",placeholder:"Area or location you live in"})]}),Object(p.jsxs)("div",{className:"form-group col-md-4",children:[Object(p.jsx)("label",{htmlFor:"inputState",children:"Delivery Method"}),Object(p.jsxs)("select",{value:O,onChange:function(e){return x(e.target.value)},id:"inputState",className:"form-control",children:[Object(p.jsx)("option",{defaultValue:!0,children:"Choose..."}),Object(p.jsx)("option",{children:"Door delivery"}),Object(p.jsx)("option",{children:"Pick up station"})]})]}),Object(p.jsxs)("div",{className:"form-group col-md-2",children:[Object(p.jsx)("label",{htmlFor:"inputZip",children:"How To Pay"}),Object(p.jsxs)("select",{value:g,onChange:function(e){return y(e.target.value)},id:"inputState",className:"form-control",children:[Object(p.jsx)("option",{defaultValue:!0,children:"Choose..."}),Object(p.jsx)("option",{children:"Payment on delivery"}),Object(p.jsx)("option",{children:"Pay before delivery"})]})]})]}),Object(p.jsx)("div",{className:"div",style:{marginTop:"20px"},children:Object(p.jsx)("p",{className:"h6",children:"Mpesa Payment"})}),!localStorage.getItem("token")&&Object(p.jsx)("div",{className:"alert alert-danger p-1 trylog",children:Object(p.jsx)("p",{children:"you must login to place an order!"})}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),f.a.post("http://127.0.0.1:8000/all_drinks/order/",E,{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),E.phone&&E.payment?k.push("/orderconfirm"):k.push("/shipping")},type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(p.jsxs)("div",{className:"your",children:[Object(p.jsx)("p",{className:"h5",children:"your order"}),w.map((function(e){return Object(p.jsxs)("div",{className:"your_order",children:[Object(p.jsx)("img",{alt:"order",src:e.cover_picture}),Object(p.jsx)("p",{children:e.name})]},e.id)})),Object(p.jsxs)("p",{className:"h6",style:{marginTop:"10px"},children:["Amount To Pay: Ksh ",_]})]})]})},Z=c(54),X=c(55),$=c(60),ee=c(58),te=function(e){Object($.a)(c,e);var t=Object(ee.a)(c);function c(){return Object(Z.a)(this,c),t.apply(this,arguments)}return Object(X.a)(c,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),c}(r.a.Component),ce=Object(z.g)(te);c(137);var se=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(l.c)((function(e){return e.loading}))?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"drinkslist",children:[function(){if(e){var t=Math.floor(Math.random()*e.length),c=e[t];return console.log(c),Object(p.jsxs)("div",{className:"container waa",children:[Object(p.jsx)("div",{className:"jumbotron text-white jumbotron-image shadow jambo",style:{backgroundImage:"url(".concat(c.cover_picture,")"),backgroundRepeat:"no-repeat",height:"200px",width:"40%",objectFit:"cover"},children:Object(p.jsx)(m.b,{to:"/"+c.id,className:"btn btn-primary",children:"view"})}),Object(p.jsxs)("div",{className:"bg-info text-white text",children:[Object(p.jsxs)("p",{className:"h3",children:["Name: ",c.name]}),Object(p.jsxs)("p",{className:"h6",children:["Brand: ",c.brand]}),Object(p.jsxs)("p",{className:"h5",children:["Price: Ksh ",c.price]}),c.previous_price&&Object(p.jsxs)("p",{className:"h6",children:["Discount: ",c.previous_price,"% off!"]})]})]})}}(),e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"WINES AND SPIRITS"}),Object(p.jsxs)(m.b,{to:"/",className:"link",children:["back home ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Wines and Spirits"===e.category}));return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(138);var re=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(l.c)((function(e){return e.loading}))?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"drinkslist",children:[function(){if(e){var t=Math.floor(Math.random()*e.length),c=e[t];return Object(p.jsxs)("div",{className:"container waa",children:[Object(p.jsx)("div",{className:"jumbotron text-white jumbotron-image shadow jambo",style:{backgroundImage:"url(".concat(c.cover_picture,")"),backgroundRepeat:"no-repeat",height:"220px",width:"300px",objectFit:"100%"},children:Object(p.jsx)(m.b,{to:"/"+c.id,className:"btn btn-primary",children:"view"})}),Object(p.jsxs)("div",{className:"bg-info text-white text",children:[Object(p.jsxs)("p",{className:"h3",children:["Name: ",c.name]}),Object(p.jsxs)("p",{className:"h6",children:["Brand: ",c.brand]}),Object(p.jsxs)("p",{className:"h5",children:["Price: Ksh ",c.price]}),c.previous_price&&Object(p.jsxs)("p",{className:"h6",children:["Discount: ",c.previous_price,"% off!"]})]})]})}}(),e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"Energy Drinks"}),Object(p.jsxs)(m.b,{to:"/",className:"link",children:["back home ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Energy Drinks"===e.category}));return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(139);var ae=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(l.c)((function(e){return e.loading}))?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"drinkslist",children:[function(){if(e){var t=Math.floor(Math.random()*e.length),c=e[t];return Object(p.jsxs)("div",{className:"container waa",children:[Object(p.jsx)("div",{className:"jumbotron text-white jumbotron-image shadow jambo",style:{backgroundImage:"url(".concat(c.cover_picture,")"),backgroundRepeat:"no-repeat",height:"200px",width:"40%",objectFit:"cover"},children:Object(p.jsx)(m.b,{to:"/"+c.id,className:"btn btn-primary",children:"view"})}),Object(p.jsxs)("div",{className:"bg-info text-white text",children:[Object(p.jsxs)("p",{className:"h3",children:["Name: ",c.name]}),Object(p.jsxs)("p",{className:"h6",children:["Brand: ",c.brand]}),Object(p.jsxs)("p",{className:"h5",children:["Price: Ksh ",c.price]}),c.previous_price&&Object(p.jsxs)("p",{className:"h6",children:["Discount: ",c.previous_price,"% off!"]})]})]})}}(),e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"Soft Drinks"}),Object(p.jsxs)(m.b,{to:"/",className:"link",children:["back home ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Soft Drinks"===e.category}));return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(140);var ne=function(){var e=Object(l.c)((function(e){return e.allDrinks.results}));return Object(l.c)((function(e){return e.loading}))?Object(p.jsx)("div",{className:"divloader",children:Object(p.jsx)("div",{className:"loader"})}):Object(p.jsxs)("div",{className:"drinkslist",children:[function(){if(e){var t=Math.floor(Math.random()*e.length),c=e[t];return console.log(c),Object(p.jsxs)("div",{className:"container waa",children:[Object(p.jsx)("div",{className:"jumbotron text-white jumbotron-image shadow jambo",style:{backgroundImage:"url(".concat(c.cover_picture,")"),backgroundRepeat:"no-repeat",height:"200px",width:"40%",objectFit:"cover"},children:Object(p.jsx)(m.b,{to:"/"+c.id,className:"btn btn-primary",children:"view"})}),Object(p.jsxs)("div",{className:"bg-info text-white text",children:[Object(p.jsxs)("p",{className:"h3",children:["Name: ",c.name]}),Object(p.jsxs)("p",{className:"h6",children:["Brand: ",c.brand]}),Object(p.jsxs)("p",{className:"h5",children:["Price: Ksh ",c.price]}),c.previous_price&&Object(p.jsxs)("p",{className:"h6",children:["Discount: ",c.previous_price,"% off!"]})]})]})}}(),e&&Object(p.jsxs)("div",{className:"category",children:[Object(p.jsx)("h5",{children:"Water"}),Object(p.jsxs)(m.b,{to:"/",className:"link",children:["back home ",Object(p.jsx)(W.a,{})," "]})]}),function(){if(e){var t=e.filter((function(e){return"Water"===e.category}));return Object(p.jsx)("div",{className:"drink1",children:t.map((function(e){return Object(p.jsxs)(m.b,{to:"/"+e.id,className:"drink2",children:[e.discount&&Object(p.jsxs)("p",{className:"bg-secondary discount",children:[e.discount,"%"]}),Object(p.jsx)("img",{className:"cover_picture",alt:"showcase",src:e.cover_picture}),Object(p.jsx)("p",{className:"name",children:e.name}),Object(p.jsxs)("p",{className:"h6 price",children:["Ksh ",e.price]}),e.previous_price&&Object(p.jsx)("s",{children:Object(p.jsxs)("p",{className:"text-muted previous_price",children:["Ksh ",e.previous_price]})})]},e.id)}))})}}()]})};c(141);var ie=function(){var e=Object(s.useState)(""),t=Object(U.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(""),n=Object(U.a)(a,2),i=n[0],o=n[1],j=Object(s.useState)(""),d=Object(U.a)(j,2),u=d[0],b=d[1],h=Object(l.b)(),O=Object(z.f)(),x={username:u,email:c,password:i};return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("form",{className:"border login-form",children:[Object(p.jsx)("h3",{className:"border-bottom p-2 text-secondary h3",children:"Sign in"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",children:"User name"}),Object(p.jsx)("input",{required:!0,value:u,onChange:function(e){return b(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"username"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(p.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(p.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(p.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(p.jsxs)("div",{className:"form-group alt",children:[Object(p.jsx)("p",{children:"Create an account if you don't have one"}),Object(p.jsx)(m.b,{className:"signin",to:"/register",children:Object(p.jsx)("p",{children:"Sign up here!"})})]}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),f.a.post("http://127.0.0.1:8000/api-token-auth/",x).then((function(e){h(function(e){return{type:_,payload:e}}(e.data)),O.push("/"),window.location.reload()})).catch((function(e){return console.log(e)}))},className:"btn btn-primary",children:"Submit"})]})})};c(142);var le=function(){var e=Object(s.useState)(""),t=Object(U.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(""),n=Object(U.a)(a,2),i=n[0],l=n[1],o=Object(s.useState)(""),j=Object(U.a)(o,2),d=j[0],u=j[1],b=Object(s.useState)(""),h=Object(U.a)(b,2),O=h[0],x=h[1],v=Object(z.f)(),N={username:c,email:i,password1:d,password2:O};return console.log(N),Object(p.jsx)("div",{className:"registration",children:Object(p.jsxs)("form",{className:"border login-form",children:[Object(p.jsx)("h3",{className:"border-bottom p-2 text-secondary h3",children:"Create Account"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",children:"User name"}),Object(p.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"username"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(p.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(p.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(p.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",children:"Confirm Password"}),Object(p.jsx)("input",{value:O,onChange:function(e){return x(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(p.jsxs)("div",{className:"form-group alt",children:[Object(p.jsx)("p",{children:"Already have an account?"}),Object(p.jsx)(m.b,{className:"signin",to:"/login",children:Object(p.jsx)("p",{children:"Sign in here!"})})]}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),f.a.post("http://127.0.0.1:8000/accounts/registration/",N).then((function(e){console.log(e.data),e.data.key&&v.push("/login")})).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-primary",children:"Sign Up"})]})})};c(143);var oe=function(){return Object(p.jsxs)("div",{className:"jumbotron alert alert-light home orderconfirm ",children:[Object(p.jsx)("h1",{className:"display-4",children:"Thank you for using Shoppa"}),Object(p.jsx)("p",{className:"lead",children:"Your order was successful!"}),Object(p.jsx)("p",{className:"alert alert-success lead",children:"We will call you shortly  to confirm your order"}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)("a",{className:"btn btn-primary btn-lg",href:"/",role:"button",children:"Continue Shopping"})]})};var je=function(){var e=Object(l.b)();return Object(s.useEffect)((function(){e(I())})),Object(p.jsx)(m.a,{children:Object(p.jsx)(ce,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(O,{}),Object(p.jsxs)(z.c,{children:[Object(p.jsx)(z.a,{exact:!0,path:"/",component:G}),Object(p.jsx)(z.a,{path:"/cart",children:Object(p.jsx)(K,{})}),Object(p.jsx)(z.a,{path:"/WinesandSpirits",component:se}),Object(p.jsx)(z.a,{path:"/EnergyDrinks",component:re}),Object(p.jsx)(z.a,{path:"/SoftDrinks",component:ae}),Object(p.jsx)(z.a,{path:"/Water",component:ne}),Object(p.jsx)(z.a,{path:"/shipping",component:J}),Object(p.jsx)(z.a,{path:"/login",component:ie}),Object(p.jsx)(z.a,{path:"/register",component:le}),Object(p.jsx)(z.a,{path:"/orderconfirm",component:oe}),Object(p.jsx)(z.a,{path:"/:post_id",render:function(e){return Object(p.jsx)(Q,Object(i.a)({},e))}})]})]})})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,157)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))},ue=c(26),be=c(56),he=c(57),me=c(59),pe={loading:!1,cart:[],grandTotal:0,allDrinks:[],user:[]},Oe=Object(ue.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case _:return localStorage.setItem("token",t.payload.token),localStorage.setItem("username",t.payload.username),localStorage.setItem("userId",t.payload.user_id),Object(i.a)(Object(i.a)({},e),{},{user:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,allDrinks:t.payload});case N:var c=e.cart.find((function(e){return e.id===t.payload.id}));if(c)return Object(i.a)({},e);t.payload.quantity=1,t.payload.totalPrice=t.payload.price*t.payload.quantity;var s=e.grandTotal+t.payload.totalPrice;return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(me.a)(e.cart),[t.payload]),grandTotal:s});case y:var r=e.cart.find((function(e){return e.id===t.payload}));if(r){var a=e.cart.filter((function(e){return e.id!==t.payload})),n=e.grandTotal-r.totalPrice;return Object(i.a)(Object(i.a)({},e),{},{cart:a,grandTotal:n})}break;case k:var l=e.cart.find((function(e){return e.id===t.payload})),o=e.cart.filter((function(e){return e.id!==l.id}));if(l)return l.quantity=l.quantity+1,l.totalPrice=l.price*l.quantity,o.push(l),Object(i.a)(Object(i.a)({},e),{},{cart:o,grandTotal:e.grandTotal+l.price});break;case w:var j=e.cart.find((function(e){return e.id===t.payload})),d=e.cart.filter((function(e){return e.id!==j.id}));if(j){if(j.quantity=j.quantity-1,j.totalPrice=j.price*j.quantity,d.push(j),0===j.quantity){var u=e.cart.filter((function(e){return e.id!==t.payload})),b=e.grandTotal-j.price;return Object(i.a)(Object(i.a)({},e),{},{cart:u,grandTotal:b})}return Object(i.a)(Object(i.a)({},e),{},{cart:d,grandTotal:e.grandTotal-j.price})}break;default:return Object(i.a)({},e)}}),Object(he.composeWithDevTools)(Object(ue.applyMiddleware)(be.a)));n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l.a,{store:Oe,children:Object(p.jsx)(je,{})})}),document.getElementById("root")),de()},66:function(e,t,c){},67:function(e,t,c){},72:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[145,1,2]]]);
//# sourceMappingURL=main.9e1e5b4a.chunk.js.map