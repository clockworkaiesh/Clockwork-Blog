// Blog List Component
const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    return (  
        
        <div className="blog-list">
            <h1>{title}</h1>
             {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    {/* <p><strong>category: {blog.category}</strong></p> */}
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;