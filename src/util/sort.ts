export function quickShort<T>(arrNumbers: T[], fn: (actual: T, next: T) => number): T[] {
    if(arrNumbers.length <=1) return arrNumbers

    const middleArr = arrNumbers[0]
    const smallestArr = arrNumbers.filter(number => fn(number, middleArr) > 0)
    const biggestArr = arrNumbers.filter(number => fn(number, middleArr ) < 0)
    const intermediaryArr = arrNumbers.filter(number => fn(number, middleArr ) === 0 && number !== middleArr)

    return quickShort(smallestArr, fn).concat([middleArr], intermediaryArr, quickShort(biggestArr, fn))
}