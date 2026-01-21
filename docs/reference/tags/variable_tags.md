# Variable Tags

Variable Tags are used to create new Liquid variables.


## assign

Creates a new variable.

#### Input

~~~ liquid
  {% assign my_variable = false %}
  {% if my_variable != true %}
  This statement is valid.
  {% endif %}
~~~

#### Output

~~~
   This statement is valid.
~~~


Use quotations `" "` to save the variable as a string.

#### Input

~~~ liquid
  {% assign foo = "bar" %}
  {{ foo }}
~~~

#### Output

~~~
  bar
~~~

## capture

Captures the string inside of the opening and closing tags and assigns it to a variable. Variables created through `capture` are strings.

#### Input

~~~ liquid
  {% capture my_variable %}I am being captured.{% endcapture %}
  {{ my_variable }}
~~~

#### Output

~~~
  I am being captured.
~~~

## increment

Creates a new number variable, and increases its value by one every time it is called. The initial value is 0.

#### Input

~~~ liquid
  {% increment variable %}
  {% increment variable %}
  {% increment variable %}
~~~

#### Output

~~~
  0
  1
  2
~~~


Variables created through the `increment` tag are independent from variables created through `assign` or `capture`.

In the example below, a variable named *"var"* is created through `assign`. The `increment` tag is then used several times on a variable with the same name. However, note that the `increment` tag does not affect the value of *"var"* that was created through `assign`.

#### Input

~~~ liquid
  {% assign var = 10 %}
  {% increment var %}
  {% increment var %}
  {% increment var %}
  {{ var }}
~~~

#### Output

~~~
  0
  1
  2
  10
~~~

## decrement

Creates a new number variable, and decreases its value by one every time it is called. The initial value is -1.

#### Input

~~~ liquid
  {% decrement variable %}
  {% decrement variable %}
  {% decrement variable %}
~~~

#### Output

~~~
  -1
  -2
  -3
~~~


Like [increment](/reference/tags/variable_tags#increment), variables declared inside `decrement` are independent from variables created through `assign` or `capture`.
