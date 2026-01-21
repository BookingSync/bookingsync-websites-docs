# Filters

Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag `{{ }}` and are separated with a pipe character `|`.

#### Input

~~~ liquid
  <!-- rental.title = 'Great Boat' -->
    {{ rental.title | upcase }}
~~~

#### Output

~~~
  GREAT BOAT
~~~

In the example above, `rental` is an object, `title` is its attribute, and `upcase` is the filter being applied.

Some filters require a parameter to be passed.

#### Input

~~~ liquid
  {{ rental.title | remove: 'Great' }}
~~~

#### Output

~~~
  Boat
~~~

Multiple filters can be used on one output. They are applied from left to right.

#### Input

~~~ liquid
  <!-- rental.title = 'Great Boat' -->
    {{ rental.title | upcase | remove: 'GREAT'  }}
~~~

#### Output

~~~
  BOAT
~~~
