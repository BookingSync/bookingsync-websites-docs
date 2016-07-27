# Liquid Objects

Liquid objects contain attributes to output dynamic content on the page. For example, the `page` object contains an attribute called `title` that can be used to output the `title` of a `page`.

**Liquid objects** are also often referred to as **Liquid variables**.

To output an object's attribute, wrap the object's name in `{{` and `}}`, as shown below:

~~~ liquid
{{ page.title }} <!-- Output: “About Us” -->
~~~


Available Objects:

* [Amenity](/reference/objects/amenity/)
* [Availability](/reference/objects/availability/)
* [Base](/reference/objects/base/)
* [Categories](/reference/objects/categories/)
* [Category](/reference/objects/category/)
* [Contact Request](/reference/objects/contact_request/)
* [Context](/reference/objects/context/)
* [Current Page](/reference/objects/current_page/)
* [Destination](/reference/objects/destination/)
* [Form Error](/reference/objects/form_error/)
* [Guest](/reference/objects/guest/)
* [Locale](/reference/objects/locale/)
* [Locales](/reference/objects/locales/)
* [Location](/reference/objects/location/)
* [Menu](/reference/objects/menu/)
* [Menu Item](/reference/objects/menu_item/)
* [Menus](/reference/objects/menus/)
* [Page](/reference/objects/page/)
* [Page Locale](/reference/objects/page_locale/)
* [Page Locales](/reference/objects/page_locales/)
* [Rental Amenities](/reference/objects/rental_amenities/)
* [Rental](/reference/objects/rental/)
* [Rental Photo](/reference/objects/rental_photo/)
* [Rental Preview](/reference/objects/rental_preview/)
* [Rental Special Offer](/reference/objects/rental_special_offer/)
* [Rental Type](/reference/objects/rental_type/)
* [Rentals](/reference/objects/rentals/)
* [Rentals Tag](/reference/objects/rentals_tag/)
* [Review](/reference/objects/review/)
* [Search](/reference/objects/search/)
* [Search Form](/reference/objects/search_form/)
* [Site](/reference/objects/site/)
* [Social](/reference/objects/social/)
* [Time](/reference/objects/time/)
* [Tweet](/reference/objects/tweet/)
* [Twitter](/reference/objects/twitter/)
