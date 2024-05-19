

class SNode {
    private _name: string | undefined;
    private _idn: number | undefined;
    private _next: SNode | undefined;
    private _prev: SNode | undefined;
    private _right: SNode | undefined;
    private _left: SNode | undefined;

    public get right(): SNode | undefined
    {
        return this._right;
    }

    public get left(): SNode | undefined {
        return this._left;
    }

    public set right(value: SNode | undefined) {
        this._right = value;
    }

    public set left(value: SNode | undefined){
        this._left = value;
    }

    public get prev(): SNode | undefined {
        return this._prev;
    }
    public set prev(value: SNode | undefined) {
        this._prev = value;
    }

    public get next(): SNode {
        return this._next!;
    }
    public set next(value: SNode) {
        this._next = value;
    }
    public get idn(): number {
        return this._idn!;
    }
    public set idn(value: number)
    {
        this._idn = value;
    }
    public get name(): string {
        return this._name!;
    }
    public set name(value: string) {
        this._name = value;
    }
    private arr: any[];

    constructor(nName: string, idn: number, arr: any[]) {
        this.name = nName;
        this.idn = idn;
        this.arr = arr;
    }

    changeNs = (nName: string, idn: number, arr: any[]): void => {
        this.name = nName;
        this.idn = idn;
        this.arr = arr;
    }

    // faster
    addNodeData = (stuff: any[]): void =>
    {
        this.arr.push(stuff);
    }

    // scroll +1 without indexing forward with iteration
    goToNext = (): void => {
        let saved = new SNode(this.name, this.idn, this.arr);
        if (this.next != null || !undefined) {
            //listing next node
            this._idn = this.next.idn;
            this._name = this.next.name;
            this.arr = this.next.arr;
            this.prev = saved;
        }
    }

    

}

export {SNode};