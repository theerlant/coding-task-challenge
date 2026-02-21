const twoSum = require("../5");

describe("twoSum", () => {
  it("Should return [0, 1] for nums = [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("Should return [1, 2] for nums = [3,2,4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("Should return [0, 1] for nums = [3,3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("Should find valid pairs producing target for nums = [-1,0,1,2], target = 1", () => {
    // The loop in 5.js checks sequentially, so it will encounter -1 (index 0) and 2 (index 3) first.
    // -1 + 2 = 1. Therefore the indices are [0, 3].
    expect(twoSum([-1, 0, 1, 2], 1)).toEqual([0, 3]);
  });

  it("Should return [0, 3] for nums = [0,4,3,0], target = 0", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});
