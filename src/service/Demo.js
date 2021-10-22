import request from "./request.js"

export const demo = (data) =>
  request({
    url: "/api/j/search_tags?type=movie&source=",
    method: "GET",
  });
