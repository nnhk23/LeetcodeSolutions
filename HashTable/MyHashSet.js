
//  Initialize your data structure here.

 var MyHashSet = function() {
    this.set = []
};

 
//  @param {number} key
//  @return {void}

MyHashSet.prototype.add = function(key) {
    this.set.push(key)
};

 
//  @param {number} key
//  @return {void}

MyHashSet.prototype.remove = function(key) {
    this.set = this.set.filter(num => num !== key)
};


//  Returns true if this set contains the specified element 
//  @param {number} key
//  @return {boolean}

MyHashSet.prototype.contains = function(key) {
    return this.set.includes(key)
};

 
//  Your MyHashSet object will be instantiated and called as such:
//  var obj = new MyHashSet()
//  obj.add(key)
//  obj.remove(key)
//  var param_3 = obj.contains(key)
