/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums : number[], target: number): number {
    
    if(nums.length > 0 && target != nums[0] && target > nums[0])
    {
    // includes,indexOf,rest operator,arrow function,sorting via sort method
     if(nums.includes(target))  //includes method
      return nums.indexOf(target); //returns index method//
     return [...nums, target].sort((a,b) => a-b).indexOf(target); //return where it shold be inserted// 
    }
    else if(nums.length > 0 && nums[0] < target)
    {
        return 1;
    }
    else if(nums.length <= 1)
    {return 0;}
    
    else{
        return 0;
    }
};

export {searchInsert}