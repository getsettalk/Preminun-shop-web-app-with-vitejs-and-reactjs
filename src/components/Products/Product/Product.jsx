import React from 'react'
import './Product.scss';
import PRDimg from '../../../assets/Product/ear2.png'
import { useNavigate } from 'react-router-dom';

function Product({ id, data }) {

  const navigate = useNavigate();

  return (
    <div className='product-card'  onClick={()=> navigate("/product/"+ id)}>
      <div className="thumbnail">
        <img src={import.meta.env.VITE_STRAPY_API_URL + data.img.data[0].attributes.url} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="Price"> &#8377; {data.price}</span>
      </div>
    </div>
  )
}

export default Product