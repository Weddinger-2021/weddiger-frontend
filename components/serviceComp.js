import axios from 'axios';
import { useState } from 'react';
import ServiceDetail from './ServiceDetail';

export default function Service ({list}) {
  
  const [result, setResult] = useState([])
  const [id, setId] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const req = `https://weddinger.herokuapp.com/service/${e.target.cat.value}`
    const res = await axios.get(req)
    setResult(res.data)
    setId(true)

  }
    return ( id  ?
      <ServiceDetail service={result}/>
      :<>
        <div className = "flex flex-wrap">
          {list.map((ele,i) =>
          <section key={i} >
            <img src={ele.imgs_directory_path} alt="Picture of category" height="200px" width="200px" /> 
            <h2>{ele.title}</h2>
            <h2> from {ele.min_price} to {ele.max_price}</h2>      
            <form onSubmit={handleSubmit}>
              <input type='hidden' value={ele.id} name='cat'/>
              <button type='submit'> {ele.title} </button>
            </form>       
        </section>
      )}
      </div>
    </>
    )
}

