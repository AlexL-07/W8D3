const readline = require('readline');

const reader = readline.createInterface({
    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)

    input: process.stdin,
    output: process.stdout
});


const addNumbers = (sum=0, numsLeft, completionCallBack) => {
    if (numsLeft > 0) {
        reader.question("Input a number ", function(answer) {
            sum += parseInt(answer);
            console.log(`current sum: ${sum}`);
            return addNumbers(sum, numsLeft-1, completionCallBack)
            
        })
    } else if (numsLeft === 0 ){
        reader.close();
        return completionCallBack(sum);
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));