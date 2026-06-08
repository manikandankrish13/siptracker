import React,{useState}from 'react';
import {createRoot}from'react-dom/client';
import {sipData}from'./data/sipData';
import'./App.css';
import Dashboard from'./components/Dashboard';
import MonthlyTracker from'./components/MonthlyTracker';
import Projection from'./components/Projection';
import Portfolio from'./components/Portfolio';
import AskAI from'./components/AskAI';
import History from'./components/History';

if('serviceWorker'in navigator){navigator.serviceWorker.register('/sw.js')}

function App(){
 const[tab,setTab]=useState('overview');
 return <main>
 <div className='top'><h1>₹41.17 Cr</h1><p>Projected 30yr Corpus</p><span>My MF ₹20K • My US ₹12K • Synced</span></div>
 <nav>{['overview','mf','us','tracker','history','ask ai'].map(x=><button onClick={()=>setTab(x)}>{x.toUpperCase()}</button>)}</nav>
 {tab==='overview'&&<><Dashboard items={sipData}/><Projection/></>}
 {tab==='mf'&&<Portfolio items={sipData.filter(x=>x.type==='MF')}/>} 
 {tab==='us'&&<Portfolio items={sipData.filter(x=>x.type==='US')}/>} 
 {tab==='tracker'&&<MonthlyTracker items={sipData}/>} 
 {tab==='history'&&<History/>}
 {tab==='ask ai'&&<AskAI items={sipData}/>} 
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);