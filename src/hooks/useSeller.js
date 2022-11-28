import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller,setisSeller] = useState(false);
    const [isUserLoading, setisUserLoading] = useState(true);
    useEffect( ()=>{
if(email){
    fetch(`https://used-product-resale-market-server.vercel.app/users/sellers/${email}`)
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        setisSeller(data.isSeller)
        setisUserLoading(false)
    })
}
    },[email])
    return [isSeller, isUserLoading]
}

export default useSeller;