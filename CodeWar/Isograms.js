// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
    const dict = {}
    let arr = str.toLowerCase().split('')
    let i = 0
    while(i < arr.length){
      if(dict[arr[i]]){
        return false
        break;
      } else {
          dict[arr[i]] = true
      }
      i++
    }

    return true
}

isIsogram("moOse")