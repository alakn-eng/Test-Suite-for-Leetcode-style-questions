// Problem:
// Given an array of numbers arr, return the index where the sum of all elements to the left equals the sum of all elements to the right.
// If no such index exists, return -1.
// If multiple exist, return the leftmost one.

//helper fn to continually add a partial sum- removing to turn the soln into an O(n) vs O(n^2) when used
// function sumOfPartialArray(arr: number[], startIndex: number): number {
//     let partialSum = 0;

//     for (let i = startIndex; i < arr.length; i++) {
//         partialSum += arr[i]
//     }

//     return partialSum;
// }

function balanceIndex(arr: number[]) {
    let leftSum = 0;
    let rightSum = 0;
    let total = 0;
    for (const x of arr) total += x;

    for (let i = 0; i < arr.length; i++) {
        i === 0 ? null : leftSum += arr[i - 1] // continually update the leftSum

        i + 1 < arr.length ? rightSum = total - leftSum - arr[i] : rightSum = 0 //continually calcualate the rightSum, question logic dictates rightSum needs to be 0 when the last element is hit
        console.log("leftSum:", leftSum)
        console.log("rightSum:", rightSum)
        if (leftSum === rightSum) { //compare the value
            console.log(i);
            return i;
        }
    }
    console.log("no sum matches")
    return -1;

}


let arr: number[] = [2, 1, -1, -8];
balanceIndex(arr);