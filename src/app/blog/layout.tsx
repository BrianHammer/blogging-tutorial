import Container from "@/components/Container";
import MainNav from "@/components/MainNav";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
};
export default BlogLayout;
