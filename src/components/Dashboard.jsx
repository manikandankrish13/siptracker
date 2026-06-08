export default function Dashboard({items}){
 const total=items.reduce((a,b)=>a+b.amount,0);
 return <section>
 <h2>WEALTH GROWTH · 30 YEARS</h2>
 <div className='kpis'>
  <div><h1>₹6.32 Cr</h1><p>Invested</p></div>
  <div><h1>₹34.85 Cr</h1><p>Wealth Gain</p></div>
  <div><h1>Yr 18</h1><p>SIP Cap Yr</p></div>
 </div>
 <div className='chart'>₹41.17 Cr projected corpus</div>
 <p>Total SIP ₹{(total/1000).toFixed(0)}K / month</p>
 </section>
}