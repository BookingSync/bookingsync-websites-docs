# HTML Filters


## asset_url

Creates an asset url under assets_base_url.

#### Input

~~~ html
  {{ 'images/large/' | asset_url }}
~~~

#### Output

~~~ html
  '/assets/themes/example_theme/images/large/'
~~~

## stylesheet_url

Generates url for given stylesheet.

#### Input

~~~ html
  {{ 'application.css' | stylesheet_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/stylesheets/application.css'
~~~

## stylesheet_tag

Generates a stylesheet tag for given stylesheet url.

#### Input

~~~ html
  {{ 'application.css' | stylesheet_url | stylesheet_tag }}
~~~

#### Output

~~~ html
  <link href='/assets/themes/1/stylesheets/application.css' rel='stylesheet' type='text/css'  media='all'>
~~~

You can override the `media` attribute by passing it as a parameter.

#### Input

~~~ html
  {{ 'print.css' | stylesheet_url | stylesheet_tag: 'print' }}
~~~

#### Output

~~~ html
  <link href='/assets/themes/1/stylesheets/print.css' rel='stylesheet' type='text/css'  media='print'>
~~~

## javascript_url

Generates url for given script.

#### Input

~~~ html
  {{ 'application.js' | javascript_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/javascripts/application.js'
~~~

## script_tag

Generates a script tag for given script url.

#### Input

~~~ html
  {{ 'application.js' | javascript_url | script_tag }}
~~~

#### Output

~~~ html
  <script src='/assets/themes/1/javascripts/application.js' type='text/javascript'></script>
~~~

You can pass `async` or `defer` as a parameter to add that attribute.

#### Input

~~~ html
  {{ 'application.js' | javascript_url | script_tag: 'defer' }}
~~~

#### Output

~~~ html
  <script src='/assets/themes/1/javascripts/application.js' type='text/javascript' defer></script>
~~~

## image_url

Generates image url for given image.

#### Input

~~~ html
  {{ 'rental.jpg' | image_url }}
~~~

#### Output

~~~ html
  '/assets/themes/1/images/rental.jpg'
~~~

## img_tag

Generates an image tag for given image url.

#### Input

~~~ html
  {{ 'rental.jpg' | image_url | img_tag: 'Rental photo' }}
~~~

### Output

~~~ html
  <img src='/assets/themes/1/images/rental.jpg' alt='Rental photo'>
~~~

## encoded_mail_to

Generates an obfuscated mailto link using JavaScript.

#### Input

~~~ html
  {{ 'hello@example.com' | encoded_mail_to: 'Contact us' }}
~~~

#### Output

~~~ html
  <script type='text/javascript'>/* obfuscated mailto link */</script>
~~~
