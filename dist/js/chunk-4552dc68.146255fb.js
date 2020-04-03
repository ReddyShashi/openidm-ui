/*!
 * Copyright 2019 ForgeRock AS. All Rights Reserved 
 *  Use of this code requires a commercial software license with ForgeRock AS. or with one of its affiliates. All use shall be exclusively subject to such license between the licensee and ForgeRock AS.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4552dc68"],{"1f49":function(t,e,a){},"3a90":function(t,e,a){},5231:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[t._t("list-group-header",[a("b-card-body",{staticClass:"py-4"},[a("h5",{class:[{"mb-4":t.subtitle,"mb-0":!t.subtitle},"card-title"]},[t._v(t._s(t.title))]),t.subtitle?a("h6",{staticClass:"card-subtitle mb-0 text-muted"},[t._v(t._s(t.subtitle))]):t._e()])]),a("b-list-group",{attrs:{flush:""}},[t._t("default")],2)],2)},l=[],s={name:"List-Group",props:{title:{type:String},subtitle:{type:String}},data:function(){return{}}},n=s,i=(a("8fef"),a("2877")),c=Object(i["a"])(n,o,l,!1,null,"1e1858be",null);e["a"]=c.exports},"8fef":function(t,e,a){"use strict";var o=a("3a90"),l=a.n(o);l.a},9830:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.collapsible?a("div",{staticClass:"collapsible"},[a("b-list-group-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.toggleId,expression:"toggleId"}],class:[{"list-item-cursor":!1===t.collapsible}],attrs:{href:"#"}},[a("div",{staticClass:"media"},[t._t("list-item-header")],2)]),a("b-collapse",{attrs:{id:t.id,visible:t.panelShown},on:{hide:function(e){return t.$emit("hide")},show:function(e){return t.$emit("show")},hidden:function(e){return t.$emit("hidden")},shown:function(e){return t.$emit("shown")}}},[a("b-card-body",{staticClass:"pt-3"},[t._t("list-item-collapse-body")],2)],1)],1):a("div",{class:[{"fr-hover-item":t.hoverItem}],on:{click:function(e){return t.$emit("row-click")}}},[a("b-list-group-item",{staticClass:"noncollapse"},[a("div",{staticClass:"media"},[t._t("list-item-header")],2)]),t.panelShown?a("b-card-body",{staticClass:"pt-3"},[t._t("list-item-collapse-body")],2):t._e()],1)},l=[],s={name:"List-Item",props:{collapsible:{type:Boolean,default:!1},panelShown:{type:Boolean,default:!1},hoverItem:{type:Boolean,default:!1}},data:function(){return{id:null}},beforeMount:function(){this.id="listItem"+this._uid},computed:{toggleId:function(){return this.collapsible?this.id:null}}},n=s,i=(a("a617"),a("2877")),c=Object(i["a"])(n,o,l,!1,null,"cc9f6ae4",null);e["a"]=c.exports},a103:function(t,e,a){},a617:function(t,e,a){"use strict";var o=a("1f49"),l=a.n(o);l.a},fbaf:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("fr-list-group",{attrs:{title:t.$t("pages.profile.accountControls.title"),subtitle:t.$t("pages.profile.accountControls.subtitle")}},[a("fr-list-item",{attrs:{collapsible:!1,panelShown:!1,hoverItem:!0},on:{"row-click":t.downloadAccount}},[a("div",{staticClass:"d-inline-flex w-100",attrs:{slot:"list-item-header"},slot:"list-item-header"},[a("div",{staticClass:"flex-grow-1"},[a("div",[t._v("\n                        "+t._s(t.$t("pages.profile.accountControls.downloadTitle"))+"\n                    ")]),a("small",{staticClass:"text-muted subtext"},[t._v(t._s(t.$t("pages.profile.accountControls.downloadSubtitle")))])]),a("a",{staticClass:"align-self-center flex-grow-2 text-right",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.$t("pages.profile.accountControls.downloadLink")))])])]),a("fr-list-item",{directives:[{name:"b-modal",rawName:"v-b-modal.deleteAccountModal",modifiers:{deleteAccountModal:!0}}],attrs:{collapsible:!1,panelShown:!1,hoverItem:!0}},[a("div",{staticClass:"d-inline-flex w-100",attrs:{slot:"list-item-header"},slot:"list-item-header"},[a("div",{staticClass:"flex-grow-1"},[a("div",[t._v("\n                        "+t._s(t.$t("pages.profile.accountControls.deleteTitle"))+"\n                    ")]),a("small",{staticClass:"text-muted subtext"},[t._v(t._s(t.$t("pages.profile.accountControls.deleteSubtitle")))])]),a("a",{staticClass:"align-self-center flex-grow-2 text-right",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.$t("pages.profile.accountControls.deleteAccount")))])])])],1),a("b-modal",{ref:"deleteModal",attrs:{id:"deleteAccountModal","modal-class":"fr-full-screen","cancel-variant":"outline-secondary"}},[a("div",{staticClass:"d-flex w-100 h-100",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title align-self-center text-center"},[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalTitle")))]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.hideModal}},[a("i",{staticClass:"fa fa-times"})])]),a("b-container",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalHeader")))]),a("p",[t._v("\n                "+t._s(t.$t("pages.profile.accountControls.deleteModalDetails"))+"\n            ")]),a("hr"),a("p",[t._v("\n                "+t._s(t.$t("pages.profile.accountControls.deleteModalDownload1"))+" "),a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.downloadAccount(e)}}},[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalDownload2")))]),t._v(" "+t._s(t.$t("pages.profile.accountControls.deleteModalDownload3"))+"\n            ")]),a("hr"),a("h5",[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalContentList")))]),a("ul",[a("li",[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalContentListItem")))])]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmDelete,expression:"confirmDelete"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"confirmDeleteCheck"},domProps:{checked:Array.isArray(t.confirmDelete)?t._i(t.confirmDelete,null)>-1:t.confirmDelete},on:{change:function(e){var a=t.confirmDelete,o=e.target,l=!!o.checked;if(Array.isArray(a)){var s=null,n=t._i(a,s);o.checked?n<0&&(t.confirmDelete=a.concat([s])):n>-1&&(t.confirmDelete=a.slice(0,n).concat(a.slice(n+1)))}else t.confirmDelete=l}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"confirmDeleteCheck"}},[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalAcceptMessage")))])])]),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("div",{staticClass:"float-right"},[a("b-btn",{attrs:{variant:"outline-secondary mr-2"},on:{click:t.hideModal}},[t._v(t._s(t.$t("common.form.cancel")))]),a("b-btn",{attrs:{disabled:!t.confirmDelete,type:"button",variant:"danger"},on:{click:t.deleteAccount}},[t._v(t._s(t.$t("pages.profile.accountControls.deleteModalButton")))])],1)])],1)],1)},l=[],s=a("2ef0"),n=a.n(s),i=a("5231"),c=a("9830"),r={name:"Account-Controls",components:{"fr-list-group":i["a"],"fr-list-item":c["a"]},data:function(){return{confirmDelete:!1}},mounted:function(){},methods:{deleteAccount:function(){var t=this,e=this.getRequestService();e.delete("/".concat(this.$root.userStore.state.managedResource,"/").concat(this.$root.userStore.state.userId)).then((function(){t.$refs.deleteModal.hide(),t.displayNotification("success",t.$t("pages.profile.accountControls.deleteAccountSuccessful")),t.logoutUser()}))},downloadAccount:function(){var t=this.getRequestService();t.get("/".concat(this.$root.userStore.state.managedResource,"/").concat(this.$root.userStore.state.userId,"?_fields=*,idps/*,_meta/createDate,_meta/lastChanged,_meta/termsAccepted,_meta/loginCount"),[]).then((function(t){var e,a="";if(t.data._meta&&n.a.each(t._meta,(function(e,a){a.match("_")&&delete t._meta[a]})),t.data.idps&&n.a.each(t.idps,(function(t){n.a.each(t,(function(e,a){a.match("_")&&n.a.isNull(a.match("_meta"))&&delete t[a]}))})),delete t.data._rev,delete t.data.kbaInfo,e=JSON.stringify(t.data,null,4),navigator.msSaveBlob)return navigator.msSaveBlob(new Blob([e],{type:"data:application/json"}),a);var o=new Blob([e],{type:"data:application/json"}),l=document.createEvent("MouseEvents"),s=document.createElement("a");s.download="userProfile.json",s.href=window.URL.createObjectURL(o),s.dataset.downloadurl=["data:application/json",s.download,s.href].join(":"),l.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(l)}))},hideModal:function(){this.$refs.deleteModal.hide()}}},d=r,u=(a("fdeb"),a("2877")),f=Object(u["a"])(d,o,l,!1,null,"b1f71ed8",null);e["default"]=f.exports},fdeb:function(t,e,a){"use strict";var o=a("a103"),l=a.n(o);l.a}}]);
//# sourceMappingURL=chunk-4552dc68.146255fb.js.map