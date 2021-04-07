/**
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
    this.hashMap = []
};


MyHashMap.prototype.put = function(key, value) {
    this.hashMap[key] = value
};

MyHashMap.prototype.get = function(key) {
    let val = this.hashMap[key]
    return val !== undefined ? val : -1
};

MyHashMap.prototype.remove = function(key) {
    delete this.hashMap[key]
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */