import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Shared/Button';

describe("<Button />", () => {
  test("Should display the same text passed in as param", async () => {
    const expectedValue = "Click me!";
    const mockHandler = jest.fn();

    render(<Button text={expectedValue} onClickHandler={mockHandler} />);
    const button = screen.queryByTestId("btn");

    expect(button).toHaveTextContent(expectedValue);
  });
});