function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{LWQF:function(t,e,n){"use strict";n.r(e),n.d(e,"MyordersPageModule",(function(){return k}));var c=n("ofXK"),o=n("3Pt+"),r=n("tyNb"),i=n("TEn/"),a=n("pwB6"),s=n("lJxs"),l=n("fXoL"),g=n("sYmb");function u(t,e){if(1&t){var n=l.ic();l.hc(0,"ion-toolbar",0),l.hc(1,"ion-searchbar",18),l.pc("ngModelChange",(function(t){return l.Nc(n),l.tc().queryText=t})),l.uc(2,"translate"),l.gc(),l.gc()}if(2&t){var c=l.tc();l.Cc("color","secondary"),l.Ob(1),l.Dc("placeholder",l.vc(2,3,"Search Order")),l.Cc("ngModel",c.queryText)}}function d(t,e){1&t&&l.cc(0,"ion-progress-bar",19)}function h(t,e){1&t&&(l.hc(0,"div",31),l.hc(1,"ion-label",32),l.Xc(2,"PAID "),l.gc(),l.gc())}function f(t,e){1&t&&(l.hc(0,"div",33),l.hc(1,"ion-label",32),l.Xc(2,"COD "),l.gc(),l.gc())}function p(t,e){if(1&t){var n=l.ic();l.hc(0,"app-appicon",34),l.pc("actionEvent",(function(){l.Nc(n);var t=l.tc().$implicit;return l.tc(2).cancelOrder(t)})),l.gc()}2&t&&l.Cc("color","accent")("icon","cancel_schedule_send")("askquestion",!0)("icontext","Cancel Order")("isiconwithtext",!0)("askquestiontext","Are you sure, you want to cancel Order?")}function b(t,e){if(1&t&&(l.hc(0,"div",35),l.Xc(1,"Call Support "),l.cc(2,"app-callphone",36),l.gc()),2&t){var n=l.tc(3);l.Ob(2),l.Cc("mobile",n.ygen.getSettings().oncallsupport)}}function y(t,e){if(1&t){var n=l.ic();l.hc(0,"ion-card"),l.Vc(1,h,3,0,"div",21),l.Vc(2,f,3,0,"div",22),l.hc(3,"ion-card-header"),l.hc(4,"ion-card-subtitle"),l.hc(5,"div"),l.Xc(6),l.gc(),l.hc(7,"div"),l.Xc(8),l.gc(),l.gc(),l.hc(9,"ion-card-title"),l.hc(10,"ion-chip",23),l.pc("click",(function(){l.Nc(n);var t=e.$implicit;return l.tc(2).ygen.routeto("/order",{orderid:t.$key})})),l.hc(11,"ion-label"),l.Xc(12),l.gc(),l.cc(13,"ion-icon",24),l.gc(),l.hc(14,"ion-chip",25),l.pc("click",(function(){l.Nc(n);var t=e.$implicit;return l.tc(2).ygen.routeto("/order",{orderid:t.$key})})),l.hc(15,"ion-label"),l.Xc(16),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(17,"ion-card-content"),l.hc(18,"table",26),l.hc(19,"tbody"),l.hc(20,"tr"),l.hc(21,"td",27),l.Xc(22," By "),l.gc(),l.hc(23,"td",28),l.Xc(24),l.gc(),l.gc(),l.hc(25,"tr"),l.hc(26,"td",27),l.Xc(27," Items "),l.gc(),l.hc(28,"td",28),l.Xc(29),l.gc(),l.gc(),l.hc(30,"tr"),l.hc(31,"td",27),l.Xc(32," Address "),l.gc(),l.hc(33,"td",28),l.Xc(34),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(35,"ion-item"),l.Vc(36,p,1,6,"app-appicon",29),l.Vc(37,b,3,1,"div",30),l.gc(),l.gc()}if(2&t){var c=e.$implicit,o=l.tc(2);l.Ob(1),l.Cc("ngIf","PNO"==c.paymentmethod&&"Success"==(null==c.paymentResponse?null:c.paymentResponse.order_status)),l.Ob(1),l.Cc("ngIf","COD"==c.paymentmethod),l.Ob(4),l.Zc("On ",o.ygen.formatTimestampToDate(c.odt),""),l.Ob(2),l.Yc(o.ygen.sincewhen(c.odt)),l.Ob(4),l.Yc(c.sendorderid),l.Ob(4),l.ad("",o.ygen.getcurrencysymbol()," ",c.amount,""),l.Ob(8),l.Zc(" ",c.orderByName," "),l.Ob(5),l.Zc(" ",o.getItemCount(c)," "),l.Ob(5),l.Zc(" ",c.deliveryAddress," "),l.Ob(2),l.Cc("ngIf","NEW"==o.segment),l.Ob(1),l.Cc("ngIf",o.ygen.getSettings())}}function O(t,e){if(1&t&&(l.hc(0,"div"),l.Vc(1,y,38,12,"ion-card",20),l.Xc(2),l.gc()),2&t){var n=e.ngIf,c=l.tc();l.Ob(1),l.Cc("ngForOf",n),l.Ob(1),l.Zc(" ",c.getTotal(n)," ")}}var v,m,C=[{path:"",component:(v=function(){function t(e,n,c,o,r,i,s,l,g,u){var d=this;_classCallCheck(this,t),this.modalCtrl=e,this.centerdb=n,this.router=c,this.yalert=o,this.ygen=r,this.ydataservice=i,this.ystorageservice=s,this.ypay=l,this.yds=g,this.ynoti=u,this.queryText="",this.segment="NEW",this.segmenttotal=new Map,this.total=0,this.centerdb.currenttenant.subscribe((function(t){t&&(d.orderlist=new a.p(a.R.getpath()+"/shop/orders",d.ydataservice.getDatabase(),!0,null),d.setSegmentTotal(),d.myinbox=d.getData(d.segment))}))}return _createClass(t,[{key:"ngOnInit",value:function(){console.log("yeah....ngoninit")}},{key:"ionViewWillEnter",value:function(){console.log("yeah....ion enter")}},{key:"deleteNotice",value:function(t){this.orderlist.removefromList(t)}},{key:"cancelOrder",value:function(t){this.takeAcion({value:"CANCELLED"},t)}},{key:"takeAcion",value:function(t,e){Object.assign(e,{ostatus:t.value}),this.orderlist.updateList(e),this.yalert.openSnackBar("Order Status changed for [".concat(e.sendorderid,"]"),"Ok"),this.ynoti.orderstatuschange("Order Status changed to [".concat(t.value,"] for [").concat(e.sendorderid,"]"),e)}},{key:"putinprocess",value:function(t){Object.assign(t,{ostatus:"INPROCESS"}),this.orderlist.updateList(t),this.ynoti.orderstatuschange("Order Status changed to [".concat(t.ostatus,"] for [").concat(t.sendorderid,"]"),t)}},{key:"completeorder",value:function(t){Object.assign(t,{ostatus:"COMPLETED"}),this.orderlist.updateList(t),this.ynoti.orderstatuschange("Congratulation you Order Status changed to [".concat(t.ostatus,"] for [").concat(t.sendorderid,"]"),t)}},{key:"getItemCount",value:function(t){return t.payload?t.payload.length:0}},{key:"getTitle",value:function(t){return t.read?"Mark Unread":"Mark Read"}},{key:"segmentChanged",value:function(t){console.log("segment",t),this.myinbox=this.getData(t.detail.value)}},{key:"getData",value:function(t){return this.getMyOrders(t)}},{key:"getOrders",value:function(t){return"NEW"===t?this.orderlist.getListRefer().snapshotChanges().pipe(Object(s.a)((function(e){return e.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())})).filter((function(e){return e.ostatus==t||!e.ostatus}))})),Object(s.a)((function(t){return t.reverse()}))):this.orderlist.getListRefer().snapshotChanges().pipe(Object(s.a)((function(e){return e.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())})).filter((function(e){return e.ostatus==t}))})),Object(s.a)((function(t){return t.reverse()})))}},{key:"getMyOrders",value:function(t){var e=this;return"NEW"===t?this.orderlist.getListRefer().snapshotChanges().pipe(Object(s.a)((function(n){return n.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())})).filter((function(n){return(n.ostatus==t||!n.ostatus)&&n.orderedBy==e.ygen.getUid()}))})),Object(s.a)((function(t){return t.reverse()}))):this.orderlist.getListRefer().snapshotChanges().pipe(Object(s.a)((function(n){return n.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())})).filter((function(n){return n.ostatus==t&&n.orderedBy==e.ygen.getUid()}))})),Object(s.a)((function(t){return t.reverse()})))}},{key:"getTotal",value:function(t){var e=this;this.total=0,t.forEach((function(t){e.total=e.total+t.amount}))}},{key:"setSegmentTotal",value:function(){var t=this;this.orderlist.getListRefer().snapshotChanges().pipe(Object(s.a)((function(e){return e.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())})).filter((function(e){return e.orderedBy==t.ygen.getUid()}))}))).subscribe((function(e){t.ygen.orderstatus.forEach((function(n){t.segmenttotal.set(n.value,e.filter((function(t){return t.ostatus==n.value})).length)}))}))}},{key:"navigate",value:function(t,e){console.log()}}]),t}(),v.\u0275fac=function(t){return new(t||v)(l.bc(i.kb),l.bc(a.R),l.bc(r.j),l.bc(a.a),l.bc(a.V),l.bc(a.S),l.bc(a.eb),l.bc(a.bb),l.bc(a.T),l.bc(a.W))},v.\u0275cmp=l.Vb({type:v,selectors:[["app-myorders"]],decls:39,vars:27,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","search"],[3,"ngModel","ngModelChange","ionChange"],["value","NEW"],["color","danger"],["value","INPROCESS"],["color","dark"],["value","COMPLETED"],["color","success"],["value","CANCELLED"],["color","tertiary"],[3,"color",4,"ngIf"],["padding",""],["loading",""],[4,"ngIf","ngIfElse"],[3,"ngModel","placeholder","ngModelChange"],["type","indeterminate","reversed","true"],[4,"ngFor","ngForOf"],["class","paySection",4,"ngIf"],["class","codSection",4,"ngIf"],["color","secondary",3,"click"],["name","eye"],["color","primary",3,"click"],[1,"contentorder"],[1,"labelt"],[1,"valuet"],[3,"color","icon","askquestion","icontext","isiconwithtext","askquestiontext","actionEvent",4,"ngIf"],["style","padding:5px",4,"ngIf"],[1,"paySection"],["text-uppercase","",1,"sc-ion-label-md-h","sc-ion-label-md-s","hydrated"],[1,"codSection"],[3,"color","icon","askquestion","icontext","isiconwithtext","askquestiontext","actionEvent"],[2,"padding","5px"],[3,"mobile"]],template:function(t,e){if(1&t&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar",0),l.hc(2,"ion-buttons",1),l.cc(3,"ion-back-button"),l.gc(),l.hc(4,"ion-title"),l.Xc(5),l.uc(6,"translate"),l.gc(),l.hc(7,"ion-buttons",2),l.hc(8,"ion-button",3),l.pc("click",(function(){return e.ygen.routeto("searchorder",{})})),l.cc(9,"ion-icon",4),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(10,"ion-header"),l.hc(11,"ion-toolbar",0),l.hc(12,"ion-segment",5),l.pc("ngModelChange",(function(t){return e.segment=t}))("ionChange",(function(t){return e.segmentChanged(t)})),l.hc(13,"ion-segment-button",6),l.Xc(14),l.uc(15,"translate"),l.hc(16,"ion-badge",7),l.Xc(17),l.gc(),l.gc(),l.hc(18,"ion-segment-button",8),l.Xc(19),l.uc(20,"translate"),l.hc(21,"ion-badge",9),l.Xc(22),l.gc(),l.gc(),l.hc(23,"ion-segment-button",10),l.Xc(24),l.uc(25,"translate"),l.hc(26,"ion-badge",11),l.Xc(27),l.gc(),l.gc(),l.hc(28,"ion-segment-button",12),l.Xc(29),l.uc(30,"translate"),l.hc(31,"ion-badge",13),l.Xc(32),l.gc(),l.gc(),l.gc(),l.gc(),l.Vc(33,u,3,5,"ion-toolbar",14),l.gc(),l.hc(34,"ion-content",15),l.Vc(35,d,1,0,"ng-template",null,16,l.Wc),l.Vc(37,O,3,2,"div",17),l.uc(38,"async"),l.gc()),2&t){var n=l.Kc(36);l.Ob(1),l.Cc("color","warning"),l.Ob(4),l.Yc(l.vc(6,15,"My Order")),l.Ob(6),l.Cc("color","warning"),l.Ob(1),l.Cc("ngModel",e.segment),l.Ob(2),l.Zc(" ",l.vc(15,17,"New"),""),l.Ob(3),l.Yc(e.segmenttotal.get("NEW")),l.Ob(2),l.Zc(" ",l.vc(20,19,"InProcess"),""),l.Ob(3),l.Yc(e.segmenttotal.get("INPROCESS")),l.Ob(2),l.Zc(" ",l.vc(25,21,"Completed"),""),l.Ob(3),l.Yc(e.segmenttotal.get("COMPLETED")),l.Ob(2),l.Zc(" ",l.vc(30,23,"Cancelled"),""),l.Ob(3),l.Yc(e.segmenttotal.get("CANCELLED")),l.Ob(1),l.Cc("ngIf",0),l.Ob(4),l.Cc("ngIf",l.vc(38,25,e.myinbox))("ngIfElse",n)}},directives:[i.y,i.fb,i.j,i.f,i.g,i.db,i.i,i.z,i.R,i.rb,o.o,o.r,i.S,i.h,c.m,i.s,i.Q,i.sb,i.N,c.l,i.k,i.m,i.n,i.o,i.q,i.H,i.l,i.B,a.f,a.j],pipes:[g.c,c.b],styles:[".otitle[_ngcontent-%COMP%]{font-size:14px}.orderid[_ngcontent-%COMP%]{font-size:10px}.orderamt[_ngcontent-%COMP%]{font-size:18px}ion-card-header[_ngcontent-%COMP%]{padding-bottom:0}tbody[_ngcontent-%COMP%]{font-size:small}.labelt[_ngcontent-%COMP%]{font-weight:lighter}.valuet[_ngcontent-%COMP%]{padding-left:10px}ion-card-content[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.footerCartSection[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-right:10px;margin-left:10px}.paySection[_ngcontent-%COMP%]{background:#15bf15}.codSection[_ngcontent-%COMP%], .paySection[_ngcontent-%COMP%]{color:#fff;position:absolute;padding:6px 16px;border-radius:5px;font-weight:700;right:10px}.codSection[_ngcontent-%COMP%]{background:#de66cf}ion-card-title[_ngcontent-%COMP%]{padding-bottom:0;background:#f5fffa}"]}),v)}],k=((m=function t(){_classCallCheck(this,t)}).\u0275mod=l.Zb({type:m}),m.\u0275inj=l.Yb({factory:function(t){return new(t||m)},imports:[[c.c,o.i,i.gb,a.J,a.o,a.b,r.n.forChild(C)]]}),m)}}]);