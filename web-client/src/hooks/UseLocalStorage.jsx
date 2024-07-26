import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
    const item = localStorage.getItem(key)
    if (item === "undefined") {
        if (initialValue instanceof Function) return initialValue()
        return initialValue
    }
    try {
        const result = JSON.parse(item)
        if (result) return result
        if (initialValue instanceof Function) return initialValue()
        return initialValue
    } catch (error) {
        console.log(error)
        if (initialValue instanceof Function) return initialValue()
        return initialValue
    }
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        console.log(value)
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue]
}

export default useLocalStorage
