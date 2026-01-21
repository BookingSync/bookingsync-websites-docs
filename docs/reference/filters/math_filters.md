# Math Filters

Math filters allow you to apply mathematical tasks.

Math filters can be linked and, as with any other filters, are applied in order from left to right. In the example below, `minus` is applied first, then `times`, and finally `divided_by`.

~~~ liquid
You save {{ rental.compare_at_price | minus: rental.price | times: 100.0 | divided_by: rental.compare_at_price }}%
~~~



## divided_by

Divides an output by a number. The output is rounded to the nearest integer.

#### Input

~~~ liquid
  <!-- rental.price = 200 -->
    {{ rental.price | divided_by: 10 }}
~~~

#### Output

~~~
  20
~~~

## minus

Subtracts a number from an output.

#### Input

~~~ liquid
  <!-- rental.price = 200 -->
    {{ rental.price | minus: 15 }}
~~~

#### Output

~~~
  185
~~~

## plus

Adds a number to an output.

#### Input

~~~ liquid
  <!-- rental.price = 200 -->
    {{ rental.price | plus: 15 }}
~~~

#### Output

~~~
  215
~~~

## times

Multiplies an output by a number.

#### Input

~~~ liquid
  <!-- rental.price = 200 -->
    {{ rental.price | times: 1.15 }}
~~~

#### Output

~~~
  230
~~~

## modulo

Divides an output by a number and returns the remainder.

#### Input

~~~ liquid
  {{ 12 | modulo:5 }}
~~~

#### Output

~~~
  2
~~~
