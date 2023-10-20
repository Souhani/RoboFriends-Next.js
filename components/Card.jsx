import Link from "next/link"

const Card = ({name,email,id}) => {

     return (
        <Link href={'/robot/'+id}
              className= 'tc bg-light-green no-underline black dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img alt = 'robot' src = {`https://robohash.org/${id+name}?size=200x200`}/>
             <div>
	             <h2>{name}</h2>
	             <p>{email}</p>
             </div>
        </Link>

     	)

}

export default Card