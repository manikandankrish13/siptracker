export default function Portfolio({items}){
 return <div>
 <h2>Portfolio</h2>
 {['MF','US'].map(t=><div key={t}><h3>{t}</h3>{items.filter(x=>x.type===t).map(x=><p key={x.name}>{x.name} - ₹{x.amount} (Debit {x.date})</p>)}</div>)}
 </div>
}