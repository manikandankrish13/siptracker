const KEY='sip-tracker-status';

export function saveStatus(data){
 localStorage.setItem(KEY,JSON.stringify(data));
}

export function loadStatus(){
 return JSON.parse(localStorage.getItem(KEY)||'{}');
}

export function monthKey(){
 const d=new Date();
 return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
}
