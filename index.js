// 1. Напишите глобальную функцию getObj(), которая возвращает this.
// 2. Напишите конструктор для создания объекта Country(title - название страны, capital - столица, population - население, area - площадь).
// 3. В этом конструкторе создайте метод getCountry(), который ссылается на глобальную функцию getObj().
// 4. Создайте при помощи конструктора две страны (на ваше усмотрение) со всеми необходимыми свойствами. Можно использовать параметры по умолчанию.
// 4. Напишите функцию, которая будет в цикле выводить все свойства объекта, кроме методов в консоль в формате key: value. Для вывода свойств должен использоваться метод getCountry().
// 5. Объект должен передаваться в функцию в параметрах.

function getObj(){
    return this;
};

function Country(title, capital, population, area){
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.properties = `${title} ${capital} ${population} ${area}`;
    this.getCountry = getObj;
};

const ukraine = new Country('Ukraine', 'Kyiv', '48 million', "650 squar km");
console.log(ukraine.properties);
const germany = new Country('Germany', 'Berlin', '62 million', "450 squar km");
console.log(germany.properties);

function getProperties(obj){
    const country = obj.getCountry();
        for (const key in country) {
            if(typeof country[key] !== 'function'){
                console.log(`${key}: ${country[key]}`);
            }
    }
}
console.log(getProperties(ukraine))





