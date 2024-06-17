function createArray(){
    return new Proxy({}, {
        //Existem métodos, chamados de trap, para diversos tipos de eventos relacionados a um objetico como:
        //apply, construct, defineProperty, deleteProperty, get, getOwnPropertyDescriptor, getPrototypeOf, has, isExtensible, ownKeys, preventExtensions, set, setPrototypeOf
        set(target, key, value){
            target.length = target.length || 0;
            target.length++;
            // target[key] = value;
            Reflect.set(target, key, value);
        },
        get(target, key){
            if(typeof key === "string" && key.match(/\d+/)){
                if(!(key in target)){
                    throw `Property ${key} not found`;
                }
            }
            return target[key]
        },
        deleteProperty(target, key){
            if(key in target){
                target.length--;
                delete target[key];
            }
        }
    });
}





const languages = createArray();

languages[0] = 'Python';
languages[1] = 'JavaScript';
languages[2] = 'Java';
console.log(languages);

delete languages[1];
console.log(languages);
