# Plugins

## Summary

Plugins in **Website Builder admin** let users inject **HTML snippets** into **Theme v3.12.2+**.

## Availability / requirements

- The **Plugins editor** is available only for websites running **Theme v3.11.2+**.
- This feature is **not supported** on older theme generations (**v2**, **v1**).
- The available plugins list can **vary by theme version**.
- If a website is on Theme v3 but not on a recent version, the PM can reach out to the Websites team to **upgrade Theme v3 to the latest version (free)**.

## How it works

- Users add a plugin snippet via the new **Plugins** interface in Website Builder admin.
- Plugin snippets support **Liquid**, **HTML**, **CSS**, and **JavaScript**.

## Plugin types

- Each theme comes with a set of **built-in (fixed) plugins** that are available for that theme.
- Users can also create **custom plugins**.
- **Recommendation:** name custom plugins with the **`custom_`** prefix (for example, `custom_my_plugin`) to reduce the risk of name collisions if a future theme version introduces a plugin with the same name.
- Custom plugins can be rendered inside other plugins, similar to templates/snippets.

## Rendering a plugin

Plugins can be rendered using the Liquid tag:

~~~ liquid
{% plugin name_of_plugin %}
~~~

## Autocomplete

- The plugin name input provides an **autocomplete** with an **exhaustive list of plugins available for the selected theme**.
- The autocomplete will **always only show plugins that are available for that theme version**.

## Override behavior (advanced)

It is possible to override a template by placing the Liquid tag below at the **very beginning** of the plugin snippet:

~~~ liquid
{% break %}
~~~

**Important notes**

- This override behavior **only affects plugins whose snippet starts with `template_`**.
- The `{% break %}` tag must be the **first thing in the snippet** (no whitespace or characters before it).

## Examples

### Basic snippet

~~~ html
<div class="container py-4">
  <div class="p-4 p-md-5 mb-4 rounded-3 bg-body-tertiary border">
    <div class="container-fluid py-3">
      <h1 class="display-6 fw-bold">Plugins</h1>
      <p class="col-md-8 fs-5">
        This is a basic layout block you can paste into a plugin snippet.
      </p>
      <button type="button" class="btn btn-primary btn-lg">Primary action</button>
    </div>
  </div>

  <div class="row g-3">
    <div class="col-12 col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5 card-title">Card title</h2>
          <p class="card-text">Short supporting text for this card.</p>
          <a href="#" class="btn btn-outline-secondary btn-sm">Learn more</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="h5 card-title">Another card</h2>
          <p class="card-text">More text to show spacing and typography.</p>
          <span class="badge text-bg-success">New</span>
        </div>
      </div>
    </div>
  </div>
</div>
~~~

### Override a template plugin snippet

~~~ liquid
{% break %}
~~~

## List of latest Theme v3 plugins

~~~ json
[
  "before_content_for_header",
  "before_head_end",
  "after_body_start",
  "before_content_for_layout",
  "before_body_end",
  "header",
  "footer",
  "template_404",
  "template_campaign",
  "template_category",
  "template_contact",
  "template_cookies",
  "template_destination",
  "template_index",
  "template_page_content_large",
  "template_page_content",
  "template_title",
  "template_page",
  "template_password",
  "template_rental",
  "template_search",
  "template_suggested_rentals"
]
~~~
