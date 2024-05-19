class HashTable {
    private _table: [id: number, key: string][] = [];
    public get table(): [id: number, key: string][] {
        return this._table;
    }
    public set table(value: [id: number, key: string][]) {
        this._table = value;
    }
    private arrcpy: any[];
    constructor(array: any[]) {
        // take the array and hash it
        array.forEach((i) => {
            this.Hash(i, array);
        });
        // hashed arr
        this.arrcpy = array;
    }

    Hash(id: any, array: any[]): string {
        let h: number = 1;
        let a: string = "qwertyuiopasdfghjklzxcvbnm";
        let s: string = "";
        // hashimoto 
        for (let i = 0; i < 4; i++) {
            if (id != null || id !== undefined) {
                h %= (Math.floor(id - Math.max(array.length) * Math.random()));
                s += a[(Math.floor(id - Math.min(array.length) * Math.random() % Math.max(array.length)))];
            }
        }

        // find the keys?
        this.table.push([h, s]);
        return s; // leave this for now as a consoleOut
    }

    AccessKey(idex: number, array: any[]) {
        if (idex >= 0 && idex < this.table.length) {
            const key = this.table[idex][1];
            const value = array.find((item) =>
                this.Hash(item, array) === key);
            return value;
        }
        return undefined;
    }

}