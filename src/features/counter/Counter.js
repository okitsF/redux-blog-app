// import React from 'react'
// import {useSelector,useDispatch} from "react-redux"
// import { useState } from 'react'
// import {
//     inrement,
//     decrement,
//     reset,
//     incrementByAmount
// } from "./counterSlice"
// const Counter = () => {
    
//     const [incrementAmount , setIncrementAmount] = useState(0);
//     const addValue = Number(incrementAmount) || 0;
//     const resetAll = ()=>{
//             setIncrementAmount(0);
//             dispatch(reset())
//     }
    
//     const count = useSelector((state)=>state.counter.count);
//     const dispatch= useDispatch();
//   return (
//     <section>
//       <p>{count}</p>
      
//       <div>
//         <button onClick={()=>dispatch(inrement())}>+</button>
//         <button onClick={()=>dispatch(decrement())}>-</button>

//       </div>

//       <input 
//             type='text'
//             value={incrementAmount}
//             onChange={(e)=>setIncrementAmount(e.target.value)}
//       />

//       <div>
//         <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add value</button>
//         <button onClick={resetAll}>Reset All</button>
//       </div>
//     </section>
//   )
// }

// export default Counter