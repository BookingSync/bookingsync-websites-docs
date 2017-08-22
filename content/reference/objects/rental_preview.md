# Rental Preview

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
* available?
* base_rate
* bathrooms_count
* bedrooms_count
* bookable_online
* bookingsync_id
* bookingsync_account_id
* bunk_beds_count
* cache_key
* currency
* destination
* double_beds_count
* final_price
* full_bathrooms_count
* headline
* id
* initial_price
* kingsize_beds_count
* lat
* lng
* location
* name
* nightly_base_rate
* nightly_min_price
* nightly_max_price
* photo_center_height
* photos
* position
* priced?
* price_kind
* queensize_beds_count
* reference
* rental_type
* reviews_average_rating <small>_(aliases as "rating")_</small>
* reviews_count
* search_price
* single_beds_count
* sleeps
* sleeps_max
* sofa_beds_count
* special_offers
* standalone_toilets_count
* summary
* surface
* surface_unit
* surface_with_unit
* tags
* total_bunk_beds_count
* total_double_beds_count
* total_kingsize_beds_count
* total_queensize_beds_count
* total_single_beds_count
* total_sofa_beds_count
* updated_at
* url
* vr_bathrooms_count
* website_id
* weekly_base_rate
* weekly_min_price
* weekly_max_price
