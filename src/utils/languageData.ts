
export interface Language {
  id: string;
  name: string;
  flag: string;
  speakers: string;
  progress: number;
  color: string;
  description: string;
}

export interface Lesson {
  id: string;
  languageId: string;
  title: string;
  description: string;
  exercises: Exercise[];
  completed: boolean;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
}

export interface Exercise {
  id: string;
  question: string;
  options: Option[];
  correctOptionId: string;
  imageUrl?: string;
  audioUrl?: string;
  type: 'multiple-choice' | 'listening' | 'translation';
}

export interface Option {
  id: string;
  text: string;
}

export const languages: Language[] = [
  {
    id: 'spanish',
    name: 'Spanish',
    flag: '🇪🇸',
    speakers: '460 million',
    progress: 35,
    color: '#e63946',
    description: 'Spanish is a Romance language that originated in the Iberian Peninsula and today has over 483 million native speakers, mainly in Spain and the Americas.',
  },
  {
    id: 'french',
    name: 'French',
    flag: '🇫🇷',
    speakers: '275 million',
    progress: 62,
    color: '#3498db',
    description: 'French is a Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages.',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    speakers: '125 million',
    progress: 18,
    color: '#e84393',
    description: 'Japanese is an East Asian language spoken by about 128 million people, primarily in Japan, where it is the national language.',
  },
  {
    id: 'german',
    name: 'German',
    flag: '🇩🇪',
    speakers: '100 million',
    progress: 45,
    color: '#f39c12',
    description: 'German is a West Germanic language mainly spoken in Central Europe. It is the most widely spoken and official or co-official language in Germany, Austria, Switzerland, and Liechtenstein.',
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    flag: '🇨🇳',
    speakers: '1.1 billion',
    progress: 8,
    color: '#16a085',
    description: 'Mandarin Chinese is a group of Sinitic languages and dialects that are natively spoken across most of northern and southwestern China.',
  },
  {
    id: 'italian',
    name: 'Italian',
    flag: '🇮🇹',
    speakers: '67 million',
    progress: 26,
    color: '#8e44ad',
    description: 'Italian is a Romance language of the Indo-European language family that evolved from the Vulgar Latin of the Roman Empire.',
  },
];

export const lessons: Lesson[] = [
  {
    id: 'spanish-basics',
    languageId: 'spanish',
    title: 'Spanish Basics',
    description: 'Learn essential Spanish phrases and greetings',
    completed: false,
    level: 'beginner',
    icon: '👋',
    exercises: [
      {
        id: 'exercise-1',
        question: 'How do you say "Hello" in Spanish?',
        options: [
          { id: 'option-1', text: 'Hola' },
          { id: 'option-2', text: 'Adiós' },
          { id: 'option-3', text: 'Gracias' },
          { id: 'option-4', text: 'Por favor' },
        ],
        correctOptionId: 'option-1',
        type: 'multiple-choice',
      },
      {
        id: 'exercise-2',
        question: 'How do you say "Thank you" in Spanish?',
        options: [
          { id: 'option-1', text: 'Hola' },
          { id: 'option-2', text: 'Adiós' },
          { id: 'option-3', text: 'Gracias' },
          { id: 'option-4', text: 'Por favor' },
        ],
        correctOptionId: 'option-3',
        type: 'multiple-choice',
      },
      {
        id: 'exercise-3',
        question: 'How do you say "Goodbye" in Spanish?',
        options: [
          { id: 'option-1', text: 'Hola' },
          { id: 'option-2', text: 'Adiós' },
          { id: 'option-3', text: 'Gracias' },
          { id: 'option-4', text: 'Buenos días' },
        ],
        correctOptionId: 'option-2',
        type: 'multiple-choice',
      },
    ],
  },
  {
    id: 'french-basics',
    languageId: 'french',
    title: 'French Basics',
    description: 'Learn essential French phrases and greetings',
    completed: false,
    level: 'beginner',
    icon: '🇫🇷',
    exercises: [
      {
        id: 'exercise-1',
        question: 'How do you say "Hello" in French?',
        options: [
          { id: 'option-1', text: 'Bonjour' },
          { id: 'option-2', text: 'Au revoir' },
          { id: 'option-3', text: 'Merci' },
          { id: 'option-4', text: 'S\'il vous plaît' },
        ],
        correctOptionId: 'option-1',
        type: 'multiple-choice',
      },
      {
        id: 'exercise-2',
        question: 'How do you say "Thank you" in French?',
        options: [
          { id: 'option-1', text: 'Bonjour' },
          { id: 'option-2', text: 'Au revoir' },
          { id: 'option-3', text: 'Merci' },
          { id: 'option-4', text: 'S\'il vous plaît' },
        ],
        correctOptionId: 'option-3',
        type: 'multiple-choice',
      },
    ],
  }
];
