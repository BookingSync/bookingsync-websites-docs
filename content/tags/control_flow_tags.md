# Control Flow Tags

Control Flow tags determine which block of code should be executed based on different conditions.

1. TOC
{:toc}

## if

Executes a block of code only if a certain condition is met.

#### Input

~~~ liquid
  {% if rental.title == 'Apartment 051' %}
      This Apartment comes with a swimming pool.
  {% endif %}
~~~

#### Output

~~~
  This Apartment comes with a swimming pool.
~~~

## elsif / else

Adds more conditions within an `if` or `unless` block.

#### Input

~~~ liquid
<!-- If customer.name = 'anonymous' -->

  {% if customer.name == 'kevin' %}
    Hey Kevin!
  {% elsif customer.name == 'anonymous' %}
    Hey Anonymous!
  {% else %}
    Hi Stranger!
  {% endif %}
~~~

#### Output

~~~
  Hey Anonymous!
~~~

## case / when

Creates a switch statement to compare a variable with different values. `case` initializes the switch statement, and `when` compares its values.

#### Input

~~~ liquid
  {% assign handle = 'Apartment 4129' %}
  {% case handle %}
    {% when 'Apartment 4129' %}
       It is an Apartment 4129
    {% when 'Apartment 5100' %}
       It is an Apartment 5100
    {% else %}
       This is not an Apartment 4129 nor a Apartment 5100
  {% endcase %}
~~~

#### Output

~~~
  It is an Apartment 4129
~~~

## unless

Similar to `if`, but executes a block of code only if a certain condition is **not** met.

#### Input

~~~ liquid
  {% unless rental.title == 'Apartment 051' %}
      This Apartment is without a swimming pool.
  {% endunless %}
~~~

#### Output

~~~
  This Apartment is without a swimming pool.
~~~

<br>

This would be the equivalent of doing the following:

~~~ liquid
  {% if rental.title != 'Apartment 051' %}
      This Apartment is without a swimming pool.
  {% endif %}
~~~
