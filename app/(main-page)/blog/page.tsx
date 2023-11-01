"use client"

import Link from "next/link"
import { Post, allPosts } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="flex items-center justify-between w-full mb-12 hover:opacity-50"
    >
      <div className="flex flex-col w-full mr-2 space-y-1">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <h3>{post.description}</h3>
      </div>
      <div className="h-full">
        <time dateTime={post.date} className="items-end text-neutral-200">
          {format(parseISO(post.date), "dd/MM/yyyy")}
        </time>
      </div>
    </Link>
  )
}

const BlogPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div>
      <div className="mb-12">
        <SiteHeader />
      </div>
      <div className="flex flex-col">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
