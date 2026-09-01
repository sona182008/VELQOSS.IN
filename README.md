# VELQOSS Website

A simple static website designed for real customer enquiries and WhatsApp ordering.

## Files

- `index.html` — page structure/content
- `styles.css` — all design/styling
- `products.js` — product catalog data (the main file you maintain)

## To update products

Open `products.js`.

Each product has:
- `name`
- `category`
- `description`
- `price`
- `badge`
- `icon`
- `theme`

You can add or remove product objects without changing the HTML.

## To change WhatsApp number

Open `index.html` and change:

`const WHATSAPP = "919117689119";`

Use country code, without `+` or spaces.

## To publish

Upload all three website files to your hosting/public_html folder.

## Important

The catalog intentionally uses "Get quote" rather than fixed prices because printing prices can change with quantity, paper/material, size, finishing and design work.
