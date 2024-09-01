import { categories } from "@/lib/placeholder-data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";
const TopCategories = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button asChild key={post.href} variant={"secondary"}>
          {
            <Link
              className="hover:scale-110 transition-transform duration-150"
              href={post.href}
            >
              {post.title}
            </Link>
          }
        </Button>
      ))}
    </div>
  );
};

export default TopCategories;
