//Now if we want to iterate object so we use 'forin' loop
const myObj = {
    'game1':'NFS',
    'game2':'BGMI',
    'game3':'Doom Eternal'
}

for (const key in myObj) {
    console.log(myObj[key]);
}

const programming = ['JavaScript','Python','CPP','C','Ruby']

for (const key in programming) {
    console.log(key + " -> " + programming[key])
}

// The basic difference between forof and forin loop is that forof loop gives us the direct value
//While forin loop gives us the key value
//for in loop doesn't work in map