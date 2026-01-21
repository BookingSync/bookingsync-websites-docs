# Theme Tags

Theme Tags have various functions, including:

* Outputting template-specific HTML markup
* Telling the theme which layout and snippets to use
* Splitting a returned array into multiple pages.



## comment

Allows you to leave un-rendered code inside a Liquid template. Any text within the opening and closing `comment` blocks will not be output, and any Liquid code within will not be executed.


#### Input

~~~ liquid
  Best for me is {% comment %}super{% endcomment %} Smily.
~~~

#### Output

~~~
  Best for me is Smily.
~~~

## render

Insert the rendered content of another template within the current template.

~~~ liquid
{% render "template-name" %}
~~~

Note that you don’t need to write the file’s `.liquid` extension.

The code within the rendered template does **not** automatically have access to the variables assigned using [variable tags](/reference/tags/variable_tags/) within the parent template. Similarly, variables assigned within the rendered template cannot be accessed by code in any other template.

## render (parameters)

Variables assigned using [variable tags](/reference/tags/variable_tags/) can be passed to a template by listing them as parameters on the `render` tag.

~~~ liquid
{% assign my_variable = "apples" %}
{% render "name", my_variable: my_variable, my_other_variable: "oranges" %}
~~~

One or more objects can be passed to a template.

~~~ liquid
{% assign featured_product = all_products["product_handle"] %}
{% render "product", product: featured_product %}
~~~

### with

A single object can be passed to a template by using the `with` and optional `as` parameters.

~~~ liquid
{% assign featured_product = all_products["product_handle"] %}
{% render "product" with featured_product as product %}
~~~

In the example above, the product variable in the rendered template will hold the value of `featured_product` from the parent template.

### for

A template can be rendered once for each value of an enumerable object by using the `for` and optional `as` parameters.

~~~ liquid
{% assign variants = product.variants %}
{% render "product_variant" for variants as variant %}
~~~

In the example above, the template will be rendered once for each variant of the product, and the variant variable will hold a different product `variant` object for each iteration.

When using the `for` parameter, the [forloop](/reference/tags/iteration_tags/#for) object is accessible within the rendered template.

## include

The `include` tag is deprecated; please use [render](/reference/tags/theme_tags/#render) instead.

## form

Creates an HTML `<form>` element with all the necessary attributes (action, id, etc.) and `<input>` to submit the form successfully.

## paginate

Splitting rentals, blog articles, and search results across multiple pages is a necessary component of theme design as you are limited to 50 results per page in any [for](/reference/tags/iteration_tags/#for) loop.

The `paginate` tag works in conjunction with the `for` tag to split content into numerous pages. It must wrap a `for` tag block that loops through an array, as shown in the example below:


~~~ liquid
  {% paginate collection.rentals by 5 %}
    {% for rental in collection.rentals %}
      <!--show rentals details here -->
    {% endfor %}
  {% endpaginate %}
~~~


The `by` parameter is followed by an integer **between 1 and 50** that tells the `paginate` tag how many results it should output per page.

Within `paginate` tags, you can access attributes of the [paginate](/) object. This includes the attributes to output the links required to navigate within the generated pages.

## raw

Allows output of Liquid code on a page without being parsed.

#### Input

~~~ liquid
  {% raw %}{{ 5 | plus: 6 }}{% endraw %} is equal to 11.
~~~

#### Output

~~~ liquid
  {{ 5 | plus: 6 }} is equal to 11.
~~~
