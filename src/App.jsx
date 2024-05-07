import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import getRandomNumber from './assets/services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import PageNotFound from './components/PageNotFound'

function App() {   

    const [locationId, setLocationId] = useState(getRandomNumber(126))

    const url = `https://rickandmortyapi.com/api/location/${locationId}`
    const [ location, getLocation, hasError ] = useFetch(url)

    useEffect(() => {
      getLocation()
    
    }, [locationId])

    const inputId = useRef()
    const handleSubmit = e =>{
        e.preventDefault()
        setLocationId(inputId.current.value.trim())
    }

  return (
    <div>
        <h1>Rick and Morty</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='form__input' ref={inputId} type="text" />
            <button className='form__btn' >Search</button>
        </form>

        {
            hasError
            ?
            <PageNotFound/>
            :(
                <>  
                <LocationInfo 
                    location={location}
                />
                <div className="card__container">
                    {location?.residents.map(url => (
                        <ResidentCard 
                                key={url}
                                url={url}
                            />
                        ))
                    }
                </div>
            </>
            )
        }
      
    </div>
  )
}

export default App