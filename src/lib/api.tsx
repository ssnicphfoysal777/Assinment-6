

 export const getAllProducts=async () =>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog',{cache:"no-store"})
    return res.json()
}

export const getSingleProduct=async(Id:string)=>{
    const res=await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`)
    // console.log(Id);
    return res.json();
    // const data=await res.json()
    // return data
    
}