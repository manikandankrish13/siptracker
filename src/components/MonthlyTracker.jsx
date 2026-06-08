import {useState} from 'react';

export default function MonthlyTracker({items}){
 const [done,setDone]=useState({});
 const toggle=name=>setDone({...done,[name]:!done[name]});
 const markAll=()=>setDone(Object.fromEntries(items.map(x=>[x.name,true])));
 const completed=items.filter(x=>done[x.name]);
 const paid=completed.reduce((a,b)=>a+b.amount,0);
 const total=items.reduce((a,b)=>a+b.amount,0);
 const pct=Math.round((completed.length/items.length)*100);
 return <section className='card'>
 <h2>Monthly SIP Tracker</h2>
 <h1>{pct}% Complete</h1>
 <progress value={pct} max='100'/>
 <p>Completed {completed.length}/{items.length}</p>
 <p>Paid ₹{paid.toLocaleString()}</p>
 <p>Pending ₹{(total-paid).toLocaleString()}</p>
 <button onClick={markAll}>Mark All Done</button>
 {items.map(x=><div key={x.name} onClick={()=>toggle(x.name)}>{done[x.name]?'✅':'⭕'} {x.name} ₹{x.amount}</div>)}
 </section>
}
