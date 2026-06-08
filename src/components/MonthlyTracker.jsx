import {useState} from 'react';

export default function MonthlyTracker({items}){
 const [done,setDone]=useState({});
 const toggle=n=>setDone({...done,[n]:!done[n]});
 const markAll=()=>setDone(Object.fromEntries(items.map(i=>[i.name,true])));
 const completed=items.filter(i=>done[i.name]);
 const paid=completed.reduce((a,b)=>a+b.amount,0);
 const total=items.reduce((a,b)=>a+b.amount,0);
 const pct=Math.round((completed.length/items.length)*100);
 return <section>
 <h2>● MONTHLY SIP TRACKER</h2>
 <div className='month'><h1>Jun 2026</h1><b>{pct}%</b><progress value={pct} max='100'/><p>{completed.length}/{items.length} done • ₹{(paid/1000).toFixed(1)}K debited</p></div>
 <button onClick={markAll}>✓ MARK ALL DONE</button>
 {items.map(x=><div className='sipitem' onClick={()=>toggle(x.name)} key={x.name}><span className='tick'>{done[x.name]?'✓':'○'}</span><b>{x.name}</b><strong>₹{(x.amount/1000).toFixed(1)}K</strong><small>{done[x.name]?'debited':'pending'}</small></div>)}
 </section>
}