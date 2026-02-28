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

export default function SecurityQuizSlide() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (oIdx) => {
    const updated = [...selected];
    updated[current] = oIdx;
    setSelected(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const score = selected.filter((ans, idx) => ans === questions[idx].answer).length;

  return (
    <section className="max-w-xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Human Security Quiz</h2>
      {!showResults ? (
        <div>
          <div className="mb-6">
            <p className="font-semibold mb-2">{current + 1}. {questions[current].question}</p>
            <div className="space-y-2">
              {questions[current].options.map((opt, oIdx) => (
                <label key={oIdx} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`q${current}`}
                    value={oIdx}
                    checked={selected[current] === oIdx}
                    onChange={() => handleOptionChange(oIdx)}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={current === 0}
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {current < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-lg font-semibold mt-4 mb-6">
            Your Score: {score} / {questions.length}
          </div>
          {questions.map((q, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold">{idx + 1}. {q.question}</p>
              <div>
                {selected[idx] === q.answer ? (
                  <span className="text-green-600">Correct!</span>
                ) : (
                  <span className="text-red-600">Incorrect. Correct answer: {q.options[q.answer]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
