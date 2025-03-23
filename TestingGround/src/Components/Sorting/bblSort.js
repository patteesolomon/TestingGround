class BubbleSort{
    a = 0;
    x = 0;
    y = 0;

    constructor(a, x, y)
    {
        this.a = a;
        this.x = x;
        this.y = y;
    }

    swap(a = [],  x,  y)
    {
        temp = a[x];
        a[x] = a[y];
        a[y] = temp;
    }

    bubble(a =[], n)
    {
        i = n-1;
        while(i>0)
        {
            if(a[i] < a[i-1])
            {
                this.swap(a, i, i-1);
            }
            i--;
        }
    }

    display(a =[], size)
    {
        let i = 0;
        while(i < n)
        {
            console.log(a[i], size);
            i++;
        }
    }

    bblSort(a = [], n)
    {
        let i = 0; 
        while (i < n - 1) {
            this.bubble(a, n);
        }
        return;
    }

    henka()
    {
        let arr = [123, 41, 102, 293, 443, 56, 667, 9000];
        let size = arr.length;
        this.display(arr, size);
        this.bblSort(arr, size);
        return;
    }
}