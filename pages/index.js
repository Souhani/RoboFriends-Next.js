import React, { useState} from 'react';
import Cardlist from'../components/CardList';
import SearchBox from '../components/SearchBox';
import  Scroll from '../components/Scroll';


export default function Home({robots}) {
  const [searchfield, setSearchfield] =useState('');

    const SearchChange = ()=> {
      setSearchfield(event.target.value);
      }
              
    const SearchedRobots= robots.filter(robot =>{
     return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            })
 return !robots.length ?
            <h1>Loading</h1> :
        (<div className='tc'> 
            <h1 className= 'f1'>RoboFriends</h1>
            <SearchBox onSearch= {SearchChange} />
            <Scroll>
              <Cardlist robots = {SearchedRobots} />
            </Scroll>
          </div>);
}

export async function getServerSideProps()  {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
   return{
    props: {
      robots: data,
    }
   }
}

    
    


