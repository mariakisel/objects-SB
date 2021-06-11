let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];
    
let result = function filterObjects(objects, property, value) {
    let filtredObjects = [];
    for (let object of objects) {    
        if (object[property] === value) {
            filtredObjects.push(object);
        } 
    }
    return filtredObjects;
}

console.log(result(objects, 'surname', 'Петров')); 

//вариант 2, через встроенный метод

function filterObjects(objects, property, value) {
    let result = objects.filter(object => object[property] === value);
    return result;
  }

  console.log(filterObjects(objects, 'name', 'Иван'));