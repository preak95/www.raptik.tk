const BlogList = (props) => {
    const blogs = props.blogs
    return ( 
    <div className="blog-list col-sm-12">
        {
            blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{ blog.title }</h2>
                    <p>{ blog.content }</p>
                    <div className="blog-links">
                    { blog.links.map((link) => (
                        <a href={ link.value } target="new" className="btn btn-primary" >{ link.key }</a>
                    )) }
                    </div>
                </div>
            ))
        }
    </div>
    );
}
 
export default BlogList;