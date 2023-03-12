import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from '../components/TitlesPage/Pagination';

const titlesPerPage: number = 5;
const totalTitles: number = 17;

describe("<Pagination />", () => {
  test("Should disabled previous button ", async () => {
    const mockHandler = jest.fn();
    render(<Pagination currentPage={1} totalTitles={totalTitles} titlesPerPage={titlesPerPage} handleNextPageClick={mockHandler} handlePrevPageClick={mockHandler} />);
    const btnPrev = screen.queryByTestId("btn-prev")?.children[0];
    expect(btnPrev).toBeDisabled()
  });

  test("Should not disabled previous button ", async () => {
    const mockHandler = jest.fn();
    render(<Pagination currentPage={3} totalTitles={totalTitles} titlesPerPage={titlesPerPage} handleNextPageClick={mockHandler} handlePrevPageClick={mockHandler} />);
    const btnPrev = screen.queryByTestId("btn-prev")?.children[0];
    expect(btnPrev).not.toBeDisabled()
  });

  test("Should disabled next button ", async () => {
    const mockHandler = jest.fn();
    render(<Pagination currentPage={4} totalTitles={totalTitles} titlesPerPage={titlesPerPage} handleNextPageClick={mockHandler} handlePrevPageClick={mockHandler} />);
    const btnPrev = screen.queryByTestId("btn-next")?.children[0];
    expect(btnPrev).toBeDisabled()
  });

  test("Should not disabled next button ", async () => {
    const mockHandler = jest.fn();
    render(<Pagination currentPage={3} totalTitles={totalTitles} titlesPerPage={titlesPerPage} handleNextPageClick={mockHandler} handlePrevPageClick={mockHandler} />);
    const btnPrev = screen.queryByTestId("btn-next")?.children[0];
    expect(btnPrev).not.toBeDisabled()
  });
});