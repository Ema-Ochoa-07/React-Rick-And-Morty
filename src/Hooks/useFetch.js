import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
    
    const [hasError, setHasError] = useState(false)
    const [response, setRespnse] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => {setRespnse(res.data)
        setHasError(false)
        })

        .catch(err => {console.log(err)
        setHasError(true)
        })
    }
    
    return [response, getApi, hasError]
}

export default useFetch