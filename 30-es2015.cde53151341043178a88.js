(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{WTVw:function(t,e,i){"use strict";i.r(e),i.d(e,"EventsPageModule",(function(){return L}));var c=i("ofXK"),n=i("3Pt+"),o=i("tyNb"),a=i("TEn/"),s=i("pwB6"),r=i("0IaG"),l=i("fXoL"),d=i("7EHt"),g=i("sYmb"),h=i("/t3+"),p=i("bTqV"),u=i("NFeN");const f=["yocameraelement"];function m(t,e){if(1&t){const t=l.ic();l.hc(0,"ion-buttons",5),l.hc(1,"ion-button",6),l.pc("click",(function(){return l.Nc(t),l.tc().navigate("addevent",{})})),l.cc(2,"ion-icon",7),l.gc(),l.gc()}}function v(t,e){if(1&t&&l.cc(0,"img",28),2&t){const t=l.tc().$implicit;l.Cc("src",t.image,l.Pc)}}function b(t,e){if(1&t){const t=l.ic();l.hc(0,"div",31),l.hc(1,"div"),l.hc(2,"img",32),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc(3).ygen.openimage(i.src,"need to be upload")})),l.gc(),l.gc(),l.hc(3,"span"),l.hc(4,"ion-button",33),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc(3).deletephoto(i)})),l.cc(5,"ion-icon",34),l.gc(),l.hc(6,"ion-button",35),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc(3).savePhoto(i)})),l.cc(7,"ion-icon",36),l.gc(),l.gc(),l.gc()}if(2&t){const t=e.$implicit;l.Ob(2),l.Cc("src",t.src,l.Pc)}}function w(t,e){if(1&t){const t=l.ic();l.hc(0,"span"),l.hc(1,"ion-button",33),l.pc("click",(function(){l.Nc(t);const e=l.tc().$implicit,i=l.tc(2).$implicit;return l.tc().deletesaved(e,i.$key)})),l.cc(2,"ion-icon",34),l.gc(),l.gc()}}function y(t,e){if(1&t){const t=l.ic();l.hc(0,"div",31),l.hc(1,"div"),l.hc(2,"img",32),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc(3).ygen.openimage(i.value.photo,"")})),l.gc(),l.gc(),l.Vc(3,w,3,0,"span",37),l.gc()}if(2&t){const t=e.$implicit,i=l.tc(3);l.Ob(2),l.Dc("src",t.value.photo,l.Pc),l.Ob(1),l.Cc("ngIf",i.ygen.canI(t.createdBy,"event"))}}function x(t,e){if(1&t&&(l.hc(0,"div",29),l.Vc(1,b,8,1,"div",30),l.Vc(2,y,4,2,"div",30),l.uc(3,"keyvalue"),l.gc()),2&t){const t=l.tc().$implicit,e=l.tc();l.Ob(1),l.Cc("ngForOf",e.getstrip(t.$key,e.mystrip)),l.Ob(1),l.Cc("ngForOf",l.vc(3,2,t.images))}}function O(t,e){1&t&&(l.hc(0,"div"),l.Xc(1),l.uc(2,"translate"),l.gc()),2&t&&(l.Ob(1),l.Zc(" ",l.vc(2,1,"No Addtional Photos, click photos icon to add it"),". "))}function C(t,e){if(1&t){const t=l.ic();l.hc(0,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(t);const e=l.tc(2).$implicit;return l.tc().inactive(e)})),l.gc()}2&t&&l.Cc("color","danger")("icon","visibility_off")("icontext","Disable")("isiconwithtext",!0)}function k(t,e){if(1&t&&(l.hc(0,"div",17),l.Vc(1,C,1,4,"app-appicon",38),l.gc()),2&t){const t=l.tc().$implicit;l.Ob(1),l.Cc("ngIf",t.active)}}function P(t,e){if(1&t){const t=l.ic();l.hc(0,"div",17),l.hc(1,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(t);const e=l.tc().$implicit;return l.tc().active(e)})),l.gc(),l.gc()}2&t&&(l.Ob(1),l.Cc("color","warn")("icon","visibility")("icontext","Enable")("isiconwithtext",!0))}function M(t,e){if(1&t){const t=l.ic();l.hc(0,"app-appicon",40),l.pc("actionEvent",(function(){l.Nc(t);const e=l.tc(2).$implicit;return l.tc().closeEvent(e)})),l.gc()}2&t&&l.Cc("icon","done_all")("icontext","Close")("isiconwithtext",!0)}function _(t,e){if(1&t&&(l.hc(0,"div",17),l.Vc(1,M,1,3,"app-appicon",39),l.gc()),2&t){const t=l.tc().$implicit;l.Ob(1),l.Cc("ngIf",!t.eventOver)}}function I(t,e){if(1&t){const t=l.ic();l.hc(0,"div",17),l.hc(1,"app-appicon",18),l.pc("actionEvent",(function(){l.Nc(t);const e=l.tc().$implicit;return l.tc().delete(e)})),l.gc(),l.gc()}2&t&&(l.Ob(1),l.Cc("color","accent")("icon","delete")("icontext","Delete")("isiconwithtext",!0))}function $(t,e){if(1&t){const t=l.ic();l.hc(0,"div",17),l.hc(1,"app-yocamera",41,42),l.pc("imagetobeuploaded",(function(e){l.Nc(t);const i=l.tc().$implicit;return l.tc().showpreview(e,i.$key)})),l.gc(),l.gc()}if(2&t){const t=l.tc().$implicit;l.Ob(1),l.Cc("whatkey",t.$key)}}function N(t,e){if(1&t){const t=l.ic();l.hc(0,"ion-button",27),l.pc("click",(function(){l.Nc(t);const e=l.tc().$implicit;return l.tc().viewEntry(e)})),l.Xc(1,"View Entries "),l.gc()}}function E(t,e){if(1&t){const t=l.ic();l.hc(0,"ion-card"),l.Vc(1,v,1,1,"img",8),l.hc(2,"div",9),l.Vc(3,x,4,4,"div",10),l.gc(),l.Vc(4,O,3,3,"ng-template",null,11,l.Wc),l.hc(6,"ion-item",12),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc().navigate("addevent",{key:i.$key})})),l.hc(7,"ion-label",13),l.Xc(8),l.gc(),l.gc(),l.hc(9,"ion-item"),l.hc(10,"mat-expansion-panel",14),l.hc(11,"mat-expansion-panel-header"),l.hc(12,"mat-panel-title"),l.Xc(13),l.uc(14,"date"),l.gc(),l.gc(),l.hc(15,"div",15),l.Vc(16,k,2,1,"div",16),l.Vc(17,P,2,4,"div",16),l.Vc(18,_,2,1,"div",16),l.Vc(19,I,2,4,"div",16),l.Vc(20,$,3,1,"div",16),l.hc(21,"div",17),l.hc(22,"app-appicon",18),l.pc("actionEvent",(function(){return l.Nc(t),l.tc().ygen.shareMessage("dada","","")})),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(23,"ion-card-content"),l.Xc(24),l.gc(),l.hc(25,"ion-item"),l.hc(26,"div",19),l.hc(27,"div",20),l.hc(28,"div",21),l.Xc(29,"Organizer"),l.gc(),l.hc(30,"div",22),l.Xc(31),l.gc(),l.gc(),l.hc(32,"div",23),l.hc(33,"div",24),l.cc(34,"app-callphone",25),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(35,"ion-item"),l.Vc(36,N,2,0,"ion-button",26),l.hc(37,"ion-button",27),l.pc("click",(function(){l.Nc(t);const i=e.$implicit;return l.tc().navigate("registerforevent",{key:i.$key})})),l.Xc(38,"Register For Event "),l.gc(),l.gc(),l.gc()}if(2&t){const t=e.$implicit,i=l.tc();l.Ob(1),l.Cc("ngIf",t.imageuploaded),l.Ob(2),l.Cc("ngIf",i.getstrip(t.$key,i.mystrip).length>0||t.images),l.Ob(5),l.Zc(" ",t.title," "),l.Ob(5),l.Zc(" ",l.wc(14,17,t.startdate,"MMM dd yyyy hh:mm a")," "),l.Ob(3),l.Cc("ngIf",i.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",!t.active&&i.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",i.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",i.ygen.canI("","event")),l.Ob(1),l.Cc("ngIf",i.ygen.canI("","event")),l.Ob(2),l.Cc("color","primary")("icon","share")("icontext","share")("isiconwithtext",!0),l.Ob(2),l.Zc(" ",t.description," "),l.Ob(7),l.Zc(" ",t.contactname," "),l.Ob(3),l.Cc("mobile",null==t?null:t.contactnumber),l.Ob(2),l.Cc("ngIf",t.registration)}}let V=(()=>{class t{constructor(t,e,i,c,n,o,a,r,l,d){this.photoUploadService=t,this.ycamera=e,this.ygen=i,this.alertme=c,this.route=n,this.router=o,this.boardService=a,this.ysharedata=r,this.ydata=l,this.dialog=d,this.imagescapturedComp=new Map,this.screenrefresh=!0,this.mystrip=[],this.showre=!1,this.sourcere="",this.refreshme=!1,this.crudList=new s.p("/board/events",l.getDatabase(),!0,i.getUid()),this.events=this.crudList.getList(),this.crudData=new s.p("/items",l.getDatabase(),!1,i.getUid()),this.settingItems=this.crudData.getData()}ngOnInit(){this.refreshCamera()}viewEntry(t){let e=[];t.registration&&(e=Object.keys(t.registration).map(e=>Object.assign(t.registration[e],{$key:e}))),this.openDialog(e)}navigate(t,e){this.ysharedata.setData("currentevent",e),this.router.navigate([t],{queryParams:e})}openDialog(t){this.dialog.open(D,{panelClass:"myapp-no-padding-dialog",height:"90%",width:"90%",data:t}).afterClosed().subscribe(t=>{console.log("The dialog was closed",t)})}takeAcion(t){console.log("yeah",t)}doit(t,e){setTimeout(()=>{this.crudList.updateList(e?{$key:t.$key,active:!0,eventOver:!1}:{$key:t.$key,active:!1})},1e3)}closeEvent(t){this.screenrefresh=!1,this.alertme.question("Are You Sure?","Close Event","No").then(e=>{e.value&&setTimeout(()=>{this.crudList.updateList({$key:t.$key,active:!1,eventOver:!0})},1e3),this.screenrefresh=!0})}active(t){this.alertme.question("Are You Sure?","Activate Event","No").then(e=>{e.value&&this.doit(t,!0)})}inactive(t){this.alertme.question("Are You Sure?","Disable Event","No").then(e=>{e.value&&this.doit(t,!1)})}edit(t){this.alertme.question("Are You Sure?","Delete","No").then(e=>{e.value&&this.crudList.removefromList(t)})}delete(t){this.alertme.question("Are You Sure?","Delete","No").then(e=>{e.value&&setTimeout(()=>{this.crudList.removefromList(t)},1e3)})}showpreview(t,e){this.showre=!0,this.sourcere=t,this.mystrip.push(t)}showstrip(t){return this.mystrip.some(e=>e.whatfor===t)}getstrip(t,e){let i=e.filter(e=>e.whatfor===t);return console.log(i.length),i}deletfromStrip(t){this.mystrip=this.mystrip.filter(e=>e.filename!=t)}deletephoto(t){this.deletfromStrip(t.filename),this.refreshCamera()}refreshCamera(){this.refreshme=!1,setTimeout(()=>{this.refreshme=!0},100)}saveImage(t){return this.photoUploadService.uploadImage(t)}saveMobileImage(t){return this.photoUploadService.uploadAPicture(t)}savePhoto(t){this.refreshCamera(),this.ygen.ismobile()?(this.alertme.infodata("Uploading and saving photo.."),this.saveMobileImage(t.src).then(e=>{console.log("what we have recieved image 1 "+e),console.log("what we have recieved image 1 "+e);const i=JSON.parse(e.response);console.log("we got the url...."+e.response),console.log("we got the url...."+i.secure_url),this.addImages(t.whatfor,{photo:i.secure_url}),this.deletephoto(t),this.alertme.successdata("Saved...")})):this.saveImage(t.files).then(e=>{console.log("what we have recieved image 2 "+e.secure_url),this.addImages(t.whatfor,{photo:e.secure_url}),this.deletephoto(t)})}addImages(t,e){new s.p("/board/events/"+t+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).addtolist(e)}deletesaved(t,e){this.alertme.question("Are You Sure?","Delete","No").then(i=>{i.value&&setTimeout(()=>{new s.p("/board/events/"+e+"/images",this.ydata.getDatabase(),!0,this.ygen.getUid()).removefromList({$key:t.key})},1e3)})}}return t.\u0275fac=function(e){return new(e||t)(l.bc(s.db),l.bc(s.P),l.bc(s.V),l.bc(s.a),l.bc(o.a),l.bc(o.j),l.bc(s.i),l.bc(s.T),l.bc(s.S),l.bc(r.b))},t.\u0275cmp=l.Vb({type:t,selectors:[["app-events"]],viewQuery:function(t,e){var i;1&t&&(l.ed(f,!0),l.ed(f,!0)),2&t&&(l.Jc(i=l.qc())&&(e.yocam=i.first),l.Jc(i=l.qc())&&(e.yocamViewChildren=i))},decls:10,vars:5,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary",4,"ngIf"],["padding",""],[4,"ngFor","ngForOf"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"],["class","imageshow",3,"src",4,"ngIf"],[1,"roll"],["id","scrolly",4,"ngIf"],["nophotos",""],["button","",3,"click"],[1,"ion-text-wrap"],[2,"width","100%"],[1,"container"],["class","item",4,"ngIf"],[1,"item"],[3,"color","icon","icontext","isiconwithtext","actionEvent"],[1,"infocontainer"],[1,"item","atstart"],[1,"whatlable"],[1,"forlable"],[1,"item","atend"],[2,"float","right","padding","5px"],[3,"mobile"],["fill","outline","slot","end",3,"click",4,"ngIf"],["fill","outline","slot","end",3,"click"],[1,"imageshow",3,"src"],["id","scrolly"],["class","imgds",4,"ngFor","ngForOf"],[1,"imgds"],[1,"imgc",3,"src","click"],["color","danger","size","small",1,"delete",3,"click"],["slot","icon-only","name","trash"],["size","small",1,"save",3,"click"],["slot","icon-only","name","save"],[4,"ngIf"],[3,"color","icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent",4,"ngIf"],[3,"icon","icontext","isiconwithtext","actionEvent"],[3,"whatkey","imagetobeuploaded"],["yocameraelement",""]],template:function(t,e){1&t&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar",0),l.hc(2,"ion-buttons",1),l.cc(3,"ion-back-button"),l.gc(),l.hc(4,"ion-title"),l.Xc(5,"Events"),l.gc(),l.Vc(6,m,3,0,"ion-buttons",2),l.gc(),l.gc(),l.hc(7,"ion-content",3),l.Vc(8,E,39,20,"ion-card",4),l.uc(9,"async"),l.gc()),2&t&&(l.Ob(1),l.Cc("color","warning"),l.Ob(5),l.Cc("ngIf",e.ygen.canI("","event")),l.Ob(2),l.Cc("ngForOf",l.vc(9,3,e.events)))},directives:[a.y,a.fb,a.j,a.f,a.g,a.db,c.m,a.s,c.l,a.i,a.z,a.k,a.B,a.H,d.c,d.e,d.f,s.f,a.l,s.j,s.Z],pipes:[c.b,c.e,c.g,g.c],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),t})(),D=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,this.displayedColumns=["id","name","mobile"],console.log("data ==>",e),this.dataSource=e}onNoClick(){this.dialogRef.close()}gotoExternal(t){window.location.href=t}}return t.\u0275fac=function(e){return new(e||t)(l.bc(r.h),l.bc(r.a))},t.\u0275cmp=l.Vb({type:t,selectors:[["dialog-overview-example-dialog"]],decls:8,vars:0,consts:[["color","primary"],[1,"example-spacer"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",3,"click"]],template:function(t,e){1&t&&(l.hc(0,"mat-toolbar",0),l.hc(1,"mat-toolbar-row"),l.hc(2,"span"),l.Xc(3,"Registration"),l.gc(),l.cc(4,"span",1),l.hc(5,"button",2),l.pc("click",(function(){return e.onNoClick()})),l.hc(6,"mat-icon"),l.Xc(7,"close"),l.gc(),l.gc(),l.gc(),l.gc())},directives:[h.a,h.c,p.a,u.a],styles:["table[_ngcontent-%COMP%]{width:100%}.example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-dialog-container[_ngcontent-%COMP%]{padding:0}.dada[_ngcontent-%COMP%]{position:absolute;width:375px;height:594px;left:-161.02px;top:471.39px;background:#f41515;border-radius:56px;transform:rotate(-50.6deg)}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.item[_ngcontent-%COMP%]{flex-grow:1}.infocontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.atstart[_ngcontent-%COMP%]{align-self:flex-start}.atend[_ngcontent-%COMP%]{align-self:flex-end}mat-expansion-panel[_ngcontent-%COMP%]{background:#eff7f6}.imageshow[_ngcontent-%COMP%]{max-height:300px;max-width:500px;height:auto;width:auto;margin:auto;padding-bottom:10px}.addphotos[_ngcontent-%COMP%]{padding:0}#scrolly[_ngcontent-%COMP%]{width:100%;height:120px;overflow:auto;overflow-y:hidden;margin:0 auto;white-space:nowrap;display:inline-flex}.imgc[_ngcontent-%COMP%]{height:100px;width:100px;margin:2px 1px;display:inline;border:1px solid #ddd;border-radius:4px;padding:5px}.roll[_ngcontent-%COMP%]{background-color:#000;padding:5px}.imgds[_ngcontent-%COMP%]{height:100px;display:inline}.imagearea[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;display:-webkit-inline-box;border:#0f03f4;border-style:solid;border-width:2px}.delete[_ngcontent-%COMP%], .save[_ngcontent-%COMP%]{position:relative;top:-37px}.whatlable[_ngcontent-%COMP%]{font-size:12px;font-family:cursive}"]}),t})();const S=[{path:"",component:V}];let L=(()=>{class t{}return t.\u0275mod=l.Zb({type:t}),t.\u0275inj=l.Yb({factory:function(e){return new(e||t)},imports:[[c.c,n.i,a.gb,s.J,s.o,s.b,o.n.forChild(S)]]}),t})()}}]);