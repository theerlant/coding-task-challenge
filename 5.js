// Ini soal leetcode mas :)

/**
 * Diberikan array nums dan target integer,
 * kembalikan indeks dari dua angka yang jumlahnya sama dengan target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let index = [];
  let finished = false;

  for (let i = 0; i < nums.length && !finished; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
        finished = true;
        break;
      }
    }
  }

  return index;
}

module.exports = twoSum;
