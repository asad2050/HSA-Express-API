(self["webpackChunkhsa_spa"]=self["webpackChunkhsa_spa"]||[]).push([[2864],{2022:function(e,t,a){"use strict";a.r(t);var n=a(1601),s=a.n(n),i=a(6314),d=a.n(i),o=d()(s());o.push([e.id,"li[data-v-5fd90792]{list-style:none;max-width:100%}article h4[data-v-5fd90792]{font-size:var(--h5-laptop)}article li[data-v-5fd90792]{font-size:var(--h6-laptop);margin:.5rem}span[data-v-5fd90792]{font-weight:700}article[data-v-5fd90792]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #000;border-radius:8px;max-width:100%;padding:1rem}@media (max-width:1200px){article[data-v-5fd90792],li[data-v-5fd90792]{max-width:100%}article[data-v-5fd90792]{padding:.5rem}}@media (max-width:600px){article[data-v-5fd90792]{display:grid;justify-items:center;width:100%}.appointmentDetail[data-v-5fd90792]{width:100%;padding:0}}h4[data-v-5fd90792]{font-size:var(--h5-laptop);margin:1rem}",""]),t["default"]=o},5772:function(e,t,a){"use strict";a.r(t);var n=a(1601),s=a.n(n),i=a(6314),d=a.n(i),o=d()(s());o.push([e.id,"section[data-v-41454f39]{margin:1rem 2rem;padding:0;display:flex;flex-direction:column;align-items:center;max-width:100%;flex:1}.card[data-v-41454f39]{width:100%}h2[data-v-41454f39]{font-size:var(--h3-laptop)}h4[data-v-41454f39]{font-size:var(--h4-laptop)}",""]),t["default"]=o},8036:function(e,t,a){"use strict";a.d(t,{A:function(){return g}});var n=a(6768),s=a(4232),i=a(5130);const d=e=>((0,n.Qi)("data-v-5fd90792"),e=e(),(0,n.jt)(),e),o=d((()=>(0,n.Lk)("span",null,"Fees",-1))),r=d((()=>(0,n.Lk)("span",null,"Date:",-1))),l=d((()=>(0,n.Lk)("span",null,"Daily Count: ",-1))),c=d((()=>(0,n.Lk)("span",null,"Total Fees: ",-1)));function u(e,t,a,d,u,h){const f=(0,n.g2)("base-grid"),p=(0,n.g2)("base-button"),g=(0,n.g2)("base-button-container");return(0,n.uX)(),(0,n.CE)("li",null,[(0,n.Lk)("article",null,[(0,n.Lk)("h4",null,[o,(0,n.eW)(),(0,n.bo)((0,n.Lk)("span",null,(0,s.v_)(a.index+1),513),[[i.aG,a.index+1]])]),(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.Lk)("li",null,[r,(0,n.eW)(" "+(0,s.v_)(this.date),1)]),(0,n.Lk)("li",null,[l,(0,n.eW)(" "+(0,s.v_)(this.dailyCount),1)]),(0,n.Lk)("li",null,[c,(0,n.eW)(" "+(0,s.v_)(a.totalFees)+" Rs",1)])])),_:1}),(0,n.bF)(g,null,{default:(0,n.k6)((()=>[(0,n.bF)(p,{link:"",to:h.viewDetail,mode:"primary small"},{default:(0,n.k6)((()=>[(0,n.eW)("View Detail")])),_:1},8,["to"])])),_:1})])])}var h={props:["date","dailyCount","totalFees","index","dId"],computed:{viewDetail(){return this.$store.getters["auth/isAdmin"]?"/admin/fees/"+this.dId+"/"+this.date:"/doctor/fees/"+this.date}}},f=(a(3839),a(1241));const p=(0,f.A)(h,[["render",u],["__scopeId","data-v-5fd90792"]]);var g=p},2864:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(6768),s=a(4232);const i=e=>((0,n.Qi)("data-v-41454f39"),e=e(),(0,n.jt)(),e),d={class:"error-message"},o={key:0},r=i((()=>(0,n.Lk)("h2",null,"Fees List ",-1)));function l(e,t,a,i,l,c){const u=(0,n.g2)("base-dialog"),h=(0,n.g2)("base-spinner"),f=(0,n.g2)("FeeItem"),p=(0,n.g2)("base-list"),g=(0,n.g2)("base-card"),m=(0,n.g2)("base-button"),v=(0,n.g2)("base-button-container");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(u,{show:!!l.error,title:"An error occurred",onClose:c.handleError},{default:(0,n.k6)((()=>[(0,n.Lk)("p",d,(0,s.v_)(l.error),1)])),_:1},8,["show","onClose"]),l.isLoading?((0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(h)])):(0,n.Q3)("",!0),(0,n.Lk)("section",null,[r,(0,n.Lk)("h4",null,"Doctor:"+(0,s.v_)(c.getDoctorName),1),c.fees?.length>0?((0,n.uX)(),(0,n.Wv)(g,{key:0},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.fees,((e,t)=>((0,n.uX)(),(0,n.Wv)(f,{key:e.date,date:e.date,dailyCount:e.dailyCount,totalFees:e.totalFees,index:t,dId:this.dId},null,8,["date","dailyCount","totalFees","index","dId"])))),128))])),_:1})])),_:1})):(0,n.Q3)("",!0),(0,n.bF)(v,null,{default:(0,n.k6)((()=>[l.currentPage>1?((0,n.uX)(),(0,n.Wv)(m,{key:0,mode:"outline",onClick:t[0]||(t[0]=e=>c.page(l.currentPage-1))},{default:(0,n.k6)((()=>[(0,n.eW)("Prev")])),_:1})):(0,n.Q3)("",!0),l.currentPage>1?((0,n.uX)(),(0,n.Wv)(m,{key:1,mode:"outline",onClick:t[1]||(t[1]=e=>c.page(1))},{default:(0,n.k6)((()=>[(0,n.eW)("1")])),_:1})):(0,n.Q3)("",!0),(0,n.bF)(m,{mode:"outline",onClick:t[2]||(t[2]=e=>c.page(l.currentPage))},{default:(0,n.k6)((()=>[(0,n.eW)((0,s.v_)(l.currentPage),1)])),_:1}),(0,n.bF)(m,{mode:"outline",onClick:t[3]||(t[3]=e=>c.page(l.currentPage+1))},{default:(0,n.k6)((()=>[(0,n.eW)("Next")])),_:1})])),_:1}),(0,n.bF)(m,{link:"",onClick:c.back,mode:"flat"},{default:(0,n.k6)((()=>[(0,n.eW)("Back")])),_:1},8,["onClick"])])],64)}a(4114);var c=a(8036),u={components:{FeeItem:c.A},props:["dId"],data(){return{error:null,isLoading:!1,success:!1,currentPage:1}},computed:{fees(){const e=[],t=this.$store.getters["admin/selectedDoctorFeesList"]??[];if(console.log(t),t&&t.length>0)for(const a of t){const t={date:a.date,totalFees:a.totalFees??"",dailyCount:a.dailyCount??"",appointments:a.appointments??[]};e.push(t)}return e},doctor(){const e=this.$store.getters["admin/selectedDoctor"]??{};return{name:e?.name??"",id:e?._id??"",shifts:e?.shifts??[],specialty:e?.specialty??""}},getDoctorName(){return this.doctor&&this.doctor.name?this.doctor?.name?.firstName+" "+this.doctor?.name?.middleName+" "+this.doctor?.name?.lastName:""}},methods:{async page(e){const t={dId:this.dId,page:e??1};try{await this.$store.dispatch("admin/fetchSelectedDoctorFeesList",t),this.currentPage=this.$store.getters["admin/selectedDoctorFeesCurrentPage"]??1,this.isLoading=!1,console.log(this.currentPage)}catch(a){this.error=a.message??"Something went wrong!"}},handleError(){this.error=null},back(){this.$router.back()}},async created(){this.isLoading=!0;try{await this.$store.dispatch("admin/fetchSelectedDoctorFeesList",{page:1,dId:this.dId}),this.currentPage=this.$store.getters["admin/selectedDoctorFeesCurrentPage"],this.isLoading=!1}catch(e){this.error=e.message||"Something went wrong!"}}},h=(a(307),a(1241));const f=(0,h.A)(u,[["render",l],["__scopeId","data-v-41454f39"]]);var p=f},3839:function(e,t,a){var n=a(2022);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=a(8459).A;s("5003971c",n,!0,{sourceMap:!1,shadowMode:!1})},307:function(e,t,a){var n=a(5772);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var s=a(8459).A;s("1ec3e5d0",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=2864.7ace763b.js.map