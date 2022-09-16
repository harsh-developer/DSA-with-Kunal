**The syntax given below is for taking input form user**

const ps = require("prompt-sync");
const input = ps({sigint: true});


we can write above both lines in a single line like this:-
const input = require("prompt-sync")({sigint: true})

By {signint: true} we are making sure, if after starting the execution of program when program is asking for input, if someone hit ctrl+c, so it will not execute further... if we didn't do this... the program will give output that is written inside the console.log() but it will show null in the place of input.


Ex:-
    var name = input("Enter your name: ");
    console.log(`Hello ${name} keep growing, keep shining.`)

    So, if we run the program and now program is asking for input, but instead of giving input we hit ctrl+c,
so this print *Hello null keep growing, keep shining.*
    But, if we have **const input = require("prompt-sync")({sigint: true})** or **const input = ps({sigint: true}**)
we can avoid this thing, and execution will stop right there, the lines of code written in console.log will not be executed.

If we don't want to do it, just simply write, "const input = ps() instead of writing "const input = ps({sigint: true})"

We can write the same thing this way as well.
**const input = require("prompt-sync")({sigint: true})**

**BUT:- THIS PROMPT-SYNC RECEIVES STRING ONLY, IF WE GIVE A NUMBER IN INPUT BUT IT WILL TREAT THAT NUMBER AS STRING, SO IF WE WANT TO PERFORM MATHEMATICAL OPERATIONS ON INPUT WE SHOULD USE *parseInt***