function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{WTVw:function(e,t,n){"use strict";n.r(t),n.d(t,"EventsPageModule",(function(){return T}));var i=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),a=n("TEn/"),r=n("pwB6"),s=n("0IaG"),l=n("fXoL"),d=n("7EHt"),g=n("sYmb"),u=n("/t3+"),h=n("bTqV"),p=n("NFeN"),f=["yocameraelement"];function v(e,t){if(1&e){var n=l.ic();l.hc(0,"ion-buttons",5),l.hc(1,"ion-button",6),l.pc("click",(function(){return l.Nc(n),l.tc().navigate("addevent",{})})),l.cc(2,"ion-icon",7),l.gc(),l.gc()}}function m(e,t){if(1&e&&l.cc(0,"img",28),2&e){var n=l.tc().$implicit;l.Cc("src",n.image,l.Pc)}}function b(e,t){if(1&e){var n=l.ic();l.hc(0,"div",31),l.hc(1,"div"),l.hc(2,"img",32),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc(3).ygen.openimage(e.src,"need to be upload")})),l.gc(),l.gc(),l.hc(3,"span"),l.hc(4,"ion-button",33),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc(3).deletephoto(e)})),l.cc(5,"ion-icon",34),l.gc(),l.hc(6,"ion-button",35),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc(3).savePhoto(e)})),l.cc(7,"ion-icon",36),l.gc(),l.gc(),l.gc()}if(2&e){var i=t.$implicit;l.Ob(2),l.Cc("src",i.src,l.Pc)}}function y(e,t){if(1&e){var n=l.ic();l.hc(0,"span"),l.hc(1,"ion-button",33),l.pc("click",(function(){l.Nc(n);var e=l.tc().$implicit,t=l.tc(2).$implicit;return l.tc().deletesaved(e,t.$key)})),l.cc(2,"ion-icon",34),l.gc(),l.gc()}}function w(e,t){if(1&e){var n=l.ic();l.hc(0,"div",31),l.hc(1,"div"),l.hc(2,"img",32),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc(3).ygen.openimage(e.value.photo,"")})),l.gc(),l.gc(),l.Vc(3,y,3,0,"span",37),l.gc()}if(2&e){var i=t.$implicit,c=l.tc(3);l.Ob(2),l.Dc("src",i.value.photo,l.Pc),l.Ob(1),l.Cc("ngIf",c.ygen.canI(i.createdBy,"event"))}}function x(e,t){if(1&e&&(l.hc(0,"div",29),l.Vc(1,b,8,1,"div",30),l.Vc(2,w,4,2,"div",30),l.uc(3,"keyvalue"),l.gc()),2&e){var n=l.tc().$implicit,i=l.tc();l.Ob(1),l.Cc("ngForOf",i.getstrip(n.$key,i.mystrip)),l.Ob(1),l.Cc("ngForOf",l.vc(3,2,n.images))}}function C(e,t){1&e&&(l.hc(0,"div"),l.Xc(1),l.uc(2,"translate"),l.gc()),2&e&&(l.Ob(1),l.Zc(" ",l.vc(2,1,"No Addtional Photos, click photos icon to add it"),". "))}function k(e,t){if(1&e){var n=l.ic();l.hc(0,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(n);var e=l.tc(2).$implicit;return l.tc().inactive(e)})),l.gc()}2&e&&l.Cc("color","danger")("icon","visibility_off")("icontext","Disable")("isiconwithtext",!0)}function O(e,t){if(1&e&&(l.hc(0,"div",17),l.Vc(1,k,1,4,"app-appicon",38),l.gc()),2&e){var n=l.tc().$implicit;l.Ob(1),l.Cc("ngIf",n.active)}}function _(e,t){if(1&e){var n=l.ic();l.hc(0,"div",17),l.hc(1,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(n);var e=l.tc().$implicit;return l.tc().active(e)})),l.gc(),l.gc()}2&e&&(l.Ob(1),l.Cc("color","warn")("icon","visibility")("icontext","Enable")("isiconwithtext",!0))}function P(e,t){if(1&e){var n=l.ic();l.hc(0,"app-appicon",40),l.pc("actionEvent",(function(){l.Nc(n);var e=l.tc(2).$implicit;return l.tc().closeEvent(e)})),l.gc()}2&e&&l.Cc("icon","done_all")("icontext","Close")("isiconwithtext",!0)}function M(e,t){if(1&e&&(l.hc(0,"div",17),l.Vc(1,P,1,3,"app-appicon",39),l.gc()),2&e){var n=l.tc().$implicit;l.Ob(1),l.Cc("ngIf",!n.eventOver)}}function I(e,t){if(1&e){var n=l.ic();l.hc(0,"div",17),l.hc(1,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(n);var e=l.tc().$implicit;return l.tc().delete(e)})),l.gc(),l.gc()}2&e&&(l.Ob(1),l.Cc("color","accent")("icon","delete")("icontext","Delete")("isiconwithtext",!0))}function $(e,t){if(1&e){var n=l.ic();l.hc(0,"div",17),l.hc(1,"app-yocamera",41,42),l.pc("imagetobeuploaded",(function(e){l.Nc(n);var t=l.tc().$implicit;return l.tc().showpreview(e,t.$key)})),l.gc(),l.gc()}if(2&e){var i=l.tc().$implicit;l.Ob(1),l.Cc("whatkey",i.$key)}}function N(e,t){if(1&e){var n=l.ic();l.hc(0,"ion-button",27),l.pc("click",(function(){l.Nc(n);var e=l.tc().$implicit;return l.tc().viewEntry(e)})),l.Xc(1,"View Entries "),l.gc()}}function E(e,t){if(1&e){var n=l.ic();l.hc(0,"ion-card"),l.Vc(1,m,1,1,"img",8),l.hc(2,"div",9),l.Vc(3,x,4,4,"div",10),l.gc(),l.Vc(4,C,3,3,"ng-template",null,11,l.Wc),l.hc(6,"ion-item",12),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc().navigate("addevent",{key:e.$key})})),l.hc(7,"ion-label",13),l.Xc(8),l.gc(),l.gc(),l.hc(9,"ion-item"),l.hc(10,"mat-expansion-panel",14),l.hc(11,"mat-expansion-panel-header"),l.hc(12,"mat-panel-title"),l.Xc(13),l.uc(14,"date"),l.gc(),l.gc(),l.hc(15,"div",15),l.Vc(16,O,2,1,"div",16),l.Vc(17,_,2,4,"div",16),l.Vc(18,M,2,1,"div",16),l.Vc(19,I,2,4,"div",16),l.Vc(20,$,3,1,"div",16),l.hc(21,"div",17),l.hc(22,"app-appicon",18),l.pc("actionEvent",(function(){return l.Nc(n),l.tc().ygen.shareMessage("dada","","")})),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(23,"ion-card-content"),l.Xc(24),l.gc(),l.hc(25,"ion-item"),l.hc(26,"div",19),l.hc(27,"div",20),l.hc(28,"div",21),l.Xc(29,"Organizer"),l.gc(),l.hc(30,"div",22),l.Xc(31),l.gc(),l.gc(),l.hc(32,"div",23),l.hc(33,"div",24),l.cc(34,"app-callphone",25),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(35,"ion-item"),l.Vc(36,N,2,0,"ion-button",26),l.hc(37,"ion-button",27),l.pc("click",(function(){l.Nc(n);var e=t.$implicit;return l.tc().navigate("registerforevent",{key:e.$key})})),l.Xc(38,"Register For Event "),l.gc(),l.gc(),l.gc()}if(2&e){var i=t.$implicit,c=l.tc();l.Ob(1),l.Cc("ngIf",i.imageuploaded),l.Ob(2),l.Cc("ngIf",c.getstrip(i.$key,c.mystrip).length>0||i.images),l.Ob(5),l.Zc(" ",i.title," "),l.Ob(5),l.Zc(" ",l.wc(14,17,i.startdate,"MMM dd yyyy hh:mm a")," "),l.Ob(3),l.Cc("ngIf",c.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",!i.active&&c.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",c.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",c.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",c.ygen.canI("","event")),l.Ob(2),l.Cc("color","primary")("icon","share")("icontext","share")("isiconwithtext",!0),l.Ob(2),l.Zc(" ",i.description," "),l.Ob(7),l.Zc(" ",i.contactname," "),l.Ob(3),l.Cc("mobile",null==i?null:i.contactnumber),l.Ob(2),l.Cc("ngIf",i.registration)}}var V,D,S,L=((D=function(){function e(t,n,i,c,o,a,s,l,d,g){_classCallCheck(this,e),this.photoUploadService=t,this.ycamera=n,this.ygen=i,this.alertme=c,this.route=o,this.router=a,this.boardService=s,this.ysharedata=l,this.ydata=d,this.dialog=g,this.imagescapturedComp=new Map,this.screenrefresh=!0,this.mystrip=[],this.showre=!1,this.sourcere="",this.refreshme=!1,this.crudList=new r.p("/board/events",d.getDatabase(),!0,i.getUid()),this.events=this.crudList.getList(),this.crudData=new r.p("/items",d.getDatabase(),!1,i.getUid()),this.settingItems=this.crudData.getData()}return _createClass(e,[{key:"ngOnInit",value:function(){this.refreshCamera()}},{key:"viewEntry",value:function(e){var t=[];e.registration&&(t=Object.keys(e.registration).map((function(t){return Object.assign(e.registration[t],{$key:t})}))),this.openDialog(t)}},{key:"navigate",value:function(e,t){this.ysharedata.setData("currentevent",t),this.router.navigate([e],{queryParams:t})}},{key:"openDialog",value:function(e){this.dialog.open(X,{panelClass:"myapp-no-padding-dialog",height:"90%",width:"90%",data:e}).afterClosed().subscribe((function(e){console.log("The dialog was closed",e)}))}},{key:"takeAcion",value:function(e){console.log("yeah",e)}},{key:"doit",value:function(e,t){var n=this;setTimeout((function(){n.crudList.updateList(t?{$key:e.$key,active:!0,eventOver:!1}:{$key:e.$key,active:!1})}),1e3)}},{key:"closeEvent",value:function(e){var t=this;this.screenrefresh=!1,this.alertme.question("Are You Sure?","Close Event","No").then((function(n){n.value&&setTimeout((function(){t.crudList.updateList({$key:e.$key,active:!1,eventOver:!0})}),1e3),t.screenrefresh=!0}))}},{key:"active",value:function(e){var t=this;this.alertme.question("Are You Sure?","Activate Event","No").then((function(n){n.value&&t.doit(e,!0)}))}},{key:"inactive",value:function(e){var t=this;this.alertme.question("Are You Sure?","Disable Event","No").then((function(n){n.value&&t.doit(e,!1)}))}},{key:"edit",value:function(e){var t=this;this.alertme.question("Are You Sure?","Delete","No").then((function(n){n.value&&t.crudList.removefromList(e)}))}},{key:"delete",value:function(e){var t=this;this.alertme.question("Are You Sure?","Delete","No").then((function(n){n.value&&setTimeout((function(){t.crudList.removefromList(e)}),1e3)}))}},{key:"showpreview",value:function(e,t){this.showre=!0,this.sourcere=e,this.mystrip.push(e)}},{key:"showstrip",value:function(e){return this.mystrip.some((function(t){return t.whatfor===e}))}},{key:"getstrip",value:function(e,t){var n=t.filter((function(t){return t.whatfor===e}));return console.log(n.length),n}},{key:"deletfromStrip",value:function(e){this.mystrip=this.mystrip.filter((function(t){return t.filename!=e}))}},{key:"deletephoto",value:function(e){this.deletfromStrip(e.filename),this.refreshCamera()}},{key:"refreshCamera",value:function(){var e=this;this.refreshme=!1,setTimeout((function(){e.refreshme=!0}),100)}},{key:"saveImage",value:function(e){return this.photoUploadService.uploadImage(e)}},{key:"saveMobileImage",value:function(e){return this.photoUploadService.uploadAPicture(e)}},{key:"savePhoto",value:function(e){var t=this;this.refreshCamera(),this.ygen.ismobile()?(this.alertme.infodata("Uploading and saving photo.."),this.saveMobileImage(e.src).then((function(n){console.log("what we have recieved image 1 "+n),console.log("what we have recieved image 1 "+n);var i=JSON.parse(n.response);console.log("we got the url...."+n.response),console.log("we got the url...."+i.secure_url),t.addImages(e.whatfor,{photo:i.secure_url}),t.deletephoto(e),t.alertme.successdata("Saved...")}))):this.saveImage(e.files).then((function(n){console.log("what we have recieved image 2 "+n.secure_url),t.addImages(e.whatfor,{photo:n.secure_url}),t.deletephoto(e)}))}},{key:"addImages",value:function(e,t){new r.p("/board/events/"+e+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).addtolist(t)}},{key:"deletesaved",value:function(e,t){var n=this;this.alertme.question("Are You Sure?","Delete","No").then((function(i){i.value&&setTimeout((function(){new r.p("/board/events/"+t+"/images",n.ydata.getDatabase(),!0,n.ygen.getUid()).removefromList({$key:e.key})}),1e3)}))}}]),e}()).\u0275fac=function(e){return new(e||D)(l.bc(r.db),l.bc(r.P),l.bc(r.V),l.bc(r.a),l.bc(o.a),l.bc(o.j),l.bc(r.i),l.bc(r.T),l.bc(r.S),l.bc(s.b))},D.\u0275cmp=l.Vb({type:D,selectors:[["app-events"]],viewQuery:function(e,t){var n;1&e&&(l.ed(f,!0),l.ed(f,!0)),2&e&&(l.Jc(n=l.qc())&&(t.yocam=n.first),l.Jc(n=l.qc())&&(t.yocamViewChildren=n))},decls:10,vars:5,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary",4,"ngIf"],["padding",""],[4,"ngFor","ngForOf"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"],["class","imageshow",3,"src",4,"ngIf"],[1,"roll"],["id","scrolly",4,"ngIf"],["nophotos",""],["button","",3,"click"],[1,"ion-text-wrap"],[2,"width","100%"],[1,"container"],["class","item",4,"ngIf"],[1,"item"],[3,"color","icon","icontext","isiconwithtext","actionEvent"],[1,"infocontainer"],[1,"item","atstart"],[1,"whatlable"],[1,"forlable"],[1,"item","atend"],[2,"float","right","padding","5px"],[3,"mobile"],["fill","outline","slot","end",3,"click",4,"ngIf"],["fill","outline","slot","end",3,"click"],[1,"imageshow",3,"src"],["id","scrolly"],["class","imgds",4,"ngFor","ngForOf"],[1,"imgds"],[1,"imgc",3,"src","click"],["color","danger","size","small",1,"delete",3,"click"],["slot","icon-only","name","trash"],["size","small",1,"save",3,"click"],["slot","icon-only","name","save"],[4,"ngIf"],[3,"color","icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent"],[3,"whatkey","imagetobeuploaded"],["yocameraelement",""]],template:function(e,t){1&e&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar",0),l.hc(2,"ion-buttons",1),l.cc(3,"ion-back-button"),l.gc(),l.hc(4,"ion-title"),l.Xc(5,"Events"),l.gc(),l.Vc(6,v,3,0,"ion-buttons",2),l.gc(),l.gc(),l.hc(7,"ion-content",3),l.Vc(8,E,39,20,"ion-card",4),l.uc(9,"async"),l.gc()),2&e&&(l.Ob(1),l.Cc("color","warning"),l.Ob(5),l.Cc("ngIf",t.ygen.canI("","event")),l.Ob(2),l.Cc("ngForOf",l.vc(9,3,t.events)))},directives:[a.y,a.fb,a.j,a.f,a.g,a.db,i.m,a.s,i.l,a.i,a.z,a.k,a.B,a.H,d.c,d.e,d.f,r.f,a.l,r.j,r.Z],pipes:[i.b,i.e,i.g,g.c],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),D),X=((V=function(){function e(t,n){_classCallCheck(this,e),this.dialogRef=t,this.data=n,this.displayedColumns=["id","name","mobile"],console.log("data ==>",n),this.dataSource=n}return _createClass(e,[{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"gotoExternal",value:function(e){window.location.href=e}}]),e}()).\u0275fac=function(e){return new(e||V)(l.bc(s.h),l.bc(s.a))},V.\u0275cmp=l.Vb({type:V,selectors:[["dialog-overview-example-dialog"]],decls:8,vars:0,consts:[["color","primary"],[1,"example-spacer"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",3,"click"]],template:function(e,t){1&e&&(l.hc(0,"mat-toolbar",0),l.hc(1,"mat-toolbar-row"),l.hc(2,"span"),l.Xc(3,"Registration"),l.gc(),l.cc(4,"span",1),l.hc(5,"button",2),l.pc("click",(function(){return t.onNoClick()})),l.hc(6,"mat-icon"),l.Xc(7,"close"),l.gc(),l.gc(),l.gc(),l.gc())},directives:[u.a,u.c,h.a,p.a],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),V),j=[{path:"",component:L}],T=((S=function e(){_classCallCheck(this,e)}).\u0275mod=l.Zb({type:S}),S.\u0275inj=l.Yb({factory:function(e){return new(e||S)},imports:[[i.c,c.i,a.gb,r.J,r.o,r.b,o.n.forChild(j)]]}),S)}}]);