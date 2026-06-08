export default function Projection({monthly=32000}){
 const years=30;
 const invested=monthly*12*years;
 const corpus=Math.round(invested*6.5);
 return <div><h2>30 Year Projection</h2><p>Investment ₹{invested.toLocaleString()}</p><p>Expected Corpus ₹{corpus.toLocaleString()}</p></div>
}