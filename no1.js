let nums = [3,5,4,1]
let j = 0
function a (halo) {
    while (j <= halo.length){
        let nomin = false
        for (let i = 0; i < halo.length-1; i++) {
            if (halo[j]-halo[i] < 0){
                nomin = true
                break
            }
        }
        if(nomin===false){
            return halo[j]
        }
        j++
    }
}

console.log(a(nums));
