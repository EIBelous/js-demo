let array=['a','b','c','d','f']
console.log(array.indexOf('c'))

let find=array.filter(function(item){
return item>='b'
})

console.log('find array'+ find)

array.forEach(function(item){
    item +111
    console.log(item)
})