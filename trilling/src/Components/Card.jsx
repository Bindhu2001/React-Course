
import InnerCard from "./InnerCard";

import useCount from "../hooks/useCount";
export default function Card()
// {count}
{
    const{count,setCount} =useCount();
    return(
        <div>
            <h1>My Card</h1>
            <hr/>
            <p>Current count is:{count}</p>
              <button onClick={()=>setCount(count-1)}>-</button>
            <InnerCard></InnerCard>
        </div>
    );
}