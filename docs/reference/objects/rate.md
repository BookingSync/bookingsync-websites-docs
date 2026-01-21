# Rate

Returns information about active rate

#### Example

~~~ liquid
{% for rate in rental.rates %}
  {{ rate.initial_nightly_rate }}
{% endfor %}
~~~

Available attributes:

Name                 | Type    | Description
---------------------|---------|------------
initial_nightly_rate | Integer | rate's initial_nightly_rate
initial_weekly_rate  | Integer | rate's initial_weekly_rate
initial_monthly_rate | Integer | rate's initial_monthly_rate
start_date           | Date    | rate's start_date
end_date             | Date    | rate's end_date
