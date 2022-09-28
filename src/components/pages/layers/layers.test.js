import Layers from "./layers";
import { render, screen } from "@testing-library/react";

// describe("test layers component", () => {
//   test("test props number kids", () => {
//     render(<Layers numberKids = "4"/>)
//     const testNumberKidsElement = screen.getByTestId("layersNumberKids")
//     expect(testNumberKidsElement).toHaveTextContent("4")

//   })
//   test("test props class", () => {
//     render(<Layers class = "f"/>)
//     const testLayersClassKidsElement = screen.getByTestId("layersClassKids")
//     expect(testLayersClassKidsElement).toHaveTextContent("f")

//   })
//   test("test props name teacher", () => {
//     render(<Layers nameTeacher = "dalia"/>)
//     const testLayersNameTeacherElement = screen.getByTestId("layersNameTeacher")
//     expect(testLayersNameTeacherElement).toHaveTextContent("dalia")

//   })
// })