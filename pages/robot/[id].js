export default function RobotPage({robot}) {
   return(
    <>
      <div className="flex justify-center items-center vh-100 ">
            <div className="tc ma2">
              <img alt = 'robot' 
                  src = {`https://robohash.org/${robot.id+robot.name}?size=200x200`}/>
            <div>
            <div>
              <h3 className="white">Name:  
               <span className="light-yellow"> {robot.name}</span>
              </h3> 
            </div>
            <div>
              <h3 className="white">Email:  
               <span className="light-yellow"> {robot.email}</span>
              </h3> 
            </div>
            <div>
              <h3 className="white">Address:  
                <span className="light-yellow"> {`${robot.address.street} ${robot.address.city} ${robot.address.zipcode}`}</span>
              </h3> 
            </div> 
            <div>
              <h3 className="white">Phone:  
               <span className="light-yellow">  {robot.phone}</span>
              </h3> 
            </div>    
            <div>
              <h3 className="white">Website:  
              <a href={"https://"+robot.website} className="light-yellow">  {robot.website}</a>
              </h3> 
            </div>         
          </div>
        </div>
      </div>
    </>
   )
}

export async function getServerSideProps(context)  {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const robot = data.find(robot => {
    return robot.id.toString() === context.params.id.toString()
  });
   return{
    props: {
      robot: robot,
    }
   }
}