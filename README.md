# URL Shortener

## Introduction
### This project is a URL shortener built using Node.js, Express, and MongoDB. It provides a simple and efficient way to shorten long URLs into shorter ones, making them easier to share and manage. Additionally, the project tracks the number of times each shortened URL is clicked and records the timestamp of each click.

## Features

### 1. URL Shortening: Converts long URLs into short, manageable links.
### 2. Click Tracking: Records the number of times each shortened URL is clicked.
### 3. Timestamp Recording: Stores the timestamp of each click for analytics purposes.
### 4. Database Integration: Utilizes MongoDB to store shortened URLs and their click data.
### 5. RESTful API: Provides endpoints for creating shortened URLs, accessing click statistics, and retrieving original URLs.

## Technologies Used
### 1. Node.js: A JavaScript runtime environment for executing server-side code.
### 2. Express: A web application framework for Node.js, simplifying the process of building web applications.
### 3. MongoDB: A NoSQL database used for storing URL mappings and click data.
### 4. Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a higher level of abstraction for interacting with MongoDB.

## API Endpoints
### 1. Shorten URL
```
URL: /api/shortId
Method: POST
Request Body: { "url": "https://www.example.com" }
Response: { "shortUrl": "http://yourdomain.com/abc123" }
```
### 2. Click Statistics
```
URL: /api/stats/:shortCode
Method: GET
Response: 
{
    "totalClicks": 2,
    "analytics": [
        {
            "timestamp": 1713634444525,
            "_id": "6623fc8cda02e68"
        },
        {
            "timestamp": 1713635005829,
            "_id": "6623febded9259"
        }
    ]
}
```