(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){e.exports={toggleBlock:"ToggleProp_toggleBlock__TyMf5"}},15:function(e,t,a){e.exports={loginPage:"Login_loginPage__13-VR",LogOrChange:"Login_LogOrChange__23P5k",form:"Login_form__xuFL8",input:"Login_input__1jEsU",wrongData:"Login_wrongData__3bnxt"}},154:function(e,t,a){e.exports=a(279)},159:function(e,t,a){},160:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(61),o=a.n(r),c=(a(159),a(23)),i=a(24),u=a(28),l=a(27),d=(a(160),a(65)),m=a.n(d),k=a(25),p=function(e){return Object(n.useEffect)((function(){e.isAuth&&e.setTasks(e.userId)})),s.a.createElement("div",{className:m.a.headerBlock},s.a.createElement("div",{className:m.a.logo},s.a.createElement(k.b,{to:"/",className:m.a.logo},"Todo List")),e.isAuth&&s.a.createElement("p",null,e.fullName))},f=a(66),_=a.n(f),h=function(e){return s.a.createElement("div",{className:_.a.navbarBlock},s.a.createElement(k.b,{className:_.a.navbarBlock__link,to:"/importantTasks"},"Important"),s.a.createElement(k.b,{className:_.a.navbarBlock__link,to:"/archivedTasks"},"Archive"))},v=a(123),E=a.n(v),b=a(42),T=a(30),g=a.n(T),N=a(124),I=a.n(N),O=function(e){return s.a.createElement("div",{className:I.a.toggleBlock},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:e.task.isImportant,onChange:function(){return t=e.task.id,a=!e.task.isImportant,void e.addToImportant(e.userId,t,a);var t,a}}),s.a.createElement("span",null,"IMPORTANT")),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:e.task.isArchived,onChange:function(){return t=e.task.id,a=!e.task.isArchived,void e.addToArchive(e.userId,t,a);var t,a}}),s.a.createElement("span",null,"ARCHIVED")))},j=a(89),B=a(20),A=a(125).create({baseURL:"http://localhost:8000/",headers:{"Content-type":"application/json; charset=UTF-8"}}),D=function(e){return A.get("tasks?userId=".concat(e))},M=function(e){return A.post("tasks?userId=".concat(e.userId),{description:e.description,isImportant:e.isImportant,isArchived:e.isArchived,isDone:e.isDone,editMode:e.editMode,userId:e.userId})},w=function(e,t){return A.patch("tasks/".concat(e),{isImportant:t})},y=function(e,t){return A.patch("tasks/".concat(e),{isArchived:t})},C=function(e,t){return A.patch("tasks/".concat(e),{description:t})},S=function(e){return A.delete("tasks/".concat(e))},x=function(e,t){return A.patch("tasks/".concat(e),{isDone:t})},L=function(e,t){return A.patch("tasks/".concat(e),{editMode:t})},R=function(e){return A.get("users",{params:{fullName:e}})},F=function(e){return A.post("users",{fullName:e.newName,password:e.newPassword})},P=function(e){return A.get("users?id=".concat(e))},U={tasks:[]},V=function(e){return function(t){D(e).then((function(e){t({type:"SET_TASKS",tasks:e.data})}))}},W=function(e,t,a){return function(n){w(t,a).then((function(t){n(V(e))}))}},H=function(e,t,a){return function(n){y(t,a).then((function(t){n(V(e))}))}},K=function(e,t,a){return function(n){C(t,a).then((function(t){n(V(e))}))}},J=function(e,t){return function(a){S(e).then((function(e){a(V(t))}))}},Y=function(e,t,a){return function(n){x(e,a).then((function(e){n(V(t))}))}},G=function(e,t,a){return function(n){L(e,a).then((function(e){n(V(t))}))}},q=a(9),X=Object(q.b)((function(e){return{tasks:e.tasksData.tasks,userId:e.usersData.id}}),{addToImportant:W,addToArchive:H,removeTask:J,editTask:K,doneTask:Y,toggleEditMode:G})((function(e){var t=Object(n.useState)(),a=Object(b.a)(t,2),r=a[0],o=a[1],c=function(t,a,n,s){e.tasks.map((function(r){if(r.id===a)switch(t){case"onChange":o(n);break;case"onFocus":o(r.description);break;case"editMode":e.toggleEditMode(a,e.userId,s)}}))};return s.a.createElement("div",{className:g.a.tasksListBlock},e.tasks.filter((function(e){return!e.isArchived})).map((function(t){return s.a.createElement("div",{className:g.a.task+" "+(t.isDone&&g.a.done),key:t.id},s.a.createElement("div",{className:g.a.valueBlock},s.a.createElement("input",{type:"text",className:g.a.task__descr+" "+(t.editMode&&g.a.task__editMode),value:t.editMode&&r||t.description,onChange:function(e){c("onChange",t.id,e.target.value,t.editMode)},onFocus:function(){c("onFocus",t.id,void 0,t.editMode)},onBlur:function(){var a;a=t.id,e.editTask(e.userId,a,r),o(""),c("editMode",t.id,void 0,!1)},disabled:!t.editMode}),s.a.createElement(O,Object.assign({},e,{task:t}))),s.a.createElement("div",{className:g.a.btnBlock},s.a.createElement("button",{onClick:function(){return e.doneTask(t.id,e.userId,!t.isDone)}},"DONE"),s.a.createElement("button",{onClick:function(){return c("editMode",t.id,void 0,!0)}},"EDIT"),s.a.createElement("button",{onClick:function(){return e.removeTask(t.id,e.userId)}},"REMOVE")))})))})),Z=a(35),z=a.n(Z),$=a(120),Q=a(121),ee=Object(Q.a)({form:"addTask"})((function(e){return s.a.createElement("div",{className:z.a.addTaskBlock},s.a.createElement("form",{onSubmit:e.handleSubmit((function(t){var a={description:t.taskDescr,isImportant:t.isImportant,isArchived:!1,isDone:!1,editMode:!1,userId:e.userId};e.addNewTask(a),t.taskDescr="",t.isImportant=!1})),className:z.a.addtTaskForm},s.a.createElement($.a,{className:z.a.inputTask,component:"input",name:"taskDescr",type:"text",placeholder:"What Do You Wanna Do?",autocomplete:"off"}),s.a.createElement("span",null,s.a.createElement($.a,{className:z.a.isImportant,component:"input",name:"isImportant",type:"checkbox"}),"Important"),e.error&&s.a.createElement("div",{className:z.a.wrongData},e.error),s.a.createElement("button",{className:z.a.addBtn},"Add")))})),te=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(ee,this.props)}}]),a}(s.a.Component),ae=Object(q.b)((function(e){return{tasks:e.tasksData.tasks,userId:e.usersData.id}}),{addNewTask:function(e){return function(t){M(e).then((function(e){t({type:"ADD_NEW_TASK",task:e.data})}))}}})(te),ne=function(e){return s.a.createElement("div",{className:E.a.MainBlock},s.a.createElement(ae,null),s.a.createElement(X,null))},se=a(8),re=a(43),oe=a.n(re),ce=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:oe.a.archivedTasksBlock},this.props.tasks.filter((function(e){return e.isArchived})).map((function(t){return s.a.createElement("div",{className:oe.a.task,key:t.id},s.a.createElement("div",{className:oe.a.valueBlock},s.a.createElement("input",{type:"text",className:oe.a.task__descr,value:t.description,disabled:!0}),s.a.createElement(O,Object.assign({},e.props,{task:t}))),s.a.createElement("div",{className:oe.a.btnBlock},s.a.createElement("button",{onClick:function(){return e.setState({editMode:!0})}},"EDIT"),s.a.createElement("button",{onClick:function(){return e.props.removeTask(t.id,e.props.userId)}},"REMOVE")))})))}}]),a}(s.a.Component),ie=Object(q.b)((function(e){return{tasks:e.tasksData.tasks,userId:e.usersData.id}}),{addToImportant:W,addToArchive:H,removeTask:J})(ce),ue=a(31),le=a.n(ue),de=Object(q.b)((function(e){return{tasks:e.tasksData.tasks,userId:e.usersData.id}}),{addToImportant:W,addToArchive:H,removeTask:J,editTask:K,doneTask:Y,toggleEditMode:G})((function(e){var t=Object(n.useState)(),a=Object(b.a)(t,2),r=a[0],o=a[1],c=function(t,a,n,s){e.tasks.map((function(r){if(r.id===a)switch(t){case"onChange":o(n);break;case"onFocus":o(r.description);break;case"editMode":e.toggleEditMode(a,e.userId,s)}}))};return s.a.createElement("div",{className:le.a.importantTasksBlock},e.tasks.filter((function(e){return e.isImportant&&!e.isArchived})).map((function(t){return s.a.createElement("div",{className:le.a.task+" "+(t.isDone&&le.a.done),key:t.id},s.a.createElement("div",{className:le.a.valueBlock},s.a.createElement("input",{type:"text",className:le.a.task__descr+" "+(t.editMode&&le.a.task__editMode),value:t.editMode&&r||t.description,onChange:function(e){c("onChange",t.id,e.target.value,t.editMode)},onFocus:function(){c("onFocus",t.id,void 0,t.editMode)},onBlur:function(){var a;a=t.id,e.editTask(e.userId,a,r),o(""),c("editMode",t.id,void 0,!1)},disabled:!t.editMode}),s.a.createElement(O,Object.assign({},e,{task:t}))),s.a.createElement("div",{className:le.a.btnBlock},s.a.createElement("button",{onClick:function(){return e.doneTask(t.id,e.userId,!t.isDone)}},"DONE"),s.a.createElement("button",{onClick:function(){return c("editMode",t.id,void 0,!0)}},"EDIT"),s.a.createElement("button",{onClick:function(){return e.removeTask(t.id,e.userId)}},"REMOVE")))})))})),me=a(15),ke=a.n(me),pe=function(e){var t=Object(n.useState)(!0),a=Object(b.a)(t,2),r=a[0],o=a[1];return s.a.createElement("div",{className:ke.a.loginPage},r?s.a.createElement(fe,{login:e.login}):s.a.createElement(_e,{register:e.register}),s.a.createElement("p",{className:ke.a.LogOrChange},"or",r?s.a.createElement("span",{onClick:function(){return o(!1)}}," Register"):s.a.createElement("span",{onClick:function(){return o(!0)}}," Login")))},fe=Object(Q.a)({form:"login"})((function(e){return s.a.createElement("div",{className:ke.a.loginBlock},s.a.createElement("h2",null,"Login"),s.a.createElement("form",{onSubmit:e.handleSubmit((function(t){e.login(t)})),className:ke.a.form},s.a.createElement($.a,{className:ke.a.input,component:"input",name:"fullName",type:"text",placeholder:"Your Full Name"}),s.a.createElement($.a,{className:ke.a.input,component:"input",name:"password",type:"password",placeholder:"Your Password"}),s.a.createElement("button",null,"Login"),e.error&&s.a.createElement("div",{className:ke.a.wrongData},e.error)))})),_e=Object(Q.a)({form:"register"})((function(e){return s.a.createElement("div",{className:ke.a.registerBlock},s.a.createElement("h2",null,"Register"),s.a.createElement("form",{onSubmit:e.handleSubmit((function(t){e.register(t)})),className:ke.a.form},s.a.createElement($.a,{className:ke.a.input,component:"input",name:"newName",type:"text",placeholder:"Full Name"}),s.a.createElement($.a,{className:ke.a.input,component:"input",name:"newPassword",type:"password",placeholder:"Password"}),s.a.createElement("button",null,"Register"),e.error&&s.a.createElement("div",{className:ke.a.wrongData},e.error)))})),he=a(38),ve={isAuth:!1},Ee=function(e,t){return{type:"SET_AUTH_USER_DATA",userData:e,isAuth:t}},be=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(pe,this.props)}}]),a}(s.a.Component),Te=Object(q.b)((function(e){return{userData:e.usersData.userData}}),{register:function(e){return function(t){R(e.newName).then((function(a){a.data.length>0?t(Object(he.a)("register",{_error:"\u0422\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"})):F(e).then((function(e){201===e.status?t(Ee(e.data,!0)):alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))}))}},login:function(e){return function(t){R(e.fullName).then((function(a){a.data.length&&e.password===a.data[0].password?P(a.data[0].id).then((function(e){t(Ee(e.data[0],!0))})):t(Object(he.a)("login",{_error:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}))}))}},logout:function(){return function(e){e(Ee(void 0,!1))}}})(be),ge=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(p,{isAuth:this.props.isAuth,fullName:this.props.fullName,userId:this.props.userId,setTasks:this.props.setTasks}),this.props.isAuth?s.a.createElement(s.a.Fragment,null,s.a.createElement(h,null),s.a.createElement("div",{className:"main"},s.a.createElement(se.a,{exact:!0,path:"/",render:function(){return s.a.createElement(ne,null)}}),s.a.createElement(se.a,{path:"/importantTasks",render:function(){return s.a.createElement(de,null)}}),s.a.createElement(se.a,{path:"/archivedTasks",render:function(){return s.a.createElement(ie,null)}}))):s.a.createElement(Te,null))}}]),a}(s.a.Component),Ne=Object(q.b)((function(e){return{isAuth:e.usersData.isAuth,userId:e.usersData.id,fullName:e.usersData.fullName}}),{setTasks:V})(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(7),Oe=a(128),je=a(122),Be=Object(Ie.c)({form:je.a,tasksData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return Object(B.a)(Object(B.a)({},e),{},{tasks:Object(j.a)(t.tasks)});case"ADD_NEW_TASK":var a=Object(B.a)({},t.task);return Object(B.a)(Object(B.a)({},e),{},{tasks:[a].concat(Object(j.a)(e.tasks))});default:return e}},usersData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(B.a)(Object(B.a)(Object(B.a)({},e),t.userData),{},{isAuth:t.isAuth});default:return e}}}),Ae=Object(Ie.d)(Be,Object(Ie.a)(Oe.a));window.store=Ae,o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k.a,null,s.a.createElement(q.a,{store:Ae},s.a.createElement(Ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){e.exports={tasksListBlock:"TasksList_tasksListBlock__j8ERD",task:"TasksList_task__3nxez",task__descr:"TasksList_task__descr__3rrdu",task__editMode:"TasksList_task__editMode__3vpxN",valueBlock:"TasksList_valueBlock__3ES4T",btnBlock:"TasksList_btnBlock__LjIXP",done:"TasksList_done__3aSJp"}},31:function(e,t,a){e.exports={importantTasksBlock:"ImportantTasks_importantTasksBlock__3e1rh",task:"ImportantTasks_task__1bso5",task__descr:"ImportantTasks_task__descr__1mTTb",task__editMode:"ImportantTasks_task__editMode__1oY74",valueBlock:"ImportantTasks_valueBlock__1baEd",btnBlock:"ImportantTasks_btnBlock__39IG9",done:"ImportantTasks_done__KMlyJ"}},35:function(e,t,a){e.exports={addTaskBlock:"AddTask_addTaskBlock__xgd3Z",addtTaskForm:"AddTask_addtTaskForm__2i8hZ",inputTask:"AddTask_inputTask__cv9Xp",isImportant:"AddTask_isImportant__18U4G",addBtn:"AddTask_addBtn__2fIlw"}},43:function(e,t,a){e.exports={archivedTasksBlock:"ArchivedTasks_archivedTasksBlock__21BqT",task:"ArchivedTasks_task__16Vmq",task__descr:"ArchivedTasks_task__descr__3Ax4R",valueBlock:"ArchivedTasks_valueBlock__2jMSm",btnBlock:"ArchivedTasks_btnBlock__3CV_D"}},65:function(e,t,a){e.exports={headerBlock:"Header_headerBlock__12bW1",logo:"Header_logo__2A2GR"}},66:function(e,t,a){e.exports={navbarBlock:"Navbar_navbarBlock__3rlp0",navbarBlock__link:"Navbar_navbarBlock__link__3ugs4"}}},[[154,1,2]]]);
//# sourceMappingURL=main.892befec.chunk.js.map