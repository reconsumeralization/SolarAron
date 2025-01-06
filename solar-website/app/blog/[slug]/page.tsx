import { blogContent } from './blog-data'
import { BlogPostContent } from './blog-post-content'

export default function BlogPost({ params }: { readonly params: { readonly slug: string } }) {
  const post = blogContent[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="text-blue-600 hover:underline">
            Return to Blog
          </a>
        </div>
      </div>
    )
  }

  return <BlogPostContent post={post} />
}

export { generateStaticParams } from './generateStaticParams' 