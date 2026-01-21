# Rentals

### List rentals

`GET` `/api/public/v2/rentals`

Example request: `https://www.example.com/api/public/v2/rentals.json?per_page=3&locale=en&currency=EUR`

Response file: [/api_calls/public/rentals/index-response.json](/api_calls/public/rentals/index-response.json)

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
    },
    {
      "id": 315685,
      "bookingsync_id": 34372,
      "synced_id": 34372,
      "url": "https://www.example.com/en/rentals/315685-chalet-jamal-sailing-in-aurach?currency=EUR",
      "headline": "Chalet Jamal Sailing",
      "summary": "Omnis quisquam inventore harum officia suscipit nesciunt.",
      "bedrooms_count": 2,
      "sleeps": 7,
      "sleeps_max": null,
      "min_price": "800",
      "max_price": "800",
      "lat": 48.10807699999999,
      "lng": 15.8049558,
      "reviews_count": 7,
      "reviews_average_rating": "5.0",
      "position": 4,
      "full_bathrooms_count": 0,
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
          "id": 508785,
          "title": "Austria",
          "url": "https://www.example.com/en/destinations/austria?currency=EUR"
        },
        {
          "id": 508805,
          "title": "Tirol",
          "url": "https://www.example.com/en/destinations/tirol?currency=EUR"
        },
        {
          "id": 508809,
          "title": "Kitzb\u00fcheler Alps",
          "url": "https://www.example.com/en/destinations/kitzbuheler-alps?currency=EUR"
        },
        {
          "id": 508811,
          "title": "Kitzb\u00fchel area",
          "url": "https://www.example.com/en/destinations/kitzbuhel-area?currency=EUR"
        },
        {
          "id": 508814,
          "title": "Aurach",
          "url": "https://www.example.com/en/destinations/aurach?currency=EUR"
        }
      ],
      "final_price": null,
      "name": "Chalet Jamal",
      "custom_attributes": {},
      "best_offer": null,
      "rentals_tags": [],
      "instantly_bookable": true,
      "photos": [
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197151/qis_0602e4bd-917b-4b0a-99b7-7b559ba3d3ae.jpg"
        },
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197171/qis_31ec1d03-bad8-45e3-a472-c38192650aee.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197190/qis_333681e3-18b4-463c-aa97-f9ddd7bdd30a.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585801/bookingsync_sample_rental_photo_4_qis_p5x2h6.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585802/bookingsync_sample_rental_photo_1_qis_nhimhv.jpg"
        },
        {
          "url": "https://res-1.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585803/bookingsync_sample_rental_photo_7_qis_oaeva2.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585804/bookingsync_sample_rental_photo_3_qis_fewcc1.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585805/bookingsync_sample_rental_photo_10_qis_bhe0hc.jpg"
        },
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585806/bookingsync_sample_rental_photo_9_qis_rovzxm.jpg"
        }
      ],
      "special_offers": []
    },
    {
      "id": 315687,
      "bookingsync_id": 34374,
      "synced_id": 34374,
      "url": "https://www.example.com/en/rentals/315687-studio-robbie-myriam-in-barcelona?currency=EUR",
      "headline": "Studio Robbie Myriam",
      "summary": "Facilis explicabo dignissimos molestias asperiores ipsum impedit recusandae delectus.",
      "bedrooms_count": 1,
      "sleeps": 7,
      "sleeps_max": null,
      "min_price": "800",
      "max_price": "800",
      "lat": 45.019215,
      "lng": 6.604901,
      "reviews_count": 8,
      "reviews_average_rating": "4.6",
      "position": 6,
      "full_bathrooms_count": 0,
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
          "id": 508776,
          "title": "Spain",
          "url": "https://www.example.com/en/destinations/spain?currency=EUR"
        },
        {
          "id": 508741,
          "title": "Catalonia",
          "url": "https://www.example.com/en/destinations/catalonia?currency=EUR"
        },
        {
          "id": 508778,
          "title": "Barcelona Province",
          "url": "https://www.example.com/en/destinations/barcelona-province?currency=EUR"
        },
        {
          "id": 508803,
          "title": "Barcelona",
          "url": "https://www.example.com/en/destinations/barcelona?currency=EUR"
        }
      ],
      "final_price": null,
      "name": "Studio Robbie",
      "custom_attributes": {},
      "best_offer": null,
      "rentals_tags": [],
      "instantly_bookable": true,
      "photos": [
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197836/qiu_a9fdc144-25e5-4027-9d3a-774909068a50.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197791/qiu_fa00a40a-6ec2-4b6b-9075-a66422a34fd4.jpg"
        },
        {
          "url": "https://res-1.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197805/qiu_8933fcc6-95c8-46f2-a6fd-707fbf0ee114.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585822/bookingsync_sample_rental_photo_5_qiu_mauler.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585823/bookingsync_sample_rental_photo_9_qiu_h5gzyq.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585824/bookingsync_sample_rental_photo_6_qiu_vxxoor.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585826/bookingsync_sample_rental_photo_10_qiu_dk6yda.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585827/bookingsync_sample_rental_photo_7_qiu_rcvtly.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585828/bookingsync_sample_rental_photo_3_qiu_n7cehs.jpg"
        }
      ],
      "special_offers": []
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 3,
      "total_count": 8,
      "total_pages": 3
    },
    "last_modified": "2026-01-01T00:12:43Z",
    "etag": "b2648e8be034669d0b17e03612ec9415ee4ba150688b13fb90bd7e3aa565b82e"
  }
}
```
</details>

### Promoted rentals

`GET` `/api/public/v2/rentals/promoted`

Example request: `https://www.example.com/api/public/v2/rentals/promoted.json?per_page=8&ids%5B%5D=&locale=en&currency=EUR`

Response file: [/api_calls/public/rentals/promoted-response.json](/api_calls/public/rentals/promoted-response.json)

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
    },
    {
      "id": 315685,
      "bookingsync_id": 34372,
      "synced_id": 34372,
      "url": "https://www.example.com/en/rentals/315685-chalet-jamal-sailing-in-aurach?currency=EUR",
      "headline": "Chalet Jamal Sailing",
      "summary": "Omnis quisquam inventore harum officia suscipit nesciunt.",
      "bedrooms_count": 2,
      "sleeps": 7,
      "sleeps_max": null,
      "min_price": "800",
      "max_price": "800",
      "lat": 48.10807699999999,
      "lng": 15.8049558,
      "reviews_count": 7,
      "reviews_average_rating": "5.0",
      "position": 4,
      "full_bathrooms_count": 0,
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
          "id": 508785,
          "title": "Austria",
          "url": "https://www.example.com/en/destinations/austria?currency=EUR"
        },
        {
          "id": 508805,
          "title": "Tirol",
          "url": "https://www.example.com/en/destinations/tirol?currency=EUR"
        },
        {
          "id": 508809,
          "title": "Kitzb\u00fcheler Alps",
          "url": "https://www.example.com/en/destinations/kitzbuheler-alps?currency=EUR"
        },
        {
          "id": 508811,
          "title": "Kitzb\u00fchel area",
          "url": "https://www.example.com/en/destinations/kitzbuhel-area?currency=EUR"
        },
        {
          "id": 508814,
          "title": "Aurach",
          "url": "https://www.example.com/en/destinations/aurach?currency=EUR"
        }
      ],
      "final_price": null,
      "name": "Chalet Jamal",
      "custom_attributes": {},
      "best_offer": null,
      "rentals_tags": [],
      "instantly_bookable": true,
      "photos": [
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197151/qis_0602e4bd-917b-4b0a-99b7-7b559ba3d3ae.jpg"
        },
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197171/qis_31ec1d03-bad8-45e3-a472-c38192650aee.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197190/qis_333681e3-18b4-463c-aa97-f9ddd7bdd30a.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585801/bookingsync_sample_rental_photo_4_qis_p5x2h6.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585802/bookingsync_sample_rental_photo_1_qis_nhimhv.jpg"
        },
        {
          "url": "https://res-1.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585803/bookingsync_sample_rental_photo_7_qis_oaeva2.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585804/bookingsync_sample_rental_photo_3_qis_fewcc1.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585805/bookingsync_sample_rental_photo_10_qis_bhe0hc.jpg"
        },
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585806/bookingsync_sample_rental_photo_9_qis_rovzxm.jpg"
        }
      ],
      "special_offers": []
    },
    {
      "id": 315687,
      "bookingsync_id": 34374,
      "synced_id": 34374,
      "url": "https://www.example.com/en/rentals/315687-studio-robbie-myriam-in-barcelona?currency=EUR",
      "headline": "Studio Robbie Myriam",
      "summary": "Facilis explicabo dignissimos molestias asperiores ipsum impedit recusandae delectus.",
      "bedrooms_count": 1,
      "sleeps": 7,
      "sleeps_max": null,
      "min_price": "800",
      "max_price": "800",
      "lat": 45.019215,
      "lng": 6.604901,
      "reviews_count": 8,
      "reviews_average_rating": "4.6",
      "position": 6,
      "full_bathrooms_count": 0,
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
          "id": 508776,
          "title": "Spain",
          "url": "https://www.example.com/en/destinations/spain?currency=EUR"
        },
        {
          "id": 508741,
          "title": "Catalonia",
          "url": "https://www.example.com/en/destinations/catalonia?currency=EUR"
        },
        {
          "id": 508778,
          "title": "Barcelona Province",
          "url": "https://www.example.com/en/destinations/barcelona-province?currency=EUR"
        },
        {
          "id": 508803,
          "title": "Barcelona",
          "url": "https://www.example.com/en/destinations/barcelona?currency=EUR"
        }
      ],
      "final_price": null,
      "name": "Studio Robbie",
      "custom_attributes": {},
      "best_offer": null,
      "rentals_tags": [],
      "instantly_bookable": true,
      "photos": [
        {
          "url": "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197836/qiu_a9fdc144-25e5-4027-9d3a-774909068a50.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197791/qiu_fa00a40a-6ec2-4b6b-9075-a66422a34fd4.jpg"
        },
        {
          "url": "https://res-1.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197805/qiu_8933fcc6-95c8-46f2-a6fd-707fbf0ee114.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585822/bookingsync_sample_rental_photo_5_qiu_mauler.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585823/bookingsync_sample_rental_photo_9_qiu_h5gzyq.jpg"
        },
        {
          "url": "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585824/bookingsync_sample_rental_photo_6_qiu_vxxoor.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585826/bookingsync_sample_rental_photo_10_qiu_dk6yda.jpg"
        },
        {
          "url": "https://res-4.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585827/bookingsync_sample_rental_photo_7_qiu_rcvtly.jpg"
        },
        {
          "url": "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585828/bookingsync_sample_rental_photo_3_qiu_n7cehs.jpg"
        }
      ],
      "special_offers": []
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 8,
      "total_count": 3,
      "total_pages": 1
    },
    "last_modified": "2026-01-01T00:12:43Z",
    "etag": "b2648e8be034669d0b17e03612ec9415ee4ba150688b13fb90bd7e3aa565b82e"
  }
}
```
</details>

### Rentals with special offers

`GET` `/api/public/v2/rentals/with_special_offers`

Example request: `https://www.example.com/api/public/v2/rentals/with_special_offers.json?per_page=3&locale=en&currency=EUR`

Response file: [/api_calls/public/rentals/with-special-offers-response.json](/api_calls/public/rentals/with-special-offers-response.json)

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
      "per_page": 3,
      "total_count": 1,
      "total_pages": 1
    },
    "last_modified": "2026-01-01T00:12:06Z",
    "etag": "286d606498555a9868404371c80c550030832746bb609067df4efdcea42d184e"
  }
}
```
</details>

### Rental reviews

`GET` `/api/public/v2/rentals/:rental_id/reviews`

Example request: `https://www.example.com/api/public/v2/rentals/315683/reviews?per_page=3`

Response file: [/api_calls/public/rentals/reviews-response.json](/api_calls/public/rentals/reviews-response.json)

<details>
<summary>Response body</summary>

```json
{
  "reviews": [
    {
      "date": "2017-06-27T17:49:50.000Z",
      "comment": "Alias dolore voluptates accusamus repellat nulla odio eos perferendis.",
      "name": "Angelo J.",
      "rating": 5.0,
      "channel": "smily",
      "reply": null
    },
    {
      "date": "2017-06-27T17:49:49.000Z",
      "comment": "Debitis tenetur assumenda est neque maiores libero consequatur at.",
      "name": "Michele C.",
      "rating": 5.0,
      "channel": "smily",
      "reply": null
    },
    {
      "date": "2017-06-27T17:49:48.000Z",
      "comment": "Facere nostrum vel eum rem vero saepe sunt.",
      "name": "Ila R.",
      "rating": 5.0,
      "channel": "smily",
      "reply": null
    },
    {
      "date": "2017-06-27T17:49:48.000Z",
      "comment": "Doloribus amet sit sunt sed fugit maiores unde minima.",
      "name": "Aurora J.",
      "rating": 5.0,
      "channel": "smily",
      "reply": null
    }
  ],
  "meta": {
    "reviews_count": 4,
    "reviews_average_rating": "5.0",
    "channels": [
      {
        "slug": "smily",
        "title": "Smily",
        "reviews_count": 4,
        "avg_rating": 5.0,
        "icon_url": "https://bsa-website-public.s3.eu-west-1.amazonaws.com/smily.svg"
      }
    ],
    "criteria": []
  }
}
```
</details>

### Review channels

`GET` `/api/public/v2/rentals/:rental_id/reviews/channels`

Example request: `https://www.example.com/api/public/v2/rentals/315683/reviews/channels`

Response file: [/api_calls/public/rentals/reviews-channels-response.json](/api_calls/public/rentals/reviews-channels-response.json)

Note: Sample response derived from review metadata.

<details>
<summary>Response body</summary>

```json
{
  "channels": [
    {
      "slug": "smily",
      "title": "Smily",
      "reviews_count": 4,
      "avg_rating": 5.0,
      "icon_url": "https://bsa-website-public.s3.eu-west-1.amazonaws.com/smily.svg"
    }
  ]
}
```
</details>

### Channel prices

`GET` `/api/public/v2/rentals/:id/channel_prices`

Example request: `https://www.example.com/api/public/v2/rentals/315683/channel_prices?start_date=2026-02-10&end_date=2026-02-17&occupancy=2&currency=EUR&locale=en`

Response file: [/api_calls/public/rentals/channel-prices-response.json](/api_calls/public/rentals/channel-prices-response.json)

<details>
<summary>Response body</summary>

```json
{
  "search_price": "648.0",
  "airbnb_percentage_difference": "0.0",
  "booking_com_percentage_difference": "0.0",
  "currency": "EUR"
}
```
</details>
