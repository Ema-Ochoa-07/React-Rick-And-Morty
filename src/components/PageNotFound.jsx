import './styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <article className='error__404'>
         <section className="error__container">
             <div className="number__error">    
                 <h1 className="number__error-1">4 0 4</h1>
                 <img className='logo__error' src="./images/caritaTriste.png" alt="" />
             </div>

            <div className='error_description' >
                <h2 className="error__title">Page not Found!!</h2>
                <hr className='error__hr'/>
                <h3 className="error__messagge" >Hey!!! you must provide and id 1 to 126</h3>
            </div>        
        </section>
     </article>
  )
}

export default PageNotFound