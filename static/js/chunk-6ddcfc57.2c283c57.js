(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ddcfc57"],{"2a04":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",[a("app-input",{attrs:{required:"",placeholder:"Title...",label:"Title","label-bold":"",counter:100,message:t.errors.title,validate:t.errorCodes.title},on:{input:t.checkTitle},model:{value:t.payload.title,callback:function(e){t.$set(t.payload,"title",e)},expression:"payload.title"}})],1),a("div",[a("app-input",{attrs:{required:"",placeholder:"Description...",label:"Description","label-bold":"",textarea:""},model:{value:t.payload.description,callback:function(e){t.$set(t.payload,"description",e)},expression:"payload.description"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("app-input",{attrs:{type:"date",min:t.pastDates,placeholder:"Date",label:"Date","label-bold":"",message:t.errors.date,validate:t.errorCodes.date},on:{input:t.checkDueDate},model:{value:t.payload.date,callback:function(e){t.$set(t.payload,"date",e)},expression:"payload.date"}})],1),a("div",{staticClass:"col-md-4"},[a("app-input",{attrs:{type:"time",min:t.pastTime,placeholder:"Time",label:"Time","label-bold":"",disabled:!t.payload.date,message:t.errors.time,validate:t.errorCodes.time},on:{input:t.checkDueDate},model:{value:t.payload.time,callback:function(e){t.$set(t.payload,"time",e)},expression:"payload.time"}})],1),a("div",{staticClass:"col-md-4"},[a("div",[a("app-select",{attrs:{placeholder:"Priority",bordered:"",options:t.priorityOpts,label:"Priority","label-bold":""},model:{value:t.payload.priority,callback:function(e){t.$set(t.payload,"priority",e)},expression:"payload.priority"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[t.isCreateMode?a("app-button",{staticClass:"w-100 mt-4",attrs:{loading:t.isSettingData},on:{click:function(e){return e.preventDefault(),t.addTask(e)}}},[a("span",[t._v("Add")])]):t._e(),t.isUpdateMode?a("app-button",{staticClass:"w-100 mt-4",attrs:{loading:t.isSettingData},on:{click:function(e){return e.preventDefault(),t.updateTask(e)}}},[a("span",[t._v("Update")])]):t._e()],1),a("div",{staticClass:"col-6"},[a("app-button",{staticClass:"w-100 mt-4",attrs:{color:"info"},on:{click:function(e){return e.preventDefault(),t.cancelForm(e)}}},[a("span",[t._v("Cancel")])])],1)])])},r=[],s=(a("99af"),a("caad"),a("fb6a"),a("a9e3"),a("dca8"),a("96cf"),a("1da1")),n=a("5530"),o=a("2f62"),c=a("c9d9"),l={props:{mode:{type:String|Number,default:1,validator:function(t){return[1,2].includes(t)}},content:{type:Object,default:function(){}}},data:function(){return{VALIDATE_STATUS:Object.freeze(c["a"]),isSettingData:!1,priorityOpts:[{value:"low",text:"Low"},{value:"normal",text:"Normal"},{value:"high",text:"High"}],payload:{title:"",description:"",date:null,time:null,priority:null},errors:{title:null,description:null,date:null,time:null,priority:null},errorCodes:{title:c["a"].DEFAULT,date:c["a"].DEFAULT,time:c["a"].DEFAULT}}},computed:{isCreateMode:function(){return 1==this.mode},isUpdateMode:function(){return 2==this.mode},pastDates:function(){var t=new Date,e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2);return"".concat(e,"-").concat(a,"-").concat(i)},currentDate:function(){var t=new Date,e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2);return"".concat(e,"-").concat(a,"-").concat(i)},currentTime:function(){var t=new Date,e=("0"+t.getHours()).slice(-2),a=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(a)},currentDateTime:function(){return"".concat(this.currentDate," ").concat(this.currentTime)},selectedDateTime:function(){return"".concat(this.payload.date," ").concat(this.payload.time)},pastTime:function(){return this.currentTime}},watch:{},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])("todo",["addTodo","updateTodo"])),{},{addTask:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.isSettingData=!0,!t.validateForm()){e.next=9;break}return a=Object(n["a"])(Object(n["a"])({},t.payload),{},{completed:!1}),e.next=6,t.addTodo(a);case 6:e.sent,alert("Add task successful"),t.$emit("done");case 9:e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](0);case 13:return e.prev=13,t.isSettingData=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})))()},updateTask:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.isSettingData=!0,!t.validateForm()){e.next=9;break}return a=t.payload,e.next=6,t.updateTodo(a);case 6:e.sent,alert("Update task successful"),t.$emit("done");case 9:e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](0);case 13:return e.prev=13,t.isSettingData=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})))()},checkTitle:function(){return this.payload.title?this.payload.title.length>100?(this.errorCodes.title=c["a"].ERROR,this.errors.title="Length between from 5 to 100 letters",!1):(this.errorCodes.title=c["a"].DEFAULT,this.errors.title="",!0):(this.errors.title="This field is required",this.errorCodes.title=c["a"].ERROR,!1)},checkDueDate:function(){if(!this.payload.date)return this.errors.date="This field is required",this.errorCodes.date=c["a"].ERROR,!1;var t=new Date(this.currentDateTime),e=new Date(this.selectedDateTime);return t>e?(this.errors.date="This field is not be past",this.errors.date="This field is not be past",this.errorCodes.date=c["a"].ERROR,this.errorCodes.time=c["a"].ERROR,!1):(this.errorCodes.date=c["a"].DEFAULT,this.errorCodes.time=c["a"].DEFAULT,this.errors.date="",this.errors.time="",!0)},validateForm:function(){var t=this.checkTitle(),e=this.checkDueDate();return t&&e},resetForm:function(){},cancelForm:function(){this.$emit("cancel")},initData:function(){1==this.mode?(this.payload.date=this.currentDate,this.payload.time=this.currentTime,this.payload.priority="normal"):this.payload=Object(n["a"])({},this.content)}}),created:function(){},mounted:function(){this.initData()}},d=l,u=a("2877"),p=Object(u["a"])(d,i,r,!1,null,null,null);e["a"]=p.exports},"718d":function(t,e,a){},"7d93":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo"},[a("div",{staticClass:"container-fluid"},[a("app-sticky",[a("section",{staticStyle:{"background-color":"#F5F7FF"}},[a("h3",{staticClass:"text-center page-title"},[t._v("Todo List")]),a("div",{},[a("app-input",{attrs:{placeholder:"Search..."},model:{value:t.params.q,callback:function(e){t.$set(t.params,"q",e)},expression:"params.q"}}),a("div",{staticClass:"text-right"},[a("app-button",{staticClass:"mb-4",attrs:{nuxt:"",to:"/todo-list/add",size:"sm"}},[t._v(" Add ")])],1)],1)])]),a("section",[a("div",{staticClass:"todo__list"},[t.todoItems.length>0?a("div",t._l(t.todoItems,(function(e,i){return a("div",{key:i.id,staticClass:"mb-3 box"},[a("todo-item",{key:e.id,attrs:{detail:e},on:{show:t.showItem,remove:t.removeItem,toggleSelect:t.toggleSelect}}),t.editingItem.id==e.id?a("div",[a("hr",{staticClass:"my-4"}),a("form-add",{attrs:{mode:2,content:e},on:{cancel:t.cancelEdit,done:t.doneUpdate}})],1):t._e()],1)})),0):a("p",{staticClass:"todo--no-data text-center caption text-gray bg-white"},[t._v("No Data")]),t.isLoadingList?a("div",{staticClass:"todo__loading text-center"},[t._v("Loading...")]):t._e()])])],1),a("footer",{staticClass:"todo__footer",class:{"todo__footer--active":t.showFooter}},[a("div",{staticClass:"container d-flex align-items-center"},[a("p",{staticClass:"h5"},[t._v("Bulk Action:")]),a("div",{staticClass:"ml-auto"},[a("app-button",{staticClass:"mx-3",on:{click:function(e){return e.preventDefault(),t.markDoneTasks(e)}}},[t._v(" Done ")]),a("app-button",{attrs:{color:"error"},on:{click:function(e){return e.preventDefault(),t.removeMulti(e)}}},[t._v(" Remove ")])],1)])])])},r=[],s=(a("4de4"),a("caad"),a("2532"),a("96cf"),a("1da1")),n=a("5530"),o=a("2a04"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo-item"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"d-flex align-items-center todo-item__left"},[a("app-checkbox",{staticClass:"mr-3",on:{change:t.toggleSelected}}),a("p",{staticClass:"todo-item__title",attrs:{title:t.detail.title}},[t._v(t._s(t.detail.title))])],1),a("div",{staticClass:"ml-auto nowrap"},[a("app-button",{attrs:{color:"info",size:"sm"},on:{click:function(e){return e.preventDefault(),t.show()}}},[t._v(" Detail ")]),a("app-button",{staticClass:"ml-3",attrs:{color:"error",size:"sm"},on:{click:function(e){return e.preventDefault(),t.remove()}}},[t._v(" Remove ")])],1)])])},l=[],d={props:{detail:{type:Object,default:function(){}}},data:function(){return{checked:!1}},methods:{show:function(){this.$emit("show",this.detail)},remove:function(){this.$emit("remove",this.detail)},toggleSelected:function(t){this.$emit("toggleSelect",t,this.detail)}}},u=d,p=(a("c8cd"),a("2877")),m=Object(p["a"])(u,c,l,!1,null,"90a8ed8a",null),h=m.exports,f=a("2f62"),v={name:"TodoList",components:{FormAdd:o["a"],TodoItem:h},data:function(){return{isLoadingList:!1,editingItem:{},selectedItems:[],params:{q:""}}},computed:Object(n["a"])(Object(n["a"])({},Object(f["c"])("todo",["todoItems"])),{},{showFooter:function(){return this.selectedItems.length>0}}),watch:{"params.q":function(t){this.getList()}},created:function(){this.getList()},methods:Object(n["a"])(Object(n["a"])({},Object(f["b"])("todo",["getTodos","deleteTodo","deleteTodos","markDone"])),{},{getList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoadingList=!0,e.next=4,t.getTodos(t.params);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log("[error]",e.t0);case 9:return e.prev=9,t.isLoadingList=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},showItem:function(t){this.editingItem=t},removeItem:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=confirm("Are you sure?"),!i){a.next=12;break}return a.prev=2,a.next=5,e.deleteTodo(t.id);case 5:e.getList(),alert("Delete task successful"),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log("[error]",a.t0);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})))()},toggleSelect:function(t,e){var a=this.selectedItems.includes(e.id);a?t||(this.selectedItems=this.selectedItems.filter((function(t){return t!==e.id}))):t&&this.selectedItems.push(e.id)},markDoneTasks:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=confirm("Are you sure?"),!a){e.next=8;break}return e.next=5,t.markDone(t.selectedItems);case 5:alert("Mark done tasks successful"),t.selectedItems=[],t.getList();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("[error]",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},removeMulti:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=confirm("Are you sure?"),!a){e.next=8;break}return e.next=5,t.deleteTodos(t.selectedItems);case 5:alert("Remove tasks successful"),t.selectedItems=[],t.getList();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("[error]",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},doneUpdate:function(){this.getList(),this.editingItem={}},cancelEdit:function(){this.editingItem={}}})},b=v,g=(a("f7e3"),Object(p["a"])(b,i,r,!1,null,"230680ec",null));e["default"]=g.exports},c8cd:function(t,e,a){"use strict";var i=a("cbe9"),r=a.n(i);r.a},cbe9:function(t,e,a){},f7e3:function(t,e,a){"use strict";var i=a("718d"),r=a.n(i);r.a}}]);