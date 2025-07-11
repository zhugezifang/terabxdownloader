// src/lib/getPost.ts
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function text2Markdown(text: string) {
  const fileContents = text as string;
  
  //console.log(fileContents)
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...data,
  };
}

/*
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export async function getPost(slug: string, lang: string) {
  const fullPath = path.join(postsDirectory, `${slug}.${lang}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}
*/