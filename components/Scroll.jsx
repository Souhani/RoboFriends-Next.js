
 const Scroll = (proos) => {
     return(
     <div  style={{ overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
      {proos.children}
     </div>
     
         )
 }
 
 export default Scroll;