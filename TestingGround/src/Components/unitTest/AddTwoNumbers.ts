class ListNode{
    public val: number = 0;
    public next: ListNode | undefined;
    constructor(x: number){
        this.val = x;
    }
    getx(x:number):void{
        this.val = x;
    }
}

class Solution 
{
    public addTwoNumbers(l1 : ListNode, l2: ListNode)
    {
        let dummy_head = new ListNode(0);
        let l3 = dummy_head;
        let carry = 0;
        
        // while loop for l1 and l2
        // regardless of size this works because of the 
        // dual argument
        while (l1 != null || l2 != null) {
            // this thing taks
            var l1_val = (l1 != null) ? l1.val : 0;
            var l2_val = (l2 != null) ? l2.val : 0;
            // current sum takes the values in and takes the 
            // divided amount of 10 divided to 
            var curr_sum = l1_val + l2_val + carry; // you dont' need
            // to carry anything if you're at the first digit
            // carrying means the actual amount is more acurate
            carry = curr_sum / 10; // for two or higher
            // place digits ie .. 10 22
            // last dig takes curr_sum and gets the mod
            let last_dig = curr_sum % 10; // mod of cur sum
            // places it down here the 
            // new_node makes lastNode with the 
            // last dig 
            // we've made this process to extract digits after 
            // addition, remainders and modulus to create
            // an added amount into a new node.
            var new_node = new ListNode(last_dig);
            // next is now new_node
            l3.next = new_node;
            // comparisons are here with nulls
            // checking for anything new
            if(l1 != null) l1?  l1.next : null;
            if(l2 != null) l2?  l2.next : null;
            // l3 != l3.next it is new node
            l3 = l3.next;
        }
        if (carry > 0) {
            // new object then has carry become the next node
            var new_node = new ListNode(carry);
            // after we already did the previous
            l3.next = new_node;
            // that is here 
            l3 = l3.next;
        }
        return dummy_head.next;
    }
}