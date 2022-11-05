export default {
    title: 'Downloads',
    name: 'downloads',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Keep the titles short!',
            type: 'string',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'file',
            type: 'file',
            title: 'File'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
          },
    ],
    preview: {
        select: {
          title: 'title',
          category: 'category.title',
        },
        prepare(selection) {
            const {category} = selection
            return Object.assign({}, selection, {
              subtitle: category && `in ${category}`,
            })
          },
    }
} 