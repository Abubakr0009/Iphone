// import React, { useEffect, useState } from 'react'

// function API() {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => setData(json))
//     }, [])

//     console.log(data);
    

//   return (
//     <div>
       

//         {data.map((post)=>{
//             return(
//                 <div className='border bg-red-400'>
//                     <h2>{post.title}</h2>
//                     <h2>{post.body}</h2>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default API