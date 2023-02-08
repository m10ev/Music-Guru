import { error, redirect } from '@sveltejs/kit'; 
import { less } from 'svelte-preprocess';

const lessons = {
  "test1": [
      {
          "question": "How many quarter notes make up a whole note?",
          "answer": "4",
          "options": [
              2,
              8,
              16,
              4
          ]
      },
      {
        "question": "Select the quater note",
        "answer": "𝅘𝅥",
        "options": [
            '𝅝',
            '𝅘𝅥𝅮',
            '𝅗𝅥',
            '𝅘𝅥'
        ]
      },
      {
          "question": "How many quarter notes are in a half note?",
          "answer": "2",
          "options": [
              4,
              8,
              16,
              2
          ]
      },
      {
          "question": "How many eighth notes are in a whole note?",
          "answer": "8",
          "options": [
              2,
              4,
              16,
              8
          ]
      },
      {
          "question": "How many eighth notes are in a half note?",
          "answer": "4",
          "options": [
              2,
              8,
              16,
              4
          ]
      },
      {
        "question": "Select the eighth note",
        "answer": "𝅘𝅥𝅮",
        "options": [
            '𝅝',
            '𝅘𝅥',
            '𝅘𝅥𝅯',
            "𝅘𝅥𝅮"
        ]
      },
      {
          "question": "How many eighth notes are in a quarter note?",
          "answer": "2",
          "options": [
              4,
              8,
              16,
              2
          ]
      },
      {
          "question": "How many sixteenth notes are in a whole note?",
          "answer": "16",
          "options": [
              2,
              4,
              8,
              16
          ]
      },
      {
        "question": "Select the sixteenth note",
        "answer": "𝅘𝅥𝅯",
        "options": [
            '𝅘𝅥𝅮',
            '𝅘𝅥',
            '𝅗𝅥',
            '𝅘𝅥𝅯'
        ]
      },
      {
          "question": "How many sixteenth notes are in a half note?",
          "answer": "8",
          "options": [
              2,
              4,
              16,
              8
          ]
      },
      {
          "question": "How many sixteenth notes are in a quarter note?",
          "answer": "4",
          "options": [
              2,
              8,
              16,
              4
          ]
      },
      {
          "question": "How many sixteenth notes are in an eighth note?",
          "answer": "2",
          "options": [
              4,
              8,
              16,
              2
          ]
      }
  ],
  "test2": [
      {
          "question": "",
          "answer": "",
          "options": []
      }
  ]
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (lessons[params.slug] === undefined) throw error(404, 'Not found');

    return lessons[params.slug];
}
/** @type {import('./$types').Actions} */
export const actions = {
    check: async ({ request, params }) => { 
      const data = await request.formData();
    //   console.log(data)
      
      const givenAnswer = data.get('question');
      const num = parseInt(data.get('num'));
      const cor = parseInt(data.get('cor'));
      const test = lessons[params.slug][num]
    //   console.log(test)

      if(givenAnswer == test.answer){
        console.log(num + 1)
        return { success: true, count: num, correct: cor + 1 };
      } else if(givenAnswer == test.options[0] || test.options[1] || test.options[2]){
        return { failure: true, count: num, correct: cor }
      }else{
        return { noSelection: true}
      }
    },
    next: async ({ request }) => { 
      const data = await request.formData();
    //   console.log(data)

      const num = parseInt(data.get('num'));
      const cor = parseInt(data.get('cor')) 
      return {count: num + 1, correct: cor};
    },
    finish: async ({ request }) => {
      const data = await request.formData();
      
      throw redirect (301, 'finish')
    }
    
};