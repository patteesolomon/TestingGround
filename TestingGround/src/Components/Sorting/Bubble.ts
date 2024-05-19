class BubbleSort {
    private _arr: any[] = [];
    private _n: number | undefined;
    public get arr(): any[] {
        return this._arr;
    }
    public set arr(value: any[]) {
        this._arr = value;
    }
    public get n(): number | undefined {
        return this._n;
    }
    public set n(value: number | undefined) {
        this._n = value;
    }
    constructor(arr: any[], n: number | undefined) {
        this.arr = arr;
        this.n = n;
    }

    // Optimized javascript in ts

    bubbleSorto(arr: any[], n: number): void {
        var i: number;
        var j: number;
        var temp: number;
        var swapped;
        for (i = 0; i < n; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1])
                {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (swapped == false)
            {
                break;
            }
        }
    }

    printArray(arr: any[], size: number)
    {
        var i;
        for (i = 0; i < size; i++)
        {
            console.log('====================================');
            console.log(arr[i] + " ");
            console.log('====================================');
        }
    }

    
}

var arr = [64, 23, 12, 53, 22, 11, 90];
var n = arr.length;
var bb = new BubbleSort(arr, n);
console.log('====================================');
console.log("Sorted array: ");
console.log('====================================');
bb.printArray(arr, n);