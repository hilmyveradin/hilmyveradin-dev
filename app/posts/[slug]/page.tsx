// app/posts/[slug]/page.tsx

import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { ChevronLeft } from "lucide-react"
import { getMDXComponent } from "next-contentlayer/hooks"

import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  debugger
  // 404 if the post does not exist.
  if (!post) notFound()

  debugger
  const MDXContent = getMDXComponent(post.body.code)

  return (
    <div>
      <div className="mt-8 hover:opacity-80">
        <Link replace href={"/blog"} className="mt-4">
          <Button className="p-0 m-0 text-lg font-bold">
            <ChevronLeft className="m-0 mr-1" /> Back
          </Button>
        </Link>
      </div>
      <div className="mt-12 prose dark:prose-invert">
        <MDXContent />
      </div>
    </div>
  )
}
