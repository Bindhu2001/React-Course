import Card from "./Components/Card";
import Counter from "./Components/Counter";
import CountProvider from "./Providers/CountProvider";

export default function App(){
  return(
    <div>
      
       <CountProvider>
       <Counter />
       <Card/>
       </CountProvider>    
    </div>

    //     <div>
    //   <Counter count={count} setCount={setCount}/>
    //    <Card count={count}/>
    //    <Card count={count}/>
    //    <Card count={count}/>
    // </div> 
  );
}