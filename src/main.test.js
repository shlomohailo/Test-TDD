import { getMyName } from "./main";

it("expect return shlomo", () => {
expect(getMyName()).toBe("shlomo")
}) 

it("expect not return hello world", () => {
    expect(getMyName()).not.toBe("hello world")
    }) 