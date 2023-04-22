let p = new Promise ((resolve, reject ) => {

let a = 1 +1 

if (a==2) {
    
        resolve ('Failed')
}

} )

    p.then((message) => {

        console.log("This is the man" + message)

    }).catch ((message) => {
            
                console.log('This is the catch' + message )
    })
    