interface FAQ {
  category: 'General' | 'Online education' | 'Online counselling' | 'Others';
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    category: 'General',
    question: 'What is Madrasa app?',
    answer: 'Madrasa is a comprehensive mobile app designed to serve the diverse needs of the Muslim community—offering everything from education and worship tools to lifestyle and travel solutions, all in one seamless platform.',
  },
  {
    category: 'Online education',
    question: 'What educational resources are available on the Madrasa app?',
    answer: 'The Madrasa app provides a wide range of educational resources, including online courses, video lectures, digital books, and interactive learning tools covering topics like Islamic studies, Arabic language, and more.',
  },
  {
    category: 'Online counselling',
    question: 'Does the Madrasa app offer any counselling services?',
    answer: 'Yes, the Madrasa app features an online counselling platform where users can connect with qualified Islamic scholars and mental health professionals for personalized guidance and support.',
  },
  {
    category: 'Others',
    question: 'Can I use the Madrasa app for lifestyle and travel planning?',
    answer: 'Absolutely! The Madrasa app includes lifestyle and travel features, such as prayer time schedules, Halal restaurant finders, and travel booking tools to help users plan their daily routines and trips in accordance with Islamic principles.',
  },
  {
    category: 'General',
    question: 'Is the Madrasa app available in multiple languages?',
    answer: 'Yes, the Madrasa app supports multiple languages, including Arabic, English, and other popular languages, to cater to the diverse needs of the global Muslim community.',
  },
  {
    category: 'Online education',
    question: 'How can I access the educational content on the Madrasa app?',
    answer: 'The Madrasa app offers both free and premium educational content. Users can access the free resources directly through the app, while the premium content may require a subscription or individual purchase.',
  },
  {
    category: 'Online counselling',
    question: 'Are the counselling services on the Madrasa app confidential?',
    answer: "Yes, the Madrasa app's counselling services are designed to be completely confidential.All user information and discussions with the counsellors are kept private and secure.",
  },
  {
    category: 'Others',
    question: 'Can I use the Madrasa app for community engagement?',
    answer: 'Absolutely! The Madrasa app includes features for community engagement, such as event calendars, discussion forums, and social networking tools to help users connect with their local and global Muslim communities.',
  },
];

export default faqs;