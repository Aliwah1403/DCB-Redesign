// Create this file: src/components/PortableTextComponents.jsx

const PortableTextComponents = {
  block: {
    // Paragraphs
    normal: ({ children }) => <p className='mb-4 leading-7'>{children}</p>,

    // Headings
    h1: ({ children }) => (
      <h1 className='text-4xl font-bold mt-8 mb-4'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-3xl font-bold mt-8 mb-4'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-2xl font-bold mt-6 mb-3'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-xl font-bold mt-6 mb-3'>{children}</h4>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700 dark:text-gray-300'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    // Strong (bold)
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,

    // Emphasis (italic)
    em: ({ children }) => <em className='italic'>{children}</em>,

    // Code
    code: ({ children }) => (
      <code className='bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono'>
        {children}
      </code>
    ),

    // Underline
    underline: ({ children }) => <u className='underline'>{children}</u>,

    // Strike-through
    "strike-through": ({ children }) => (
      <s className='line-through'>{children}</s>
    ),

    // Links
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className='text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-300'
        >
          {children}
        </a>
      );
    },
  },

  list: {
    // Bulleted lists
    bullet: ({ children }) => (
      <ul className='list-disc list-outside ml-6 mb-4 space-y-2'>{children}</ul>
    ),

    // Numbered lists
    number: ({ children }) => (
      <ol className='list-decimal list-outside ml-6 mb-4 space-y-2'>
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className='leading-7'>{children}</li>,
    number: ({ children }) => <li className='leading-7'>{children}</li>,
  },

  types: {
    // If you add images or other custom types to your Sanity schema
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className='my-8'>
          <img
            src={value.asset.url}
            alt={value.alt || " "}
            className='w-full rounded-lg'
            loading='lazy'
          />
          {value.caption && (
            <figcaption className='text-center text-sm text-gray-600 dark:text-gray-400 mt-2'>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default PortableTextComponents;
