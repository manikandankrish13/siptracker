export default function AskAI({items}){
 const total=items.reduce((a,b)=>a+b.amount,0);
 return <section>
 <h2>✦ ASK CLAUDE AI</h2>
 <p>Your portfolio data · instant answers</p>
 <div className='chips'><button>What's my SIP status?</button><button>Which MF is highest profit?</button><button>Which US stocks are up?</button></div>
 <div className='chat'>Ask or modify... Total SIP ₹{total}/mo</div>
 </section>
}