# Asynchronous Functions

The below code will yield the value of `str` as `undefined` because we are javascript executes code in async, 
and in the code the value of str is assigned 2 seconds after the timeout is over.

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

There are basically three ways to deal with an async function.
1. Callback
2. Promises
3. Async/Await


## Callback
The first way of dealing with **asynchronous** functions is using callbacks. A **callback** 
function is a function passed into another function as an argument, which is then 
invoked inside the outer function to complete some kind of routine or action.

    console.log('Before');
    const str = getUser(1, user => {
        console.log("User", user);
    });
    console.log(str);
    console.log('After');
    
    function getUser(id, callback){
        setTimeout(() => {
            console.log('Reading Database');
            callback({id: id, userName: "Bhanu"});
        }, 2000);
    }

### Callback Hell Issue
This issue is observed in case if we use multiple `callbacks` inside a function like the 
example below.

    getUser(1, getuser => {
        getRepositories(getuser.username, repositories => {
            getCommits(repositories[0], commits => {
            });
        });
    });

We are using multiple nested callbacks here, which in a real-world application makes the
code look like a huge mess. This is also called as `Callback HELL`. This issue is 
resolved by using `Named Functions instead of Asynchronous Functions`. But this is also
not an optimal approach, but a better way. And an even better way is using `promises`


## Promises
Promise is the result of an eventual asynchronous function. 

    const promse = new Promise((resolve,reject)=>{
        // Kick some async work on ...
        // resolve("logic");
            or
        // reject(new Error("message"));
    });
    promse.then(result => console.log(result));

In case of calling multiple promises, we can use

    getUser(1)
    .then(user => getRepositories(user.username))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits: ", commits))
    .catch(error => console.log(error));

