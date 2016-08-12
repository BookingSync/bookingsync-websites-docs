# Templates

BookingSync themes are made up of Liquid template files, each serving their own unique purpose. For example, `search.liquid` is used to display multiple rentals, and `rental.liquid` is used to show the details of a single rental.

## Theme Structure

A BookingSync theme comprises the following directories:

* images
* javascripts
* layouts
* snippets
* stylesheets
* templates

### Images directory

The `images` directory contains all the images used in the theme, including theme images and vendors images.

### Javascripts directory

The `javascripts` directory contains all the javascripts files used in the theme.

You can write javascript using `javascript` or `coffeescript` languages.

### Layouts directory

The `layouts` directory contains theme layout templates. All Liquid templates inside the templates folder are rendered inside the `theme.liquid` file.

### Snippets directory

The `snippets` directory contains all the theme's Liquid snippet files, which are bits of code that can be referenced in other templates of a theme.

Use the `include` tag to load a snippet into your theme.

#### Example:

~~~ liquid
{% include 'snippets/home_slider' %}
~~~

### Stylesheets directory

The `stylesheets` directory contains all the CSS files used in the theme.

You can write CSS using `css`, `scss` or `sass` languages.

### Templates directory

The `templates` directory contains all other Liquid templates:

* `404.liquid`
* `category.liquid`
* `contact.liquid`
* `destination.liquid`
* `index.liquid`
* `info_window.liquid`
* `page.liquid`
* `rental.liquid`
* `search.liquid`

## Debug mode

The Debug Mode makes assets, Javascripts and CSS, to be served without being merged, minified and compressed, this allow to see directly the results once updated without affecting all public viewers. It's also easier while debugging as we do not currently support source maps.
