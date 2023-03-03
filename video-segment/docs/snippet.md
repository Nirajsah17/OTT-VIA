---
author: robin,pallawi,niraj
description: code snippets
---


# Snippet

## Execute bat file in node js 

```bash
const name = 'John';
const age = 25;

exec(`path/to/your/file.bat ${name} ${age}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

```

## 