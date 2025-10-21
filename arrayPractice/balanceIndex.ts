// Problem:
// Given an array of numbers arr, return the index where the sum of all elements to the left equals the sum of all elements to the right.
// If no such index exists, return -1.
// If multiple exist, return the leftmost one.

//helper fn to continually add a partial sum
function sumOfPartialArray(arr: number[], startIndex: number): number {
    let partialSum = 0;

    for (let i = startIndex; i < arr.length; i++) {
        partialSum += arr[i]
    }

    return partialSum;
}

function balanceIndex(arr: number[]) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        i == 0 ? null : leftSum += arr[i - 1] // continually update the leftSum

        i + 1 < arr.length ? rightSum = sumOfPartialArray(arr, i + 1) : null //continually calcualate the rightSum
        console.log("leftSum:", leftSum)
        console.log("rightSum:", rightSum)
        if (leftSum == rightSum) { //compare the value
            console.log(i);
            return i;
        }
    }
    console.log("no sum matches")
    return -1;

}


let arr: number[] = [2, 1, -1, -8];
balanceIndex(arr);