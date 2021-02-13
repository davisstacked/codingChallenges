console.log('hello world');

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


const twoSum = (nums, target) => {
    let numberIndex = new Map();
    let result = [];
    for (let i = 0; i  < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement);
            result[1] = i;
        }
        numberIndex.set(num, i);
    }
    return result;
};
