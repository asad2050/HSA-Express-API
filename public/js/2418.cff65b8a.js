(self["webpackChunkhsa_spa"]=self["webpackChunkhsa_spa"]||[]).push([[2418],{5220:function(e,t,a){"use strict";a.r(t);var i=a(1601),s=a.n(i),n=a(6314),o=a.n(n),r=o()(s());r.push([e.id,"li[data-v-110208c3]{list-style:none;max-width:100%;display:flex;align-items:center;justify-content:center}article li[data-v-110208c3]{font-size:var(--h5-laptop)}span[data-v-110208c3]{font-weight:700}article[data-v-110208c3]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #000;border-radius:8px;max-width:100%;max-height:32rem;padding:1rem}@media (max-width:1200px){.appointmentDetail[data-v-110208c3],article[data-v-110208c3]{max-width:100%}article[data-v-110208c3]{padding:.5rem}}@media (max-width:600px){article[data-v-110208c3]{display:grid;justify-items:center;width:100%}.appointmentDetail[data-v-110208c3]{width:100%;padding:0}}h4[data-v-110208c3]{font-size:var(--h5-laptop)}",""]),t["default"]=r},5622:function(e,t,a){"use strict";a.r(t);var i=a(1601),s=a.n(i),n=a(6314),o=a.n(n),r=o()(s());r.push([e.id,"section[data-v-44a86159]{margin:1rem 2rem;padding:0;display:flex;flex-direction:column;align-items:center;max-width:100%;flex:1}h2[data-v-44a86159]{font-size:var(--h3-laptop)}",""]),t["default"]=r},6977:function(e,t,a){"use strict";a.d(t,{A:function(){return v}});var i=a(6768),s=a(4232),n=a(5130);const o=e=>((0,i.Qi)("data-v-110208c3"),e=e(),(0,i.jt)(),e),r={key:0},l=o((()=>(0,i.Lk)("span",null,"Name:",-1))),d={key:0},c=o((()=>(0,i.Lk)("span",null,"Shifts: ",-1)));function u(e,t,a,o,u,f){const h=(0,i.g2)("base-grid"),m=(0,i.g2)("base-button"),p=(0,i.g2)("base-button-container");return(0,i.uX)(),(0,i.CE)("li",null,[(0,i.Lk)("article",null,[(0,i.Lk)("h4",null,[a.role?((0,i.uX)(),(0,i.CE)("span",r,(0,s.v_)(f.getRole),1)):(0,i.Q3)("",!0),(0,i.eW)(),(0,i.bo)((0,i.Lk)("span",null,(0,s.v_)(a.index+1),513),[[n.aG,a.index+1]])]),(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.Lk)("li",null,[l,(0,i.eW)(" "+(0,s.v_)(f.getStaffName),1)]),"doctor"===this.role?((0,i.uX)(),(0,i.CE)("li",d,[c,(0,i.eW)(" "+(0,s.v_)(f.getShifts),1)])):(0,i.Q3)("",!0)])),_:1}),(0,i.bF)(p,null,{default:(0,i.k6)((()=>[(0,i.bF)(m,{link:"",to:f.viewDetail,mode:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("View Detail")])),_:1},8,["to"]),"doctor"===this.role?((0,i.uX)(),(0,i.Wv)(m,{key:0,link:"",to:f.viewSchedule,mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("View Schedule")])),_:1},8,["to"])):(0,i.Q3)("",!0),"doctor"===this.role?((0,i.uX)(),(0,i.Wv)(m,{key:1,link:"",to:f.viewFees,mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("View Fees")])),_:1},8,["to"])):(0,i.Q3)("",!0),"doctor"===this.role?((0,i.uX)(),(0,i.Wv)(m,{key:2,link:"",to:f.viewConsult,mode:"outline"},{default:(0,i.k6)((()=>[(0,i.eW)("View Consult")])),_:1},8,["to"])):(0,i.Q3)("",!0)])),_:1})])])}var f=a(4116),h={props:["message","role","shifts","id","specialty","name","index"],methods:{},computed:{viewSchedule(){return"/admin/schedule/"+this.id},viewFees(){return"/admin/fees/"+this.id},viewConsult(){return"/admin/consult/"+this.id},viewDetail(){return"/admin/staff/"+this.id},getRole(){return this.role.toUpperCase()},getStaffName(){return this.name?.firstName+" "+this.name?.middleName+" "+this.name?.lastName},getShifts(){let e="";for(const[t,a]of this.shifts?.entries()??[]){const i=f.c9.fromFormat(a?.startTime,"HH:mm",{zone:"Asia/Kolkata"}).toLocaleString({hour:"numeric",minute:"2-digit"}).toLowerCase(),s=f.c9.fromFormat(a?.endTime,"HH:mm",{zone:"Asia/Kolkata"}).toLocaleString({hour:"numeric",minute:"2-digit"}).toLowerCase();t!==this.shifts?.length-1?e+=i+" - "+s+",":e+=i+" - "+s}return e}}},m=(a(1735),a(1241));const p=(0,m.A)(h,[["render",u],["__scopeId","data-v-110208c3"]]);var v=p},2418:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var i=a(6768),s=a(4232);const n=e=>((0,i.Qi)("data-v-44a86159"),e=e(),(0,i.jt)(),e),o={class:"error-message"},r={key:0},l=n((()=>(0,i.Lk)("h2",null,"Doctor List",-1)));function d(e,t,a,n,d,c){const u=(0,i.g2)("base-dialog"),f=(0,i.g2)("base-spinner"),h=(0,i.g2)("StaffItem"),m=(0,i.g2)("base-staff-list"),p=(0,i.g2)("base-card");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(u,{show:!!d.error,title:"An error occurred",onClose:e.handleError},{default:(0,i.k6)((()=>[(0,i.Lk)("p",o,(0,s.v_)(d.error),1)])),_:1},8,["show","onClose"]),d.isLoading?((0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(f)])):(0,i.Q3)("",!0),(0,i.Lk)("section",null,[l,c.doctors.length>0?((0,i.uX)(),(0,i.Wv)(p,{key:0},{default:(0,i.k6)((()=>[(0,i.bF)(m,null,{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(c.doctors,((e,t)=>((0,i.uX)(),(0,i.Wv)(h,{key:e.id,id:e.id,name:e.name,shifts:e.shifts,specialty:e.specialty,index:t,role:"doctor"},null,8,["id","name","shifts","specialty","index"])))),128))])),_:1})])),_:1})):(0,i.Q3)("",!0)])],64)}a(4114);var c=a(6977),u={components:{StaffItem:c.A},data(){return{error:null,isLoading:!1,success:!1}},computed:{doctors(){const e=[],t=this.$store.getters["admin/doctorList"]??[];if(console.log(t),t)for(const a of t){const t={name:a?.name??"",shifts:a?.shifts??[],specialty:a?.specialty??[],id:a?.sId??""};e.push(t)}return e}},async created(){this.isLoading=!0;try{await this.$store.dispatch("admin/fetchDoctorList"),this.isLoading=!1}catch(e){this.error=e.message||"Something went wrong!"}}},f=(a(8489),a(1241));const h=(0,f.A)(u,[["render",d],["__scopeId","data-v-44a86159"]]);var m=h},1735:function(e,t,a){var i=a(5220);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var s=a(8459).A;s("18d21a0a",i,!0,{sourceMap:!1,shadowMode:!1})},8489:function(e,t,a){var i=a(5622);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var s=a(8459).A;s("1698aa50",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=2418.cff65b8a.js.map