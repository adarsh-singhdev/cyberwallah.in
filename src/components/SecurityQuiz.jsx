import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the most effective way to create a strong password?',
    options: [
      'Use your birthdate',
      'Use a mix of letters, numbers, and symbols',
      'Use the word "password"',
      'Use only lowercase letters',
    ],
    answer: 1,
  },
  {
    question: 'Which of the following is a sign of phishing?',
    options: [
      'Unexpected email asking for personal info',
      'Email from a known contact',
      'Email with no links',
      'Email with a friendly greeting',
    ],
    answer: 0,
  },
  {
    question: 'What should you do if you receive a suspicious link?',
    options: [
      'Click it immediately',
      'Ignore and delete it',
      'Forward to friends',
      'Reply to sender',
    ],
    answer: 1,
  },
  {
    question: 'Which device is safest to use for online banking?',
    options: [
      'Public computer',
      'Friend’s phone',
      'Your personal device',
      'Shared tablet',
    ],
    answer: 2,
  },
  {
    question: 'What is two-factor authentication?',
    options: [
      'Using two passwords',
      'A security method requiring two forms of verification',
      'Logging in twice',
      'Using two devices',
    ],
    answer: 1,
  },
  {
    question: 'How can you protect your personal information online?',
    options: [
      'Share on social media',
      'Use privacy settings',
      'Post everywhere',
      'Ignore security warnings',
    ],
    answer: 1,
  },
  {
    question: 'What is the safest way to connect to public Wi-Fi?',
    options: [
      'Without a password',
      'Using a VPN',
      'Sharing credentials',
      'Connecting automatically',
    ],
    answer: 1,
  },
  {
    question: 'Which is a good practice for social media security?',
    options: [
      'Accept all friend requests',
      'Use strong, unique passwords',
      'Share your location always',
      'Post personal details',
    ],
    answer: 1,
  },
  {
    question: 'What should you do if your account is hacked?',
    options: [
      'Do nothing',
      'Change your password and notify support',
      'Tell no one',
      'Delete your account',
    ],
    answer: 1,
  },
  {
    question: 'Why should you update your software regularly?',
    options: [
      'To get new features',
      'To fix security vulnerabilities',
      'To slow down your device',
      'No reason',
    ],
    answer: 1,
  },
];

export default function SecurityQuiz() {
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (qIdx, oIdx) => {
    const updated = [...selected];
    updated[qIdx] = oIdx;
    setSelected(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const score = selected.filter((ans, idx) => ans === questions[idx].answer).length;

  return (
    <section className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Human Security Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx} className="mb-6">
            <p className="font-semibold mb-2">{idx + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oIdx) => (
                <label key={oIdx} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={oIdx}
                    checked={selected[idx] === oIdx}
                    onChange={() => handleOptionChange(idx, oIdx)}
                    className="mr-2"
                    disabled={showResults}
                  />
                  {opt}
                </label>
              ))}
            </div>
            {showResults && (
              <div className="mt-2 text-sm">
                {selected[idx] === questions[idx].answer ? (
                  <span className="text-green-600">Correct!</span>
                ) : (
                  <span className="text-red-600">Incorrect. Correct answer: {q.options[q.answer]}</span>
                )}
              </div>
            )}
          </div>
        ))}
        {!showResults ? (
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="text-center text-lg font-semibold mt-4">
            Your Score: {score} / {questions.length}
          </div>
        )}
      </form>
    </section>
  );
}
