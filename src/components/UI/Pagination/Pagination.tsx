import { FC } from 'react'
import { IPaginationProps } from './interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Pagination: FC<IPaginationProps> = ({
  itemPerPage,
  page,
  totalAmount,
  setPage,
  className,
}) => {
  return (
    <div className={className ? 'pagination' + ' ' + className : 'pagination'}>
      <button className="pagination__button" onClick={() => setPage(page === 1 ? page : page - 1)}>
        <FontAwesomeIcon className="pagination__icons" icon={faArrowLeft} />
      </button>

      <div className="pagination__wrapper">
        {page} - {Math.ceil(totalAmount / itemPerPage)}
      </div>

      <button
        className="pagination__button"
        onClick={() => setPage(page >= Math.ceil(totalAmount / itemPerPage) ? page : page + 1)}
      >
        <FontAwesomeIcon className="pagination__icons" icon={faArrowRight} />
      </button>
    </div>
  )
}
export default Pagination
