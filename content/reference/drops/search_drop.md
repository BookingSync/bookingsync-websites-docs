# Search Drop

Return search for rentals.

#### Example

~~~ liquid
  {% for rental in search.rentals %}
    <div class="col-sm-4">
      {% include 'snippets/rental_preview' %}
    </div>
  {% endfor %}
~~~

Available attributes:

* display_type
* display_list_url
* display_photos_url
* display_map_url
* rentals
* rental_ids
