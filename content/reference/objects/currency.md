# Currency

Returns attributes for active currency.

#### Example

~~~ liquid
<li><a href="{{ currency.url }}">{{ currency.iso_code }}</a></li>
~~~

Available attributes:

Name     | Type     | Description
---------|----------|------------
current? | Boolean  | check if currency is current or not
iso_code | String   | currency's iso_code
symbol   | String   | currency's name
url      | String   | currency's url
{: class="table table-bordered"}
