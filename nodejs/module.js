function Person(){
    let name;
    this.setName =function(arg){
        name = arg;
    };

    this.who= function(){
        console.log('hello ' + name);
    };
};

module.exports = Person;
