const path = require('path')
const fs = require('fs')
// const fsPromise = require('fs/promises')

console.log('Начало сортировки')
const value = 977*1024

const newFile = () => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'bigFile.txt'), {encoding: 'utf-8'})
    const streamWr = fs.createWriteStream(path.resolve(__dirname, 'filteredBigFile.txt'))
    stream.on('data', (chunk) => {
        streamWr.write((quicksort(chunk.split('')).join('')), () => {
            console.log('Строка отсортирована и записана')
        })
    })
}

newFile()

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];

    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right))
}
