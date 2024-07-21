(self["webpackChunkhsa_spa"]=self["webpackChunkhsa_spa"]||[]).push([[3358],{4515:function(t,e,a){"use strict";a.r(e);var i=a(1601),n=a.n(i),s=a(6314),o=a.n(s),r=o()(n());r.push([t.id,".appointmentDetail[data-v-c245967c]{list-style:none;max-width:100%}article[data-v-c245967c]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border:1px solid var(--black);max-width:100%;max-height:32rem;padding:1rem;border-radius:8px}@media (max-width:1200px){.appointmentDetail[data-v-c245967c],article[data-v-c245967c]{max-width:100%}article[data-v-c245967c]{padding:.5rem}}@media (max-width:600px){article[data-v-c245967c]{display:grid;justify-items:center;width:100%}.appointmentDetail[data-v-c245967c]{width:100%;padding:0}}h4[data-v-c245967c]{font-size:var(--h5-laptop)}",""]),e["default"]=r},8369:function(t,e,a){"use strict";a.r(e);var i=a(1601),n=a.n(i),s=a(6314),o=a.n(s),r=o()(n());r.push([t.id,"section[data-v-1dd10f50]{margin:1rem 2rem;padding:0;flex-direction:column;flex:1}.heading[data-v-1dd10f50],section[data-v-1dd10f50]{display:flex;align-items:center;max-width:100%}.heading[data-v-1dd10f50]{justify-content:space-around;list-style:none;margin:1rem 0}h2[data-v-1dd10f50]{font-size:var(--h4-laptop)}.heading li[data-v-1dd10f50]{margin-right:1rem;max-width:100%;font-size:var(--h5-laptop)}",""]),e["default"]=r},6649:function(t,e,a){"use strict";a.d(e,{A:function(){return c}});var i=a(6768),n=a(4232),s=a(5130);const o={class:"appointmentDetail"};function r(t,e,a,r,d,l){const u=(0,i.g2)("card-details-grid-element"),p=(0,i.g2)("base-grid"),c=(0,i.g2)("base-button"),m=(0,i.g2)("base-button-container");return(0,i.uX)(),(0,i.CE)("li",o,[(0,i.Lk)("article",null,[(0,i.Lk)("h4",null,[(0,i.eW)(" Appointment "),(0,i.bo)((0,i.Lk)("span",null,(0,n.v_)(a.index+1),513),[[s.aG,a.index+1]])]),(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Doctor: "+(0,n.v_)(l.getDoctorName),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Patient: "+(0,n.v_)(l.getPatientName),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Start: "+(0,n.v_)(l.getStartTime),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Date: "+(0,n.v_)(this.date),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Address: "+(0,n.v_)(l.getHospitalAddress),1)])),_:1}),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Status: "+(0,n.v_)(this.status),1)])),_:1}),this.fees?((0,i.uX)(),(0,i.Wv)(u,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Total Fees: "+(0,n.v_)(l.getTotalAmount),1)])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.eW)("Duration: "+(0,n.v_)(this.duration)+" minutes",1)])),_:1})])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,{link:"",to:l.appointmentDetailsLink,mode:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("View Detail")])),_:1},8,["to"]),l.isAdmin?((0,i.uX)(),(0,i.Wv)(c,{key:0,class:(0,n.C4)({disable:"approve"===d.disableButton}),onClick:e[0]||(e[0]=t=>l.approve(this.id)),mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Approve")])),_:1},8,["class"])):(0,i.Q3)("",!0),l.isAdmin?((0,i.uX)(),(0,i.Wv)(c,{key:1,class:(0,n.C4)({disable:"cancel"===d.disableButton}),onClick:e[1]||(e[1]=t=>l.cancel(this.id)),mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Cancel")])),_:1},8,["class"])):(0,i.Q3)("",!0),l.isDoctor?((0,i.uX)(),(0,i.Wv)(c,{key:2,link:"",to:l.appointmentConsultDetailsLink,mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Consult(Doctor)")])),_:1},8,["to"])):(0,i.Q3)("",!0),l.isDoctor||l.isAdmin?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)(c,{key:3,button:"",mode:"flat"},{default:(0,i.k6)((()=>[(0,i.eW)("Notify me")])),_:1}))])),_:1})])])}var d=a(4116),l={props:["id","doctorName","patientName","index","duration","startTime","date","status","hospitalAddress","fees"],data(){return{disableButton:null}},computed:{getTotalAmount(){return this.fees?.getTotalAmount??0},appointmentDetailsLink(){return this.isAdmin&&this.id?"/admin/appointments/"+this.id:this.isDoctor&&this.id?"/doctor/appointments/"+this.id:"/patient/appointments"===this.$route.path||"/doctor/appointments"===this.$route.path||"/doctor/appointments"===this.$route.path?this.$route.path+"/"+this.id:this.$route.path+"/appointments/"+this.id},appointmentConsultDetailsLink(){return"/doctor/consult/"+this.id??""},getHospitalAddress(){return(this.hospitalAddress?.streetAddress?.[0]??"")+(this.hospitalAddress?.streetAddress?.[1]??"")+(this.hospitalAddress?.city??"")},getStartTime(){if(this.startTime){const t=d.c9.fromFormat(this.startTime,"HH:mm",{zone:"Asia/Kolkata"});return t.toLocaleString({hour:"numeric",minute:"2-digit"}).toLowerCase()}return"Not available"},getDuration(){return this.duration+" Minutes"},getDoctorName(){return"doctor: "+(this.doctorName??"")},getPatientName(){return"patient: "+(this.patientName??"Unknown")},isDoctor(){return this.$store.getters["auth/isDoctor"]},isAdmin(){return this.$store.getters["auth/isAdmin"]}},methods:{approve(t){this.setDisableButton("approve"),this.$emit("approve",t)},cancel(t){this.setDisableButton("cancel"),this.$emit("cancel",t)},setDisableButton(t){this.disableButton===t?this.disableButton=null:this.disableButton=t}}},u=(a(5294),a(1241));const p=(0,u.A)(l,[["render",r],["__scopeId","data-v-c245967c"]]);var c=p},1766:function(t,e,a){"use strict";a.d(e,{A:function(){return l}});var i=a(6768);function n(t,e,a,n,s,o){const r=(0,i.g2)("AppointmentItem"),d=(0,i.g2)("base-list"),l=(0,i.g2)("base-card");return(0,i.uX)(),(0,i.Wv)(l,null,{default:(0,i.k6)((()=>[(0,i.bF)(d,null,{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(this.appointments,((t,e)=>((0,i.uX)(),(0,i.Wv)(r,{key:t.id,onApprove:o.approve,onCancel:o.cancel,id:t.id,doctorName:t.doctorName,patientName:t.patientName,index:e,duration:t.duration,startTime:t.startTime,date:t.date,status:t.status,hospitalAddress:t.hospitalAddress,fees:t.fees},null,8,["onApprove","onCancel","id","doctorName","patientName","index","duration","startTime","date","status","hospitalAddress","fees"])))),128))])),_:1})])),_:1})}var s=a(6649),o={props:["appointments"],components:{AppointmentItem:s.A},data(){return{}},methods:{cat(){console.log(this.appointments)},approve(t){this.$emit("approveTop",t)},cancel(t){this.$emit("cancelTop",t)}}},r=a(1241);const d=(0,r.A)(o,[["render",n]]);var l=d},3358:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var i=a(6768),n=a(4232);const s=t=>((0,i.Qi)("data-v-1dd10f50"),t=t(),(0,i.jt)(),t),o={class:"error-message"},r={key:0},d=s((()=>(0,i.Lk)("h2",null,"Appointments",-1))),l={key:0};function u(t,e,a,s,u,p){const c=(0,i.g2)("base-dialog"),m=(0,i.g2)("base-spinner"),h=(0,i.g2)("TheAppointmentsRow"),f=(0,i.g2)("base-button"),g=(0,i.g2)("base-button-container");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(c,{show:!!u.error,title:"An error occurred",onClose:p.handleError},{default:(0,i.k6)((()=>[(0,i.Lk)("p",o,(0,n.v_)(u.error),1)])),_:1},8,["show","onClose"]),u.isLoading?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(m)])):(0,i.Q3)("",!0),(0,i.Lk)("section",null,[d,u.error||p.appointments?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("p",l," No Appointments for this date ")),p.appointments&&0!==p.appointments.length?((0,i.uX)(),(0,i.Wv)(h,{key:1,appointments:p.appointments},null,8,["appointments"])):(0,i.Q3)("",!0),(0,i.bF)(g,null,{default:(0,i.k6)((()=>[u.currentPage>1?((0,i.uX)(),(0,i.Wv)(f,{key:0,mode:"outline",onClick:e[0]||(e[0]=t=>p.page(u.currentPage-1))},{default:(0,i.k6)((()=>[(0,i.eW)("Prev")])),_:1})):(0,i.Q3)("",!0),u.currentPage>1?((0,i.uX)(),(0,i.Wv)(f,{key:1,mode:"outline",onClick:e[1]||(e[1]=t=>p.page(1))},{default:(0,i.k6)((()=>[(0,i.eW)("1")])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(f,{mode:"outline",onClick:e[2]||(e[2]=t=>p.page(u.currentPage))},{default:(0,i.k6)((()=>[(0,i.eW)((0,n.v_)(u.currentPage),1)])),_:1}),(0,i.bF)(f,{mode:"outline",onClick:e[3]||(e[3]=t=>p.page(u.currentPage+1))},{default:(0,i.k6)((()=>[(0,i.eW)("Next")])),_:1})])),_:1}),(0,i.bF)(f,{link:"",onClick:p.back,mode:"flat"},{default:(0,i.k6)((()=>[(0,i.eW)("Back")])),_:1},8,["onClick"])])],64)}var p=a(1766),c={props:["date"],components:{TheAppointmentsRow:p.A},data(){return{isLoading:!1,error:null,currentPage:1}},computed:{appointments(){const t=this.$store.getters["patient/appointmentList"]??[];return t.map((t=>({id:t._id,patientName:t.patientName??"N/A",doctorName:t.doctorName??"N/A",date:t.ISTDateString??"",startTime:t.startTime??"",hospitalAddress:t.hospitalAddress??"",duration:t.duration??"",hospitalName:t.hospitalName??"",status:t.status??"pending",fees:t.fees??0})))}},methods:{back(){this.$router.back()},handleError(){this.error=null},async page(t){const e={page:t};try{this.isLoading=!0,await this.$store.dispatch("patient/fetchAllAppointments",e),this.currentPage=this.$store.getters["patient/appointmentsCurrentPage"]??1}catch(a){this.error=a.message??"Something went wrong!"}finally{this.isLoading=!1}}},async created(){this.isLoading=!0;try{await this.$store.dispatch("patient/fetchAllAppointments",{page:this.currentPage})}catch(t){this.error=t.message??"Something went wrong!"}finally{this.isLoading=!1}}},m=(a(5340),a(1241));const h=(0,m.A)(c,[["render",u],["__scopeId","data-v-1dd10f50"]]);var f=h},5294:function(t,e,a){var i=a(4515);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=a(8459).A;n("62d0b1f0",i,!0,{sourceMap:!1,shadowMode:!1})},5340:function(t,e,a){var i=a(8369);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var n=a(8459).A;n("1a7aca5a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=3358.d1998fa8.js.map