import Children from "./Childrens";
import { render, screen } from '@testing-library/react';

describe("test children component", () => {
  test("test element", () => {
    render(<Children />)
    const testElement = screen.getByText("hello kids")
    expect(testElement).toBeInTheDocument()
  })

  test("test by id", async () => {
    render(<Children />)
    const testById = await screen.findByTestId("titleId")
    expect(testById).toBeInTheDocument("hello kids")
  })
})