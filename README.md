# 11ty Tailwind Prototyping

1. Add .gitignore

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

