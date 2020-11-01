const arguments=process.argv.slice(2);

const somme=arguments.reduce((total,currentValue)=>total+Number(currentValue),0);
console.log(somme)