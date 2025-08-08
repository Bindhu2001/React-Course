import useCount from "../hooks/useCount";
export default function Counter(){
    // {count,setCount}
    const{count,setCount} =useCount();
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    );
}