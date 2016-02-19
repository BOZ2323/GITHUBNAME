#!/usr/bin/env node

if (process.argv.length <=2){
	if (!process.env.GITHUBNAME){
		process.stderr.write('The variable GITHUBNAME is not set\n');
	} else { 
		process.stdout.write(process.env.GITHUBNAME);
		process.stdout.write('\n');
 		process.stdout.write("https://github.com/"+process.env.GITHUBNAME);
		process.stdout.write('\n');
	} 

} else if (process.argv[2]=="--help" || process.argv[2]=="-h "){
          process.stdout.write("In order to run this program with no arguments, you have to set the variable GITHUBNAME to your Github username in bashrc.");
	  process.stdout.write('\n');
}
 else {
	var names = process.argv.slice(2);
	for(var name of names) {
		process.stdout.write("https://github.com/"+ name);
		process.stdout.write('\n');
         
	}
}
