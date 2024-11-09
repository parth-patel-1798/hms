import{l as p,m as f,n as j,q as g,r as x,t as N,j as e,T as d,o as b,v as y,_ as u,w as v,N as w,e as R,f as F,i as S,k as A,P as E,M as L,x as k}from"./index-CHD2SblA.js";const q=p().shape({name:f().required("Role name is required.")}),M=({onClose:n,role:s})=>{const{register:r,handleSubmit:i,formState:{errors:a},setValue:c}=j({resolver:g(q),defaultValues:{name:(s==null?void 0:s.name)||""}});x.useEffect(()=>{s&&c("name",s.name)},[s,c]);const{mutate:o,isLoading:m}=N({mutationFn:t=>y({...t,id:s==null?void 0:s.id}),onSuccess:t=>{n&&n(!0),u.success(t.message)},onError:t=>{const{response:l}=t;u.error(l.data.message)}});return e.jsxs("form",{className:"flex flex-col gap-5 min-w-96",onSubmit:i(t=>o(t)),children:[e.jsx("div",{className:"px-2 grid grid-cols-1",children:e.jsxs("div",{className:"col-span-1 md:col-span-3 lg:col-span-6",children:[e.jsx(d,{variant:"body2",children:"Name"}),e.jsx(b,{size:"small",placeholder:"Name",...r("name"),name:"name",error:!!(a!=null&&a.name),errorText:!!a.name&&a.name.message})]})}),e.jsxs("div",{className:"inline-flex gap-2 justify-end",children:[e.jsx("button",{className:"px-3 py-1 border border-gray-500 text-gray-600 rounded-md",type:"reset",onClick:()=>{n&&n()},children:"Close"}),e.jsx("button",{type:"submit",className:"px-3 py-1 text-white rounded-md bg-teal-700 focus:bg-teal-900 outline-none",disabled:m,children:"Save & Next"})]})]})},D=()=>{const[n,s]=x.useState(!1),[r,i]=x.useState(null),{data:a,isLoading:c,refetch:o}=v({queryKey:["roles"],queryFn:k}),m=(l=!1)=>{s(!1),i(null),l&&o()},t=l=>{i(l),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold",children:"Roles"})}),e.jsx("small",{className:"text-xs font-normal text-gray-500",children:"Dashboard > Settings > Roles"})]}),e.jsxs("div",{className:"bg-white grid grid-cols-1 gap-3 p-2 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 items-center",children:[e.jsxs("div",{className:"flex-1 inline-flex w-full justify-between items-center",children:[e.jsx(d,{variant:"body1",className:"font-medium truncate",children:"Roles List"}),e.jsxs(w,{className:"rounded-md border p-2 font-medium inline-flex gap-1 items-center",to:"create",children:[e.jsx(R,{className:"text-gray-500"}),e.jsx("span",{className:"text-sm font-medium text-gray-500 cursor-pointer",children:"Add"})]})]}),e.jsxs("div",{className:"inline-flex w-full sm:w-auto items-center gap-2",children:[e.jsxs("button",{className:"p-2.5 sm:p-2 md:w-auto rounded-md border inline-flex gap-1 items-center",children:[e.jsx(F,{className:"text-gray-500"}),e.jsx("span",{className:"hidden sm:block text-sm font-medium text-gray-500 cursor-pointer",children:"Filter"})]}),e.jsx("input",{type:"search",className:"border rounded-md p-2 outline-none text-sm w-full sm:w-52",placeholder:"Search"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-white border-gray-300",children:[e.jsx("thead",{className:"text-sm font-normal w-full bg-gray-200",children:e.jsxs("tr",{className:"text-left",children:[e.jsx("th",{className:"p-2 font-semibold",children:"Name"}),e.jsx("th",{className:"p-2 font-semibold text-center",children:"Status"}),e.jsx("th",{className:"p-2 font-semibold text-right",children:"Action"})]})}),e.jsx("tbody",{children:a==null?void 0:a.data.map((l,h)=>e.jsxs("tr",{className:"bg-white hover:bg-gray-100 rounded-md ",children:[e.jsx("td",{className:"p-2 truncate",children:e.jsx(d,{variant:"body2",children:l.name})}),e.jsx("td",{className:"p-2 text-center",children:e.jsx(d,{component:"span",variant:"caption",className:"bg-green-500 text-white px-1.5 py-0.5 rounded-lg",children:"Activate"})}),e.jsx("td",{className:"p-2 ",children:e.jsxs("div",{className:"inline-flex items-center gap-2 float-end h-full",children:[e.jsx("div",{className:"text-slate-900 cursor-pointer",onClick:()=>t(l),children:e.jsx(S,{})}),e.jsx("button",{className:"text-red-800 cursor-pointer",children:e.jsx(A,{})})]})})]},h))})]})}),e.jsx("hr",{}),e.jsx(E,{})]})]}),e.jsx(L,{open:n,onClose:()=>s(!1),title:r?`Edit ${r.name} Role`:"Add Role",children:e.jsx(M,{onClose:m,role:r})})]})};export{D as default};
