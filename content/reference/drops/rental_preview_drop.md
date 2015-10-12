# Rental Preview Drop

Return attributes for rental preview.

#### Example

~~~ liquid
  {% if rental.special_offers %}
    <ul class="list-unstyled special_offers">
      {% for special_offer in rental.special_offers %}
        {% include 'snippets/rental_special_offer' %}
      {% endfor %}
    </ul>
  {% endif %}
~~~

Available attributes:

* bookingsync_id
* amenities
* destination
* location
* photos
* price_kind
* search_price
* sleeps_max
* special_offers
* url
