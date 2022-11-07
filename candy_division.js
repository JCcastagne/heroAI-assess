function divide_candy (n) {
  let numberOfFriendsAllowable = []

  for (let people = 0; people < n; people++) {
    if ((people + 1) % 2 === 0) {
      console.log('even')
      numberOfFriendsAllowable.push(people)
      people - 1
    } else if ((people + 1) % 2 === 1) {
      console.log('odd')
    }
  }

  return numberOfFriendsAllowable
}

console.log(divide_candy(30))
