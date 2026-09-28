import {createContext,useState} from "react";
import { UNSAFE_defaultMapRouteProperties } from "react-router";


export const AuthContext = createContext()


export const AuthProvider = ({children})=>{
    const [user, setUser]=useState(null)
    const[loading,setLoading] = useState(false)
    
}