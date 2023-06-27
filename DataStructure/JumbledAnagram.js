/*
 the function will return true because the strings "hello" and "olehl" 
 have the same frequency of letters, even though the order of the letters is different.

*/

function JumbledAnagram(str1, str2) {
  let str1Freq = {};
  let str2Freq = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (char in str1Freq) {
      str1Freq[char] += 1;
    } else {
      str1Freq[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (char in str2Freq) {
      str2Freq[char] += 1;
    } else {
      str2Freq[char] = 1;
    }
  }

  for (let key in str1Freq) {
    if (str1Freq[key] !== str2Freq[key]) {
      return false;
    }
  }
  return true;
}

console.log(JumbledAnagram("abbcacbb", "abcsb"));
console.log(JumbledAnagram("apple", "alepp"));
console.log(JumbledAnagram("bowl", "lwob"));
console.log(JumbledAnagram("one", "onne"));
