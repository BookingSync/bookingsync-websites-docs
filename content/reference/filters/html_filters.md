# HTML Filters

1. TOC
{:toc}

## asset_url

Creates an asset url under assets_base_url.

#### Input

~~~ liquid
  {{ 'images/large/' | asset_url }}
~~~

#### Output

~~~ html
  '/assets/themes/example_theme/images/large/'
~~~

## stylesheet_url

Generates url for given stylesheet.

#### Input

~~~ liquid
  {{ 'application.css' | stylesheet_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/stylesheets/application.css'
~~~

## stylesheet_tag

Generates a stylesheet tag for given stylesheet url.

#### Input

~~~ liquid
  {{ 'application.css' | stylesheet_url | stylesheet_tag }}
~~~

#### Output

~~~ html
  <link href='/assets/themes/1/stylesheets/application.css' rel='stylesheet' type='text/css'  media='all'>
~~~

## javascript_url

Generates url for given script.

#### Input

~~~ liquid
  {{ 'application.js' | javascript_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/javascripts/application.js'
~~~

## script_tag

Generates a script tag for given script url.

#### Input

~~~ liquid
  {{ 'application.js' | javascript_url | script_tag }}

#### Output

~~~ html
  <script src='/assets/themes/1/javascripts/application.js' type='text/javascript'></script>
~~~

## image_url

Generates image url for given image.

#### Input

~~~ liquid
  {{ 'rental.jpg' | image_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/images/rental.jpg'
~~~

## img_tag

Generates an image tag for given image url.

#### Input

~~~ liquid
  {{ 'rental.jpg' | image_url | img_tag }}
~~~

### Output

~~~ html
  <img src='/assets/themes/1/images/rental.jpg' alt='alt'>
~~~
