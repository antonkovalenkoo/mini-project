import { FC } from 'react'
import { useTypeSelector } from '../../../hooks'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import type { IPaginationProps } from './interface'
import './style.scss'

const Pagination: FC<IPaginationProps> = ({ page, totalAmount, className, limitPerPage }) => {
  const navigate = useNavigate()

  return (
    <div className={className ? 'pagination' + ' ' + className : 'pagination'}>
      <button
        className="pagination__button"
        onClick={() => (page - 1 > 0 ? navigate(`../blog/page/${page - 1}`) : null)}
      >
        <FontAwesomeIcon className="pagination__icons" icon={faArrowLeft} />
      </button>

      <div className="pagination__wrapper">
        {page} - {Math.ceil(totalAmount / limitPerPage)}
      </div>

      <button
        className="pagination__button"
        onClick={() =>
          Math.ceil(totalAmount / limitPerPage) >= page + 1
            ? navigate(`../blog/page/${page + 1}`)
            : null
        }
      >
        <FontAwesomeIcon className="pagination__icons" icon={faArrowRight} />
      </button>
    </div>
  )
}
export default Pagination
