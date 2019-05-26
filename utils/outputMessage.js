export const writeToStdOut = (title, results) => {
    console.log('#########################');
    console.log(title);
    console.log(results.join('\n'));
    console.log('\n');
}