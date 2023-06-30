import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Category.scss';
import Cat1 from '../../../assets/category/cat-4.jpg';

function Category({ categories }) {
  // console.log("dd", categories.data)
  if (!categories) {
    return null; // Return null or a loading indicator when categories are undefined
  }
  const apiUrl =import.meta.env.VITE_STRAPY_API_URL
  const navigate = useNavigate();
  return (
    <div className='shop-by-category'>
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
            <img src={apiUrl + item.attributes.img.data.attributes.url} alt="" />
          </div>
        ))}



      </div>
    </div>
  )
}

export default Category