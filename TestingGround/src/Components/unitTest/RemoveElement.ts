var RemoveElement = function(nums:number[], val:number) : any[]{
    // anythign in nums cant have val but must be k

    /*
        Change the array nums such that the first k elements of nums 
        contain the elements which are not equal to val.
        The remaining elements of nums are not important as well as the size of nums.
        remove val;
    */
    let u = val;
    let i = 0;
    nums.forEach(()=>{
        if(nums[i] == u)
        {
            nums.splice(i, 1);
        }
        i++;
    })
    return nums;
};

export default {RemoveElement}