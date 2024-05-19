class LNode<T> {
    data: T;
    next: LNode<T> | null = null;
    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: LNode<T> | null = null;
    comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean) {
        this.comparator = comparator;
    }

    append(data: T): void {
        if (!this.head) {
            this.head = new LNode(data);
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new LNode(data);
        }
    }

    delete(data: T): void {
        if (!this.head) return;
        // CHeck if the head node is the node to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }

        let current = this.head.next;
        let previous = this.head;

        /** 
         * Search for the node to be removed and keep track of 
         * its previous node
         * 
         * If it were a double linked list, we could simply search
         * the node and it would have a pointer to the previous node
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }

        /**
         * set previous.next to the target.next,
         * if the node target is not found,
         * the 'previous' will pint to the last node,
         * since the last node hasn't next, nothing will
         * happen
        **/
        previous.next = previous.next ? previous.next.next : null;
    }

    search(data: T): LNode<T> | null{
        let current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    traverse() {
        let current = this.head;
        while (current != null) {
            console.log('====================================');
            console.log(current.data);
            console.log('====================================');
            current = current.next;

        }
    }

    forEachVal()
    {
        let current = this.head;
        let newArr: any[] = []; // Initialize newArr as an empty array
        while (current?.data != null) {
            newArr.push(current.data);
            current = current.next;
        }
        return newArr;
    }
}

export {LNode, LinkedList}