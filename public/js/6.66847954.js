(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{2753:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",[a("q-carousel",{ref:"carousel",staticStyle:{height:"100vh"},attrs:{swipeable:"",animated:"",infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("q-carousel-slide",{attrs:{name:1,"img-src":"https://cdn2.vectorstock.com/i/1000x1000/36/66/e-voting-concept-characters-voting-using-tablet-vector-22713666.jpg"}})],1)],1),a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{staticClass:"q-mb-sm",attrs:{rounded:"",outlined:"",label:"Search",type:"text",dense:"",hint:"Search Elections"},model:{value:t.setSearch,callback:function(e){t.setSearch=e},expression:"setSearch"}})],1)]),a("q-markup-table",[a("thead",{staticClass:"bg-indigo-8 text-white"},[a("tr",[a("th",{staticClass:"text-left"},[t._v("S/N")]),a("th",{staticClass:"text-left"},[t._v("Organization")]),a("th",{staticClass:"text-center"},[t._v("No of Candidates")]),a("th",{staticClass:"text-right"},[t._v("Election start Date")]),a("th",{staticClass:"text-right"},[t._v("Election end Date")])])]),t.getElections&&t.getElections.length>0?a("tbody",{staticClass:"bg-grey-4"},t._l(t.getElections,(function(e,i){return a("tr",{key:i,on:{click:function(a){return t.gotoElection(e)}}},[a("td",{staticClass:"text-left"},[t._v(t._s(i+1))]),a("td",{staticClass:"text-left"},[t._v(t._s(e.name))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.candidates.length))]),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(new Date(e.startTime).toLocaleDateString())+" "),a("br"),t._v("\n          "+t._s(new Date(e.startTime).getHours())+":\n          "+t._s(""+(new Date(e.startTime).getMinutes()>9?new Date(e.startTime).getMinutes():"0"+new Date(e.startTime).getMinutes()))+"\n        ")]),a("td",{staticClass:"text-right"},[t._v("\n          "+t._s(new Date(e.endTime).toLocaleDateString())+" "),a("br"),t._v("\n          "+t._s(new Date(e.endTime).getHours())+":\n          "+t._s(""+(new Date(e.endTime).getMinutes()>9?new Date(e.endTime).getMinutes():"0"+new Date(e.endTime).getMinutes()))+"\n        ")]),a("q-dialog",{attrs:{"full-width":""},model:{value:t.setDialog,callback:function(e){t.setDialog=e},expression:"setDialog"}},[a("q-card",[a("edit-election",{attrs:{election:t.editableElelction}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{color:"negative",label:"close"},on:{click:function(e){t.setDialog=!1}}})],1)],1)],1)],1)})),0):a("tbody",{staticClass:"bg-grey-4"},[a("tr",[a("td",{staticClass:"text-left"},[t._v("No Election Found")])])])])],1)])},s=[],n=a("ded3"),l=a.n(n),c=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",label:3===t.step?"Finish":"Continue"},on:{click:function(e){return t.submit(t.step)}}}),t.step>1?a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e()],1)]},proxy:!0},{key:"message",fn:function(){return[1===t.step?a("q-banner",{staticClass:"bg-purple-8 text-white q-px-lg"},[t._v("\n              Campaign settings are important...\n              ")]):2===t.step?a("q-banner",{staticClass:"bg-orange-8 text-white q-px-lg"},[t._v("\n              End Time must be greater than Start time\n              ")]):a("q-banner",{staticClass:"bg-blue-8 text-white q-px-lg"},[t._v("\n              The final step is creating the ad...\n              ")])]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{staticStyle:{"min-height":"200px"},attrs:{name:1,title:"Select campaign settings",icon:"settings",done:t.step>1}},[a("div",{staticClass:"row"},[a("q-input",{staticClass:"q-mb-sm col-6",attrs:{rounded:"",outlined:"",label:"Election Name",type:"text","lazy-rules":"",dense:"",hint:"Enter the name of the Election"},model:{value:t.electionName,callback:function(e){t.electionName=e},expression:"electionName"}})],1)]),a("q-step",{staticStyle:{"min-height":"200px"},attrs:{name:2,title:"Create an ad group",caption:"Optional",icon:"create_new_folder",done:t.step>2}},[a("div",{staticClass:"row"},[a("q-input",{staticClass:"col-6 q-pa-sm",attrs:{filled:"",hint:"when will the election start"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),a("q-input",{staticClass:"col-6 q-pa-sm",attrs:{filled:"",hint:"when will the election end"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)]),a("q-step",{staticStyle:{"min-height":"200px"},attrs:{name:3,title:"Create an ad",icon:"add_comment"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-card",[a("q-card-section",{staticClass:"row text-center bg-primary"},[a("div",{staticClass:"text-h6 col-12 text-center text-white"},[t._v("Add Candidate")])]),a("q-card-section",[a("q-form",{on:{submit:t.addCandidate}},[a("q-input",{staticClass:"q-mb-sm",attrs:{rounded:"",outlined:"",label:"Candidate Name",type:"text","lazy-rules":"",rules:[function(t){return!!t||"Field is required"}],dense:""},model:{value:t.candidateLabel,callback:function(e){t.candidateLabel=e},expression:"candidateLabel"}}),a("q-input",{staticClass:"q-mb-sm",attrs:{rounded:"",outlined:"",label:"Candidate Agenda",type:"text",rules:[function(t){return!!t||"Field is required"}],"lazy-rules":"",dense:""},model:{value:t.candidateMandate,callback:function(e){t.candidateMandate=e},expression:"candidateMandate"}}),a("q-card-actions",{staticClass:"bg-primary",attrs:{align:"center"}},[a("q-btn",{staticClass:"text-black",attrs:{label:"Add",type:"submit",color:"white"}})],1)],1)],1)],1)],1),a("div",{staticClass:"col-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h6",[t._v("Candidates")]),t.candidates.length>0?a("ol",t._l(t.candidates,(function(e,i){return a("li",{key:i},[t._v("\n                                      "+t._s(e.label)+"\n                                      "),a("q-btn",{attrs:{icon:"edit",flat:"",color:"primary"},on:{click:function(a){t.editableAgenda=e.agenda,t.editableName=e.label,t.editableId=e.id,t.editDialog=!0}}}),a("q-btn",{attrs:{icon:"delete",flat:"",color:"negative"},on:{click:function(a){return t.deleteCan(i,e.id)}}})],1)})),0):t._e()])])])])])],1),a("q-dialog",{model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("q-card",[a("q-card-section",{staticClass:"row text-center bg-primary"},[a("div",{staticClass:"text-h6 col-12 text-center text-white"},[t._v("Edit")])]),a("q-separator",{staticClass:"q-mb-lg"}),a("q-input",{staticClass:"q-ma-sm",attrs:{rounded:"",outlined:"",label:"Candidate Name",type:"text","lazy-rules":"",dense:""},model:{value:t.editableName,callback:function(e){t.editableName=e},expression:"editableName"}}),a("q-input",{staticClass:"q-ma-sm",attrs:{rounded:"",outlined:"",label:"Candidate Agenda",type:"text","lazy-rules":"",dense:""},model:{value:t.editableAgenda,callback:function(e){t.editableAgenda=e},expression:"editableAgenda"}}),a("q-card-actions",{staticClass:"bg-primary",attrs:{align:"center"}},[a("q-btn",{staticClass:"text-black",attrs:{label:"Edit",color:"white"},on:{click:function(e){return t.editCan()}}})],1)],1)],1)],1)},r=[],d=(a("a434"),a("ddb0"),{props:{election:{type:Object}},mounted(){const t=l()({},this.election);this.candidates=[...t.candidates]},data(){return{step:1,electionName:this.election.name,startTime:new Date(this.election.startTime).toLocaleString(),endTime:new Date(this.election.endTime).toLocaleString(),candidates:[],candidateLabel:"",candidateMandate:"",buttonStep:!1,editableName:"",editableAgenda:"",editDialog:!1,editableId:""}},methods:l()(l()({},Object(c["b"])("elections",["editElection","deleteCandidate"])),{},{deleteCan(t,e){this.candidates.splice(t,1),this.deleteCandidate(e)},editCan(){const t=[];for(const e of this.candidates){let a=l()({},e);a.id===this.editableId&&(this.editableName&&!this.editableAgenda?a["label"]=this.editableName:this.editableAgenda&&!this.editableName?a["agenda"]=this.editableAgenda:this.editableAgenda&&this.editableName&&(a["agenda"]=this.editableAgenda,a["label"]=this.editableName)),t.push(a)}this.candidates=t},addCandidate(){this.candidates.push({label:this.candidateLabel,agenda:this.candidateMandate}),this.candidateLabel=" ",this.candidateMandate=" "},submit(t){let e="Field cannot be empty";if(3===t&&(e="Candidates must be more than one or cannot be empty"),t<=1&&this.electionName)this.$refs.stepper.next();else if(2===t)this.endTime>this.startTime&&this.$refs.stepper.next();else if(3===t&&this.candidates.length>1){const t={name:this.electionName,startTime:this.startTime,endTime:this.endTime,candidates:this.candidates,id:this.election.id},e={name:this.election.name,startTime:new Date(this.election.startTime).toLocaleString(),endTime:new Date(this.election.endTime).toLocaleString(),candidates:this.election.candidates,id:this.election.id};JSON.stringify(t)!==JSON.stringify(e)&&this.editElection(t)}else this.$q.notify({message:e,icon:"warning",color:"negative",textColor:"white"})}})}),p=d,m=a("2877"),u=a("f531"),b=a("87fe"),h=a("27f9"),g=a("0016"),f=a("7cbe"),C=a("52ee"),v=a("9c40"),q=a("ca78"),x=a("f09f"),y=a("a370"),w=a("0378"),T=a("4b7e"),_=a("b19c"),k=a("54e1"),D=a("24e8"),S=a("eb85"),N=a("7f67"),Q=a("eebe"),E=a.n(Q),M=Object(m["a"])(p,o,r,!1,null,null,null),A=M.exports;E()(M,"components",{QStepper:u["a"],QStep:b["a"],QInput:h["a"],QIcon:g["a"],QPopupProxy:f["a"],QDate:C["a"],QBtn:v["a"],QTime:q["a"],QCard:x["a"],QCardSection:y["a"],QForm:w["a"],QCardActions:T["a"],QStepperNavigation:_["a"],QBanner:k["a"],QDialog:D["a"],QSeparator:S["a"]}),E()(M,"directives",{ClosePopup:N["a"]});var Y={components:{EditElection:A},data(){return{slide:1,autoplay:!1}},computed:l()(l()(l()({},Object(c["c"])("elections",["getElections","editableElelction"])),Object(c["d"])("elections",["editDialog","search"])),{},{setDialog:{get(){return this.editDialog},set(t){this.closeDialog(t)}},setSearch:{get(){return this.search},set(t){return this.changeSearch(t)}}}),methods:l()({},Object(c["b"])("elections",["gotoElection","closeDialog","changeSearch"]))},j=Y,L=a("9989"),O=a("880c"),H=a("62cd"),z=a("32a7"),F=a("2bb1"),I=Object(m["a"])(j,i,s,!1,null,null,null);e["default"]=I.exports;E()(I,"components",{QPage:L["a"],QCarousel:O["a"],QCarouselSlide:H["a"],QCarouselControl:z["a"],QBtn:v["a"],QInput:h["a"],QMarkupTable:F["a"],QDialog:D["a"],QCard:x["a"],QCardActions:T["a"]})}}]);