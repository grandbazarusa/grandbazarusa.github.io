function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"+ltH":function(t,n,e){"use strict";e.r(n),e.d(n,"ProductsPageModule",(function(){return C}));var o=e("ofXK"),c=e("3Pt+"),i=e("tyNb"),a=e("TEn/"),r=e("pwB6"),s=e("q3Kh"),d=e("fXoL"),p=e("0IaG"),u=e("1jcm"),l=e("sYmb"),g=["yocameraelement"];function h(t,n){if(1&t){var e=d.ic();d.hc(0,"ion-button",4),d.pc("click",(function(){return d.Nc(e),d.tc().navigate("product",{previousUrl:"products"})})),d.cc(1,"ion-icon",8),d.gc()}}function b(t,n){if(1&t){var e=d.ic();d.hc(0,"ion-item"),d.hc(1,"div",9),d.hc(2,"app-appicon",10),d.pc("actionEvent",(function(t){return d.Nc(e),d.tc().downloadProducts(t)})),d.gc(),d.hc(3,"div"),d.hc(4,"mat-slide-toggle",11),d.pc("ngModelChange",(function(t){return d.Nc(e),d.tc().uploaded=t})),d.Xc(5),d.uc(6,"translate"),d.gc(),d.gc(),d.hc(7,"app-appicon",10),d.pc("actionEvent",(function(t){return d.Nc(e),d.tc().deleteproducts(t)})),d.gc(),d.gc(),d.gc()}if(2&t){var o=d.tc();d.Ob(2),d.Cc("icon","cloud_download")("askquestion",!1)("icontext","Download Products")("isiconwithtext",!0),d.Ob(2),d.Cc("ngModel",o.uploaded),d.Ob(1),d.Zc("",d.vc(6,10,"Uploaded Flag")," "),d.Ob(2),d.Cc("icon","delete")("askquestion",!0)("icontext","Delete All Products")("isiconwithtext",!0)}}function f(t,n){if(1&t){var e=d.ic();d.hc(0,"ion-item"),d.hc(1,"div",9),d.hc(2,"app-appicon",10),d.pc("actionEvent",(function(){return d.Nc(e),d.tc().ygen.routeto("uploadcatalog",{})})),d.gc(),d.gc(),d.gc()}2&t&&(d.Ob(2),d.Cc("icon","cloud_upload")("askquestion",!1)("icontext","Upload Products")("isiconwithtext",!0))}function y(t,n){if(1&t&&d.cc(0,"app-productcard",12),2&t){var e=n.$implicit,o=d.tc();d.Cc("product",e)("productlist",o.crudList)("onpage","products")}}var m,v,x=[{path:"",component:(m=function(){function t(n,e,o,c,i,a,s,d,p,u,l,g,h){var b=this;_classCallCheck(this,t),this.ycat=n,this.ycamera=e,this.ygen=o,this.alertme=c,this.route=i,this.router=a,this.boardService=s,this.ysharedata=d,this.ydata=p,this.dialog=u,this.excelservice=l,this.yalert=g,this.centerdb=h,this.imagescapturedComp=new Map,this.screenrefresh=!0,this.uploaded=!0,this.mystrip=[],this.showre=!1,this.sourcere="",this.refreshme=!1,this.centerdb.currenttenant.subscribe((function(t){b.crudList=new r.p(r.R.getpath()+"/shop/products",p.getDatabase(),!0,b.ygen.getUid()),b.events=b.crudList.getList()}))}return _createClass(t,[{key:"deleteproduct",value:function(t){this.crudList.removefromList(t)}},{key:"deleteproducts",value:function(t){this.ydata.getDatabase().list("/shop/products").remove()}},{key:"copyProduct",value:function(t){var n=Object.assign({},t);delete n.$key,this.crudList.addtolist(n)}},{key:"deletesubcategory",value:function(t,n){this.ydata.getDatabase().list(r.R.getpath()+"/shop/products/"+n+"/subcategory/"+t).remove()}},{key:"navigate",value:function(t,n){this.ysharedata.setData("currentevent",n),this.router.navigate([t],{queryParams:n})}},{key:"ngOnInit",value:function(){}},{key:"addtocart",value:function(t,n,e){e&&(n.orderqty=0);var o=n.orderqty?n.orderqty+t:1;o>n.maxqty?this.alertme.openSnackBar("Maximum quantiy you can order is ".concat(n.maxqty),"Ok"):(Object.assign(n,{orderqty:o}),this.ycat.iscartItem(n)?this.ycat.updatequantity(n):1==o&&(this.alertme.openSnackBar("Your shopping cart updated with ".concat(n.orderqty," quantity"),"Ok"),this.ycat.addtocart(n))),0==n.orderqty&&this.ycat.delete(n)}},{key:"downloadProducts",value:function(t){var n=this,e=this.crudList.getListRefer().snapshotChanges().pipe(Object(s.map)((function(t){return t.map((function(t){return Object.assign({$key:t.payload.key},t.payload.val())}))}))).subscribe((function(t){e.unsubscribe();var o=[];t.forEach((function(t){var e={$key:JSON.stringify(t.$key),category:t.category,subcategory:t.subcategory,brand:t.brand,title:t.title,description:t.description,image:t.image,imageuploaded:t.imageuploaded,isorganic:t.isorganic,istopsaver:t.istopsaver,isveg:t.isveg,maxqty:t.maxqty,mrp:t.mrp,price:t.price,outofstock:t.outofstock,uploaded:n.uploaded,heavydiscount:t.heavydiscount,newarrival:t.heavydiscount};if(t.variations){var c=[];Object.values(t.variations).forEach((function(t){c.push({description:t.description,mrp:t.mrp,price:t.price,maxqty:t.maxqty})})),c.length>0&&(e.variations=JSON.stringify(Object.values(c)).replace(/,/g,"|"))}else e.variations="";o.push(e)})),0==o.length?n.yalert.openSnackBar("No products for downlowd","Ok"):(n.excelservice.exportAsExcelFile(o,"products"),n.yalert.openSnackBar("All Products will be downloaded...","Ok"))}))}}]),t}(),m.\u0275fac=function(t){return new(t||m)(d.bc(r.Q),d.bc(r.P),d.bc(r.V),d.bc(r.a),d.bc(i.a),d.bc(i.j),d.bc(r.i),d.bc(r.T),d.bc(r.S),d.bc(p.b),d.bc(r.r),d.bc(r.a),d.bc(r.R))},m.\u0275cmp=d.Vb({type:m,selectors:[["app-products"]],viewQuery:function(t,n){var e;1&t&&(d.ed(g,!0),d.ed(g,!0)),2&t&&(d.Jc(e=d.qc())&&(n.yocam=e.first),d.Jc(e=d.qc())&&(n.yocamViewChildren=e))},decls:17,vars:10,consts:[[3,"color"],["slot","start"],["slot","end","color","secondary"],[3,"click",4,"ngIf"],[3,"click"],[4,"ngIf"],[1,"productlist"],[3,"product","productlist","onpage",4,"ngFor","ngForOf"],["slot","icon-only","name","add"],[1,"bbcontainer"],[3,"icon","askquestion","icontext","isiconwithtext","actionEvent"],[3,"ngModel","ngModelChange"],[3,"product","productlist","onpage"]],template:function(t,n){1&t&&(d.hc(0,"ion-header"),d.hc(1,"ion-toolbar",0),d.hc(2,"ion-buttons",1),d.cc(3,"ion-menu-button"),d.gc(),d.hc(4,"ion-title"),d.Xc(5),d.uc(6,"translate"),d.gc(),d.hc(7,"ion-buttons",2),d.Vc(8,h,2,0,"ion-button",3),d.hc(9,"ion-button",4),d.pc("click",(function(){return n.navigate("checkout",{})})),d.cc(10,"app-appcart"),d.gc(),d.gc(),d.gc(),d.gc(),d.hc(11,"ion-content"),d.Vc(12,b,8,12,"ion-item",5),d.Vc(13,f,3,4,"ion-item",5),d.hc(14,"div",6),d.Vc(15,y,1,3,"app-productcard",7),d.uc(16,"async"),d.gc(),d.gc()),2&t&&(d.Ob(1),d.Cc("color","warning"),d.Ob(4),d.Yc(d.vc(6,6,"Products")),d.Ob(3),d.Cc("ngIf",n.ygen.isAdmin()&&n.ygen.canAddProducts()),d.Ob(4),d.Cc("ngIf",n.ygen.isAdmin()),d.Ob(1),d.Cc("ngIf",n.ygen.isAdmin()),d.Ob(2),d.Cc("ngForOf",d.vc(16,8,n.events)))},directives:[a.y,a.fb,a.j,a.L,a.db,o.m,a.i,r.d,a.s,o.l,a.z,a.B,r.f,u.a,c.o,c.r,r.D],pipes:[l.c,o.b],styles:[".bbcontainer[_ngcontent-%COMP%]{justify-content:space-around;width:100%}.bbcontainer[_ngcontent-%COMP%], .bcontainer[_ngcontent-%COMP%]{display:flex;flex-direction:row}.bcontainer[_ngcontent-%COMP%]{justify-content:space-between}.subcataction[_ngcontent-%COMP%]{display:flex}app-appicon[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%], app-appicon[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:36px}.productCard[_ngcontent-%COMP%]{display:inline-block;white-space:pre-line;padding:2px auto;width:calc(70% - 20px);height:auto;box-shadow:0 4px 16px rgba(156,153,153,.97);--box-shadow:0 4px 16px rgba(156,153,153,0.97)}.cardBorderRadius[_ngcontent-%COMP%]{--border-radius:8px;border-radius:8px;width:100%;height:100%;min-width:200px}.productImage[_ngcontent-%COMP%]{padding:0 40px;position:relative;margin-top:10px}.discountSection[_ngcontent-%COMP%]{background:#15bf15;color:#fff;position:absolute;padding:6px 16px;border-radius:5px;font-weight:700;margin-top:13px;left:10px}.soldoutSection[_ngcontent-%COMP%]{background:var(--ion-color-design);color:#db4ba4;margin-top:-16px}.outofstockSection[_ngcontent-%COMP%], .soldoutSection[_ngcontent-%COMP%]{position:absolute;padding:6px 16px;border-radius:5px;font-weight:700;right:10px}.outofstockSection[_ngcontent-%COMP%]{background:#b4b108;color:#fff;margin-top:-24%}.dFlexAlignItemCenter[_ngcontent-%COMP%]{display:flex;align-items:center}.subTitle[_ngcontent-%COMP%]{font-size:16px;text-decoration:line-through;padding-left:16px;color:#000}.productDesc[_ngcontent-%COMP%]{color:var(--ion-color-dark);padding-bottom:16px}.productQty[_ngcontent-%COMP%]{color:#000;font-weight:700}.inner-scroll[_ngcontent-%COMP%]   .scroll-y[_ngcontent-%COMP%]   .overscroll[_ngcontent-%COMP%]{padding:0}ion-card[_ngcontent-%COMP%]{width:100%;height:100%;margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-bottom:0}img[_ngcontent-%COMP%]{height:180px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;margin:auto}.button-inner[_ngcontent-%COMP%]{justify-content:space-between}ion-button[_ngcontent-%COMP%]{height:auto;color:#8b0000}.productlist[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:stretch}"]}),m)}],C=((v=function t(){_classCallCheck(this,t)}).\u0275mod=d.Zb({type:v}),v.\u0275inj=d.Yb({factory:function(t){return new(t||v)},imports:[[o.c,c.i,a.gb,r.J,r.o,r.b,i.n.forChild(x)]]}),v)}}]);