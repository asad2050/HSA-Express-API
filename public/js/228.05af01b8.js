(self["webpackChunkhsa_spa"]=self["webpackChunkhsa_spa"]||[]).push([[228],{4940:function(t,e,s){"use strict";s.r(e);var n=s(1601),a=s.n(n),i=s(6314),o=s.n(i),r=o()(a());r.push([t.id,"section[data-v-a9d01972]{margin:2rem 4rem;max-width:100%;padding:0;display:flex;flex-direction:column;align-items:center;flex:1}ol[data-v-a9d01972]{padding:1rem 0;padding:0;display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:row}.consulted[data-v-a9d01972],ol[data-v-a9d01972]{max-width:100%;list-style:none;margin:0;justify-content:center}.consulted[data-v-a9d01972]{padding:1rem 0}.body[data-v-a9d01972],.consulted[data-v-a9d01972]{display:flex;flex-direction:column}.body[data-v-a9d01972]{justify-content:center;font-weight:700;padding:.5rem}.body .dosage[data-v-a9d01972],.body .drug[data-v-a9d01972]{gap:.5rem}.body .parent[data-v-a9d01972]{display:flex;gap:.5rem;padding:.5rem}.body span[data-v-a9d01972]{font-weight:400}.body .heading[data-v-a9d01972]{font-weight:700;margin-right:.5rem}h4[data-v-a9d01972]{font-size:var(--h4-laptop)}h4[data-v-a9d01972],p[data-v-a9d01972]{margin:0}p[data-v-a9d01972]{display:inline-block;padding:0;font-family:inherit;font-size:inherit}li[data-v-a9d01972]{list-style:none;font-size:var(--h5-laptop);font-family:Open Sans;font-weight:400;margin:.5rem;text-align:left;max-width:100%;word-wrap:break-word}span[data-v-a9d01972]{font-weight:700;font-size:inherit}",""]),e["default"]=r},228:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return K}});var n=s(6768),a=s(4232);const i=t=>((0,n.Qi)("data-v-a9d01972"),t=t(),(0,n.jt)(),t),o={class:"error-message"},r={key:0},d={key:1},l=i((()=>(0,n.Lk)("h4",null,"Appointment Details",-1))),p=i((()=>(0,n.Lk)("span",null,"Patient: ",-1))),c=i((()=>(0,n.Lk)("span",null,"Doctor: ",-1))),u=i((()=>(0,n.Lk)("span",null,"Date: ",-1))),m=i((()=>(0,n.Lk)("span",null,"Start Time: ",-1))),h=i((()=>(0,n.Lk)("span",null,"Duration: ",-1))),g=i((()=>(0,n.Lk)("span",null,"Status: ",-1))),f=i((()=>(0,n.Lk)("span",null,"Hospital: ",-1))),k=i((()=>(0,n.Lk)("span",null,"Address: ",-1))),A={class:"consulted"},v={key:0,class:"prescription"},L=i((()=>(0,n.Lk)("span",{class:"heading"}," Prescriptions",-1))),b={class:"body"},y={class:"drug"},_=i((()=>(0,n.Lk)("span",{class:"heading"},"Drug:",-1))),C={class:"dosage"},E=i((()=>(0,n.Lk)("span",{class:"heading"}," Dosage: ",-1))),w={key:1},x=i((()=>(0,n.Lk)("span",{class:"heading"},"Lab Test: ",-1))),F={class:"body"},$={class:"heading"},D={key:2},N=i((()=>(0,n.Lk)("span",null,"Notes: ",-1))),T={key:3},S={class:"heading"},W={class:"body"},X={class:"heading"};function I(t,e,s,i,I,P){const H=(0,n.g2)("base-dialog"),Q=(0,n.g2)("base-spinner"),z=(0,n.g2)("base-card"),K=(0,n.g2)("base-button"),M=(0,n.g2)("base-button-container");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(H,{show:!!I.error,title:"An error occurred",onClose:P.handleError},{default:(0,n.k6)((()=>[(0,n.Lk)("p",o,(0,a.v_)(I.error),1)])),_:1},8,["show","onClose"]),I.isLoading?((0,n.uX)(),(0,n.CE)("div",r,[(0,n.bF)(Q)])):(0,n.Q3)("",!0),P.selectedAppointment&&!I.isLoading?((0,n.uX)(),(0,n.CE)("section",d,[l,(0,n.bF)(z,null,{default:(0,n.k6)((()=>[(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,[p,(0,n.eW)((0,a.v_)(P.getPatientName),1)]),(0,n.Lk)("li",null,[c,(0,n.eW)((0,a.v_)(P.getDoctorName),1)]),(0,n.Lk)("li",null,[u,(0,n.eW)((0,a.v_)(P.getDate),1)]),(0,n.Lk)("li",null,[m,(0,n.eW)((0,a.v_)(P.getStartTime),1)]),(0,n.Lk)("li",null,[h,(0,n.eW)((0,a.v_)(P.getDuration),1)]),(0,n.Lk)("li",null,[g,(0,n.eW)((0,a.v_)(P.getStatus),1)]),(0,n.Lk)("li",null,[f,(0,n.eW)((0,a.v_)(P.getHospitalName),1)]),(0,n.Lk)("li",null,[k,(0,n.eW)((0,a.v_)(P.getHospitalAddress),1)])]),(0,n.Lk)("ol",A,[P.isPrescriptionExist?((0,n.uX)(),(0,n.CE)("li",v,[L,(0,n.Lk)("span",b,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(P.selectedAppointment?.prescriptions??[],((t,e)=>((0,n.uX)(),(0,n.CE)("span",{class:"parent",key:e},[(0,n.eW)((0,a.v_)(e+1)+" ",1),(0,n.Lk)("span",y,[_,(0,n.Lk)("span",null,(0,a.v_)(t.drug),1)]),(0,n.Lk)("span",C,[E,(0,n.Lk)("span",null,(0,a.v_)(t.dosage),1)])])))),128))])])):(0,n.Q3)("",!0),P.isLabTestExist?((0,n.uX)(),(0,n.CE)("li",w,[x,(0,n.Lk)("span",F,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(P.selectedAppointment?.testPrescribed??[],((t,e)=>((0,n.uX)(),(0,n.CE)("span",{class:"parent",key:e},[(0,n.Lk)("span",$,"Test "+(0,a.v_)(e+1)+": ",1),(0,n.Lk)("span",null,(0,a.v_)(t),1)])))),128))])])):(0,n.Q3)("",!0),P.isNotesExist?((0,n.uX)(),(0,n.CE)("li",D,[N,(0,n.eW)((0,a.v_)(P.getNotes),1)])):(0,n.Q3)("",!0),P.isFeesExist?((0,n.uX)(),(0,n.CE)("li",T,[(0,n.Lk)("span",S," Fees: Total "+(0,a.v_)(P.selectedAppointment.fees?.totalAmount??0),1),(0,n.Lk)("span",W,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(P.selectedAppointment?.fees?.feesStructure??[],((t,e)=>((0,n.uX)(),(0,n.CE)("span",{class:"parent",key:e},[(0,n.eW)((0,a.v_)(e+1)+" ",1),(0,n.Lk)("span",X,(0,a.v_)(t.feesType)+":",1),(0,n.Lk)("span",null,(0,a.v_)(t.Amount)+"Rs.",1)])))),128))])])):(0,n.Q3)("",!0)])])),_:1}),(0,n.bF)(M,null,{default:(0,n.k6)((()=>[(0,n.bF)(K,{onClick:e[0]||(e[0]=t=>P.submit("approved")),mode:"primary"},{default:(0,n.k6)((()=>[(0,n.eW)("Approve")])),_:1}),(0,n.bF)(K,{onClick:e[1]||(e[1]=t=>P.submit("cancelled")),mode:"red"},{default:(0,n.k6)((()=>[(0,n.eW)("Cancel")])),_:1}),(0,n.bF)(K,{onClick:P.back,mode:"flat"},{default:(0,n.k6)((()=>[(0,n.eW)("Go Back")])),_:1},8,["onClick"])])),_:1})])):(0,n.Q3)("",!0)],64)}s(4114);var P=s(4116),H={props:["aId"],data(){return{isEditing:!1,isLoading:!1,error:null,success:!1,formIsValid:!0,date:"",time:""}},methods:{async submit(t){const e={dId:this.selectedAppointment.doctor._id,aId:this.aId,status:t};console.log(e);try{this.isLoading=!0,await this.$store.dispatch("admin/updateAppointmentStatusOne",e),this.isLoading=!1,this.success=!0}catch(s){this.error=s.message||"Could not update status of appointment"}},checkForm(){return this.errors=[],this.date&&/^\d{4}-\d{2}-\d{2}$/.test(this.date)||this.errors.push("date is invalid"),this.time&&""!==this.time&&/^([01]\d|2[0-3]):([0-5]\d)$/.test(this.time)||this.errors.push("booking time is invalid"),!this.errors.length},handleError(){this.error=null},handleSuccess(){this.success=!1},back(){this.$router.back()}},computed:{getDate(){return this.selectedAppointment.ISTDateString??""},selectedAppointment(){return this.$store.getters["admin/appointmentDetails"]},getHospitalAddress(){return this.selectedAppointment?.hospitalAddress?`${this.selectedAppointment.hospitalAddress.streetAddress[0]}, ${this.selectedAppointment.hospitalAddress.streetAddress[1]}, ${this.selectedAppointment.hospitalAddress.city}`:""},getStartTime(){if(this.selectedAppointment?.startTime){const t=P.c9.fromFormat(this.selectedAppointment.startTime,"HH:mm",{zone:"Asia/Kolkata"});return t.toLocaleString({hour:"numeric",minute:"2-digit"}).toLowerCase()}return""},getDuration(){return this.selectedAppointment?.duration?`${this.selectedAppointment.duration} Minutes`:""},getDoctorName(){return this.selectedAppointment?.doctorName?`Dr.${this.selectedAppointment.doctorName}`:""},getPatientName(){return this.selectedAppointment?.patientName??""},getHospitalName(){return this.selectedAppointment?.hospitalName??""},getStatus(){return this.selectedAppointment?.status??""},getNotes(){return this.selectedAppointment?.notes??""},getFees(){if(!this.selectedAppointment?.fees)return"";const t=`totalAmount: ${this.selectedAppointment.fees.totalAmount}\n`;let e="";for(const s of this.selectedAppointment.fees.feesStructure)e+=`${s.feeType} Amount: ${s.amount}\n`;return t+e},getPrescription(){if(!this.selectedAppointment?.prescriptions)return"";let t="";for(const e of this.selectedAppointment.prescriptions)t+=`drug: ${e.drug} dosage: ${e.dosage}\n`;return t},getLabTest(){if(!this.selectedAppointment?.testPrescribed)return"";let t="";for(const e of this.selectedAppointment.testPrescribed)t+=`Test name: ${e}\n`;return t},isPrescriptionExist(){return this.selectedAppointment?.prescriptions?.length>0??!1},isLabTestExist(){return this.selectedAppointment?.testPrescribed?.length>0??!1},isFeesExist(){return this.selectedAppointment?.fees?.length>0??!1},isNotesExist(){return this.selectedAppointment?.notes??!1}},async created(){const t={aId:this.aId};this.isLoading=!0;try{await this.$store.dispatch("admin/fetchAppointmentDetails",t),this.isLoading=!1}catch(e){this.error=e.message||"failed to fetch"}console.log(this.isLoading)}},Q=(s(6805),s(1241));const z=(0,Q.A)(H,[["render",I],["__scopeId","data-v-a9d01972"]]);var K=z},6805:function(t,e,s){var n=s(4940);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=s(8459).A;a("2ce18d79",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=228.05af01b8.js.map