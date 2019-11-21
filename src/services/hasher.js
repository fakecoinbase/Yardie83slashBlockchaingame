const hash = (inputValue) => {
    
  
        let hash = "0";
    if (inputValue.length == 0) {
        return hash;
    }
    for (var i = 0; i < inputValue.length; i++) {
        let char = inputValue.charCodeAt(i);
        //let hashing = (Date.now().toString()).substr(-2);
        let temp = (i)+char;
        console.log(temp);
        let hashed = "";
        if (temp>64 && temp<122 )
        {
            console.log("reached here")
            if(temp>96&&temp<91){
                temp=99;
            }
             hashed = String.fromCharCode(temp);
             console.log("hashed is now "+ hashed);
             
        }
        else {
            hashed = "x";
            console.log("hash is x "+ hash);
        
        }

        hash += hashed;
        console.log("hash is here "+ hash);
       
        // hash = hash & hash; // Convert to 32bit integer
    }
 

    
    if( hash.length==10){
    return hash;
    }
    else {
        let i = hash.length

        if (i<10){
            hash += "a"*i;
        }
        else {
            hash = hash.substr(i-10)
        }
    }
}

export default hash;

