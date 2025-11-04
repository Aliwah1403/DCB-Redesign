import {defineField, defineType} from 'sanity'

export const postsType = defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      //   options: {
      //     list: [
      //       {title: 'Article', value: 'article'},
      //       {title: 'Academic Paper', value: 'academic_paper'},
      //       {title: 'Essay', value: 'essay'},
      //       {title: 'Short Story', value: 'short_story'},
      //       {title: 'Memoir', value: 'memoir'},
      //       {title: 'Travelogue', value: 'travelogue'},
      //       {title: 'Review', value: 'review'},
      //       {title: 'Interview', value: 'interview'},
      //       {title: 'Book Review', value: 'book_review'},
      //       {title: 'News', value: 'news'},
      //       {title: 'Opinion', value: 'opinion'},
      //       {title: 'Op-Ed', value: 'op_ed'},
      //       {title: 'Letter', value: 'letter'},
      //       {title: 'Announcement', value: 'announcement'},
      //     ],
      //   },
      validation: (rule) => rule.required().error('Please enter a category'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM Do YYYY',
      },
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (in minutes)',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(60).error('Please enter time it takes to read the post'),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Post Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
