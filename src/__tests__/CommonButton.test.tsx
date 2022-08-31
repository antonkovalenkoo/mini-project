import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CommonButton from '../components/UI/CommonButton/CommonButton'

const props = {
  type: 'submit' as 'submit',
}

describe('CommonButton component test', () => {
  test('CommonButton renders without props', () => {
    render(<CommonButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('CommonButton onClick working', () => {
    const onClickHandler = jest.fn()

    render(<CommonButton onClick={onClickHandler} />)

    userEvent.click(screen.getByRole('button'))
    expect(onClickHandler).toBeCalled()
  })

  test('CommonButton pass all button props to button', () => {
    render(<CommonButton {...props} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toMatchSnapshot()

    const passingProps = Object.entries(props)
    passingProps.forEach(([key, value]) => {
      expect(buttonElement.getAttribute(key)).toEqual(value)
    })
  })
})
