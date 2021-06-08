statements are instructions separated by semycolon ';'

it is recommended to always put semicolon at the end of statement, that makes code more clear, helps to avoid erros and allows code compression;

the javascript source code is parsed from the left to right:

sequence of input elements:
1. tokens;
2. whitespace;
3. control characters;
4. comments;
5. line terminators;

code block is a set of statements wrapped in curly brackets ({})

ex of code block:

```js
  if (x < 10) {
    x = x + 1;
    sum = sum +x;
  }
```

for single statements is not obligatory:

```js
 if (x < 10)
  x = x -1;
```

recommended is always use curly brackets.