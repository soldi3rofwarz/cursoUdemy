import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../api/data';

const PokeDetails = (props) => {
  
    const [poke,setpoke] = useState(null)

    useEffect(() => {
      const {match}= props;
      const {id} = match?.params
      axios.get(API_URL+"/"+ id).then((response)=>{
        if(response.status>=200 && response.status<300){
            console.log('hij bn',response.data)

        }
      })
    }, []);

    return ( 
    <div>
        hola
    </div> 
);
}
export default PokeDetails;