// ============ тест на массив значений =============
let array = [1, 2, 'три', 'четыре'];
createSelect(convertToObjects(array), 2);

// ============ тест на объект =============
let object = {
    value1: 'Значение 1',
    value2: 'Значение 2',
};

createSelect(convertToObjects(object), 'value2');

function arrayToObjects(array) {
    let objects = [];

    for (let value of array) {
        let obj = {};
        obj.value = value;
        obj.label = value;

        objects.push(obj);
    }

    return objects;
}

function objectToObjects(object) {
    let entries = Object.entries(object);
    let objects = [];

    for (let [key, value] of entries) {
        let obj = {};
        obj.value = key;
        obj.label = value;

        objects.push(obj);
    }

    return objects;
}

function convertToObjects(sourse) {
    if (Array.isArray(sourse)) {
        return arrayToObjects(sourse);
    } 
    else if (typeof sourse === 'object') {
        return objectToObjects(sourse);
    } 
    else if (Object.prototype.toString.call(sourse) === '[object Array]') {
        return sourse;
    } 
    else {
        alert(`Входящий тип ${typeof sourse} не поддерживается.`);
    }
}

function createSelect(objects, propValue) {
    let select = document.body.appendChild(document.createElement('select'));
    
    for (let obj of objects) {
        let option = document.createElement('option');
        option.value = obj.value;
        option.innerHTML = obj.label;
        select.appendChild(option);
            
        if (obj.value === propValue) {
            option.setAttribute('selected', true);
        }
    }
    
    return select;
}
  