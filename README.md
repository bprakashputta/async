# async
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
