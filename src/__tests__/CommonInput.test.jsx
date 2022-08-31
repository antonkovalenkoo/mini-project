import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CommonInput from "../components/UI/CommonInput/CommonInput";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const props = {
  type: 'text',
  placeholder: "Say Hello!",
  value: 'Hello!',
  prefixIcon: faCoffee,
  postfixIcon: faCoffee 
}

describe('CommonInput component', () => {
  test('CommonInput renders without props', () => {
    render(<CommonInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('CommonInput renders with prefix icon', () => {
    render(
      <CommonInput prefixIcon={faCoffee} />
    );;

    expect(screen.getByTitle('prefix')).toBeInTheDocument();
  });

  test('CommonInput renders with postfix icon', () => {
    render(
      <CommonInput postfixIcon={faCoffee} />
    );;

    expect(screen.getByTitle('postfix')).toBeInTheDocument();
  });

  test('CommonInput renders with both prefix and postfix icons', () => {
    render(
      <CommonInput
        postfixIcon={faCoffee}
        prefixIcon={faCoffee}
      />
    );;

    expect(screen.getByTitle('prefix')).toBeInTheDocument();
    expect(screen.getByTitle('postfix')).toBeInTheDocument();
  });

  test('CommonInput onChange passed to input', () => {
    const onChangeHandler = jest.fn();

    render(
      <CommonInput
        {...props}
        onChange={onChangeHandler}
      />
    );

    userEvent.type(screen.getByRole('textbox'), 'testText');
    expect(onChangeHandler).toHaveBeenCalledTimes(8)
  });

  test('CommonInput pass all input props to input', () => {
    render(
      <CommonInput {...props} />
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toMatchSnapshot();

    const passingProps = Object.entries(props).filter(
      ([key, value]) => !['prefixIcon', 'postfixIcon'].includes(key)
    );

    passingProps.forEach(([key, value]) => {
      expect(inputElement.getAttribute(key)).toEqual(value)
    });
  });
})
