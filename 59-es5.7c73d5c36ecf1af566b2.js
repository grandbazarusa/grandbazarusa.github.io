function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{I6Kl:function(e,t,a){"use strict";a.r(t),a.d(t,"CategoryPageModule",(function(){return m}));var n=a("ofXK"),c=a("3Pt+"),i=a("tyNb"),r=a("TEn/"),o=a("pwB6"),s=a("fXoL"),d=a("Wp6s"),l=a("bTqV"),u=a("NFeN"),h=function(e){return{color:e}};function g(e,t){if(1&e){var a=s.ic();s.hc(0,"button",5),s.pc("click",(function(){return s.Nc(a),s.tc().changeReadOnly()})),s.hc(1,"mat-icon",6),s.Xc(2,"edit"),s.gc(),s.gc()}if(2&e){var n=s.tc();s.Ob(1),s.Cc("ngClass",s.Gc(1,h,n.isreadonly?"#D09B2C":"black"))}}function y(e,t){if(1&e){var a=s.ic();s.hc(0,"yogagainv2-dyanamic-page",7),s.pc("actionEvent",(function(e){return s.Nc(a),s.tc().send(e)}))("cancelEvent",(function(e){return s.Nc(a),s.tc().cancel(e)})),s.gc()}if(2&e){var n=s.tc();s.Cc("isreadonly",n.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",n.whatcontrolsmap)("whatformgroup",n.inwhatformgroup)("whichbuttons",n.mybuttons)}}var p,b,f=[{path:"",component:(p=function(){function e(t,a,n,c,i,r,o,s){_classCallCheck(this,e),this.centerdb=t,this.route=a,this.ysharedata=n,this.ydata=c,this.ygen=i,this.router=r,this.ydataservice=o,this.yobuilderservice=s,this.title="Add Notice",this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.isedit=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.centerdb.currenttenant.subscribe((function(t){console.log("dddd ");var a=e.route.snapshot.queryParams.key;e.whataction=e.route.snapshot.queryParams.action;var n=e.route.snapshot.queryParams.subcategoryid;a&&"addsubcategory"!==e.whataction?(e.isedit=!0,n?(e.crudlist=new o.p(o.R.getpath()+"/shop/categories"+a+"/subcategory",e.ydata.getDatabase(),!0,e.ygen.getUid()),e.cruddata=new o.p(o.R.getpath()+"/shop/categories/"+a+"/subcategory/"+n,e.ydata.getDatabase(),!1,e.ygen.getUid()),e.title="Edit Subcategory"):(e.crudlist=new o.p(o.R.getpath()+"/shop/categories",e.ydata.getDatabase(),!0,e.ygen.getUid()),e.cruddata=new o.p(o.R.getpath()+"/shop/categories/"+a,e.ydata.getDatabase(),!1,e.ygen.getUid()),e.title="Edit Category"),e.cruddata.getData().subscribe((function(t){e.currentEvent=t,Object.assign(e.currentEvent,{$key:a}),e.isreadonly=!0,e.startObject()}))):("addsubcategory"==e.whataction?(e.crudlist=new o.p(o.R.getpath()+"/shop/categories/"+a+"/subcategory",e.ydata.getDatabase(),!0,e.ygen.getUid()),e.title="Add SubCategory"):(e.crudlist=new o.p(o.R.getpath()+"/shop/categories",e.ydata.getDatabase(),!0,e.ygen.getUid()),e.title="Add Category"),e.startObject())}))}},{key:"getDomainObject",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[],n=0;return a[n]=new o.Y(n,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1589964651/default_qkhcdj.jpg",o.X.image),a[n].placeholder="Event Picture",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new o.Y(n,"imageuploaded",!1,o.X.slidetoggle),a[n].placeholder="imageuploaded",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new o.Y(n,"title","",o.X.text),a[n].placeholder="Category Name",a[n].required=!0,a[n].readonly=t,a[++n]=new o.Y(n,"description","",o.X.textarea),a[n].placeholder="Description of Category",a[n].required=!1,a[n].readonly=t,a[++n]=new o.Y(n,"createdBy","",o.X.text),a[n].placeholder="createdBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a[++n]=new o.Y(n,"updatedBy","",o.X.text),a[n].placeholder="updatedBy",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a[++n]=new o.Y(n,"active",!0,o.X.slidetoggle),a[n].placeholder="Active",a[n].required=!1,a[n].showme=!0,a[n].readonly=t,a[++n]=new o.Y(n,"$key","",o.X.text),a[n].placeholder="key",a[n].required=!1,a[n].showme=!1,a[n].readonly=t,a.forEach((function(a){a.readonly=t,t&&(a.required=!1),e.currentEvent&&(a.value="date"===a.whattype?new Date(e.currentEvent[a.name]):e.currentEvent[a.name])})),a}},{key:"startObject",value:function(){var e=this;this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;var t=new Map;this.getDomainObject(this.isreadonly).forEach((function(e){t.set(e.name,e)})),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var a=new o.A("Cancel","cancel","cancel_presentation","secondary",!1),n=new o.A("Save Data","categories","lock_open","primary",!1);this.mybuttons.set("Action2",n),this.mybuttons.set("Action1",a),setTimeout((function(){e.clear=!0}),50)}},{key:"cancel",value:function(e){console.log(e),this.ygen.goBack()}},{key:"changeReadOnly",value:function(){this.isreadonly=!this.isreadonly,this.startObject()}},{key:"send",value:function(e){this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(e.data.value):this.crudlist.addtolist(e.data.value),this.ygen.goBack()}}]),e}(),p.\u0275fac=function(e){return new(e||p)(s.bc(o.R),s.bc(i.a),s.bc(o.T),s.bc(o.S),s.bc(o.V),s.bc(i.j),s.bc(o.T),s.bc(o.U))},p.\u0275cmp=s.Vb({type:p,selectors:[["app-category"]],decls:14,vars:3,consts:[["slot","start"],[1,"ion-padding"],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(e,t){1&e&&(s.hc(0,"ion-header"),s.hc(1,"ion-toolbar"),s.hc(2,"ion-buttons",0),s.cc(3,"ion-back-button"),s.gc(),s.hc(4,"ion-title"),s.Xc(5),s.gc(),s.gc(),s.gc(),s.hc(6,"ion-content",1),s.hc(7,"ion-grid"),s.hc(8,"ion-row"),s.hc(9,"ion-col"),s.Vc(10,g,3,3,"button",2),s.hc(11,"mat-card"),s.hc(12,"mat-card-content",3),s.Vc(13,y,1,6,"yogagainv2-dyanamic-page",4),s.gc(),s.gc(),s.gc(),s.gc(),s.gc(),s.gc()),2&e&&(s.Ob(5),s.Yc(t.title),s.Ob(5),s.Cc("ngIf",t.isedit),s.Ob(3),s.Cc("ngIf",t.clear))},directives:[r.y,r.fb,r.j,r.f,r.g,r.db,r.s,r.x,r.P,r.r,n.m,d.a,d.d,l.a,u.a,n.k,o.q],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}"]}),p)}],m=((b=function e(){_classCallCheck(this,e)}).\u0275mod=s.Zb({type:b}),b.\u0275inj=s.Yb({factory:function(e){return new(e||b)},imports:[[n.c,c.i,r.gb,o.J,o.o,o.b,i.n.forChild(f)]]}),b)}}]);