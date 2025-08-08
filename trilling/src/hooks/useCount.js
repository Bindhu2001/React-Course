import { useContext } from "react";
import {CountContext}  from "../Contexts/CountContext";

export default function useCount(){
    return useContext((CountContext))
}