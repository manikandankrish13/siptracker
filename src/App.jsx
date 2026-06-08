import React,{useState}from'react';import{createRoot}from'react-dom/client';

const sip=[
{name:'HDFC Mid Cap',type:'MF',amount:5000,done:false},
{name:'Parag Parikh Flexi Cap',type:'MF',amount:7000,done:false},
{name:'Quant ELSS',type:'MF',amount:2000,done:false},
{name:'NVIDIA',type:'US',amount:4000,done:false},
{name:'META',type:'US',amount:2500,done:false}
];
function App(){const[data,setData]=useState(sip);let done=data.filter(x=>x.done).length;return <div style={{background:'#0f172a',color:'white',minHeight:'100vh',padding:20}}><h1>SIP Tracker v7</h1><h2>Completion {Math.round(done/data.length*100)}%</h2>{data.map((x,i)=><div key={x.name} onClick={()=>setData(data.map((a,j)=>j===i?{...a,done:!a.done}:a))} style={{margin:10,padding:15,background:'#1e293b',borderRadius:12}}>{x.done?'✅':'⭕'} {x.name} ₹{x.amount}</div>)}</div>}

createRoot(document.getElementById('root')).render(<App/>);