import { error, redirect } from '@sveltejs/kit';

/**
 * @typedef {{ question: string, answer: string, options: (string|number)[] }} Question
 */

/** @type {Record<string, Question[]>} */
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
        "answer": "𝅘𝅥",
        "options": [
            '𝅝',
            '𝅘𝅥𝅮',
            '𝅗𝅥',
            '𝅘𝅥'
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
        "answer": "𝅘𝅥𝅮",
        "options": [
            '𝅝',
            '𝅘𝅥',
            '𝅘𝅥𝅯',
            "𝅘𝅥𝅮"
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
        "answer": "𝅘𝅥𝅯",
        "options": [
            '𝅘𝅥𝅮',
            '𝅘𝅥',
            '𝅗𝅥',
            '𝅘𝅥𝅯'
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
        "options": ['B (si)', 'A (la)', 'G (sol)', 'F (fa)']
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

  ],
  "test3": [
      {
          "question": "In a time signature, what does the top number tell you?",
          "answer": "How many beats are in each measure",
          "options": [
              "Which note value equals one beat",
              "How many beats are in each measure",
              "The tempo of the piece",
              "The key of the piece"
          ]
      },
      {
          "question": "In a time signature, what does the bottom number tell you?",
          "answer": "Which note value equals one beat",
          "options": [
              "How many beats are in each measure",
              "Which note value equals one beat",
              "How loud to play",
              "How many measures are in the piece"
          ]
      },
      {
          "question": "How many beats are in one measure of 4/4 time?",
          "answer": "4",
          "options": [2, 3, 4, 6]
      },
      {
          "question": "In 4/4 time, which note value equals one beat?",
          "answer": "Quarter note",
          "options": ["Whole note", "Half note", "Quarter note", "Eighth note"]
      },
      {
          "question": "How many beats are in one measure of 3/4 time?",
          "answer": "3",
          "options": [2, 3, 4, 6]
      },
      {
          "question": "What is another name for 4/4 time?",
          "answer": "Common time",
          "options": ["Waltz time", "March time", "Common time", "Compound time"]
      },
      {
          "question": "How many beats are in one measure of 2/4 time?",
          "answer": "2",
          "options": [2, 3, 4, 6]
      },
      {
          "question": "In 6/8 time, which note value equals one beat?",
          "answer": "Eighth note",
          "options": ["Whole note", "Half note", "Quarter note", "Eighth note"]
      },
      {
          "question": "What is a vertical line that marks the end of a measure called?",
          "answer": "Bar line",
          "options": ["Time signature", "Bar line", "Staff line", "Beam"]
      },
      {
          "question": "Which combination correctly fills one measure of 4/4 time?",
          "answer": "Half note + Quarter note + Quarter note",
          "options": [
              "Half note + Quarter note + Quarter note",
              "Whole note + Quarter note",
              "Half note + Half note + Half note",
              "Quarter note + Quarter note"
          ]
      }
  ]
}

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
    if (lessons[params.slug] === undefined) throw error(404, 'Not found');
    return { questions: lessons[params.slug] };
}

/** @type {import('./$types').Actions} */
export const actions = {
    check: async ({ request, params }) => {
      const data = await request.formData();

      const givenAnswerRaw = data.get('question');
      const numRaw = data.get('num');
      const corRaw = data.get('cor');

      const num = parseInt(String(numRaw ?? ''), 10);
      const cor = parseInt(String(corRaw ?? ''), 10);
      const safeNum = Number.isInteger(num) ? num : 0;
      const safeCor = Number.isInteger(cor) ? cor : 0;

      const test = lessons[params.slug]?.[safeNum];

      // Defensive guard: if the question index is invalid, fail safely
      // instead of throwing on test.answer. Also surfaces what was
      // actually submitted, to make this easy to debug.
      if (test === undefined) {
        return {
          noSelection: true,
          count: safeNum,
          correct: safeCor,
          debug: { numRaw, corRaw, givenAnswerRaw, slug: params.slug }
        };
      }

      if (givenAnswerRaw === null) {
        // No radio option was selected.
        return { noSelection: true, count: safeNum, correct: safeCor };
      }

      if (givenAnswerRaw == test.answer) {
        return { success: true, count: safeNum, correct: safeCor + 1 };
      } else if (test.options.map(String).includes(String(givenAnswerRaw))) {
        return { failure: true, count: safeNum, correct: safeCor };
      } else {
        return { noSelection: true, count: safeNum, correct: safeCor };
      }
    },
    next: async ({ request }) => {
      const data = await request.formData();

      const num = parseInt(String(data.get('num') ?? ''), 10);
      const cor = parseInt(String(data.get('cor') ?? ''), 10);
      return {
        count: Number.isInteger(num) ? num + 1 : 1,
        correct: Number.isInteger(cor) ? cor : 0
      };
    },
    finish: async ({ request }) => {
      const data = await request.formData();

      const num = parseInt(String(data.get('num') ?? ''), 10);
      const cor = parseInt(String(data.get('cor') ?? ''), 10);
      return {
        finish: true,
        count: Number.isInteger(num) ? num : 0,
        correct: Number.isInteger(cor) ? cor : 0
      };
    }
};