// import { error } from '@sveltejs/kit';
 
// const lessons = {
//   "test1": [
//       {
//           "question": "How many quarter notes make up a whole note?",
//           "answer": "4",
//           "options": [
//               2,
//               8,
//               16
//           ]
//       },
//       {
//         "question": "Select the quater note",
//         "answer": "𝅘𝅥",
//         "options": [
//             '𝅝',
//             '𝅘𝅥𝅮',
//             '𝅗𝅥'
//         ]
//       },
//       {
//           "question": "How many quarter notes are in a half note?",
//           "answer": "2",
//           "options": [
//               4,
//               8,
//               16
//           ]
//       },
//       {
//           "question": "How many eighth notes in are a whole note?",
//           "answer": "8",
//           "options": [
//               2,
//               4,
//               16
//           ]
//       },
//       {
//           "question": "How many eighth notes in are a half note?",
//           "answer": "4",
//           "options": [
//               2,
//               8,
//               16
//           ]
//       },
//       {
//         "question": "Select the eighth note",
//         "answer": "𝅘𝅥𝅮",
//         "options": [
//             '𝅝',
//             '𝅘𝅥',
//             '𝅘𝅥𝅯'
//         ]
//       },
//       {
//           "question": "How many eighth notes in are a quarter note?",
//           "answer": "2",
//           "options": [
//               4,
//               8,
//               16
//           ]
//       },
//       {
//           "question": "How many sixteenth notes in are a whole note?",
//           "answer": "16",
//           "options": [
//               2,
//               4,
//               8
//           ]
//       },
//       {
//         "question": "Select the sixteenth note",
//         "answer": "𝅘𝅥𝅯",
//         "options": [
//             '𝅘𝅥𝅮',
//             '𝅘𝅥',
//             '𝅗𝅥'
//         ]
//       },
//       {
//           "question": "How many sixteenth notes in are a half note?",
//           "answer": "8",
//           "options": [
//               2,
//               4,
//               16
//           ]
//       },
//       {
//           "question": "How many sixteenth notes in are a quarter note?",
//           "answer": "4",
//           "options": [
//               2,
//               8,
//               16
//           ]
//       },
//       {
//           "question": "How many sixteenth notes in are an eighth note?",
//           "answer": "2",
//           "options": [
//               4,
//               8,
//               16
//           ]
//       }
//   ],
//   "test2": [
//       {
//           "question": "",
//           "answer": "",
//           "options": []
//       }
//   ]
// }

// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//     if (lessons[params.slug] === undefined) throw error(404, 'Not found');

//     return lessons[params.slug];
// }