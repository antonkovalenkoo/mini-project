export interface IPaginationProps {
  className: string
  page: number
  itemPerPage: number
  totalAmount: number
  setPage: (arg: number) => void
}
