import {doc,setDoc,getDoc} from 'firebase/firestore';
import {db} from '../firebase';

export async function saveMonthlyStatus(month,data){
 await setDoc(doc(db,'sipStatus',month),data);
}

export async function getMonthlyStatus(month){
 const snap=await getDoc(doc(db,'sipStatus',month));
 return snap.exists()?snap.data():{};
}
