function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{oRaJ:function(t,e,c){"use strict";c.r(e),c.d(e,"UploadbrandsPageModule",(function(){return O}));var n=c("ofXK"),i=c("3Pt+"),a=c("TEn/"),o=c("tyNb"),r=c("pwB6"),s=c("DVUX"),l=c("fXoL"),d=c("P6Fj"),u=c("7pIB"),p=c("NFeN");function h(t,e){if(1&t){var c=l.ic();l.hc(0,"div"),l.hc(1,"input",7,8),l.pc("change",(function(t){return l.Nc(c),l.tc().previewFile(t)})),l.gc(),l.hc(3,"button",9),l.pc("click",(function(){return l.Nc(c),l.Kc(2).click()})),l.hc(4,"mat-icon",10),l.Xc(5,"extension"),l.gc(),l.Xc(6," Add Products Brands "),l.gc(),l.gc()}if(2&t){var n=l.tc();l.Ob(1),l.Cc("uploader",n.uploader)}}function f(t,e){if(1&t){var c=l.ic();l.hc(0,"div",11),l.hc(1,"button",12),l.pc("click",(function(){return l.Nc(c),l.tc().clearAllItems()})),l.hc(2,"mat-icon",10),l.Xc(3,"delete"),l.gc(),l.Xc(4," Clear All Brands "),l.gc(),l.hc(5,"button",9),l.pc("click",(function(){return l.Nc(c),l.tc().saveAllItems()})),l.hc(6,"mat-icon",10),l.Xc(7,"save"),l.gc(),l.Xc(8," Save All Brands "),l.gc(),l.gc()}}function g(t,e){if(1&t&&l.cc(0,"img",18),2&t){var c=l.tc().$implicit;l.Cc("src",c.image,l.Pc)}}function b(t,e){if(1&t){var c=l.ic();l.hc(0,"div",19),l.hc(1,"div",20),l.hc(2,"app-appicon",21),l.pc("actionEvent",(function(t){return l.Nc(c),l.tc(2).delete(t)})),l.gc(),l.gc(),l.hc(3,"div",20),l.hc(4,"app-appicon",22),l.pc("actionEvent",(function(){l.Nc(c);var t=l.tc().$implicit;return l.tc().save(t)})),l.gc(),l.gc(),l.gc()}2&t&&(l.Ob(2),l.Cc("color","accent")("icon","delete")("askquestion",!0)("icontext","Delete Brand")("isiconwithtext",!0),l.Ob(2),l.Cc("color","accent")("icon","save")("icontext","Save Brand")("isiconwithtext",!0))}function v(t,e){if(1&t&&(l.hc(0,"ion-col",13),l.hc(1,"ion-card"),l.Vc(2,g,1,1,"img",14),l.hc(3,"ion-item",15),l.hc(4,"ion-label",16),l.Xc(5),l.gc(),l.gc(),l.hc(6,"ion-card-content"),l.Xc(7),l.gc(),l.Vc(8,b,5,9,"div",17),l.gc(),l.gc()),2&t){var c=e.$implicit,n=l.tc();l.Ob(2),l.Cc("ngIf",c.imageuploaded),l.Ob(3),l.Zc(" ",c.title," "),l.Ob(2),l.Zc(" ",c.description," "),l.Ob(1),l.Cc("ngIf",n.ygen.isAdmin())}}var m,y,k,w=[{path:"",component:(m=function(){function t(e,c,n,i,a,o,r,s){_classCallCheck(this,t),this.centerdb=e,this.ycat=c,this.toast=n,this.ydata=i,this.ygen=a,this.papa=o,this.yalert=r,this.photoUploadService=s,this.clearme=!0,this.productlimit=50,this.products=[],this.uploader=s.getUploader(),s.getUploader().clearQueue(),s.getUploader().cancelAll()}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.centerdb.currenttenant.subscribe((function(e){t.crudList=new r.p(r.R.getpath()+"/shop/brands",t.ydata.getDatabase(),!0,t.ygen.getUid()),t.crudList.getList().subscribe((function(e){t.productlimit=e.length}))}))}},{key:"previewFile",value:function(t){var e=this;t.srcElement&&t.srcElement.files&&t.srcElement.files[0]&&(t.srcElement.files[0].name.includes(".csv")?(this.toast.pop("success","Got the event & processing "+t.target.files.length+" file","Ok"),this.toast.pop("warn","Reading files","Processing"),this.papa.parse(t.srcElement.files[0],{complete:function(t,c){t.errors.forEach((function(e){return t.data.splice(e.row,1)})),t.data.forEach((function(t){t.uploaded=e.giveflag(t.uploaded),t.active=e.giveflag(t.active),t.imageuploaded=e.giveflag(t.imageuploaded);try{t.$key=JSON.parse(t.$key)}catch(c){console.error(t.$key,c)}})),e.products=t.data.filter((function(t){return!t.uploaded}))},delimiter:",",header:!0})):this.yalert.errordata("Only CSV files are allowed"))}},{key:"giveflag",value:function(t){return!!t&&"true"==t.toLowerCase()}},{key:"saveAllItems",value:function(){var t=this;this.yalert.openSnackBar("Saving All Brands at once","Ok"),this.products.forEach((function(e){var c=e.$key;t.ygen.canAddProducts()?t.saveupdate(e,c):console.log("Products will not be added")})),this.clearAllItems()}},{key:"saveItem",value:function(t){this.saveupdate(t,t.$key)}},{key:"saveupdate",value:function(t,e){this.ycat.recievedBrandListKeyVal[e]?this.crudList.updateList(t):this.crudList.addtolist(t)}},{key:"delete",value:function(t){this.products=this.products.filter((function(e){return e.$key!=t.$key})),this.yalert.openSnackBar("Product deleted","Ok")}},{key:"save",value:function(t){this.saveItem(t),this.products=this.products.filter((function(e){return e.$key!=t.$key})),this.yalert.openSnackBar("Product saved","Ok")}},{key:"clearAllItems",value:function(){var t=this;this.products.length=0,this.clearme=!1,setTimeout((function(){t.clearme=!0}),500)}}]),t}(),m.\u0275fac=function(t){return new(t||m)(l.bc(r.R),l.bc(r.Q),l.bc(s.d),l.bc(r.S),l.bc(r.V),l.bc(d.a),l.bc(r.a),l.bc(r.db))},m.\u0275cmp=l.Vb({type:m,selectors:[["app-uploadbrands"]],decls:15,vars:6,consts:[[3,"color"],["slot","start"],["padding",""],[4,"ngIf"],["style","padding:5px",4,"ngIf"],[1,"productlist"],["class","dada",4,"ngFor","ngForOf"],["hidden","","type","file","ng2FileSelect","",3,"uploader","change"],["productsFileInput",""],[1,"mat-raised-button","mat-primary",3,"click"],["color","warm",1,"pointer"],[2,"padding","5px"],[1,"mat-raised-button","mat-secondary",3,"click"],[1,"dada"],["class","imageshow",3,"src",4,"ngIf"],["button",""],[1,"ion-text-wrap"],["class","bcontainer",4,"ngIf"],[1,"imageshow",3,"src"],[1,"bcontainer"],[1,"bitems"],[3,"color","icon","askquestion","icontext","isiconwithtext","actionEvent"],[3,"color","icon","icontext","isiconwithtext","actionEvent"]],template:function(t,e){1&t&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar",0),l.hc(2,"ion-buttons",1),l.cc(3,"ion-back-button"),l.gc(),l.hc(4,"ion-title"),l.Xc(5,"Upload Product Brands"),l.gc(),l.gc(),l.gc(),l.hc(6,"ion-content",2),l.Vc(7,h,7,1,"div",3),l.Vc(8,f,9,0,"div",4),l.hc(9,"ion-item"),l.Xc(10),l.gc(),l.cc(11,"div",5),l.hc(12,"ion-grid"),l.hc(13,"ion-row"),l.Vc(14,v,9,4,"ion-col",6),l.gc(),l.gc(),l.gc()),2&t&&(l.Ob(1),l.Cc("color","warning"),l.Ob(6),l.Cc("ngIf",e.clearme),l.Ob(1),l.Cc("ngIf",e.products.length>0),l.Ob(2),l.ad(' You are using "',e.ygen.getSubscriptionType(),'" subscription; You can add max ',e.ygen.maxproductsCanAdded()," Brands; "),l.Ob(4),l.Cc("ngForOf",e.products))},directives:[a.y,a.fb,a.j,a.f,a.g,a.db,a.s,n.m,a.B,a.x,a.P,n.l,u.a,p.a,a.r,a.k,a.H,a.l,r.f],styles:[".bbcontainer[_ngcontent-%COMP%]{width:100%}.bbcontainer[_ngcontent-%COMP%], .bcontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}"]}),m)}],C=((k=function t(){_classCallCheck(this,t)}).\u0275mod=l.Zb({type:k}),k.\u0275inj=l.Yb({factory:function(t){return new(t||k)},imports:[[o.n.forChild(w)],o.n]}),k),O=((y=function t(){_classCallCheck(this,t)}).\u0275mod=l.Zb({type:y}),y.\u0275inj=l.Yb({factory:function(t){return new(t||y)},imports:[[n.c,i.i,a.gb,r.J,r.o,r.b,u.b,C]]}),y)}}]);