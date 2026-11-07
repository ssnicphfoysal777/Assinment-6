import { cache } from "react"

 export const getAllProducts=async () =>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog',{cache:"no-store"})
    return res.json()
}