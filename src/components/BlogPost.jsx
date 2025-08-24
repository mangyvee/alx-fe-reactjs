import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // gets dynamic ID from URL
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This page dynamically shows the blog post based on its ID.</p>
    </div>
  );
}

export default BlogPost;
