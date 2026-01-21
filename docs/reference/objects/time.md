# Time

Returns today and tomorrow dates.

#### Example

~~~ liquid
data-min="{{ time.tomorrow | date: '%Y-%m-%d' }}"
~~~

Available attributes:

Name     | Type | Description
---------|------|------------
today    | Date | today date
tomorrow | Date | tomorrow date
