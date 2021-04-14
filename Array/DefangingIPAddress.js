var defangIPaddr = function(address) {
    // solution 1:
    // return address.replace(/[^\d]/gi, '[.]')

    // solution 2:
    // let arr = address.split('')
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === '.'){
    //         arr[i] = '[.]'
    //     }
    // }
    // return arr.join('')

    // solution 3:
    return address.split('.').join('[.]');
};

defangIPaddr('1.1.1.1')