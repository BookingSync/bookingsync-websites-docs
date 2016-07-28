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

* absolute_min_price
* amenities
* bathrooms_count
* bedrooms_count
* bookable_online
* bookingsync_id
* bookingsync_account_id
* cache_key
* currency
* destination
* final_price
* full_bathrooms_count
* headline
* id
* initial_price
* lat
* lng
* location
* name
* photo_center_height
* photos
* position
* price_kind
* reference
* reviews_average_rating --(alias "rating")--
* reviews_count
* search_price
* sleeps
* sleeps_max
* special_offers
* standalone_toilets_count
* summary
* surface
* surface_unit
* surface_with_unit
* tags
* updated_at
* url
* vr_bathrooms_count
* website_id
