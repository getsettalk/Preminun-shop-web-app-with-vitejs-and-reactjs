import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import './Search.scss'
import ProdImg from '../../../assets/Product/ear2.png'
import { useNavigate } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch"

function Search({ setshowSearch }) {
  const [query, setQuery] = useState("")
  const navigate = useNavigate();


  const onChange = (e) => {
    setQuery(e.target.value)
  }

  let { data } = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`)

  console.log("daaaa", data)
  if (!query.length) {
    data = null;
  }

  return (
    <div className='search-modal'>
      <div className="form-field">
        <input type="text" autoFocus placeholder='Search Product' value={query} onChange={onChange} />
        <MdClose onClick={() => setshowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">

          {data?.data?.map(item => (
            <div className="search-result-item" onClick={() => {
              navigate("/product/" + item.id)
              setshowSearch(false)
            }}>
              <div className="img-container">
                <img src={import.meta.env.VITE_STRAPY_API_URL + item.attributes.img.data[0].attributes.url} alt="" />
              </div>

              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search