<!-- Please update value in the {}  -->

<h1 align="center">Todo app</h1>

<div align="center">
   Solution for a challenge from  <a href="http://legacy.devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://ch-todo-app-h-yoshikawa44.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/solutions/BTvVlLhztEQ8Fz8UJ1Rf">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

all  
<img src="/screenshots/all.png" alt="overview - all" width="90%">

active  
<img src="/screenshots/active.png" alt="overview - active" width="90%">

completed  
<img src="/screenshots/completed.png" alt="overview - completed" width="90%">

I created a simple todo app using LocalStorage.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Node.js](https://nodejs.org/)：22.13.1
- [TypeScript](https://www.typescriptlang.org/)：5.7.3
- [React](https://reactjs.org/)：19.0.0
- [Next.js](https://nextjs.org/)：15.1.7

Other major libraries
- [emotion](https://emotion.sh/)
- [emotion-icons](https://github.com/emotion-icons/emotion-icons)
- [polished](https://polished.js.org/)
- [uuid](https://github.com/uuidjs/uuid)
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5) was to build an application to complete the given user stories.

- [x] User story: I can add a new task
- [x] User story: I can complete a task
- [x] User story: I can toggle between All, Active and Completed
- [x] User story: I can remove one or all tasks under the Completed tab
- [x] User story (optional): Store the data in local storage that when I refresh the page I can still see my progress

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:h-yoshikawa44/todo-app.git
or
git clone https://github.com/h-yoshikawa44/todo-app.git

# Install dependencies
npm install

# Run the app
npm run dev
```

## learned/improved
- How to border with adjustable length using pseudo-elements.
- How to make flexbox horizontal with equal width regardless of the number of elements.
- How to create a custom checkbox with keyboard operation in mind.
- Basic usage of LocalStorage.
- How to use LocalStorage in Next.js environment.
- Overview of how to use React Query and LocalStorage together.(I didn't use it this time.)

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [【CSS】borderの長さを調整する方法3つ：文字に応じて可変など](https://saruwakakun.com/html-css/reference/border-length)
- [flexboxで要素数に関わらず均等幅で横並びにする](https://cly7796.net/blog/css/side-by-side-with-even-width-with-flexbox/)
- [キーボード操作を意識したHTML/CSSコーディング](https://zenn.dev/tak_dcxi/articles/f958e96888ee47)
- [MDN - Web Storage API の使用](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [localStorageのstorageイベントのタイプ判定](https://qiita.com/nakajmg/items/d1b90ba9bc56e7575a6a)
- [Next.jsでStorageオブジェクトを使う](https://t-yng.jp/post/nextjs-storage)
- [GitHub - react/query - Is it possible to persist cache query?](https://github.com/tannerlinsley/react-query/discussions/92)

## Contact

- Website：[h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub：[@h-yoshikawa44](https://github.com/h-yoshikawa44)
- Twitter：[@yoshi44_lion](https://twitter.com/yoshi44_lion)
