
import { useGlobalContext } from "../context"

const Meals = () => {
    const context = useGlobalContext () 
    console.log(context) 
    return (
      <div>
        <h1>this is my Meals components</h1>
      </div>
    );
  };
  
  export default Meals;