# Base

Generates urls and paths to default sections of the website.

#### Example

~~~ liquid
  <a href="{{ site.contact_url }}" class="btn btn-info">{% t 'footer.contact.message' %}</a>
~~~

Available paths:

* category
* contact
* home
* page
* rental
* search

Works with suffixes: `path` and `url`.
