import type { GuidelineCard } from './types';

export const NOTICES_CARDS: GuidelineCard[] = [
  {
    type: 'title',
    title: '📢 Important Notices & Disclaimer',
    content: 'Please read the following notices carefully before using the application.',
  },
  {
    type: 'content',
    title: 'Purpose & Origin',
    content: "This application was created by Ricky Soo as a demonstration project for an AI workshop. It simulates an onboarding program for new students, staff, and academicians on the use of generative AI at a fictitious university.",
  },
  {
    type: 'content',
    title: 'Content Disclaimer',
    content: "The GenAI guidelines featured in this app were iteratively developed with Google's Gemini for illustrative purposes. They represent just one possible version of such policies and are not intended to reflect official guidelines for any real-world institution.",
  },
  {
    type: 'content',
    title: 'Limitation of Liability',
    content: "This application is a showcase and is not intended for real-world use. It may contain bugs, inaccuracies, or fictional information. The author is not responsible for any consequences that may arise from its use. By using this app, you acknowledge and agree that you are solely responsible for your actions and their outcomes.",
  },
  {
    type: 'title',
    title: 'Thank You',
    content: 'You have read the notices. You can now proceed with the onboarding.',
  }
];
