export default function History(){
 const month=new Date().toLocaleString('default',{month:'long',year:'numeric'});
 return <section>
 <h2>History</h2>
 <p>{month}</p>
 <p>Monthly SIP tracking history enabled.</p>
 </section>
}
