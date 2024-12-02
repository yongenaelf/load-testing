import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 100, // Number of virtual users
  duration: "1s", // Duration of the test
};

export default function () {
  // Retrieve API key, username, and post ID from environment variables
  const API_KEY = __ENV.API_KEY;
  const API_USERNAME = __ENV.API_USERNAME;
  const POST_ID = __ENV.POST_ID;

  // Verify that all required environment variables are provided
  if (!API_KEY || !API_USERNAME || !POST_ID) {
    throw new Error(
      "Missing required environment variables: API_KEY, API_USERNAME, POST_ID"
    );
  }

  // Define the API endpoint and headers
  const url = `https://forum.aelf.com/posts/${POST_ID}.json`;
  const headers = {
    "Content-Type": "application/json",
    "Api-Key": API_KEY,
    "Api-Username": API_USERNAME,
  };

  // Define the payload with the new content for the post
  const payload = JSON.stringify({
    post: {
      raw: "Could you provide more details about the issue you are facing?",
    },
  });

  // Perform the PUT request
  const response = http.put(url, payload, { headers: headers });

  // Check the response status
  check(response, {
    "is status 200": r => r.status === 200,
    "is post updated": r =>
      r.json().post.raw ===
      "Could you provide more details about the issue you are facing?",
  });

  // Optionally log the response for debugging
  console.log("Response:", response.body);
}
