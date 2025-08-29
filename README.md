
# Bajaj Exam Backend API

## Overview
This is a Node.js Express backend API for the Bajaj Exam Paper. The API exposes a single POST endpoint `/bfhl` that processes an array and returns:
- Status (`is_success`)
- User ID, Email, College Roll Number
- Arrays for even numbers, odd numbers, alphabets (uppercase), special characters
- Sum of numbers (as string)
- Concatenation of all alphabetical characters in reverse order with alternating caps

## Setup Instructions

### Backend
1. Open terminal in the `backend` folder
2. Run: `npm install`
3. Start server: `npm start`

## API Usage

### Endpoint
- **POST** `/bfhl`

### Request Body (JSON)
```
{
	"data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Example
```
{
	"is_success": true,
	"user_id": "john_doe_17091999",
	"email": "john@xyz.com",
	"roll_number": "ABCD123",
	"odd_numbers": ["1"],
	"even_numbers": ["334", "4"],
	"alphabets": ["A", "R"],
	"special_characters": ["$"],
	"sum": "339",
	"concat_string": "Ra"
}
```

## Deployment

You can deploy this backend to Render, Heroku, or similar platforms. After deployment, use:
```
https://your-app.onrender.com/bfhl
```
for API requests.

## Notes
- All numbers in the response are returned as strings.
- CORS is enabled for cross-origin requests.
- The frontend is not required and has been removed.
