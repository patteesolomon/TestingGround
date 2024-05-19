const nemo = ['nemo'];
const ev = ['dory', 'brice'];
const large = new Array(100000).fill('nemo');

const FindNemo = (array: string[]): void => {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('====================================');
            console.log("Sup Clownfish. DOry said hi.");
            console.log('====================================');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took' + (t1 - t0)
    + ' milliseconds');
}
FindNemo(nemo);

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes : number[])
{
    console.log(boxes[0]);
    console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);

let anotherFunction = () => {
    
}

function funChallenge(input: any[])
{
    let a = 10;
    a = 50 + 3;

    for (let i = 0; i < input.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}

funChallenge([1]);

export {FindNemo}