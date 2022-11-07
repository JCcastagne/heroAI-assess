let sampleInput = {
  a: 123,
  b: 'hero',
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ['abc', 'def']
  }
}

function increment (value) {
  if (typeof value == 'number') {
    value++
  } else if (typeof value === 'string') {
    value = `${value} AI`
  }
}

const iterate = obj => {
  Object.keys(obj).forEach(key => {
    //
    // console.log(`key: ${key}, value: ${obj[key]}`)
    increment(obj[key])
    //

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      iterate(obj[key])
    }
  })
}

console.log(iterate(sampleInput))
