/*!
 * Copyright 2019 ForgeRock AS. All Rights Reserved 
 *  Use of this code requires a commercial software license with ForgeRock AS. or with one of its affiliates. All use shall be exclusively subject to such license between the licensee and ForgeRock AS.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23702a"],{"2f90":function(e,t,a){},"3c23":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.showForm?a("fr-center-card",{attrs:{showLogo:!0}},[a("div",{attrs:{slot:"center-card-header"},slot:"center-card-header"},[a("h2",{staticClass:"h2"},[e._v(e._s(e.displayName))])]),a("b-card-body",{attrs:{slot:"center-card-body"},slot:"center-card-body"},[a("p",{staticClass:"text-center mb-4"},[e._v("\n            "+e._s(e.purpose)+"\n        ")]),a(e.selfServiceType,{ref:"selfServiceStage",tag:"component",attrs:{selfServiceDetails:e.selfServiceDetails,apiType:e.apiType},on:{advanceStage:e.advanceStage}})],1),null!==e.selfServiceDetails&&e.selfServiceDetails.canSkip?a("b-card-footer",{attrs:{slot:"center-card-footer"},slot:"center-card-footer"},[a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.advanceStage({},!0)}}},[e._v("\n            "+e._s(e.$t("pages.selfservice.progressiveProfile.skipThis"))+"\n        ")])]):e._e()],1):a("b-container",{staticClass:"h-100 px-0",attrs:{fluid:""}},[a("div",{staticClass:"h-100 d-flex"},[a("div",{staticClass:"m-auto fr-center-card"},[a("bounce-loader",{attrs:{color:e.loadingColor}})],1)])])},i=[],n=a("2ef0"),r=a.n(n),o=a("8455"),l=a("b107"),c=a.n(l),u=a("13bf"),m=a("bc3a"),d=a.n(m),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.selfServiceDetails.requirements.uiConfig?a("b-form",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save(t)},submit:function(e){e.preventDefault()}}},[e._l(e.selfServiceDetails.requirements.attributes,(function(t){return a("b-form-group",{key:t.name,staticClass:"mb-0"},["boolean"!==t.schema.type?a("fr-floating-label-input",{attrs:{fieldName:t.name,label:t.schema.title,validateRules:t.isRequired?"required":"",type:"text",defaultValue:t.value},model:{value:e.saveDetails[t.name],callback:function(a){e.$set(e.saveDetails,t.name,"string"===typeof a?a.trim():a)},expression:"saveDetails[property.name]"}}):[e.isSingleBooleanForm?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.saveDetails[t.name],expression:"saveDetails[property.name]"}],staticClass:"d-none",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.saveDetails[t.name])?e._i(e.saveDetails[t.name],null)>-1:e.saveDetails[t.name]},on:{change:function(a){var s=e.saveDetails[t.name],i=a.target,n=!!i.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);i.checked?o<0&&e.$set(e.saveDetails,t.name,s.concat([r])):o>-1&&e.$set(e.saveDetails,t.name,s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.saveDetails,t.name,n)}}})]):a("div",{staticClass:"custom-control custom-checkbox mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.saveDetails[t.name],expression:"saveDetails[property.name]"}],ref:t.name,refInFor:!0,staticClass:"custom-control-input",attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(e.saveDetails[t.name])?e._i(e.saveDetails[t.name],null)>-1:e.saveDetails[t.name]},on:{change:function(a){var s=e.saveDetails[t.name],i=a.target,n=!!i.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);i.checked?o<0&&e.$set(e.saveDetails,t.name,s.concat([r])):o>-1&&e.$set(e.saveDetails,t.name,s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.saveDetails,t.name,n)}}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.name}},[e._v(e._s(t.schema.title||t.schema.description))])])]],2)})),e.selfServiceDetails.requirements.terms?a("div",{staticClass:"mb-4 bg-light p-3 border border-light rounded text-left tc-scrolling-display",domProps:{innerHTML:e._s(e.selfServiceDetails.requirements.terms)}}):e._e(),e.selfServiceDetails.requirements.definitions?a("fr-kba-update",{ref:"kbaUpdate",attrs:{selfServiceDetails:e.selfServiceDetails}}):e._e(),a("b-button",{staticClass:"mt-1",attrs:{block:!0,variant:"primary"},on:{click:e.save}},[e._v("\n        "+e._s(e.selfServiceDetails.requirements.uiConfig.buttonText)+"\n    ")])],2):e._e()},p=[],v=a("49c6"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fr-kba-form-group",{ref:"kbaFormGroup",attrs:{selfServiceDetails:e.selfServiceDetails}})},b=[],g=a("d739"),D={name:"KBA-Update-Stage",props:{selfServiceDetails:{required:!0},inline:{required:!1,default:!1}},components:{"fr-kba-form-group":g["a"]},data:function(){return{}},methods:{getData:function(){return this.$refs.kbaFormGroup.getData()},save:function(){var e=this;this.isValid().then((function(t){t&&e.$emit("advanceStage",e.getData())}))},isValid:function(){return this.$refs.kbaFormGroup.isValid()}}},S=D,k=a("2877"),q=Object(k["a"])(S,h,b,!1,null,null,null),y=q.exports,$={name:"Conditional-User",components:{"fr-floating-label-input":v["a"],"fr-kba-update":y},props:{selfServiceDetails:{required:!0}},data:function(){return{saveDetails:{},isSingleBooleanForm:!1}},mounted:function(){this.handleBooleanValues()},methods:{getData:function(){var e=r.a.clone(this.saveDetails);return r.a.each(e,(function(t,a){""===t&&(e[a]=null)})),{attributes:e}},save:function(e){var t=this;!0===e?this.$emit("advanceStage",{},!0):r.a.has(this.selfServiceDetails,"requirements.terms")?this.$emit("advanceStage",{accept:"true"},!0):r.a.has(this.selfServiceDetails,"requirements.properties.kba")?this.$refs.kbaUpdate.isValid().then((function(e){e&&t.$emit("advanceStage",t.$refs.kbaUpdate.getData(),!0)})):this.$emit("advanceStage",this.getData(),!0)},handleBooleanValues:function(){var e=this;r.a.has(this.selfServiceDetails,"requirements.attributes")&&1===this.selfServiceDetails.requirements.attributes.length&&1===r.a.filter(this.selfServiceDetails.requirements.attributes,(function(e){return"boolean"===e.schema.type})).length?this.isSingleBooleanForm=!0:this.isSingleBooleanForm=!1,r.a.each(this.selfServiceDetails.requirements.attributes,(function(t){e.isSingleBooleanForm?e.saveDetails[t.name]=!0:"boolean"===t.schema.type&&(e.saveDetails[t.name]=t.value)}))}},watch:{selfServiceDetails:{handler:function(e){r.a.isEmpty(this.selfServiceDetails.requirements)?this.save(!0):(this.saveDetails={},this.handleBooleanValues())},deep:!0}}},_=$,x=(a("5279"),Object(k["a"])(_,f,p,!1,null,"2322bdf5",null)),w=x.exports,C=a("e5d2"),A={name:"Progressive-Profile",components:{"bounce-loader":o["BounceLoader"],"fr-center-card":u["a"],conditionaluser:w},mixins:[C["a"]],data:function(){return{selfServiceType:null,selfServiceDetails:null,loadingColor:c.a.baseColor,apiType:null,purpose:null,displayName:null,showForm:!1}},mounted:function(){this.apiType=this.$route.params.profileProcess,this.loadData()},methods:{setChildComponent:function(e,t){this.selfServiceDetails=t,this.selfServiceType=e,r.a.isEmpty(t.requirements)&&"initial"===t.tag?this.advanceStage({input:{}}):r.a.has(t,"requirements.uiConfig")?(this.showForm=!0,this.displayName=t.requirements.uiConfig.displayName,this.purpose=t.requirements.uiConfig.purpose,this.selfServiceDetails.canSkip=!0,(r.a.has(t,"requirements.properties.kba")||r.a.has(t,"requirements.terms")||r.a.has(t.requirements,"attributes")&&r.a.filter(t.requirements.attributes,{isRequired:!0}).length>=1)&&(this.selfServiceDetails.canSkip=!1)):"end"===t.tag&&t.status.success&&(this.showForm=!1,this.setUser())},apiErrorCallback:function(e){this.displayNotification("error",e.response.data.message),this.loadData()},setUser:function(){var e=this,t=this.getRequestService({headers:this.getAnonymousHeaders()});t.post("/authentication?_action=login").then((function(a){e.progressiveProfileCheck(a,(function(){d.a.all([t.get("".concat(a.data.authorization.component,"/").concat(a.data.authorization.id)),t.post("privilege?_action=listPrivileges"),t.get("schema/".concat(a.data.authorization.component))]).then(d.a.spread((function(t,a,s){e.$root.userStore.setProfileAction(t.data),e.$root.userStore.setSchemaAction(s.data),e.$root.userStore.setAccess(a.data),e.completeLogin()}))).catch((function(t){e.displayNotification("error",t.response.data.message)}))}),!0)})).catch((function(t){e.displayNotification("error",t.response.data.message)}))}}},F=A,I=Object(k["a"])(F,s,i,!1,null,null,null);t["default"]=I.exports},5279:function(e,t,a){"use strict";var s=a("2f90"),i=a.n(s);i.a},d739:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.answers,(function(t,s){return a("b-form-group",{key:s,staticClass:"mb-0",attrs:{"label-text-align":"left"}},[a("b-form-select",{staticClass:"mb-3",attrs:{options:e.options},model:{value:t.questionId,callback:function(a){e.$set(t,"questionId",a)},expression:"answer.questionId"}}),t.questionId===e.customIndex?a("fr-floating-label-input",{staticClass:"mb-3",attrs:{type:"text",fieldName:e.$t("common.user.kba.question").toLowerCase()+s,label:e.$t("common.user.kba.question"),validateRules:{required:!0,unique_question:e.getDuplicates(s)}},model:{value:t.customQuestion,callback:function(a){e.$set(t,"customQuestion","string"===typeof a?a.trim():a)},expression:"answer.customQuestion"}}):e._e(),a("fr-floating-label-input",{staticClass:"mb-3",attrs:{type:"text",fieldName:e.$t("common.user.kba.answer").toLowerCase()+s,label:e.$t("common.user.kba.answer"),validateRules:"required"},model:{value:t.answer,callback:function(a){e.$set(t,"answer","string"===typeof a?a.trim():a)},expression:"answer.answer"}}),s!==e.answers.length-1?a("hr"):e._e()],1)})),1)},i=[],n=a("2ef0"),r=a.n(n),o=a("49c6"),l={name:"KBA-Definition-Form-Group",props:{selfServiceDetails:{required:!0},inline:{required:!1,default:!1}},$_veeValidate:{validator:"new"},components:{"fr-floating-label-input":o["a"]},inject:["$validator"],data:function(){var e=this.selfServiceDetails.requirements.properties.kba,t=r.a.times(e.minItems,(function(){return{answer:null,questionId:null,customQuestion:null}})),a="custom";return{kba:e,answers:t,customIndex:a}},computed:{predefinedQuestionOptions:function(){var e=this;return r.a.map(this.kba.questions,(function(t){var a=t.id,s=t.question[e.$i18n.locale]||t.question[e.$i18n.fallbackLocale],i=!r.a.isUndefined(r.a.find(e.answers,{questionId:t.id}));return{value:a,text:s,disabled:i}}))},predefinedQuestionText:function(){return this.predefinedQuestionOptions.map((function(e){return e.text}))},options:function(){var e={value:null,text:this.$t("common.user.kba.selectQuestion"),disabled:!0},t={value:"custom",text:this.$t("common.user.kba.custom"),disabled:!1},a=[];return a=a.concat(e,this.predefinedQuestionOptions,t),a}},methods:{getData:function(){var e=this;return{kba:this.answers.map((function(t){return r.a.omit(t,t.questionId===e.customIndex?"questionId":"customQuestion")}))}},getDuplicates:function(e){return r.a.clone(this.answers).map((function(e){return e.customQuestion})).filter((function(t,a){return a!==e&&t})).concat(this.predefinedQuestionText)},isValid:function(){return this.$validator.validateAll()}},created:function(){var e=this;this.$validator.extend("unique_question",{getMessage:function(t,a){return e.$t("common.user.kba.notUnique")},validate:function(e,t){var a=function(e){return r.a.trim(r.a.toLower(e))};return!r.a.includes(r.a.map(t,a),a(e))}})}},c=l,u=a("2877"),m=Object(u["a"])(c,s,i,!1,null,null,null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-2d23702a.aec0059a.js.map