import {
  getMyName,
  getHelloWithFirstName,
  getTwoNumberAndReturnMax,
  getTwoNumberAndReturnFirstNumberPartialSecondNumber,
  getThreeNumberMin,
  getAvr,
  getAvrInteger,
  sortArray
} from "./main";

describe("test get My Name", () => {
  it("expect return shlomo", () => {
    expect(getMyName()).toBe("hello shlomo");
  });

  it("expect not return hi there", () => {
    expect(getMyName()).not.toBe("hi there");
  });

  it("expect not return a number", () => {
    expect(getMyName()).not.toBeNaN();
  });

  it("expect not return a boolean true", () => {
    expect(getMyName()).not.toBe(true);
  });
  it("expect not return a boolean false", () => {
    expect(getMyName()).not.toBe(false);
  });
  it("expect not return a undefined", () => {
    expect(getMyName()).not.toBeUndefined();
  });
});

describe("test get hello with first name", () => {
  it("return hello shlomo", () => {
    expect(getHelloWithFirstName("shlomo")).toBe("hello shlomo");
  });
  it("expect not return a undefined", () => {
    expect(getHelloWithFirstName("shlomo")).not.toBeUndefined();
  });
});

describe("test get max number", () => {
  it("return max number", () => {
    expect(getTwoNumberAndReturnMax(2, 3)).toBe(3);
  });
  it("return error", () => {
    -expect(getTwoNumberAndReturnMax(2, "ss")).not.toBe(2);
  });
});

describe("test first number  partial second number", () => {
  it("return five", () => {
    expect(getTwoNumberAndReturnFirstNumberPartialSecondNumber(10, 2)).toBe(5);
  });
  it("return error", () => {
    expect(
      getTwoNumberAndReturnFirstNumberPartialSecondNumber(2, "ss")
    ).not.toBe();
  });
});

describe("test min number from three", () => {
  it("return five", () => {
    expect(getThreeNumberMin(10, 7, 5)).toBe(5);
  });

});

describe("test avr", () => {
    it("return avr", () => {
      expect(getAvr(10,6,5)).toBe(7);
    });
  
  });

  describe("test avr from integer", () => {
    it("return integer avr ", () => {
      expect(getAvrInteger(105)).toBe(6);
    });
  
  });

  describe("test sort array to big", () => {
    it("return sort array ", () => {
      expect(sortArray([2,1,4,7,6])).toBe([1,2,4,6,7]);
    });
  
  });
