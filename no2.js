let nums = [3,5,4,1]
let x = 4
let j = 0
function a (halo) {
    let cont = []
    for (let i = 0; i < halo.length; i++) {
        let notsame = false
        for (let j = 0; j < halo.length; j++) {
            if(i !== j){
                const dividedNumber = halo[i]/halo[j]
                if (dividedNumber === x) {
                    notsame= true
                    break
                }
            }             
        }
        notsame || cont.push(halo[i])
    }
    return cont
}

console.log(a(nums));