/* ===========================================================================
   BPM Combined Asset File
   MANIFEST: opensignup ()
   This file is generated automatically by the bpm (http://www.bpmjs.org)
   =========================================================================*/

spade.register("opensignup/signup/lib/controllers/email", "function(a,b,c,d,e,f){SU.emailController=SC.Object.create({value:null})}");spade.register("opensignup/signup/lib/controllers/msg", "function(a,b,c,d,e,f){SU.msgController=SC.Object.create({success:NO,exist:NO,error:NO})}");spade.register("opensignup/signup/lib/core_signup", "function(a,b,c,d,e,f){console.log(\"admin running...\"),SU.core_signup=SC.Object.create({register:function(){console.log(\"ENTER register!!!\"),this.set(\"globalError\",\"\");var a={email:SU.emailController.get(\"value\")};$.ajax({type:\"POST\",url:SU.get(\"serverHost\")+\"api_opensignup/public/signup\",data:JSON.stringify(a),dataType:\"json\",contentType:\"application/json; charset=utf-8\",context:this,error:function(){this.set(\"globalError\",\"_serverError\".loc())},success:function(a){console.log(a),a.content==\"_Success\"?(SU.msgController.set(\"success\",YES),SU.msgController.set(\"exist\",NO),SU.msgController.set(\"error\",NO),SU.emailController.set(\"value\",\"\")):a.content==\"_InUse\"?(SU.msgController.set(\"success\",NO),SU.msgController.set(\"exist\",YES),SU.msgController.set(\"error\",NO),SU.emailController.set(\"value\",\"\")):(SU.msgController.set(\"success\",NO),SU.msgController.set(\"exist\",NO),SU.msgController.set(\"error\",YES),SU.emailController.set(\"value\",\"\"))},async:YES})}}),$(document).ready(function(){SU.statechart.initStatechart()})}");spade.register("opensignup/signup/lib/core_statechart", "function(a,b,c,d,e,f){SC.mixin(SU,{statechart:SC.Statechart.create({trace:YES,rootState:SC.State.extend({initialSubstate:\"startupState\",startupState:SC.State.extend({enterState:function(){console.log(\"enter signup\")}}),createAccountAction:function(){console.log(\"Enter createAccountAction!!\"),SU.core_signup.register()}})})})}");spade.register("opensignup/signup/lib/data_sources/store", "function(a,b,c,d,e,f){SU.Store=SC.DataSource.extend({fetch:function(a,b){return NO},retrieveRecord:function(a,b){return NO},createRecord:function(a,b){var c=a.recordTypeFor(b);return c===KG.Note&&(url=KG.get(\"serverHost\")+\"opensignup/public/signup?sandbox=%@\".fmt(KG.get(\"activeSandboxKey\"))),url?(this.ajaxSupport(a,b,\"POST\",url,JSON.stringify(a.readDataHash(b))),YES):NO},updateRecord:function(a,b,c){return NO},destroyRecord:function(a,b,c){return NO},ajaxSupport:function(a,b,c,d,e){$.ajax({type:c,url:d,data:e,dataType:\"json\",contentType:\"application/json; charset=utf-8\",context:this,headers:KG.core_auth.createAjaxRequestHeaders(),async:YES,error:function(c,d,e){SC.Logger.error(\"Ajax error: HTTP error status code: \"+c.status),a.dataSourceDidError(b,e),KG.statechart&&KG.statechart.sendAction(\"httpError\",c.status)},success:function(d,e,f){console.log(c+\" success\");var g=d,h;c===\"DELETE\"?a.dataSourceDidDestroy(b):!SC.none(g)&&g.guid?a.dataSourceDidComplete(b,g,g.guid):a.dataSourceDidComplete(b)}})}})}");spade.register("opensignup/signup/lib/main", "function(a,b,c,d,e,f){a(\"ember\"),a(\"ember-statechart\"),SU=Ember.Application.create({serverHost:\"/\"}),a(\"./controllers/email\"),a(\"./controllers/msg\"),a(\"./core_statechart\"),a(\"./core_signup\"),a(\"./views/signup_field\"),a(\"./views/button\")}");spade.register("opensignup/signup/lib/views/button", "function(a,b,c,d,e,f){var g=SC.get;SU.Button=SC.Button.extend({attributeBindings:[\"type\",\"disabled\",\"title\"],disableTouch:NO,label_loc:function(){return this.get(\"label\").loc()}.property(\"label\"),mouseUp:function(a){this._super(a);var b=g(this,\"sc_action\");return b&&SU.statechart&&(SU.statechart.sendAction(b,this.get(\"content\")||this.getPath(\"itemView.content\")),this.postAction&&this.postAction()),a.stopPropagation&&a.stopPropagation(),NO},keyUp:function(a){if(a.keyCode==13){var b=g(this,\"sc_action\");b&&SU.statechart&&(SU.statechart.sendAction(b,this.get(\"content\")||this.getPath(\"itemView.content\")),this.postAction&&this.postAction())}return NO},touchStart:function(a){return this._super(a),NO},touchEnd:function(a){return this._super(a),NO}})}");spade.register("opensignup/signup/lib/views/signup_field", "function(a,b,c,d,e,f){SU.SignupField=SC.TextField.extend({attributeBindings:[\"type\",\"placeholder\",\"value\",\"autofocus\",\"spellcheck\",\"autocorrect\",\"autocapitalize\",\"autocomplete\",\"disabled\",\"size\",\"results\"],nl_sc_action:null,placeholder_not_loc:null,placeholder:function(){return SC.none(this.get(\"placeholder_not_loc\"))?null:this.get(\"placeholder_not_loc\").loc()}.property(\"placeholder_not_loc\"),insertNewline:function(){console.log(\"SignupFiels.insertNewLine\"),SC.none(this.get(\"nl_sc_action\"))||SU.statechart.sendAction(this.get(\"nl_sc_action\"),this)},didInsertElement:function(){if(!SC.none(this.get(\"autofocus\"))&&$.browser.mozilla){var a=this;setTimeout(function(){console.log(\"fallback focus\"),a.$().focus()},1)}}})}");