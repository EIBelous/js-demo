
let key=42

function secretCode(value){

    let keyGenerator=function(){
        let key=22
        console.log('in keyGenerator', key)
        return key
    }
let code=keyGenerator()
    console.log('in secretCode', key)
    return code

}

showMessage(secretCode(2))