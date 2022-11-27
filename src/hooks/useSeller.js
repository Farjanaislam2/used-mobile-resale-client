import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isSeller,setisSeller] = useState(false);
    const [isUserLoading, setisUserLoading] = useState(true);
    useEffect( ()=>{
if(email){
    fetch(`http://localhost:5000/users/sellers/${email}`)
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