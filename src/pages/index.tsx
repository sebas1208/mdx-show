import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import React from "react";
// import { Layout } from "~/components/Layout";
import { Components } from "~/components/Markdown";
import { join } from "path";
import { readFileSync } from "fs";
import { Layout } from '~/components/Layout';

export const getStaticProps = async () => {
  const fullPath = join(process.cwd(), 'src/blogs/MyBlog.mdx');
  const source = readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({ source });

  return {
    props: {
      code,
      frontmatter
    },
  }
}

const Home = ({ code, frontmatter }: { code: string, frontmatter: Record<string, any> }) => {
  const Content = getMDXComponent(code)

  return (<div>
    <Layout>
      <Content components={Components} />
    </Layout>
  </div>)
}

export default Home;
