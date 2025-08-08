import useCount from "../hooks/useCount";
export default function InnerCard(){
    // {count}
    const{count} =useCount();
    return <span>span count is{count}</span>;
}
