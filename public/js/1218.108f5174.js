(self["webpackChunkhsa_spa"]=self["webpackChunkhsa_spa"]||[]).push([[1218],{4515:function(t,e,a){"use strict";a.r(e);var i=a(1601),s=a.n(i),n=a(6314),o=a.n(n),r=o()(s());r.push([t.id,".appointmentDetail[data-v-c245967c]{list-style:none;max-width:100%}article[data-v-c245967c]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border:1px solid var(--black);max-width:100%;max-height:32rem;padding:1rem;border-radius:8px}@media (max-width:1200px){.appointmentDetail[data-v-c245967c],article[data-v-c245967c]{max-width:100%}article[data-v-c245967c]{padding:.5rem}}@media (max-width:600px){article[data-v-c245967c]{display:grid;justify-items:center;width:100%}.appointmentDetail[data-v-c245967c]{width:100%;padding:0}}h4[data-v-c245967c]{font-size:var(--h5-laptop)}",""]),e["default"]=r},3736:function(t,e,a){"use strict";a.r(e);var i=a(1601),s=a.n(i),n=a(6314),o=a.n(n),r=o()(s());r.push([t.id,"section[data-v-1bb3c7fc]{margin:2rem auto;padding:0;display:flex;flex-direction:column;align-items:center;flex:1}ol[data-v-1bb3c7fc],section[data-v-1bb3c7fc]{max-width:100%}ol[data-v-1bb3c7fc]{padding:1rem 0;list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;justify-content:center;grid-auto-flow:row}h1[data-v-1bb3c7fc],ol[data-v-1bb3c7fc]{margin:0}h1[data-v-1bb3c7fc]{font-size:var(--h4-laptop)}li[data-v-1bb3c7fc]{list-style:none;font-size:var(--h5-laptop);font-family:Open Sans;font-weight:400;margin:.5rem;text-align:left;max-width:100%;word-wrap:break-word}span[data-v-1bb3c7fc]{font-weight:700;font-size:inherit}.form-control[data-v-1bb3c7fc]{margin:.5rem 0;text-align:left}.form-control label[data-v-1bb3c7fc]{font-family:Open Sans;font-size:var(--h6-laptop);font-weight:700}h5[data-v-1bb3c7fc]{font-size:var(--h5-laptop)}h4[data-v-1bb3c7fc]{font-size:var(--h4-laptop)}.container[data-v-1bb3c7fc]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem}.form-container[data-v-1bb3c7fc]{padding:.5rem;width:100%;max-width:100%}input[data-v-1bb3c7fc],select[data-v-1bb3c7fc]{display:block;width:100%;margin-top:.5rem;height:2.5rem;border:1px solid var(--primary-color);padding:.5rem;border-radius:8px;font-size:var(--h6-laptop)}input[data-v-1bb3c7fc]:focus,select[data-v-1bb3c7fc]:focus{background-color:var(--black-5)}#validation-message[data-v-1bb3c7fc],.error-message[data-v-1bb3c7fc]{color:red;font-size:var(--h6-laptop)}",""]),e["default"]=r},6649:function(t,e,a){"use strict";a.d(e,{A:function(){return u}});var i=a(6768),s=a(4232),n=a(5130);const o={class:"appointmentDetail"};function r(t,e,a,r,l,d){const c=(0,i.g2)("card-details-grid-element"),p=(0,i.g2)("base-grid"),u=(0,i.g2)("base-button"),h=(0,i.g2)("base-button-container");return(0,i.uX)(),(0,i.CE)("li",o,[(0,i.Lk)("article",null,[(0,i.Lk)("h4",null,[(0,i.eW)(" Appointment "),(0,i.bo)((0,i.Lk)("span",null,(0,s.v_)(a.index+1),513),[[n.aG,a.index+1]])]),(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Doctor: "+(0,s.v_)(d.getDoctorName),1)])),_:1}),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Patient: "+(0,s.v_)(d.getPatientName),1)])),_:1}),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Start: "+(0,s.v_)(d.getStartTime),1)])),_:1}),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Date: "+(0,s.v_)(this.date),1)])),_:1}),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Address: "+(0,s.v_)(d.getHospitalAddress),1)])),_:1}),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Status: "+(0,s.v_)(this.status),1)])),_:1}),this.fees?((0,i.uX)(),(0,i.Wv)(c,{key:0},{default:(0,i.k6)((()=>[(0,i.eW)("Total Fees: "+(0,s.v_)(d.getTotalAmount),1)])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(c,null,{default:(0,i.k6)((()=>[(0,i.eW)("Duration: "+(0,s.v_)(this.duration)+" minutes",1)])),_:1})])),_:1}),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,{link:"",to:d.appointmentDetailsLink,mode:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("View Detail")])),_:1},8,["to"]),d.isAdmin?((0,i.uX)(),(0,i.Wv)(u,{key:0,class:(0,s.C4)({disable:"approve"===l.disableButton}),onClick:e[0]||(e[0]=t=>d.approve(this.id)),mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Approve")])),_:1},8,["class"])):(0,i.Q3)("",!0),d.isAdmin?((0,i.uX)(),(0,i.Wv)(u,{key:1,class:(0,s.C4)({disable:"cancel"===l.disableButton}),onClick:e[1]||(e[1]=t=>d.cancel(this.id)),mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Cancel")])),_:1},8,["class"])):(0,i.Q3)("",!0),d.isDoctor?((0,i.uX)(),(0,i.Wv)(u,{key:2,link:"",to:d.appointmentConsultDetailsLink,mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Consult(Doctor)")])),_:1},8,["to"])):(0,i.Q3)("",!0),d.isDoctor||d.isAdmin?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)(u,{key:3,button:"",mode:"flat"},{default:(0,i.k6)((()=>[(0,i.eW)("Notify me")])),_:1}))])),_:1})])])}var l=a(4116),d={props:["id","doctorName","patientName","index","duration","startTime","date","status","hospitalAddress","fees"],data(){return{disableButton:null}},computed:{getTotalAmount(){return this.fees?.getTotalAmount??0},appointmentDetailsLink(){return this.isAdmin&&this.id?"/admin/appointments/"+this.id:this.isDoctor&&this.id?"/doctor/appointments/"+this.id:"/patient/appointments"===this.$route.path||"/doctor/appointments"===this.$route.path||"/doctor/appointments"===this.$route.path?this.$route.path+"/"+this.id:this.$route.path+"/appointments/"+this.id},appointmentConsultDetailsLink(){return"/doctor/consult/"+this.id??""},getHospitalAddress(){return(this.hospitalAddress?.streetAddress?.[0]??"")+(this.hospitalAddress?.streetAddress?.[1]??"")+(this.hospitalAddress?.city??"")},getStartTime(){if(this.startTime){const t=l.c9.fromFormat(this.startTime,"HH:mm",{zone:"Asia/Kolkata"});return t.toLocaleString({hour:"numeric",minute:"2-digit"}).toLowerCase()}return"Not available"},getDuration(){return this.duration+" Minutes"},getDoctorName(){return"doctor: "+(this.doctorName??"")},getPatientName(){return"patient: "+(this.patientName??"Unknown")},isDoctor(){return this.$store.getters["auth/isDoctor"]},isAdmin(){return this.$store.getters["auth/isAdmin"]}},methods:{approve(t){this.setDisableButton("approve"),this.$emit("approve",t)},cancel(t){this.setDisableButton("cancel"),this.$emit("cancel",t)},setDisableButton(t){this.disableButton===t?this.disableButton=null:this.disableButton=t}}},c=(a(5294),a(1241));const p=(0,c.A)(d,[["render",r],["__scopeId","data-v-c245967c"]]);var u=p},1766:function(t,e,a){"use strict";a.d(e,{A:function(){return d}});var i=a(6768);function s(t,e,a,s,n,o){const r=(0,i.g2)("AppointmentItem"),l=(0,i.g2)("base-list"),d=(0,i.g2)("base-card");return(0,i.uX)(),(0,i.Wv)(d,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,null,{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(this.appointments,((t,e)=>((0,i.uX)(),(0,i.Wv)(r,{key:t.id,onApprove:o.approve,onCancel:o.cancel,id:t.id,doctorName:t.doctorName,patientName:t.patientName,index:e,duration:t.duration,startTime:t.startTime,date:t.date,status:t.status,hospitalAddress:t.hospitalAddress,fees:t.fees},null,8,["onApprove","onCancel","id","doctorName","patientName","index","duration","startTime","date","status","hospitalAddress","fees"])))),128))])),_:1})])),_:1})}var n=a(6649),o={props:["appointments"],components:{AppointmentItem:n.A},data(){return{}},methods:{cat(){console.log(this.appointments)},approve(t){this.$emit("approveTop",t)},cancel(t){this.$emit("cancelTop",t)}}},r=a(1241);const l=(0,r.A)(o,[["render",s]]);var d=l},1218:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return D}});var i=a(6768),s=a(4232),n=a(5130);const o=t=>((0,i.Qi)("data-v-1bb3c7fc"),t=t(),(0,i.jt)(),t),r={class:"error-message"},l=o((()=>(0,i.Lk)("p",{class:"success"},"Appointment Booked Successfullly",-1))),d={key:0},c=o((()=>(0,i.Lk)("h1",null,"Patient Details",-1))),p=o((()=>(0,i.Lk)("span",null," Name: ",-1))),u=o((()=>(0,i.Lk)("span",null,"Email: ",-1))),h=o((()=>(0,i.Lk)("span",null,"Phone Number: ",-1))),m=o((()=>(0,i.Lk)("span",null,"Age: ",-1))),f=o((()=>(0,i.Lk)("span",null,"Sex: ",-1))),g=o((()=>(0,i.Lk)("span",null,"Height: ",-1))),b=o((()=>(0,i.Lk)("span",null,"Weight: ",-1))),v=o((()=>(0,i.Lk)("span",null,"Address: ",-1))),k={key:1,class:"appointment-row-container"},A=o((()=>(0,i.Lk)("h2",null,"Most Recent Appointments of Patient",-1))),_={key:0},w={key:1};function y(t,e,a,o,y,L){const x=(0,i.g2)("base-dialog"),N=(0,i.g2)("base-spinner"),W=(0,i.g2)("base-card"),D=(0,i.g2)("base-button"),C=(0,i.g2)("base-button-container"),F=(0,i.g2)("TheAppointmentsRow");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(x,{show:!!y.error,title:"An error occurred",onClose:L.handleError},{default:(0,i.k6)((()=>[(0,i.Lk)("p",r,(0,s.v_)(y.error),1)])),_:1},8,["show","onClose"]),(0,i.bF)(x,{show:y.success,title:"Appointment Booked Successfullly",onClose:L.handleSuccess},{default:(0,i.k6)((()=>[l])),_:1},8,["show","onClose"]),(0,i.bF)(x,{show:y.isLoading,title:"Loading...",fixed:""},{default:(0,i.k6)((()=>[(0,i.bF)(N)])),_:1},8,["show"]),y.isLoading?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("section",d,[c,(0,i.bF)(W,null,{default:(0,i.k6)((()=>[(0,i.Lk)("ol",null,[(0,i.Lk)("li",null,[p,(0,i.eW)((0,s.v_)(L.getName),1)]),(0,i.Lk)("li",null,[u,(0,i.eW)((0,s.v_)(L.getEmail),1)]),(0,i.Lk)("li",null,[h,(0,i.eW)((0,s.v_)(L.getPhoneNumber),1)]),(0,i.Lk)("li",null,[m,(0,i.eW)((0,s.v_)(L.getAge),1)]),(0,i.Lk)("li",null,[f,(0,i.eW)((0,s.v_)(L.getSex),1)]),(0,i.Lk)("li",null,[g,(0,i.eW)((0,s.v_)(L.getHeight),1)]),(0,i.Lk)("li",null,[b,(0,i.eW)((0,s.v_)(L.getWeight),1)]),(0,i.Lk)("li",null,[v,(0,i.eW)((0,s.v_)(L.getAddress),1)])])])),_:1}),(0,i.bF)(C,null,{default:(0,i.k6)((()=>[(0,i.bF)(D,{link:"",onClick:(0,n.D$)(L.back,["prevent"]),mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("Go Back")])),_:1},8,["onClick"])])),_:1})])),L.appointments?((0,i.uX)(),(0,i.CE)("section",k,[A,y.isLoading?((0,i.uX)(),(0,i.CE)("div",_,[(0,i.bF)(N)])):(0,i.Q3)("",!0),0===L.appointments?.length?((0,i.uX)(),(0,i.CE)("p",w," No Appointments for this patient ")):((0,i.uX)(),(0,i.Wv)(F,{key:2,appointments:L.appointments},null,8,["appointments"]))])):(0,i.Q3)("",!0)],64)}a(4114);var L=a(1766),x={props:["pId"],components:{TheAppointmentsRow:L.A},data(){return{isLoading:!1,error:null,patient:{},success:!1}},computed:{getName(){let t=this.patient?.name?.firstName+" "+this.patient?.name?.middleName+" "+this.patient?.name?.lastName;return this.patient.name?t:""},getEmail(){return this.patient.email??""},getAge(){return this.patient.age??""},getSex(){return this.patient.sex??""},getHeight(){return this.patient.height?this.patient.height?.foot+" foot "+this.patient.height?.inches+" inch":""},getWeight(){return this.patient.weight?this.patient.weight+" kg":""},getAddress(){return this.patient.address.state||this.patient.address.city||this.patient.district||this.patient.address.streetAddress[0]||this.patient.address.streetAddress[1]||this.patient.address.postalCode?this.patient.address.streetAddress[0]+", "+this.patient.address.city+", "+this.patient.address.state+", "+this.patient.address.postalCode:""},getPhoneNumber(){return this.patient.phoneNumber??""},appointments(){const t=this.$store.getters["doctor/searchedPatientAppointments"]??[],e=[];console.log(t);for(const a of t){const t={id:a?._id??"",patientName:a?.patientName??"",doctorName:a.doctorName??"",date:a?.ISTDateString??"",startTime:a?.startTime??"",hospitalAddress:a?.hospitalAddress??null,duration:a?.duration??null,hospitalName:a?.hospitalName??"",status:a?.status??"pending"};e.push(t)}return e}},methods:{back(){this.$router.back()},handleError(){this.error=null},handleSuccess(){this.success=!1}},async created(){this.isLoading=!0;try{await this.$store.dispatch("doctor/fetchPatientDetails",{pId:this.pId});const t=this.$store.getters["doctor/searchedPatientDetails"];console.log(t),this.patient={name:t.name,email:t.email,phoneNumber:t.phoneNumber,address:t.address,height:t.height||null,weight:t.weight||null,sex:t.sex,age:t.age}}catch(t){this.error=t.message||"Failed to fetch, try later."}this.isLoading=!1}},N=(a(5077),a(1241));const W=(0,N.A)(x,[["render",y],["__scopeId","data-v-1bb3c7fc"]]);var D=W},5294:function(t,e,a){var i=a(4515);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=a(8459).A;s("62d0b1f0",i,!0,{sourceMap:!1,shadowMode:!1})},5077:function(t,e,a){var i=a(3736);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=a(8459).A;s("2f5ac643",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=1218.108f5174.js.map