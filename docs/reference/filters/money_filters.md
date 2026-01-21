# Money Filters

Formats the price based on the currency formatting.


#### Input

~~~ html
  <strong id='min_price_note'>{{ min_price | money: search_form.currency }}</strong>
~~~

#### Output

~~~ html
  <strong id='min_price_note'>€35</strong>
~~~

You can pass formatting options from the Money gem and theme locale formats.

#### Input

~~~ html
  <strong>{{ 0 | money: 'EUR', display_free: true }}</strong>
  <strong>{{ 35 | money: 'EUR', format: 'short' }}</strong>
~~~
