# Markdown Filters

You can use markdown syntax inside rental description.

## markdown_format

#### Example

~~~ html
  {{ rental.description | markdown_format }}
~~~

`markdown_format` supports optional parameters:

Parameter | Default | Description
--- | --- | ---
downgrade_headers | true | When true, heading levels are shifted down (h1 -> h3). Set to `false` to keep original levels.
allow_link | false | When true, Markdown links are rendered.

#### Examples

~~~ html
  {{ rental.description | markdown_format, downgrade_headers: false }}
  {{ rental.description | markdown_format, allow_link: true }}
~~~

To see full Markdown syntax documentation, follow this [link](http://daringfireball.net/projects/markdown/syntax).
