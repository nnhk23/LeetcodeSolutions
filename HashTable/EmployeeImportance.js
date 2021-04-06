var GetImportance = function(employees, id) {
    let employeeMap = new Map()
    for(let employee of employees){
        employeeMap.set(employee.id, {imp: employee.importance, sub: employee.subordinates})
    }
    
    let queue = [id]
    let totalImp = 0
    while(queue.length > 0){
        let currentEmp = employeeMap.get(queue.shift())
        totalImp += currentEmp.imp
        queue.push(...currentEmp.sub)
    }
    return totalImp
};

