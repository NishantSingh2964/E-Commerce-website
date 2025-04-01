import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CardSlice';
import { NavLink } from 'react-router-dom';  

const Card = () => {

  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) =>{
    dispatch(remove(id));
  }

  const cards = products.map(product => (
    <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
      <NavLink to="#">  
        <div className='ml-32'>
        <img className="rounded-t-lg" src={product.image} style={{width: '100px', height: '130px'}} alt="" />
        </div>
      </NavLink>
      <div className="p-5">
        <NavLink to="#"> 
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">INR:{product.price}</p>
        <div onClick={() => removeToCart(product.id)}>
        <NavLink to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove item  
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> 
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /> 
          </svg>
        </NavLink>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <h2>Cart</h2>
      <div className="flex flex-wrap">
        {cards}
      </div>
    </div>
  )
}

export default Card
