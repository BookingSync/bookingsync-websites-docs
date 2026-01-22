# Rental Special Offer

Return attributes for special_offer.

#### Example

~~~ html
<li title="-{{ special_offer.discount }}% {{ special_offer.name }}
({{ special_offer.start_date | date: "%B %d, %Y" }} → {{ special_offer.end_date | date: "%B %d, %Y" }})">
  <span class='discount'>-{{ special_offer.discount }}%</span>
  <span class='name'>{{ special_offer.name }}</span>
  <span class='dates'>({{ special_offer.start_date | date: "%b %d, %Y" }} →
    {{ special_offer.end_date | date: "%b %d, %Y" }})</span>
</li>
~~~

Available attributes:

* name
* start_date
* end_date
* discount
