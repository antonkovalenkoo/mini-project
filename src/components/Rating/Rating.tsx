import { FC, useEffect, useState } from 'react'
import { IRatingProps } from './interface'
import './style.scss'

const Rating: FC<IRatingProps> = ({ negativeValue, positiveValue }) => {
  const [ratingLine, setRatingLine] = useState(50)

  useEffect(() => {
    const totalSum = negativeValue + positiveValue
    setRatingLine(Math.ceil((negativeValue / totalSum) * 100))
  }, [])

  return (
    <div className="rating">
      <p className="rating__number">-{negativeValue}</p>

      <div className="rating__line rating__parent">
        <div className="rating__line rating__child" style={{ width: `${ratingLine}%` }} />
      </div>

      <p className="rating__number">{positiveValue}</p>
    </div>
  )
}
export default Rating
