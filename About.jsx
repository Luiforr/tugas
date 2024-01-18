import React from 'react'
import { useState } from 'react';

export default function about() {
  const [on,setOn] = useState (0);
  const [age, setAge] = useState(16);
    const [name, setName] = useState("Rizky");
    const [punyaPacar, setPunyaPacar] = useState("jomblo");
//  const [info,setInfo] = useState [{
//   nama:"Rizky",
//   umur:16,
//   punyaPacar:"tidak"
//  }]
  function handleData() {
    setOn(on + 1)
  }
  function handleof(){
    setOn(on - 1)
  }
  if (on == 1) {
    return (
            <>
              <div>
                {
                  <>
                    <h3>nama:{name}<br></br>
                    umur:{age}<br></br>
                    status:{punyaPacar}</h3>
                  </>
                }
      
                <button onClick={handleof}>byebye</button>
              </div>
            </>)    
      }
        return(<>
        <h3>nama:<br></br>
        umur:<br></br>
        status:</h3>
        <button onClick={handleData}>Hello</button>
        </>
        )
      }
    
    
  
   
// export default function About() {
//     const [index,setIndex] = useState(0);
//   return (
//     <>
//     <panel
//     title = "halo"
//      isActive={index === 0}
//      onShow= {() => setIndex(0)}
//     >halo nama saya</panel>
//     <panel
//     title="lengkap"
//     isActive={index === 1}
//     onShow = {() => setIndex(1)}
//     >ljaklj;kglbkioghisgdhahi;hdaihgi;k;d;fdkhaskhdhkfhkh</panel>
//     </>
//   )
// }
// function panel({
//     title,
//     children,
//     isActive,
//     onShow
// }) {
//     return (
//         <section className='panel'>
//             <h3>{title}</h3>
//             {isActive ? (
//                 <p>{children}</p>
//             ): (
//                 <button onClick={onShow}>
//                     show
//                 </button>
//             )}
//         </section>
//     )
// }

