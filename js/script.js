let user = {
    name:'John',
    surname:'Smith'
}

user.name = 'Pete';

console.log(user);

delete user.name;

let salaries = {

    John: 100,

    Ann: 160,

    Pete: 130

}
// загуглил,до конца не понимаю как это работает конечно,но я пытался
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);
