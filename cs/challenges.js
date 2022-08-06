let addToZero = (numbers)=>{
    for(i=0;i<numbers.length;i++)  {
        for(j=i+1;j<numbers.length;j++)  {
        if((numbers[i]+numbers[j])===0){
        return true
        } }
}return false
}
//console.log(addToZero([1, 2, 3, -2]));

//O(n^2) run
//O(1) space


let hasUniqueChars = (word)=>{
    word =word.toLowerCase().split('').sort()
    for(i=1;i<word.length;i++){
        if(word[i-1]==word[i]){
            return false
        }
    }
    return true
    }
// console.log(hasUniqueChars("Monday"));
// //     // -> True
//  console.log(hasUniqueChars("Moonday"));
//     // -> False

//O(n) run
//O(1) space

a = 'abcdefghijklmnopqrstuvwxyz'.split('')
let isPangram =(string)=>{
string =string.toLowerCase().split('').filter(e => e.trim().length).sort()
for(i=1;i<a.length;i++){
    if(string.includes(a[i])){
    } else{
        return false;
    }
}
return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True
// console.log(isPangram("I like cats, but not mice"));
// // -> False

//O(n) run
//O(1) space

let findLongestWord = (wordarr) =>{
    let wordlength = 0;
    for(i=1;i<wordarr.length;i++){
        if(wordarr[i].length > wordlength){
            wordlength = wordarr[i].length
        } 
    }
    return wordlength
}
// console.log(findLongestWord(["hi", "hello"]))
// // -> 5)
//O(n) run
//O(n) space