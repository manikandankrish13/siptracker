export default function Dashboard({items}){
 const total=items.reduce((a,b)=>a+b.amount,0);
 const mf=items.filter(x=>x.type==='MF').reduce((a,b)=>a+b.amount,0);
 const us=items.filter(x=>x.type==='US').reduce((a,b)=>a+b.amount,0);
 return <div><h2>Dashboard</h2><p>Total Monthly SIP ₹{total}</p><p>MF ₹{mf}</p><p>US ₹{us}</p></div>
}