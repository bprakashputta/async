console.log('Before');
const str = getUser(1);
console.log(str);
console.log('After');

function getUser(id){
    setTimeout(() => {
        console.log('Reading Database');
        return {id: id, userName: "Bhanu"};
    }, 2000);
}