interface FAQ {
  category: 'Online Learning' | 'Online Consultation' | 'Prayer Tools' | 'Payment';
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    category: 'Online Learning',
    question: 'How can I learn Islam through the Madrasa App?',
    answer: 'Madrasa App offers both online and offline learning opportunities. You can connect with qualified and verified teachers for subjects like Quran, Islamic studies, Urdu, Arabic, and Persian. Simply download the app, register, and select your preferred course, language, and learning mode (online or offline).',
  },
  {
    category: 'Online Learning',
    question: 'Are the teachers on Madrasa App verified?',
    answer: 'Yes, all teachers and counselors on Madrasa App are carefully selected and verified for their qualifications, experience, and adherence to Islamic values. We ensure that the educators meet the highest standards to provide you with quality learning.',
  },
  {
    category: 'Online Learning',
    question: 'Does Madrasa App offer female tutors for female students?',
    answer: 'Yes, Madrasa App offers a dedicated section where female students can connect with qualified female tutors for their Islamic education, Quranic studies, and other subjects.',
  },
  {
    category: 'Online Learning',
    question: 'How can I find a female tutor on Madrasa App?',
    answer: 'You can filter your search based on your preferences such as course, language, and tutor\'s gender. Simply select the female tutor option when looking for tutors and choose the best match for your learning needs.',
  },
  {
    category: 'Online Consultation',
    question: 'What is the Online Guidance feature on Madrasa App?',
    answer: 'The Online Guidance feature connects you with qualified Islamic Scholars, counselors, and experts who provide support for life challenges, doubts, relationship concerns, parenting challenges, and emotional well-being, all while staying aligned with Islamic values.',
  },
  {
    category: 'Online Consultation',
    question: 'How can I connect with an Islamic Scholar for guidance?',
    answer: 'You can easily connect with a scholar by selecting the "Online Guidance" section in the app. Browse through the available scholars, choose the one that best fits your needs, and book a session for personalized advice and support.',
  },
  {
    category: 'Online Consultation',
    question: 'What kind of challenges can I seek guidance for?',
    answer: 'You can seek guidance on a variety of issues such as personal doubts, relationship and parenting challenges, mental health concerns, anxiety, stress, spiritual doubts, life decisions, and more, all within an Islamic framework.',
  },
  {
    category: 'Online Consultation',
    question: 'Are the scholars on Madrasa App experienced and trustworthy?',
    answer: 'Yes, all scholars and counselors on Madrasa App are highly qualified, experienced, and verified. They have a deep understanding of Islamic teachings and are dedicated to providing guidance with compassion and clarity.',
  },
  {
    category: 'Online Consultation',
    question: 'Can I ask questions and interact with the scholar during the session?',
    answer: 'Yes, during your session, you can ask questions, seek clarification, and engage with the scholar to gain a deeper understanding of your issues and find tailored solutions.',
  },
  {
    category: 'Prayer Tools',
    question: 'What prayer tools does Madrasa App offer?',
    answer: 'Madrasa App provides a range of prayer tools including a Digital Quran (with audio and text), Namaz Alerts, a comprehensive Dua Collection, a Zakat Calculator, and much more to help you stay connected to your faith daily.',
  },
  {
    category: 'Prayer Tools',
    question: 'How can I use the Digital Quran feature?',
    answer: 'The Digital Quran feature offers both audio and text formats, allowing you to listen to the Quran or read it at your convenience. You can access it anytime to enhance your connection with Allah and deepen your understanding.',
  },
  {
    category: 'Prayer Tools',
    question: 'How do the Namaz Alerts work?',
    answer: 'Madrasa App sends timely notifications to remind you of the five daily prayers (Salah). You can customize the alerts based on your location and prayer times to ensure you never miss a prayer.',
  },
  {
    category: 'Prayer Tools',
    question: 'What is the Dua Collection in the Madrasa App?',
    answer: 'The Dua Collection in Madrasa App provides a curated selection of essential Duas in both audio and text formats. These Duas cover a variety of occasions and help users strengthen their faith and connection with Allah.',
  },
  {
    category: 'Payment',
    question: 'How can I make payments on Madrasa App?',
    answer: 'You can make payments after taking a free session and confirming the tutor you want to learn from. Once you\'re satisfied, select a plan, book the tutor\'s availability, and proceed with the payment.',
  },
  {
    category: 'Payment',
    question: 'What payment methods are accepted?',
    answer: 'Madrasa App accepts a variety of payment methods, including: UPI apps like PhonePe, Paytm, and Google Pay; Credit/Debit cards (Visa, MasterCard); Digital wallets (Apple Pay, Google Wallet); Direct bank transfers.',
  },
  {
    category: 'Payment',
    question: 'What is the refund policy for Online Learning and Online Consultation?',
    answer: 'Madrasa App offers a free trial session for Online Learning to help you evaluate the teacher\'s style and compatibility. Once a teacher is selected and payment is made, the amount is non-refundable. However, if you face any issues, such as the teacher not meeting expectations or failing to teach properly, our support team will work with you to resolve the situation by finding a suitable replacement or addressing your concerns.',
  },
  {
    category: 'Payment',
    question: 'I have a payment issue. How can I resolve it?',
    answer: 'For any payment-related queries or issues, you can directly contact us from the "Profile" section of the app, where you\'ll find the Support option. You can also reach out to our team via WhatsApp for quick assistance. Our support team is available to address any concerns, including failed UPI transactions, incorrect charges, or teacher-related problems after payment.',
  },
];


export default faqs;