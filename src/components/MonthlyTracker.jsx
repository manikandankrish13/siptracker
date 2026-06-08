import {useState} from 'react';

export default function MonthlyTracker({items}){
 const [done,setDone]=useState({});
 const toggle=(name)=>setDone({...done,[name]:!done[name]});
 const count=Object.values(done).filter(Boolean).length;
 const pct=Math.round((count/items.length)*100);
 return <div><h2>Monthly Tracker</h2><h3>{pct}% Complete ({count}/{items.length})</h3><progress value={pct} max='100'/>{items.map(x=><div key={x.name} onClick={()=>toggle(x.name)}>{done[x.name]?'✅':'⭕'} {x.name} ₹{x.amount}</div>)}</div>
}