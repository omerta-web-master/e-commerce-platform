import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Rating = ({ rating }) => {
  const colorClass = 'text-yellow-400'
  return (
    <div className='flex gap-1'>
      <span className={colorClass}>
        {rating >= 1 ? <BsStarFill /> :
          rating >= 0.5 ? <BsStarHalf /> :
            <BsStar />
        }
      </span>
      <span className={colorClass}>
        {rating >= 2 ? <BsStarFill /> :
          rating >= 1.5 ? <BsStarHalf /> :
            <BsStar />
        }
      </span>
      <span className={colorClass}>
        {rating >= 3 ? <BsStarFill /> :
          rating >= 2.5 ? <BsStarHalf /> :
            <BsStar />
        }
      </span>
      <span className={colorClass}>
        {rating >= 4 ? <BsStarFill /> :
          rating >= 3.5 ? <BsStarHalf /> :
            <BsStar />
        }
      </span>
      <span className={colorClass}>
        {rating >= 5 ? <BsStarFill /> :
          rating >= 4.5 ? <BsStarHalf /> :
            <BsStar />
        }
      </span>
    </div>
  )
}

export default Rating
