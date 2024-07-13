import { useEffect, useState } from "react";

const getSavedValue = (key,initialValue) => {
    const result = JSON.parse(localStorage.getItem(key))
    if(result)return result
    
    if(initialValue instanceof Function) return initialValue()
    
    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    console.log(key)
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
    return [value, setValue]
}
    
export default useLocalStorage
