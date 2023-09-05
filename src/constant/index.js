import { ai , twitter, linkedin, instagram, facebook, blog01, blog02, blog04, blog03} from "../assets";

export const blogs = [
  {
    id: '1',
    title: 'OpenAI',
    content: "OpenAI comes from industry experts who want to bring AI to the masses. It's linked to the non-profit research company OpenAI, co-chaired by Elon Musk and Sam Altman, and sponsored by companies such as Amazon Web Services, Microsoft, and Infosys who are trying to make AI accessible—hence the name. Contributors discuss their collective efforts to promote and advance AI technologies through long-term research. It’s a valuable resource for anyone interested in the future of AI.",
    createdBy: "unknown",
    imageUrl : blog01,
    tags: 'Technology',
    tagss: 'AI',
  },
  {
    id: '2',
    title: 'Machine Learning is Fun',
    content: "Machine Learning is Fun is a valuable, introductory blog. It covers the tenets of ML through interactive tutorials and practical examples, which make it easier to see the useful applications to different businesses and industries. Author Adam Geitgey is a former software developer who now consults organizations on implementing machine learning. ",
    createdBy: "Unknown",
    imageUrl : blog02,
    tags: 'Machine Learning',
    tagss: 'Python',
  },
  {
    id: '3',
    title: 'Planet Python',
    content: "Planet Python is probably one of the first sources you’ll ever consult for all your Python needs. The reason for this is quite simple you have a very good variety of content about Python.You will be able to see many different subjects all the time, they keep posting new posts all the time. It’s refreshing to see how well they write the content and explain it. They carefully selected their content as well, resulting in a blog that gets you a good range of news and tutorials.",
    createdBy: "Planet Python",
    imageUrl : blog03,
    tags: 'Planet Python',
    tagss: 'Python',
  },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
