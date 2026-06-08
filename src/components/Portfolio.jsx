export default function Portfolio({items}){
return <section><h2>PORTFOLIO</h2>{items.map(x=><div className='asset' key={x.name}><div><h3>{x.name}</h3><small>{x.type} • Debit {x.date}th • SIP ACTIVE</small><div className='bar'></div></div><h2>₹{(x.amount/1000).toFixed(1)}K</h2></div>)}</section>
}