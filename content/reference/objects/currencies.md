# Currencies

Returns attributes for available currencies.

#### Example

~~~ liquid
  {{ currencies.current.iso_code }}
~~~

Available attributes:

Name      | Type       | Description
----------|------------|------------
available | Collection | available currencies
current   | Currency   | current currency
default   | Currency   | default currency
{: class="table table-bordered"}
