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
    expect(testById).toBeInTheDocument()
  })
  test("test class name element", () => {
    render(<Children />)
    const testClassElement = screen.getByText("hello kids")
    expect(testClassElement).toHaveClass("Children-span")
  })
  test("test color text", () => {
    render(<Children />)
    const testColor = screen.getByText("hello kids")
    expect(testColor).toHaveStyle("color: 'red'")

  })

  test("test color text 2", async () => {
    render(<Children />)
    const testColor = await screen.findByTestId("titleId")
    expect(testColor).toHaveStyle("color: 'red'")

  })
})