import http from "k6/http";

export const options = {
  stages: [
    { duration: "10s", target: 10 }, // Ramp-up to 10 users
    { duration: "10s", target: 20 }, // Ramp-up to 20 users
    { duration: "10s", target: 30 }, // Ramp-up to 30 users
    { duration: "10s", target: 40 }, // Ramp-up to 40 users
    { duration: "10s", target: 50 }, // Ramp-up to 50 users
    { duration: "10s", target: 60 }, // Ramp-up to 60 users
    { duration: "10s", target: 70 }, // Ramp-up to 70 users
    { duration: "10s", target: 80 }, // Ramp-up to 80 users
    { duration: "10s", target: 90 }, // Ramp-up to 90 users
    { duration: "10s", target: 100 }, // Ramp-up to 100 users
    { duration: "1m", target: 100 }, // Hold at 100 users for 1 minute
  ],
  thresholds: {
    // http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<1000"], // 95% of requests should be below 1s
  },
};

export default function () {
  http.get("https://forum.aelf.com");
}
