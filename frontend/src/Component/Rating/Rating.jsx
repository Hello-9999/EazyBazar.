import React from 'react'

const Rating = ({value , text}) => {
  return (
    <>
    <div className='d-flex'>
        <span style={{color:"orange", fontSize:'1.3rem'}}>
            <i className={value >= 1 ? 'fa fa-star' : value >=0.5 ? 'fa fa-star-half' :'far fa-star'}></i>
            <i className={value >= 2 ? 'fa fa-star' : value >=1.5 ? 'fa fa-star-half' :'far fa-star'}></i>
            <i className={value >= 3 ? 'fa fa-star' : value >=2.5 ? 'fa fa-star-half' :'far fa-star'}></i>
            <i className={value >= 4 ? 'fa fa-star' : value >=3.5 ? 'fa fa-star-half' :'far fa-star'}></i>
            <i className={value >= 5 ? 'fa fa-star' : value >=4.5 ? 'fa fa-star-half' :'far fa-star'}></i>

        </span>
    </div>
    </>
  )
}

export default Rating