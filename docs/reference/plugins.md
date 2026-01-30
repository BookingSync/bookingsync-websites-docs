# Plugins

Plugins in **Website Builder admin** let you add **Liquid**, **HTML**, **CSS**, and **JavaScript** snippets to **Theme v3.12.2+**.

## Availability and requirements

- The Plugins editor is available for websites running **Theme v3.12.2+**.
- Plugins are **not supported** on **Theme v2** or **Theme v1**.
- The available plugins list can **vary by theme version**.
- If a website is on Theme v3 but not on a recent version, the PM can reach out to the Websites team to **upgrade Theme v3 to the latest version (free)**.

## How plugins work

- You add a plugin snippet via the **Plugins** interface in Website Builder admin.
- Plugin snippets are saved per website and rendered where the theme exposes plugin slots.

## Plugin types

- Each theme provides a set of **built-in (fixed) plugins**.
- You can also create **custom plugins**.
- Custom plugins can be rendered inside other plugins.

**Naming recommendation**

Use the `custom_` prefix for custom plugins (for example, `custom_my_plugin`) to reduce the risk of name collisions if a future theme version introduces a plugin with the same name.

## Rendering a plugin

Use the Liquid tag:

~~~ html
{% plugin name_of_plugin %}
~~~

## Autocomplete

- The plugin name input provides an autocomplete with an exhaustive list of plugins available for the selected theme.
- The autocomplete only shows plugins available for the current theme version.

## Override behavior (advanced)

To override a template, place the following Liquid tag at the **very end** of the plugin snippet:

~~~ html
{% break %}
~~~

**Important notes**

- This override behavior only affects plugins whose snippet starts with `template_`.
- The `{% break %}` tag must be the last thing in the snippet (no whitespace or characters after it).

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

## Built-in plugin slots (Theme v3)

These plugin slots can vary by theme version.

- `before_content_for_header`
- `before_head_end`
- `after_body_start`
- `before_content_for_layout`
- `before_body_end`
- `header`
- `footer`
- `template_404`
- `template_campaign`
- `template_category`
- `template_contact`
- `template_cookies`
- `template_destination`
- `template_index`
- `template_page_content_large`
- `template_page_content`
- `template_title`
- `template_page`
- `template_password`
- `template_rental`
- `template_search`
- `template_suggested_rentals`
