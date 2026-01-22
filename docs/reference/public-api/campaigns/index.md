# Campaigns

### Campaign rentals

`GET` `/api/public/v2/campaigns/:slug/rentals`

Example request: `https://www.example.com/api/public/v2/campaigns/sample-campaign/rentals.json?per_page=1&locale=en&currency=EUR`

Response file: [/api_calls/public/campaigns/rentals-response.json](/api_calls/public/campaigns/rentals-response.json)

Note: Sample response for a campaign rentals list.

<details>
<summary>Response body</summary>

```json
{
  "rentals": [
    {
      "id": 315683,
      "bookingsync_id": 34370,
      "synced_id": 34370,
      "url": "https://www.example.com/en/rentals/315683-villa-lemon-breadfruit-in-palermo?currency=EUR",
      "headline": "Villa Lemon Breadfruit",
      "summary": "Exercitationem reiciendis sapiente itaque quia.",
      "bedrooms_count": 3,
      "sleeps": 7,
      "sleeps_max": null,
      "min_price": "800",
      "max_price": "800",
      "lat": 37.5999938,
      "lng": 14.0153557,
      "reviews_count": 4,
      "reviews_average_rating": "5.0",
      "position": 2,
      "full_bathrooms_count": 1,
      "length_of_stay": null,
      "price_kind": "weekly",
      "surface_with_unit": "120m\u00b2",
      "available": true,
      "currency": "EUR",
      "destination": [
        {
          "id": 508729,
          "title": "Europe",
          "url": "https://www.example.com/en/destinations/europe?currency=EUR"
        },
        {
          "id": 508736,
          "title": "Italy",
          "url": "https://www.example.com/en/destinations/italy?currency=EUR"
        },
        {
          "id": 508742,
          "title": "Sicily",
          "url": "https://www.example.com/en/destinations/sicily?currency=EUR"
        },
        {
          "id": 508744,
          "title": "Palermo",
          "url": "https://www.example.com/en/destinations/palermo?currency=EUR"
        }
      ],
      "final_price": null,
      "name": "Villa Lemon",
      "custom_attributes": {},
      "best_offer": null,
      "rentals_tags": [],
      "instantly_bookable": true,
      "photos": [
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1588196885/qiq_eef50f5d-2032-4c86-9deb-ab526187609d.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588196843/qiq_91c64e15-8c05-4866-9bb0-6ff10cfa4c22.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588196870/qiq_74713bef-4411-47c1-977d-0d2dffbfa1ff.jpg"
        },
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585782/bookingsync_sample_rental_photo_10_qiq_ssvoal.jpg"
        }
      ],
      "special_offers": [
        {
          "name": "Offer 3",
          "start_date": "2025-12-24",
          "end_date": "2030-05-29",
          "discount": "19.0"
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 1,
      "total_count": 1,
      "total_pages": 1
    },
    "last_modified": "2026-01-01T00:12:43Z",
    "etag": "b2648e8be034669d0b17e03612ec9415ee4ba150688b13fb90bd7e3aa565b82e"
  }
}
```
</details>
