(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{AWRA:function(t,c,e){"use strict";e.r(c),e.d(c,"SubscriptionPageModule",(function(){return w}));var n=e("ofXK"),a=e("3Pt+"),i=e("tyNb"),s=e("TEn/"),r=e("pwB6"),o=e("wd/R"),p=e("tk/3"),u=e("un/a"),d=e("fXoL"),g=e("0IaG"),h=e("Wp6s"),b=e("bTqV"),l=e("sYmb");function m(t,c){1&t&&(d.hc(0,"div"),d.hc(1,"h1"),d.Xc(2),d.uc(3,"translate"),d.gc(),d.gc()),2&t&&(d.Ob(2),d.Zc(" ",d.vc(3,1,"Your subscription Ended Please Renew"),"..."))}function y(t,c){if(1&t){const t=d.ic();d.hc(0,"div",17),d.hc(1,"div",18),d.hc(2,"mat-card",19),d.hc(3,"div",20),d.Xc(4),d.uc(5,"translate"),d.gc(),d.hc(6,"mat-card-content"),d.hc(7,"h4",21),d.Xc(8),d.uc(9,"translate"),d.gc(),d.hc(10,"p"),d.Xc(11),d.uc(12,"translate"),d.gc(),d.hc(13,"h4",21),d.Xc(14),d.gc(),d.gc(),d.hc(15,"mat-card-footer"),d.hc(16,"div",13),d.hc(17,"button",22),d.pc("click",(function(){return d.Nc(t),d.tc().renew(6)})),d.Xc(18),d.uc(19,"translate"),d.gc(),d.gc(),d.gc(),d.gc(),d.hc(20,"mat-card",23),d.hc(21,"div",24),d.Xc(22),d.uc(23,"translate"),d.gc(),d.hc(24,"mat-card-content"),d.hc(25,"h4",21),d.Xc(26),d.uc(27,"translate"),d.gc(),d.hc(28,"p"),d.Xc(29),d.uc(30,"translate"),d.gc(),d.hc(31,"h4",21),d.Xc(32),d.gc(),d.gc(),d.hc(33,"mat-card-footer"),d.hc(34,"div",13),d.hc(35,"button",25),d.pc("click",(function(){return d.Nc(t),d.tc().renew(12)})),d.Xc(36),d.uc(37,"translate"),d.gc(),d.gc(),d.gc(),d.gc(),d.gc(),d.gc()}if(2&t){const t=d.tc();d.Ob(4),d.Yc(d.vc(5,12,"Basic")),d.Ob(4),d.Yc(d.vc(9,14,"6 Months")),d.Ob(3),d.Zc("",d.vc(12,16,"Your Store will be activated for 06 months in")," "),d.Ob(3),d.ad("",t.ygen.getcurrencysymbol()," ",t.priceitem.appsix,""),d.Ob(4),d.Yc(d.vc(19,18,"Renew")),d.Ob(4),d.Yc(d.vc(23,20,"Premium")),d.Ob(4),d.Yc(d.vc(27,22,"12 Months")),d.Ob(3),d.Zc("",d.vc(30,24,"Your Store will be activated for 12 months in")," "),d.Ob(3),d.ad("",t.ygen.getcurrencysymbol()," ",t.priceitem.apptwelve,""),d.Ob(4),d.Yc(d.vc(37,26,"Renew"))}}function v(t,c){if(1&t){const t=d.ic();d.hc(0,"div",26),d.hc(1,"div",27),d.hc(2,"input",28),d.pc("ngModelChange",(function(c){return d.Nc(t),d.tc().numberofdays=c})),d.gc(),d.gc(),d.hc(3,"div"),d.hc(4,"button",29),d.pc("click",(function(){return d.Nc(t),d.tc().addDays()})),d.Xc(5),d.uc(6,"translate"),d.gc(),d.gc(),d.gc()}if(2&t){const t=d.tc();d.Ob(2),d.Cc("ngModel",t.numberofdays),d.Ob(3),d.Yc(d.vc(6,2,"Add Grace Days"))}}function f(t,c){if(1&t&&(d.hc(0,"mat-card",3),d.hc(1,"mat-card-header"),d.hc(2,"mat-card-title"),d.Xc(3),d.uc(4,"translate"),d.gc(),d.gc(),d.hc(5,"mat-card-content"),d.hc(6,"div",5),d.hc(7,"div",6),d.Xc(8),d.uc(9,"translate"),d.gc(),d.hc(10,"div",7),d.Xc(11),d.gc(),d.gc(),d.hc(12,"div",5),d.hc(13,"div",6),d.Xc(14),d.uc(15,"translate"),d.gc(),d.hc(16,"div",7),d.Xc(17),d.gc(),d.gc(),d.hc(18,"div",5),d.hc(19,"div",6),d.Xc(20),d.uc(21,"translate"),d.gc(),d.hc(22,"div",7),d.Xc(23),d.gc(),d.gc(),d.gc(),d.gc()),2&t){const t=c.$implicit,e=d.tc();d.Ob(3),d.Yc(d.vc(4,8,"Your Payment History")),d.Ob(5),d.Yc(d.vc(9,10,"Paid on")),d.Ob(3),d.Zc("",e.ygen.formatTimestampToDate(t.paydate)," "),d.Ob(3),d.Yc(d.vc(15,12,"Paid For")),d.Ob(3),d.ad("",e.ygen.getcurrencysymbol()," ",t.amount," "),d.Ob(3),d.Yc(d.vc(21,14,"Paid Reference")),d.Ob(3),d.Zc("",e.ygen.formatTimestampToDate(null==t.paymentResponse?null:t.paymentResponse.payment_id)," ")}}const O=[{path:"",component:(()=>{class t{constructor(t,c,e,n,a,i,s,o,p,u,d){this.events=t,this.http=c,this.ypay=e,this.yauth=n,this.ygen=a,this.alertme=i,this.route=s,this.router=o,this.ysharedata=p,this.ydata=u,this.dialog=d,this.priceitem={},this.subscription={},this.crudList=new r.p(r.R.getpath()+"/launchapp/renewpayments",u.getDatabase(),!0,this.ygen.getUid()),this.ygen.retrivedsetting.subscribe(t=>{this.priceitem.appsix=r.V.datamap.get("appsix")?r.V.datamap.get("appsix"):60,this.priceitem.apptwelve=r.V.datamap.get("apptwelve")?r.V.datamap.get("apptwelve"):100})}ngOnInit(){this.renewlist=this.crudList.getList(),this.subscription=this.yauth.subscriptionaccount}navigate(t,c){this.ysharedata.setData("currentevent",c),this.router.navigate([t],{queryParams:c})}renew(t){let c=6==t?this.priceitem.appsix?this.priceitem.appsix:60:this.priceitem.apptwelve?this.priceitem.apptwelve:100,e="business";12==t&&(e="premium");let n=this.ydata.getDatabase().createPushId(),a={sendorderid:n,renewapp:!0,isorder:!1,amount:c,trancurrency:this.ygen.getTranCurrency().toLowerCase()};this.ygen.retrivedsetting.subscribe(t=>{this.ypay.pay(a)}),this.events.subscribe("renew:success["+n+"]",c=>{this.events.unsubscribe("renew:success["+n+"]");let a=+new Date,i=30*t+7+this.subscription.subscriptiondaysremaining,s=+o(new Date(a)).add(i,"days");this.yauth.subscriptionaccount.subscriptiondate=s,this.yauth.issubscriptionon=!0,this.yauth.subscriptiontype=e,this.subscription=this.yauth.subscriptionaccount,this.ydata.getDatabase().object(r.R.getpath()+"/launchapp").update({subscriptiondate:s,subscriptiontype:e});let p=this.ydata.getDatabase().createPushId();this.crudList.getListRefer().set(p,c),this.alertme.successdata("You have Successfully Renewed your Subscription with us, Congratulations").then(t=>{console.log("done11",t),this.events.publish("shop:checksubscription")})})}addDays(){this.yauth.addDaysToSubscription(this.numberofdays)}capturepayment(t){this.yauth.getappSettings();let c=`https://guarded-sea-64699.herokuapp.com/rest/razor/renew?testmode=true&paymentid=${t.paymentResponse.payment_id}`,e={amount:100*t.amount,currency:"INR"};const n={headers:new p.d({"Content-Type":"application/json",Authorization:"yoyo"})};this.http.post(c,e,n).pipe(Object(u.a)(2)).subscribe(t=>{console.log("capture payment",t)},t=>{})}}return t.\u0275fac=function(c){return new(c||t)(d.bc(r.ab),d.bc(p.b),d.bc(r.N),d.bc(r.O),d.bc(r.V),d.bc(r.a),d.bc(i.a),d.bc(i.j),d.bc(r.T),d.bc(r.S),d.bc(g.b))},t.\u0275cmp=d.Vb({type:t,selectors:[["app-subscription"]],decls:51,vars:32,consts:[[3,"color"],["slot","start"],[1,"ion-padding"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"container"],[1,"item","ylable"],[1,"item","ytext"],[1,"ycricle"],[1,"counter"],[1,"dte"],[4,"ngIf"],["class","pricetable","style","display: flex;",4,"ngIf"],[1,"containerb"],["mat-button","","color","warning","routerLink","/dashboard"],["style","padding: 20px;display: flex; flex-direction: column; align-items: center;",4,"ngIf"],["class","example-card",4,"ngFor","ngForOf"],[1,"pricetable",2,"display","flex"],[1,"md-padding"],[1,"priceclass","basicback"],[1,"myhead","basic"],["layout","row","layout-align","center",1,"md-title"],["mat-button","","color","warning",3,"click"],[1,"priceclass","preimumback"],[1,"myhead","premium"],["mat-button","",3,"click"],[2,"padding","20px","display","flex","flex-direction","column","align-items","center"],[2,"font-size","xxx-large"],["min","1","max","360","type","number","placeholder","Add number of days",3,"ngModel","ngModelChange"],["mat-button","","color","warn",3,"click"]],template:function(t,c){1&t&&(d.hc(0,"ion-toolbar",0),d.hc(1,"ion-buttons",1),d.cc(2,"ion-menu-button"),d.gc(),d.hc(3,"ion-buttons",1),d.cc(4,"ion-back-button"),d.gc(),d.hc(5,"ion-title"),d.Xc(6),d.uc(7,"translate"),d.gc(),d.gc(),d.hc(8,"ion-content",2),d.hc(9,"mat-card",3),d.hc(10,"mat-card-header"),d.cc(11,"div",4),d.hc(12,"mat-card-title"),d.Xc(13),d.uc(14,"translate"),d.gc(),d.gc(),d.hc(15,"mat-card-content"),d.hc(16,"div",5),d.hc(17,"div",6),d.Xc(18),d.uc(19,"translate"),d.gc(),d.hc(20,"div",7),d.Xc(21),d.gc(),d.gc(),d.hc(22,"div",5),d.hc(23,"div",6),d.Xc(24),d.uc(25,"translate"),d.gc(),d.hc(26,"div",7),d.Xc(27),d.gc(),d.gc(),d.hc(28,"div",5),d.hc(29,"div",6),d.Xc(30),d.uc(31,"translate"),d.gc(),d.hc(32,"div",7),d.Xc(33),d.gc(),d.gc(),d.hc(34,"div"),d.hc(35,"div",8),d.hc(36,"div",9),d.Xc(37),d.gc(),d.gc(),d.hc(38,"div",10),d.Xc(39),d.uc(40,"translate"),d.gc(),d.gc(),d.Vc(41,m,4,3,"div",11),d.Vc(42,y,38,28,"div",12),d.gc(),d.hc(43,"mat-card-actions"),d.hc(44,"div",13),d.hc(45,"button",14),d.Xc(46),d.uc(47,"translate"),d.gc(),d.gc(),d.gc(),d.gc(),d.Vc(48,v,7,4,"div",15),d.Vc(49,f,24,16,"mat-card",16),d.uc(50,"async"),d.gc()),2&t&&(d.Cc("color","warning"),d.Ob(6),d.Yc(d.vc(7,16,"Subscription Information")),d.Ob(7),d.Yc(d.vc(14,18,"Your Store Subscription")),d.Ob(5),d.Yc(d.vc(19,20,"Store Launch on")),d.Ob(3),d.Zc("",c.ygen.formatTimestampToDate(c.subscription.lanunchdate)," "),d.Ob(3),d.Yc(d.vc(25,22,"Subscription End Date")),d.Ob(3),d.Zc("",c.ygen.formatTimestampToDate(c.subscription.subscriptiondate)," "),d.Ob(3),d.Yc(d.vc(31,24,"Current Subscription")),d.Ob(3),d.Zc("",c.ygen.getSubscriptionType()," "),d.Ob(4),d.Zc(" ",c.subscription.subscriptiondaysremaining," "),d.Ob(2),d.Yc(d.vc(40,26,"Days to Expiry")),d.Ob(2),d.Cc("ngIf",!c.subscription.issubscriptionon),d.Ob(1),d.Cc("ngIf",c.ygen.isSuperAdmin()||c.subscription.subscriptiondaysremaining<=14),d.Ob(4),d.Yc(d.vc(47,28,"Cancel")),d.Ob(2),d.Cc("ngIf",c.ygen.isSuperAdmin()),d.Ob(1),d.Cc("ngForOf",d.vc(50,30,c.renewlist)))},directives:[s.fb,s.j,s.L,s.f,s.g,s.db,s.s,h.a,h.f,h.c,h.h,h.d,n.m,h.b,b.a,s.qb,i.l,n.l,h.e,a.s,a.b,a.o,a.r],pipes:[l.c,n.b],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin:auto}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.containerb[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.item[_ngcontent-%COMP%]{font-size:15px}.ytext[_ngcontent-%COMP%]{font-weight:700}.counter[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:small}.ycricle[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:50%;font-size:40px;line-height:200px;text-align:center;background:#000;color:#fff;margin:10px auto}.priceclass[_ngcontent-%COMP%]{width:46%;margin-right:5px;background:rgba(0,0,0,.17)}.md-padding[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.myhead[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:10px;text-align:center;padding:10px}.basic[_ngcontent-%COMP%], .myhead[_ngcontent-%COMP%]{background:rgba(0,255,255,.2)}.premimum[_ngcontent-%COMP%]{background:rgba(255,0,0,.32)}.premimumback[_ngcontent-%COMP%]{background:rgba(16,3,3,.17)}.basicback[_ngcontent-%COMP%]{background:rgba(0,0,2,.11)}.mat-card-footer[_ngcontent-%COMP%]{background:#ffb6c1}.dte[_ngcontent-%COMP%]{position:absolute;left:41%;top:42%;color:#7fffd4}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{opacity:1;font-size:xxx-large}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=d.Zb({type:t}),t.\u0275inj=d.Yb({factory:function(c){return new(c||t)},imports:[[n.c,a.i,s.gb,r.J,r.o,r.b,i.n.forChild(O)]]}),t})()}}]);