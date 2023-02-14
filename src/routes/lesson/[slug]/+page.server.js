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
        "question": "Select the quarter note",
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
        "question": "What note is a whole step above A (la)",
        "answer": "B (si)",
        "options": ['G (sol)', 'C (do)', 'D (re)', 'B (si)']
      },
      {
        "question": "What note is a half step above E (mi)",
        "answer": "F (fa)",
        "options": ['B(si)', 'A(la)', 'G(sol)', 'F (fa)']
      },
      {
        "question": "What note is a whole step above D (re)",
        "answer": "E (mi)",
        "options": ['C(do)', 'F(fa)', 'B(si)', 'E (mi)']
      },
      {
        "question": "What note is a whole step above F (fa)",
        "answer": "G (sol)",
        "options": ['B (si)', 'A (la)', 'D(re)', 'G (sol)']
      },
      {
        "question": "What note is a half step above B (si)",
        "answer": "C (do)",
        "options": ['D (re)', 'F (fa)', 'E (mi)', 'C (do)']
      },
      {
        "question": "What note is a half step down F (fa)",
        "answer": "E (mi)",
        "options": ['B (si)', 'A (la)', 'D (re)', 'E (mi)']
      },
      {
        "question": "What note is a whole step above G (sol)",
        "answer": "A (la)",
        "options": ['B (si)', 'C (do)', 'D (re)', 'A (la)']
      },
      {
        "question": "What note is a whole step above C (do)",
        "answer": "D (re)",
        "options": ['E (mi)', 'A (la)', 'B(si)', 'D (re)']
      },
      {
        "question": "What note is a whole step down A (la)",
        "answer": "G (sol)",
        "options": ['B (si)', 'C (do)', 'D (re)', 'G (sol)']
      },
      {
        "question": "What note is a whole step down G (sol)",
        "answer": "F (fa)",
        "options": ['B (si)', 'C (do)', 'D (re)', 'F (fa)']
      },
      {
        "question": "What note is a whole step down B (si)",
        "answer": "A (la)",
        "options": ['D (re)', 'F (fa)', 'E (mi)', 'A (la)']
      },
      {
        "question": "What note is a whole step down D (re)",
        "answer": "C (do)",
        "options": ['E (mi)', 'F (fa)', 'B (si)', 'C (do)']
      },
      {
        "question": "What note is a half step down C (do)",
        "answer": "B (si)",
        "options": ['E (mi)', 'A (la)', 'D (re)', 'B (si)']
      },
      {
        "question": "What note is a whole step down E (mi)",
        "answer": "D (re)",
        "options": ['B (si)', 'A (la)', 'G (sol)', 'D (re)']
      },

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
    //   console.log(num + 1)
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
      const cor = parseInt(data.get('cor'));
      return {count: num + 1, correct: cor};
    },
    finish: async ({ request }) => {
      const data = await request.formData();
      
      const num = parseInt(data.get('num'));
      const cor = parseInt(data.get('cor'));
      return {finish: true, count: num, correct: cor};
    }
    
};