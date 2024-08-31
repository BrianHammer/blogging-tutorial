import { categories } from "@/lib/placeholder-data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const TopCategories = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {categories.map((category) => (
        <Button asChild key={category} variant={"secondary"}>
          {
            <Link
              className="hover:scale-110 transition-transform duration-150"
              href={`/blog/${category}`}
            >
              {category}
            </Link>
          }
        </Button>
      ))}
    </div>
  );
};

export default TopCategories;
