# 11ty Tailwind Prototyping

1. Add .gitignore + .eleventyignore

touch `.gitignore`
```
# Misc
.nova
*.log
npm-debug.*
*.scssc
*.swp
.DS_Store
Thumbs.db
.sass-cache
.env
.cache

# Node modules and output
node_modules
dist
src/_includes/css
```

`touch .eleventyignore`

```
node_modules
```

2. Create 11ty config file

`touch .eleventy.js`

```
module.exports = config => {
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
```
3. Add dependencies with 11ty start script

`npm init -y`

`"start": "npx eleventy --serve"`

Depnendencies

```
  "@11ty/eleventy": "^0.11.1",
  "autoprefixer": "^10.0.4",
  "postcss": "^8.1.10",
  "postcss-cli": "^7.1.1",
  "tailwindcss": "^2.0.1"
```

4. Install 11ty

`npm install @11ty/eleventy`

5. Set up project structure

`mkdir -p src/_includes/layouts`

`touch base.njk`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/style.css?v=1.0">
    <title>{{ site.name }}</title>
  </head>
  <body>
    {% include "partials/site-head.njk" %}
    <main>
      {% block content %}{% endblock %}
    </main>
    {% include "partials/site-foot.njk" %}
  </body>
</html>
```

`touch src/style.css`

`touch home.njk`

```
{% extends "layouts/base.njk" %} 

{% block content %}
<article>
  <h1>{{ title }}</h1>
  {{ content | safe }}
</article>
{% endblock %}
```

`mkdir src/_includes/partials`

`touch partials/site-head.njk`

```
<header>
  <a href="/">
    {{ site.name }}
  </a>
  <ul>
    {% for item in navigation.items %}
    <li>
      <a href="{{ item.url }}">{{ item.text }}</a>
    </li>
    {% endfor %}
  </ul>
</header>
```

`touch partials/site-foot.njk`

```
<footer>
  &copy; {{ site.name }}
</footer>
```

`touch index.md`

```
---
title: '11ty Tailwind Prototyping'
layout: 'layouts/home.njk'
---

Hello, world
```

6. Add passthrough

In `.eleventy.js`
```
// Set directories to pass through to the dist folder
config.addPassthroughCopy('./src/images/');
```

8. Data

`mkdir src/_data`

`touch site.json`

```
{
  "name": "11ty Tailwind Prototype",
  "url": "https://github.com/curiousways/11ty-tailwind-prototyping"
}
```

`touch navigation.json`

```
{
  "items": [
    {
      "text": "Home",
      "url": "/"
    },
    {
      "text": "About",
      "url": "/about-us/"
    }
  ]
}
```

9. Install Tailwind & PostCSS

`npm install tailwindcss postcss autoprefixer`

`touch postcss.config.js`

```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

10. Create Tailwind config file

`npx tailwindcss init`

11. Include Tailwind in CSS

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

12. Tailwind build (manual)

Add to `package.json`

`"tailwind": "npx tailwindcss build src/style.css -o dist/style.css"`

`npm run tailwind`

13. Tailwind build (with watch)

(https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/)[An Eleventy Starter with Tailwind CSS and Alpine.js]

Add this to `.eleventy.js`

```
module.exports = config => {
  
  config.setUseGitIgnore(false);
  config.addWatchTarget("./src/_tmp/style.css");
  config.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });
  config.addPassthroughCopy('./src/images/');

  return {
    dir: {
      input: 'src',
      output: 'dist' 
    }
  };
};
```

Add this to `.postcss.config.js`

```
module.exports = {
  plugins: [
    require(`tailwindcss`)(`./tailwind.config.js`)
  ],
};
```

Add his to `package.json`

```
  "start": "eleventy --serve & postcss src/css/tailwind.css --o src/_tmp/style.css --watch",
```

14. Install TailwindUI

Add Inter font

`<link rel="stylesheet" href="https://rsms.me/inter/inter.css">`

Add AlpineJS

https://github.com/alpinejs/alpine/

`<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>`