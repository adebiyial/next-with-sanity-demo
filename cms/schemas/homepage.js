export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Homepage title',
      type: 'string',
      description: "What's the title of the homepage hero?",
    },
    {
      name: 'subtitle',
      title: 'Homepage subtitle',
      type: 'string',
      description: "What's the subtitle of the homepage hero?",
    },
    {
      name: 'image',
      title: 'Homepage image',
      type: 'image',
    },
    {
      name: 'cta',
      description: "What's URL for the homepage CTA?",
      title: 'CTA',
      type: 'slug',
      options: {
        maxLength: 200,
      },
      validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    },
  ],
};
