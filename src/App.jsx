import React from 'react';
import {createRoot} from 'react-dom/client';
import {sipData} from './data/sipData';
import './App.css';
import Dashboard from './components/Dashboard';
import MonthlyTracker from './components/MonthlyTracker';
import Projection from './components/Projection';
import Portfolio from './components/Portfolio';
import AskAI from './components/AskAI';
import History from './components/History';

if('serviceWorker' in navigator){
 navigator.serviceWorker.register('/sw.js');
}

function App(){
 return <main>
 <h1>SIP Tracker v7</h1>
 <Dashboard items={sipData}/>
 <MonthlyTracker items={sipData}/>
 <Portfolio items={sipData}/>
 <Projection />
 <History />
 <AskAI items={sipData}/>
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);
