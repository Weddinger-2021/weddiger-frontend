import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import Service from './service';

export default function Category ({categories}){
  const [result, setResult] = useState([])
  const [id, setId] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    const req = `https://weddinger.herokuapp.com/category/services/${e.target.cat.value}`
    const res = await axios.get(req)
    setResult(res.data)
    setId(e.target.cat.value)

  }
    return ( id > 0 ?
      <Service list={result}/>
      :<>
        <div className = "flex flex-wrap">
          {categories.map((category,i) =>
          <section key={i} >
            <img src={category.imgs_directory_path} alt="Picture of category" height="200px" width="200px" />            
            <form onSubmit={handleSubmit}>
              <input type='hidden' value={category.id} name='cat'></input>
              <button type='submit'>{category.name}</button>
            </form>       
        </section>
      )}
      </div>
    </>)
}