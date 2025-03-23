/*
How to Implement

    Declare the iterator interface. At the very least, 
    it must have a method for fetching the next element 
    from a collection. But for the sake of convenience 
    you can add a couple of other methods,
     such as fetching the previous element, 
     tracking the current position, 
     and checking the end of the iteration.

    Declare the collection interface and describe a 
    method for fetching iterators. The return type should be 
    equal to that of the iterator interface. 
    You may declare similar methods if you plan to have 
    several distinct groups of iterators.

    Implement concrete iterator classes for the collections 
    that you want to be traversable with iterators. 
    An iterator object must be linked with a single collection 
    instance. Usually, this link is established via the
     iterator’s constructor.

    Implement the collection interface in your collection classes. 
    The main idea is to provide the client with a shortcut for
     creating iterators, tailored for a particular collection class. 
     The collection object must pass itself to the iterator’s 
     constructor to establish a link between them.

    Go over the client code to replace all of the collection 
    traversal code with the use of iterators. The client fetches
     a new iterator object each time it needs to iterate over 
     the collection of elements.

*/

export interface Iterator<T>{
  // Return the current element.
  current(): T;

  // Return the current element and move forward to next element.
  next(): T;

  // Return the key of the current element.
  key(): number;

  // Checks if current position is valid.
  valid(): boolean;

  // Rewind the Iterator to the first element.
  rewind(): void;
}

export interface Aggregator{
  // Retrieve an external iterator
  getIterator(): Iterator<number>;
}

// CustomList class implementing the Iterable interface
class CustomList implements Aggregator{
    list: any[];
    constructor() {
      this.list = [];

    }
  getIterator(): Iterator<number> {
    return new ListIterator(this);
  }

  getReverseIterator(): Iterator<number>{
    return new ListIterator(this, true);
  }
   
    add(item: any) {
      this.list.push(item);
    }
   
    getCount(): number{
      return this.list.length;
    }

    getList(): any[] {
      return this.list;
    }

  }
   
  // Iterator class implementing the Iterator interface
  class ListIterator implements Iterator<number>{
      private list: CustomList;
      // position
      private index: number;
      // reverse
      private reverse: boolean | undefined;
    constructor(ls : CustomList, reverse: boolean = false) {
      this.list = ls;
      this.index = 0;
      this.reverse = reverse;

      if (reverse) {
        this.index = ls.getCount() - 1;
      }
    }
    rewind(): void {
      this.index = this.reverse ?
        this.list.getCount() - 1 : 0;
    }
    current(): number {
      return this.list.getList()[this.index];
    }
    key(): number {
      return this.index;
    }
    valid(): boolean {
      if (this.reverse) {
        return this.index >= 0;        
      }
      return this.index < this.list.list.length;
    }
   
    hasNext() {
      return this.index < this.list.list.length;
    }
   
    next() : number {
      const item = this.list.getList()[this.index];
      this.index += this.reverse ? -1 : 1;
      return item;
    }
  }

export {ListIterator, CustomList}