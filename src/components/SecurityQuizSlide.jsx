import React, { useState } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

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
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    location: '',
  });

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

  const handleFeedbackChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      setFeedbackError('Form endpoint is not configured. Please set VITE_GOOGLE_SCRIPT_URL in .env.');
      return;
    }

    setIsSubmittingFeedback(true);
    setFeedbackError('');

    const payload = {
      timestamp: new Date().toISOString(),
      name: feedback.name,
      email: feedback.email,
      age: feedback.age,
      phone: feedback.phone,
      location: feedback.location,
      score,
      totalQuestion: questions.length,
      'total question': questions.length,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setFeedbackSubmitted(true);
    } catch (error) {
      setFeedbackError('Unable to submit feedback right now. Please try again.');
    } finally {
      setIsSubmittingFeedback(false);
    }
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
      ) : feedbackSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-ink mb-2">Thank you, {feedback.name}!</h3>
          <p className="text-ink-soft">Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <div>
          <div className="text-center text-lg font-semibold mt-4 mb-6">
            Your Score: {score} / {questions.length}
          </div>

          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Feedback Form</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={feedback.name}
                onChange={handleFeedbackChange}
                required
                className="w-full px-3 py-2 border border-ink/20 rounded-md outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={feedback.email}
                onChange={handleFeedbackChange}
                required
                className="w-full px-3 py-2 border border-ink/20 rounded-md outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                min="1"
                value={feedback.age}
                onChange={handleFeedbackChange}
                required
                className="w-full px-3 py-2 border border-ink/20 rounded-md outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={feedback.phone}
                onChange={handleFeedbackChange}
                className="w-full px-3 py-2 border border-ink/20 rounded-md outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">Where are you from?</label>
              <input
                id="location"
                name="location"
                type="text"
                value={feedback.location}
                onChange={handleFeedbackChange}
                required
                className="w-full px-3 py-2 border border-ink/20 rounded-md outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmittingFeedback}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {isSubmittingFeedback ? 'Submitting...' : 'Submit Feedback'}
            </button>

            {feedbackError && (
              <p className="text-sm text-red-600 text-center">{feedbackError}</p>
            )}
          </form>
        </div>
      )}
    </section>
  );
}
