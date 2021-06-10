let word = "souvenir loud four lost"
let x = 4
function a(iya) {
    let res= []
    let word2 = iya.split(" ");
    return word2.filter(w=>w.length === x)
    // for (let i = 0; i < word2.length; i++) {
    //     word2[i].length === x && res.push(word2[i])
    // }
    // return res
}

console.log(a(word));
