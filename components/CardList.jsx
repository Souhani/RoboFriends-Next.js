import Card from './Card';

const Cardlist = ({robots}) =>{
  return(
	<div>
		{
			robots.map((robot,i) => {
						 return (
						 	<Card 
                            key = {i}
						 	id = {robot.id} 
						 	name = {robot.name} 
						 	email = {robot.email}
						 	/>  )
						           	 }
						)
		}	                   
	</div>
	)
}

export default Cardlist;
