# Algorithms Bootcamp

This repo has algorithm challenges used in coding interviews.

## Setup

`yarn global add jest`

## Watch a specific file

`cd exercides`

`jest fib/test.js --watch`

or

`jest fib --watch`

## Debugger mode

Add a `debugger` statement inside your function.

Invoke the function manually passing the required arguments

Enter the folder you want.

At the terminal run `node inspect index.js`.

It pauses execution on the first line of the file.

Then you can type `continue` or `c` and then enter.

When node find a debugger statement it will pause the execution.

To inspect some variable type `repl`. It will launch a repl session.

Now you can type the variable name, e.g: `str`

You can copy and paste the code that depends on that variable and see what it returns. E.g.:

```javascript
str.split("").reduce((reversed, char) => char + reversed, "");
```

Type `exit` or Ctrl+c to exit the `repl`

Ctrl+c to exit debug mode
