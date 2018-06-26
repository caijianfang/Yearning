webpackJsonp([11],{309:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=s(4),n=s.n(o);e.default={name:"Setting",data:function(){return{inception:{host:"",port:"",user:"",password:"",back_host:"",back_port:"",back_user:"",back_password:""},ldap:{type:"",host:"",sc:"",domain:"",user:"",password:""},message:{webhook:"",smtp_host:"",smtp_port:"",user:"",password:"",to_user:"",mail:"",ding:""},other:{sensitive_list:[],limit:"",con_room:[],foce:"",multi:"",query:"",sensitive:""}}},methods:{handleAdd:function(){this.other.con_room.push(this.other.foce),this.other.foce=""},handleAdd1:function(){this.other.sensitive_list.push(this.other.sensitive),this.other.sensitive=""},handleClose2:function(t,e){var s=this.other.con_room.indexOf(e);this.other.con_room.splice(s,1)},handleClose3:function(t,e){var s=this.other.sensitive_list.indexOf(e);this.other.sensitive_list.splice(s,1)},multi_switching:function(t){this.other.multi=t},multi_query:function(t){this.other.query=t},dingding_switching:function(t){this.message.ding=t},mail_switching:function(t){this.message.mail=t},ldap_test:function(){var t=this;n.a.put(a.a.url+"/setting/1",{ldap:JSON.stringify(this.ldap)}).then(function(t){a.a.notice(t.data)}).catch(function(e){a.a.err_notice(t,e)})},dingding_test:function(){var t=this;n.a.put(a.a.url+"/setting/2",{ding:this.message.webhook}).then(function(t){a.a.notice(t.data)}).catch(function(e){a.a.err_notice(t,e)})},mail_test:function(){n.a.put(a.a.url+"/setting/3",{mail:JSON.stringify(this.message)}).then(function(t){a.a.notice(t.data)}).catch(function(t){a.a.err_notice(t)})},save_upload:function(){var t=this;n.a.post(a.a.url+"/setting/save",{inception:JSON.stringify(this.inception),ldap:JSON.stringify(this.ldap),message:JSON.stringify(this.message),other:JSON.stringify(this.other)}).then(function(t){a.a.notice(t.data)}).catch(function(e){a.a.err_notice(t,e)})}},mounted:function(){var t=this;n.a.get(a.a.url+"/setting/get").then(function(e){"refused"===e.data.other?t.$router.push({name:"error_401"}):(t.message=e.data.message,t.message.mail?t.message.mail=!0:t.message.mail=!1,t.message.ding?t.message.ding=!0:t.message.ding=!1,t.inception=e.data.inception,t.other=e.data.other,t.other.multi?t.other.multi=!0:t.other.multi=!1,t.other.query?t.other.query=!0:t.other.query=!1,t.ldap=e.data.ldap)}).catch(function(t){a.a.err_notice(t)})}}},347:function(t,e,s){e=t.exports=s(78)(!0),e.push([t.i,"label{font-size:30px}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/components/Management/Setting.vue"],names:[],mappings:"AACA,MACE,cAAgB,CACjB",file:"Setting.vue",sourcesContent:["\nlabel{\n  font-size: 30px;\n}\n"],sourceRoot:""}])},348:function(t,e,s){e=t.exports=s(78)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Setting.vue",sourceRoot:""}])},629:function(t,e,s){var a=s(347);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(79)("c99b1244",a,!0,{})},630:function(t,e,s){var a=s(348);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(79)("d72c6c38",a,!0,{})},669:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",[s("Col",{attrs:{span:"24"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"android-settings"}}),t._v("\n          基础设置\n        ")],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("Inception配置")]),t._v(" "),s("Form",{attrs:{"label-width":120}},[s("FormItem",{attrs:{label:"地址:"}},[s("Input",{attrs:{placeholder:"Inception ip地址"},model:{value:t.inception.host,callback:function(e){t.$set(t.inception,"host",e)},expression:"inception.host"}})],1),t._v(" "),s("FormItem",{attrs:{label:"端口:"}},[s("Input",{attrs:{placeholder:"Inception 端口"},model:{value:t.inception.port,callback:function(e){t.$set(t.inception,"port",e)},expression:"inception.port"}})],1),t._v(" "),s("FormItem",{attrs:{label:"用户名:"}},[s("Input",{attrs:{placeholder:"Inception 用户名"},model:{value:t.inception.user,callback:function(e){t.$set(t.inception,"user",e)},expression:"inception.user"}})],1),t._v(" "),s("FormItem",{attrs:{label:"密码:"}},[s("Input",{attrs:{placeholder:"Inception 密码(如未设置密码则不填写)",type:"password"},model:{value:t.inception.password,callback:function(e){t.$set(t.inception,"password",e)},expression:"inception.password"}})],1),t._v(" "),s("FormItem",{attrs:{label:"备份库地址:"}},[s("Input",{attrs:{placeholder:"备份库 地址"},model:{value:t.inception.back_host,callback:function(e){t.$set(t.inception,"back_host",e)},expression:"inception.back_host"}})],1),t._v(" "),s("FormItem",{attrs:{label:"备份库端口:"}},[s("Input",{attrs:{placeholder:"备份库 端口"},model:{value:t.inception.back_port,callback:function(e){t.$set(t.inception,"back_port",e)},expression:"inception.back_port"}})],1),t._v(" "),s("FormItem",{attrs:{label:"备份库用户名:"}},[s("Input",{attrs:{placeholder:"备份库 用户名"},model:{value:t.inception.back_user,callback:function(e){t.$set(t.inception,"back_user",e)},expression:"inception.back_user"}})],1),t._v(" "),s("FormItem",{attrs:{label:"备份库密码:"}},[s("Input",{attrs:{placeholder:"备份库 密码(如未设置密码则不填写)",type:"password"},model:{value:t.inception.back_password,callback:function(e){t.$set(t.inception,"back_password",e)},expression:"inception.back_password"}})],1)],1)],1)],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("Card",{staticStyle:{"margin-left":"5%"}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("LDAP设置")]),t._v(" "),s("Form",{attrs:{"label-width":120}},[s("FormItem",{attrs:{label:"LDAP认证类型:"}},[s("Select",{model:{value:t.ldap.type,callback:function(e){t.$set(t.ldap,"type",e)},expression:"ldap.type"}},[s("Option",{attrs:{value:"1"}},[t._v("域名认证")]),t._v(" "),s("Option",{attrs:{value:"2"}},[t._v("uid认证")]),t._v(" "),s("Option",{attrs:{value:"3"}},[t._v("cn认证")])],1)],1),t._v(" "),s("FormItem",{attrs:{label:"服务地址:"}},[s("Input",{attrs:{placeholder:"服务ip地址"},model:{value:t.ldap.host,callback:function(e){t.$set(t.ldap,"host",e)},expression:"ldap.host"}})],1),t._v(" "),s("FormItem",{attrs:{label:"LDAP_SCBASE:"}},[s("Input",{attrs:{placeholder:"LDAP dc 相关设置,采用域名认证可不填写"},model:{value:t.ldap.sc,callback:function(e){t.$set(t.ldap,"sc",e)},expression:"ldap.sc"}})],1),t._v(" "),s("FormItem",{attrs:{label:"LDAP_域名:"}},[s("Input",{attrs:{placeholder:"LDAP Domain"},model:{value:t.ldap.domain,callback:function(e){t.$set(t.ldap,"domain",e)},expression:"ldap.domain"}})],1),t._v(" "),s("FormItem",{attrs:{label:"LDAP_测试用户:"}},[s("Input",{attrs:{placeholder:"请填写测试用户"},model:{value:t.ldap.user,callback:function(e){t.$set(t.ldap,"user",e)},expression:"ldap.user"}})],1),t._v(" "),s("FormItem",{attrs:{label:"LDAP_测试密码:"}},[s("Input",{attrs:{placeholder:"请填写测试密码",type:"password"},model:{value:t.ldap.password,callback:function(e){t.$set(t.ldap,"password",e)},expression:"ldap.password"}})],1),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:function(e){t.ldap_test()}}},[t._v("ldap测试")])],1)],1),t._v(" "),s("br"),t._v(" "),s("Alert",{staticStyle:{"margin-left":"5%"},attrs:{type:"warning","show-icon":""}},[t._v("\n              注意事项：\n              "),s("template",{slot:"desc"},[t._v("\n                1.请确认已正确修改或替换pymysql相关模块。否则inception将无法正常使用！\n                "),s("br"),t._v("\n                2.请正确填写Inception备份库相关信息，否则将无法获得回滚语句。(无法获得回滚语句的原因有多种这只是其中之一)\n                "),s("br"),t._v("\n                3.LDAP登陆建议使用域名方式登陆，如使用其他的方式配置较为繁琐。比如使用uid方式需在LDAP_SCBASE中填写相关dc，cn等相关信息\n              ")])],2)],1)],1)],1)],1)],1),t._v(" "),s("br"),t._v(" "),s("Row",[s("Col",{attrs:{span:"24"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"android-settings"}}),t._v("\n          进阶设置\n        ")],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("消息推送")]),t._v(" "),s("Form",{attrs:{"label-width":120}},[s("FormItem",{attrs:{label:"钉钉webhook:"}},[s("Input",{attrs:{placeholder:"此webhook只用于查询工单,权限工单的消息推送。"},model:{value:t.message.webhook,callback:function(e){t.$set(t.message,"webhook",e)},expression:"message.webhook"}})],1),t._v(" "),s("FormItem",{attrs:{label:"邮件SMTP服务地址:"}},[s("Input",{attrs:{placeholder:"STMP服务 地址"},model:{value:t.message.smtp_host,callback:function(e){t.$set(t.message,"smtp_host",e)},expression:"message.smtp_host"}})],1),t._v(" "),s("FormItem",{attrs:{label:"SMTP服务端口:"}},[s("Input",{attrs:{placeholder:"STMP服务 端口"},model:{value:t.message.smtp_port,callback:function(e){t.$set(t.message,"smtp_port",e)},expression:"message.smtp_port"}})],1),t._v(" "),s("FormItem",{attrs:{label:"邮件推送人用户名:"}},[s("Input",{attrs:{placeholder:"推送人 用户名"},model:{value:t.message.user,callback:function(e){t.$set(t.message,"user",e)},expression:"message.user"}})],1),t._v(" "),s("FormItem",{attrs:{label:"邮件推送人密码:"}},[s("Input",{attrs:{placeholder:"推送人 密码",type:"password"},model:{value:t.message.password,callback:function(e){t.$set(t.message,"password",e)},expression:"message.password"}})],1),t._v(" "),s("FormItem",{attrs:{label:"邮件测试收件地址::"}},[s("Input",{attrs:{placeholder:"测试收件人地址填写"},model:{value:t.message.to_user,callback:function(e){t.$set(t.message,"to_user",e)},expression:"message.to_user"}})],1),t._v(" "),s("Form-item",{attrs:{label:"email推送开关:"}},[s("i-switch",{attrs:{size:"large"},on:{"on-change":t.mail_switching},model:{value:t.message.mail,callback:function(e){t.$set(t.message,"mail",e)},expression:"message.mail"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),t._v(" "),s("Form-item",{attrs:{label:"钉钉推送开关:"}},[s("i-switch",{attrs:{size:"large"},on:{"on-change":t.dingding_switching},model:{value:t.message.ding,callback:function(e){t.$set(t.message,"ding",e)},expression:"message.ding"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:function(e){t.dingding_test()}}},[t._v("钉钉测试")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"5%"},attrs:{type:"warning"},on:{click:function(e){t.mail_test()}}},[t._v("邮件测试")])],1)],1)],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("Card",{staticStyle:{"margin-left":"5%"}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("其他")]),t._v(" "),s("Form",{attrs:{"label-width":120}},[s("FormItem",{attrs:{label:"查询最大Limit限制:"}},[s("Input",{attrs:{placeholder:"查询最大的Limit数。"},model:{value:t.other.limit,callback:function(e){t.$set(t.other,"limit",e)},expression:"other.limit"}})],1),t._v(" "),s("FormItem",{attrs:{label:"自定义机房:"}},[t._l(t.other.con_room,function(e){return s("Tag",{key:e,attrs:{name:e,type:"border",closable:"",color:"blue"},on:{"on-close":t.handleClose2}},[t._v(t._s(e))])}),t._v(" "),s("br"),t._v(" "),s("Input",{staticStyle:{width:"30%"},attrs:{placeholder:"机房名称"},model:{value:t.other.foce,callback:function(e){t.$set(t.other,"foce",e)},expression:"other.foce"}}),t._v(" "),s("Button",{attrs:{icon:"ios-plus-empty",type:"dashed",size:"small"},on:{click:t.handleAdd}},[t._v("添加机房")])],2),t._v(" "),s("FormItem",{attrs:{label:"脱敏字段:"}},[t._l(t.other.sensitive_list,function(e){return s("Tag",{key:e,attrs:{name:e,type:"border",closable:"",color:"blue"},on:{"on-close":t.handleClose3}},[t._v(t._s(e))])}),t._v(" "),s("br"),t._v(" "),s("Input",{staticStyle:{width:"30%"},attrs:{placeholder:"脱敏字段设置"},model:{value:t.other.sensitive,callback:function(e){t.$set(t.other,"sensitive",e)},expression:"other.sensitive"}}),t._v(" "),s("Button",{attrs:{icon:"ios-plus-empty",type:"dashed",size:"small"},on:{click:t.handleAdd1}},[t._v("添加脱敏字段")])],2),t._v(" "),s("Form-item",{attrs:{label:"多级审核开关:"}},[s("i-switch",{attrs:{size:"large"},on:{"on-change":t.multi_switching},model:{value:t.other.multi,callback:function(e){t.$set(t.other,"multi",e)},expression:"other.multi"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),t._v(" "),s("Form-item",{attrs:{label:"查询审核开关:"}},[s("i-switch",{attrs:{size:"large"},on:{"on-change":t.multi_query},model:{value:t.other.query,callback:function(e){t.$set(t.other,"query",e)},expression:"other.query"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1)],1),t._v(" "),s("br"),t._v(" "),s("Alert",{staticStyle:{"margin-left":"5%"},attrs:{type:"warning","show-icon":""}},[t._v("\n              注意事项：\n              "),s("template",{slot:"desc"},[t._v("\n                1.此处设置的钉钉webhook并不会对SQL工单进行消息推送，如需对SQL工单进行消息推送请前往数据库管理页面设置\n                "),s("br"),t._v("\n                2.由于各个邮件服务提供商对于垃圾邮件过滤的机制各不相同，可能会造成邮件无法接收的情况。所以使用前请测试是否稳定,推荐使用搜狐\n                "),s("br"),t._v("\n                3.只有开启相应的消息推送开关后，消息推送才会开启。否则只有站内信一种消息推送方式。\n                "),s("br"),t._v("\n                4.设置最大Limit数后，所有的查询语句的查询结果都不会超过这个数值。\n                "),s("br"),t._v("\n                5.开启多级审核开关后,用户组将新增执行人角色，只有执行人角色的用户才能最终执行工单。关闭后执行人角色用户将全部更改为使用者\n                "),s("br"),t._v("\n                6.查询审核开关开启后，所有的查询都必须通过管理员同意才能进行。关闭则可自主查询\n                "),s("br"),t._v("\n                7.设置脱敏字段后，查询时如匹配到对应字段则该字段将只会以******显示\n              ")])],2),t._v(" "),s("Button",{staticStyle:{"margin-left":"5%",width:"95%"},attrs:{type:"dashed"},on:{click:t.save_upload}},[t._v("保存")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},92:function(t,e,s){function a(t){s(629),s(630)}var o=s(1)(s(309),s(669),a,"data-v-6c385168",null);t.exports=o.exports}});
//# sourceMappingURL=11.9f930a55f6b32bfd9de9.js.map