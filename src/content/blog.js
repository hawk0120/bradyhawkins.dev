// blog.js

document.addEventListener('DOMContentLoaded', function () {
    function handlePostLoad(event) {
        if (event.detail.verb === 'get') {
            if (event.detail.status >= 400) {
                console.error('Error loading blog posts:', event.detail.statusText);
            } else {
                console.log('Blog posts loaded successfully!');
            }
        }
    }

    document.body.addEventListener('htmx:afterRequest', handlePostLoad);
});



// Get blog posts from /blog/{posts} and display in the blog section
// Posts are loaded in written in mdx format and converted to HTML

