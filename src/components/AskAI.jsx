export default function AskAI({items}){
 const total=items.reduce((a,b)=>a+b.amount,0);
 return <div>
 <h2>Ask AI</h2>
 <p>Your monthly SIP is ₹{total}. Continue consistently for long term wealth creation.</p>
 </div>
}