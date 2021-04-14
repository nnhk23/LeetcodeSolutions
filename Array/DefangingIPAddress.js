var defangIPaddr = function(address) {
    for(let i = 0; i < address.length; i++){
        if(address[i] === '.'){
            console.log(address.replace(address[i], '[.]'))      
        }
    }
    console.log(address)
};

defangIPaddr('1.1.1.1')