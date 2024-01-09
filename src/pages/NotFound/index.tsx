import { Link } from "react-router-dom"
import './style.css'
function NotFound() {
  return(
    <div className="not-found-page">
      <div className="container">
        <h1>Opss ...</h1>
        <span style={{textAlign:'center'}}>Parece que está página não existe ou está indisponível, volte para{' '} 
        <Link to={'/'}>
          página incial
        </Link>
        </span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruyVS0pNKhYvN1qJJ50EY4gdUx968NDzhEMT4_XTLWHWcN6kPg7to79vdiuzl7X2B9xY&usqp=CAU" alt="construtor" />
      </div>
    </div>
  )
}

export default NotFound