import { popularPosts } from "@/lib/placeholder-data";
import React from "react";
import { Icons } from "../icons";
import Link from "next/link";

const PopularPosts = () => {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li key={post.title} className="group">
          <Link
            href="#"
            className="flex flex-row items-center gap-2 cursor-pointer py-2"
          >
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all duration-150" />
            <p className="group-hover:text-foreground/75 transition-all duration-150">
              {post.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularPosts;
