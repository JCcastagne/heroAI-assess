function train_sort (n, trains) {
  //considering front of train starts from the left side of the array
  let sortedTrains = []

  trains.forEach(carWeight => {
    if (sortedTrains.length === 0) {
      sortedTrains.unshift(carWeight)
    } else if (carWeight > sortedTrains[0]) {
      sortedTrains.unshift(carWeight)
    } else if (
      carWeight < sortedTrains[0] &&
      sortedTrains[sortedTrains.length - 1] > carWeight
    ) {
      sortedTrains.push(carWeight)
    } else {
      return
    }
  })

  // return `n:${sortedTrains.length}, trains:${sortedTrains}`
  return sortedTrains.length
}

console.log(train_sort(5, [10, 2, 12, 20, 3]))
