# Base

Generates urls and paths to default sections of the website.

#### Example

~~~ html
<a href="{{ site.contact_url }}" class="btn btn-info">{{ 'footer.contact.message' | t }}</a>
~~~

Available paths:

* category
* contact
* home
* page
* password
* rental
* search

Works with suffixes: `path` and `url`.
