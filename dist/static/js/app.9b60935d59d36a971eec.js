webpackJsonp([1],{"1uuo":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("7+uW"),n=r("mvHQ"),a=r.n(n),s=r("BO1k"),l=r.n(s),o=r("lHA8"),c=r.n(o),f=r("d7EF"),h=r.n(f),d=r("Gu7T"),u=r.n(d),_={name:"TransferTree",data:function(){return{from_is_indeterminate:!1,from_check_all:!1,from_expanded_keys:[],from_disabled:!0,from_check_keys:[],filterFrom:"",filterListFirst:"",archiveFirst:[],rightee:[]}},props:{width:{type:String,default:"100%"},height:{type:String,default:"320px"},right_data:{type:Array,default:function(){return[]}},title:{type:Array,default:function(){return["源列表","目标列表"]}},from_data:{type:Array,default:function(){return[]}},defaultProps:{type:Object,default:function(){return{label:"label",children:"children"}}},node_key:{type:String,default:"id"},filter:{type:Boolean,default:!1},openAll:{type:Boolean,default:!1},renderContentLeft:Function,rightOptions:{type:Object,default:function(){return{suffix:"suffix",connector:"-"}}},defaultCheckedKeys:{type:Array,default:function(){return[]}},defaultExpandedKeys:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"输入关键字进行过滤"},filterNode:Function,highLight:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},accordion:{type:Boolean,default:!1},renderAfterExpand:{type:Boolean,default:!0},expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:{type:Boolean,default:!1},isRadio:{type:Boolean,default:!1},iconClass:String},computed:{self_from_data:function(){return[].concat(u()(this.from_data))},fromTitle:function(){return h()(this.title,1)[0]},toTitle:function(){return h()(this.title,2)[1]}},watch:{from_check_keys:function(e){var t=this;e.length>0?(this.from_disabled=!1,this.from_is_indeterminate=!0,e.filter(function(e){return 0==e[t.id]}).length==this.self_from_data.length?(this.from_is_indeterminate=!1,this.from_check_all=!0):(this.from_is_indeterminate=!0,this.from_check_all=!1)):(this.from_disabled=!0,this.from_is_indeterminate=!1,this.from_check_all=!1)},filterFrom:function(e){this.$refs["from-tree"].filter(e)},filterListFirst:function(e,t){""==t&&(this.archiveFirst=this.rightee),""==e&&(this.rightee=this.archiveFirst);var r=RegExp(e);this.rightee=this.rightee.filter(function(e){return r.test(e.label)})},defaultCheckedKeys:function(e){this.from_check_keys=e||[]},defaultExpandedKeys:{handler:function(e){var t=new c.a(this.from_expanded_keys.concat(e));this.from_expanded_keys=[].concat(u()(t))},immediate:!0},right_data:{handler:function(e){var t;(t=this.rightee).push.apply(t,u()(e))},immediate:!0}},methods:{fromTreeChecked:function(e,t){var r=this;this.from_check_keys=t.checkedNodes,this.isRadio&&this.setChecked([e.id]),this.$nextTick(function(){r.$emit("left-check-change",e,t,r.from_check_all)})},fromAllBoxChange:function(e){0!=this.self_from_data.length&&(e?(this.from_check_keys=this.self_from_data,this.$refs["from-tree"].setCheckedNodes(this.self_from_data)):(this.$refs["from-tree"].setCheckedNodes([]),this.from_check_keys=[]),this.$emit("left-check-change",null,null,this.from_check_all))},filterNodeFrom:function(e,t){return this.filterNode?this.filterNode(e,t,"form"):!e||-1!==t[this.defaultProps.label].indexOf(e)},rightListTransfer:function(){var e,t=this;if(e=this.$refs["from-tree"].getCheckedNodes(!0).filter(function(e){if(!t.rightee.some(function(r){return r[t.node_key]==e[t.node_key]}))return e}),this.rightee=[].concat(u()(this.rightee),u()(e)),console.log("穿梭",this.rightee),this.isRadio)this.setDisable(this.self_from_data);else{var r=!0,i=!1,n=void 0;try{for(var a,s=l()(this.rightee);!(r=(a=s.next()).done);r=!0){a.value.disabled=!0}}catch(e){i=!0,n=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw n}}}this.$emit("add-btn",this.rightee)},clearList:function(e){var t=this;this.rightee="all"==e?[]:this.rightee.filter(function(r){return r[t.node_key]!=e}),console.log("移除",this.self_from_data);var r=this.rightee.map(function(e){return e.id});this.chooseDisable(r,this.self_from_data),this.$refs["from-tree"].setCheckedKeys(r),this.$emit("remove-btn",this.rightee)},clearChecked:function(){this.$refs["from-tree"].setCheckedKeys([]),this.from_is_indeterminate=!1,this.from_check_all=!1},getChecked:function(){return{leftKeys:this.$refs["from-tree"].getCheckedKeys(),leftHarfKeys:this.$refs["from-tree"].getHalfCheckedKeys(),leftNodes:this.$refs["from-tree"].getCheckedNodes(),leftHalfNodes:this.$refs["from-tree"].getHalfCheckedNodes()}},setChecked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$refs["from-tree"].setCheckedKeys(e)},clearFilter:function(){this.filterFrom=""},chooseDisable:function(e,t){var r=!0,i=!1,n=void 0;try{for(var a,s=l()(t);!(r=(a=s.next()).done);r=!0){var o=a.value,c=e.includes(o.id);o.disabled=!!c,this.isRadio&&o.children.length>0&&(o.disabled=!0),o.children&&this.chooseDisable(e,o.children)}}catch(e){i=!0,n=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw n}}},setDisable:function(e){var t=!0,r=!1,i=void 0;try{for(var n,a=l()(e);!(t=(n=a.next()).done);t=!0){var s=n.value;this.$set(s,"disabled",!0),s.children&&this.setDisable(s.children)}}catch(e){r=!0,i=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw i}}}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-transfer transfer",style:{width:e.width,height:e.height}},[r("div",{staticClass:"transfer-left"},[r("h3",{staticClass:"transfer-title"},[r("el-checkbox",{attrs:{indeterminate:e.from_is_indeterminate},on:{change:e.fromAllBoxChange},model:{value:e.from_check_all,callback:function(t){e.from_check_all=t},expression:"from_check_all"}}),e._v(" "),r("span",[e._v(e._s(e.fromTitle))])],1),e._v(" "),r("div",{staticClass:"transfer-main"},[e._t("from"),e._v(" "),e.filter?r("el-input",{staticClass:"filter-tree",attrs:{clearable:"",size:"small",placeholder:e.placeholder},model:{value:e.filterFrom,callback:function(t){e.filterFrom=t},expression:"filterFrom"}}):e._e(),e._v(" "),r("el-tree",{ref:"from-tree",attrs:{"show-checkbox":"","icon-class":e.iconClass,"node-key":e.node_key,props:e.defaultProps,data:e.self_from_data,accordion:e.accordion,"default-expand-all":e.openAll,"highlight-current":e.highLight,"render-content":e.renderContentLeft,"filter-node-method":e.filterNodeFrom,"check-on-click-node":e.checkOnClickNode,"render-after-expand":e.renderAfterExpand,"expand-on-click-node":e.expandOnClickNode,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.from_expanded_keys},on:{check:e.fromTreeChecked}})],2)]),e._v(" "),r("div",{staticClass:"transfer-center right-list-center"},[r("p",{staticClass:"transfer-center-item right-only-item"},[r("el-button",{staticClass:"right-first-btn",attrs:{type:"primary",icon:"el-icon-arrow-right",disabled:e.from_disabled},on:{click:function(t){return e.rightListTransfer()}}},[e._v("添加")])],1)]),e._v(" "),r("div",{staticClass:"transfer-right"},[r("div",{staticClass:"transfer-right-item transfer-right-only"},[r("h3",{staticClass:"transfer-title"},[r("span",[e._v(e._s(e.toTitle))]),e._v(" "),r("span",{staticClass:"u-clear",on:{click:function(t){return e.clearList("all")}}},[e._v("清空")])]),e._v(" "),r("div",{staticClass:"transfer-main"},[e._t("to"),e._v(" "),e.filter?r("el-input",{staticClass:"filter-tree",attrs:{clearable:"",placeholder:e.placeholder,size:"small"},model:{value:e.filterListFirst,callback:function(t){e.filterListFirst=t},expression:"filterListFirst"}}):e._e(),e._v(" "),r("ul",{staticClass:"right-list-ul"},e._l(e.rightee,function(t){return r("li",{key:t[e.node_key],staticClass:"right-list-li"},[r("label",[e._v("\n              "+e._s(t[e.defaultProps.label])+"\n              "+e._s(e.rightOptions.connector)+"\n              "+e._s(t[e.rightOptions.suffix])+"\n            ")]),e._v(" "),r("i",{staticClass:"right-list-del el-icon-close",on:{click:function(r){return e.clearList(t[e.node_key])}}})])}),0)],2)])])])},staticRenderFns:[]};var p={name:"App",components:{treeTransfer:r("VU/8")(_,m,!1,function(e){r("sFMg")},null,null).exports},props:{},data:function(){return{isRadio:!1,fromData:[{label:"数据中心",deptCode:"200",deptName:"数据中心",id:"1",children:[{label:"小红",children:[],id:"1-1",nickName:"小红",supCode:"200",userId:"1-1"},{label:"小明",children:[],id:"1-2",nickName:"小明",supCode:"200",userId:"1-2"},{label:"小王",children:[],id:"1-3",nickName:"小王",supCode:"200",userId:"1-3"}]},{label:"开发中心",deptCode:"201",deptName:"开发中心",id:"2",children:[{label:"小绿",children:[],id:"2-1",nickName:"小绿",supCode:"201",userId:"2-1"},{label:"小黄",children:[],id:"2-2",nickName:"小黄",supCode:"201",userId:"2-2"},{label:"小蓝",children:[],id:"2-3",nickName:"小蓝",supCode:"201",userId:"2-3"}]}],toData:[],defaultValue:[],rightOptions:{suffix:"",connector:""},treeTitle:["人员选择","已有人员"]}},computed:{},watch:{},created:function(){},mounted:function(){this.getChoosePeople()},methods:{getChoosePeople:function(){var e=JSON.parse(a()(this.fromData));this.toData=[{deptCode:"200",deptName:"数据中心",phone:"18953249201",userId:"1-2",nickName:"小明",label:"小明",id:"1-2"}],this.defaultValue=this.toData.map(function(e){return e.id}),this.isRadio&&this.toData.length>0?(this.$refs.treeTransfer.setDisable(e),this.fromData=e):!this.isRadio&&this.toData.length>0&&(this.$refs.treeTransfer.chooseDisable(this.defaultValue,e),this.fromData=e)},add:function(e){console.log("add:",e)},remove:function(e){console.log("remove:",e)},handleLeftCheckChange:function(e){console.log("handleLeftCheckChange:",e)}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("tree-transfer",{ref:"treeTransfer",attrs:{title:e.treeTitle,from_data:e.fromData,right_data:e.toData,defaultProps:{label:"label"},height:"540px",filter:"",openAll:"",defaultCheckedKeys:e.defaultValue,rightOptions:e.rightOptions,isRadio:e.isRadio},on:{"update:from_data":function(t){e.fromData=t},"update:right_data":function(t){e.toData=t},"add-btn":e.add,"remove-btn":e.remove,"left-check-change":e.handleLeftCheckChange}})],1)},staticRenderFns:[]};var g=r("VU/8")(p,v,!1,function(e){r("nnJx")},null,null).exports,k=r("/ocq"),y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var C=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},y,!1,function(e){r("1uuo")},"data-v-d8ec41bc",null).exports;i.default.use(k.a);var b=new k.a({routes:[{path:"/",name:"HelloWorld",component:C}]}),x=r("zL8q"),N=r.n(x);r("tvR6");i.default.config.productionTip=!1,i.default.use(N.a),new i.default({el:"#app",router:b,components:{App:g},template:"<App/>"})},nnJx:function(e,t){},sFMg:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9b60935d59d36a971eec.js.map