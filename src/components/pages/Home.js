import React ,{useEffect , useState} from "react"
import cart from "../../blue/cart.png"
import styles from './Home.module.css'
//import {AmplifySignOut} from "@aws-amplify/ui-react"
import {Amplify, API}  from 'aws-amplify';


function Home(){

    const [equips, setEquips] = useState([]);
    
    useEffect(() => {
        API.get('equipApi','/items')
        .then((response) =>{
        setEquips(response.data);
        const data = response.data
        });
        {
        console.log(equips)
       
        }
       
    }, [])


    return( 
    <div>
    <h1> Home </h1>
    <h1> Bem vindo ao Supermercado Online AWS</h1>
    <img src={cart} alt="cart"/>


    </div>
    )
}
export default Home