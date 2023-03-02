import { defineCollection, z } from 'astro:content';
import { AUTHORS } from '../util/authors';

export const postSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  createdAt: z.string().refine((str) => Date.parse(str), {
    message: 'Please input a valid date.',
  }),
  author: z.enum(AUTHORS)
});

export const collections = {
  posts: defineCollection({ schema: postSchema }),
};
