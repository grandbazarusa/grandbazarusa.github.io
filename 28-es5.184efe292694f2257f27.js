function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{BmJS:function(e,t,a){"use strict";a.r(t),a.d(t,"AddeventPageModule",(function(){return b}));var n=a("ofXK"),c=a("3Pt+"),o=a("tyNb"),r=a("TEn/"),i=a("pwB6"),s=a("wd/R"),l=a("fXoL"),d=a("Wp6s"),u=a("bTqV"),h=a("NFeN"),m=function(e){return{color:e}};function p(e,t){if(1&e){var a=l.ic();l.hc(0,"button",5),l.pc("click",(function(){return l.Nc(a),l.tc().changeReadOnly()})),l.hc(1,"mat-icon",6),l.Xc(2,"edit"),l.gc(),l.gc()}if(2&e){var n=l.tc();l.Ob(1),l.Cc("ngClass",l.Gc(1,m,n.isreadonly?"#D09B2C":"black"))}}function g(e,t){if(1&e){var a=l.ic();l.hc(0,"yogagainv2-dyanamic-page",7),l.pc("actionEvent",(function(e){return l.Nc(a),l.tc().send(e)}))("cancelEvent",(function(e){return l.Nc(a),l.tc().cancel(e)})),l.gc()}if(2&e){var n=l.tc();l.Cc("isreadonly",n.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",n.whatcontrolsmap)("whatformgroup",n.inwhatformgroup)("whichbuttons",n.mybuttons)}}var y,v,f=[{path:"",component:(y=function(){function e(t,a,n,c,o,r,s){_classCallCheck(this,e),this.route=t,this.ysharedata=a,this.ydata=n,this.ygen=c,this.router=o,this.ydataservice=r,this.yobuilderservice=s,this.title="Add Event",this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.crudlist=new i.p("/board/events/",n.getDatabase(),!0,this.ygen.getUid())}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;console.log("dddd ");var t=this.route.snapshot.queryParams.key;t?(this.cruddata=new i.p("/board/events/"+t,this.ydata.getDatabase(),!1,this.ygen.getUid()),this.cruddata.getData().subscribe((function(a){e.currentEvent=a,Object.assign(e.currentEvent,{$key:t}),e.isreadonly=!0,e.title="Edit Event",e.startObject()}))):(this.title="Add Event",this.startObject())}},{key:"getDomainObject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[],n=0;return s(new Date).format("YYYY-MM-DD"),a[n]=new i.Y(n,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1589964651/default_qkhcdj.jpg",i.X.image),a[n].placeholder="Event Picture",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new i.Y(n,"imageuploaded",!1,i.X.slidetoggle),a[n].placeholder="imageuploaded",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new i.Y(n,"title","",i.X.text),a[n].placeholder="Event Title",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"description","",i.X.textarea),a[n].placeholder="Description of Event",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"startdate",!1,i.X.date),a[n].placeholder="Date of Event",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"startdatetime",!1,i.X.time),a[n].placeholder="Time of Event",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"contactname","",i.X.text),a[n].placeholder="Organizer name",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"contactnumber","",i.X.phone),a[n].placeholder="Organizer mobile",a[n].required=!0,a[n].readonly=t,a[++n]=new i.Y(n,"createdBy","",i.X.text),a[n].placeholder="createdBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a[++n]=new i.Y(n,"updatedBy","",i.X.text),a[n].placeholder="updatedBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a[++n]=new i.Y(n,"active",!1,i.X.slidetoggle),a[n].placeholder="Active",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new i.Y(n,"$key","",i.X.text),a[n].placeholder="key",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a.forEach((function(a){a.readonly=t,t&&(a.required=!1),e.currentEvent&&(a.value="date"===a.whattype?new Date(e.currentEvent[a.name]):e.currentEvent[a.name])})),a}},{key:"startObject",value:function(){var e=this;this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;var t=new Map;this.getDomainObject(this.isreadonly).forEach((function(e){t.set(e.name,e)})),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var a=new i.A("Cancel","cancel","cancel_presentation","secondary",!1),n=new i.A("Save Data","events","lock_open","primary",!1);this.mybuttons.set("Action2",n),this.mybuttons.set("Action1",a),setTimeout((function(){e.clear=!0}),50)}},{key:"cancel",value:function(e){console.log(e),this.ygen.goBack()}},{key:"changeReadOnly",value:function(){this.isreadonly=!this.isreadonly,this.startObject()}},{key:"send",value:function(e){var t=+e.data.value.startdate;console.log("timestamp",s(t).format("dddd, MMMM Do YYYY, h:mm:ss a"));var a=+e.data.value.startdatetime.split(":")[0],n=+e.data.value.startdatetime.split(":")[1],c=new Date(t);console.log("moment datewitouttime",c),c.setHours(a),c.setMinutes(n);var o=new Date(+c);console.log("moment data",o),console.log("event",e),Object.assign(e.data.value,{startdate:+o}),console.log("event",e),console.log("eventx",o),console.log(" m timestamp",s(o).format("dddd, MMMM Do YYYY, h:mm:ss a")),this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(e.data.value):this.crudlist.addtolist(e.data.value),this.router.navigate([e.whatnext])}}]),e}(),y.\u0275fac=function(e){return new(e||y)(l.bc(o.a),l.bc(i.T),l.bc(i.S),l.bc(i.V),l.bc(o.j),l.bc(i.T),l.bc(i.U))},y.\u0275cmp=l.Vb({type:y,selectors:[["app-addevent"]],decls:14,vars:3,consts:[["slot","start"],["padding",""],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(e,t){1&e&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar"),l.hc(2,"ion-buttons",0),l.cc(3,"ion-back-button"),l.gc(),l.hc(4,"ion-title"),l.Xc(5),l.gc(),l.gc(),l.gc(),l.hc(6,"ion-content",1),l.hc(7,"ion-grid"),l.hc(8,"ion-row"),l.hc(9,"ion-col"),l.Vc(10,p,3,3,"button",2),l.hc(11,"mat-card"),l.hc(12,"mat-card-content",3),l.Vc(13,g,1,6,"yogagainv2-dyanamic-page",4),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc()),2&e&&(l.Ob(5),l.Yc(t.title),l.Ob(5),l.Cc("ngIf","Edit Event"==t.title),l.Ob(3),l.Cc("ngIf",t.clear))},directives:[r.y,r.fb,r.j,r.f,r.g,r.db,r.s,r.x,r.P,r.r,n.m,d.a,d.d,u.a,h.a,n.k,i.q],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}primary[_ngcontent-%COMP%]{color:red}accent[_ngcontent-%COMP%]{color:#000}"]}),y)}],b=((v=function e(){_classCallCheck(this,e)}).\u0275mod=l.Zb({type:v}),v.\u0275inj=l.Yb({factory:function(e){return new(e||v)},imports:[[n.c,c.i,r.gb,i.J,i.o,i.b,o.n.forChild(f)]]}),v)}}]);