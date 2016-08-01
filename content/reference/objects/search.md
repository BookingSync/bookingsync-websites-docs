# Search

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
* display_map_url
* max_latitude
* max_longitude
* min_latitude
* min_longitude
* next_page
* next_page_url
* page
* page_count
* page_end
* page_start
* per_page
* previous_page
* previous_page_url
* rentals
* rental_ids
* total_count
