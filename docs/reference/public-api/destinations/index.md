# Destinations

### List destinations

`GET` `/api/public/v2/destinations`

Example request: `https://www.example.com/api/public/v2/destinations.json?per_page=4&locale=en`

Response file: [/api_calls/public/destinations/index-response.json](/api_calls/public/destinations/index-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": [
    {
      "id": 101,
      "title": "Europe",
      "level": 1,
      "parent_id": 99
    },
    {
      "id": 2924,
      "title": "Italy",
      "level": 2,
      "parent_id": 101
    },
    {
      "id": 51806,
      "title": "Stowe Area",
      "level": 4,
      "parent_id": 45157
    },
    {
      "id": 10081,
      "title": "Palermo",
      "level": 4,
      "parent_id": 8322
    }
  ]
}
```
</details>

### Destination details

`GET` `/api/public/v2/destinations/:id`

Example request: `https://www.example.com/api/public/v2/destinations/2924.json?locale=en`

Response file: [/api_calls/public/destinations/show-response.json](/api_calls/public/destinations/show-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": {
    "id": 2924,
    "title": "Italy",
    "level": 2,
    "parent_id": 101
  }
}
```
</details>

### Destination roots

`GET` `/api/public/v2/destinations/roots`

Example request: `https://www.example.com/api/public/v2/destinations/roots.json?locale=en`

Response file: [/api_calls/public/destinations/roots-response.json](/api_calls/public/destinations/roots-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": [
    {
      "id": 101,
      "title": "Europe",
      "level": 1,
      "parent_id": null
    },
    {
      "id": 45157,
      "title": "United States",
      "level": 1,
      "parent_id": null
    }
  ]
}
```
</details>

### Promoted destinations

`GET` `/api/public/v2/destinations/promoted`

Example request: `https://www.example.com/api/public/v2/destinations/promoted`

Response file: [/api_calls/public/destinations/promoted-response.json](/api_calls/public/destinations/promoted-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": [
    {
      "id": 2952,
      "title": "Austria",
      "level": 2,
      "parent_id": 101,
      "photos": [
        "https://res-2.cloudinary.com/bookingsync/image/upload/v1652869585/eyf3nhhcvv7qmbsvbw5f.jpg",
        "https://res-1.cloudinary.com/bookingsync/image/upload/v1652871976/nsepy1xbfqlpne8xpqpf.jpg",
        "https://res-5.cloudinary.com/bookingsync/image/upload/v1652871976/jdkgfeobwcd2rwzw9ids.jpg"
      ]
    },
    {
      "id": 2914,
      "title": "France",
      "level": 2,
      "parent_id": 101,
      "photos": [
        "https://res-4.cloudinary.com/bookingsync/image/upload/v1652869691/smlhprnpkayidudzw7vy.jpg",
        "https://res-5.cloudinary.com/bookingsync/image/upload/v1652872081/fdl6trcg2tjqvf5sshvq.jpg"
      ]
    },
    {
      "id": 2942,
      "title": "Spain",
      "level": 2,
      "parent_id": 101,
      "photos": [
        "https://res-3.cloudinary.com/bookingsync/image/upload/v1652872123/v8ell14efhjkunvpjgdw.jpg",
        "https://res-2.cloudinary.com/bookingsync/image/upload/v1652869736/ei3uwcqpph8fcponmmmk.jpg",
        "https://res-1.cloudinary.com/bookingsync/image/upload/v1652872121/ziia87x1wr12nbrnh69m.jpg"
      ]
    }
  ]
}
```
</details>

### Destination children

`GET` `/api/public/v2/destinations/:id/children`

Example request: `https://www.example.com/api/public/v2/destinations/2924/children.json?locale=en`

Response file: [/api_calls/public/destinations/children-response.json](/api_calls/public/destinations/children-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": [
    {
      "id": 8322,
      "title": "Sicily",
      "level": 3,
      "parent_id": 2924
    },
    {
      "id": 8315,
      "title": "Tuscany",
      "level": 3,
      "parent_id": 2924
    }
  ]
}
```
</details>

### Destination search

`GET` `/api/public/v2/destinations`

Example request: `https://www.example.com/api/public/v2/destinations?search_phrase=se`

Response file: [/api_calls/public/destinations/search-response.json](/api_calls/public/destinations/search-response.json)

<details>
<summary>Response body</summary>

```json
{
  "data": [
    {
      "id": 51806,
      "title": "Stowe Area",
      "level": 4,
      "parent_id": 45157
    },
    {
      "id": 8322,
      "title": "Sicily",
      "level": 3,
      "parent_id": 2924
    },
    {
      "id": 52034,
      "title": "Smugglers' Notch",
      "level": 5,
      "parent_id": 51806
    },
    {
      "id": 2942,
      "title": "Spain",
      "level": 2,
      "parent_id": 101
    }
  ]
}
```
</details>
