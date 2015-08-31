# Theme Tags

Theme Tags have various functions, including:

* Outputting template-specific HTML markup
* Telling the theme which layout and snippets to use
* Splitting a returned array into multiple pages.

<br>

1. TOC
{:toc}

## comment

Allows you to leave un-rendered code inside a Liquid template. Any text within the opening and closing `comment` blocks will not be output, and any Liquid code within will not be executed.


#### Input

~~~ liquid
  Best for me is {% comment %}super{% endcomment %} BookingSync.
~~~

#### Output

~~~
  Best for me is BookingSync.
~~~

## include

Inserts a **snippet** from the snippets folder of a theme.

~~~ liquid
  {% include "snippets/locale_switch" %}
~~~

Note that the *.liquid* extension is omitted in the above code.
When a snippet is included, the code inside it will have access to the variables within its parent template.

### Including multiple variables in a snippet

There are two ways to include multiple variables in a snippet. You can assign and include them on different lines:

~~~ liquid
  {% assign page_title = site.name %}
  {% assign page_description = site.description %}
  {% include "snippets/locale_switch" %}
~~~

Or you can consolidate them into one line of code:

~~~ liquid
  {% include "snippets/locale_switch", page_title: site.name, page_description: site.description %}
~~~

> ### `include` parameters
>
> ### *with*
>
> The `with` parameter assigns a value to a variable inside a snippet that shares the same name as the snippet.
>
> For example, we can have a snippet named **color.liquid** which contains the following:
>
> ~~~ liquid
>   color: '{{ color }}'
>   shape: '{{ shape }}'
> ~~~
>
> Within **theme.liquid**, we can include the **color.liquid** snippet as follows:
>
> ~~~ liquid
>   {% assign shape = 'circle' %}
>   {% include 'color' %}
>   {% include 'color' with 'red' %}
>   {% include 'color' with 'blue' %}
>   {% assign shape = 'square' %}
>   {% include 'color' with 'red' %}
> ~~~
>
> The output will be:
>
> ~~~ css
>   color: shape: 'circle'
>   color: 'red' shape: 'circle'
>   color: 'blue' shape: 'circle'
>   color: 'red' shape: 'square'
> ~~~

## form

Creates an HTML `<form>` element with all the necessary attributes (action, id, etc.) and `<input>` to submit the form successfully.

## paginate

Splitting rentals, blog articles, and search results across multiple pages is a necessary component of theme design as you are limited to 50 results per page in any [for](/tags/iteration_tags/#for) loop.

The `paginate` tag works in conjunction with the `for` tag to split content into numerous pages. It must wrap a `for` tag block that loops through an array, as shown in the example below:

<br>

~~~ liquid
  {% paginate collection.rentals by 5 %}
    {% for rental in collection.rentals %}
      <!--show rentals details here -->
    {% endfor %}
  {% endpaginate %}
~~~

<br>

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
