import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const [blogList, setBlogList] = useState([
    {
      "title": "First Blog Post",
      "description": "This is the description of the first blog post.",
      "image": "https://example.com/image1.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-12T12:34:56Z"
    },
    {
      "title": "Second Blog Post",
      "description": "This is the description of the second blog post.",
      "image": "https://example.com/image2.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-11T10:22:45Z"
    },
    {
      "title": "Third Blog Post",
      "description": "This is the description of the third blog post.",
      "image": "https://example.com/image3.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-10T08:18:32Z"
    },
    {
      "title": "Fourth Blog Post",
      "description": "This is the description of the fourth blog post.",
      "image": "https://example.com/image4.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-09T06:12:22Z"
    },
    {
      "title": "Fifth Blog Post",
      "description": "This is the description of the fifth blog post.",
      "image": "https://example.com/image5.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-08T04:08:15Z"
    },
    {
      "title": "Sixth Blog Post",
      "description": "This is the description of the sixth blog post.",
      "image": "https://example.com/image6.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-07T02:03:10Z"
    },
    {
      "title": "Seventh Blog Post",
      "description": "This is the description of the seventh blog post.",
      "image": "https://example.com/image7.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-06T00:00:05Z"
    },
    {
      "title": "Eighth Blog Post",
      "description": "This is the description of the eighth blog post.",
      "image": "https://example.com/image8.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-05T22:45:58Z"
    },
    {
      "title": "Ninth Blog Post",
      "description": "This is the description of the ninth blog post.",
      "image": "https://example.com/image9.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-04T20:32:50Z"
    },
    {
      "title": "Tenth Blog Post",
      "description": "This is the description of the tenth blog post.",
      "image": "https://example.com/image10.jpg",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      "createdAt": "2023-09-03T18:23:42Z"
    }
  ]
  );

  const fetchBlogData = async () => {
    try {
      const response = await fetch('http://localhost:5000/blog/getall');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBlogList(data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []); 

  return (
    <div className="posts">
      {blogList.map(blogData => (
        <Post key={blogData.id} blogData={blogData} />
      ))}
    </div>
  );
}
