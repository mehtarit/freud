const conversations = [{
    id: 0,
    type: "radio",
    prompt: "Would you prefer a therapist that is...",
    answers: ["Female", "Male", "I am not sure yet"],
    next: '1',
}, {
    id: 1,
    type: "checkbox",
    prompt: "Which type(s) of therapy would you consider?",
    answers: ["One on One", "Group session", "Online therapy e.g. web chat, Skype", "Phone counseling"],
    next: '2',
}, {
    id: 2,
    type: "radio",
    prompt: "To improve your match, please tell us your age.",
    answers: ["Under 18", "18-25", "26-35", "36-49", "50+"],
    next: null,
}, ]

export default conversations;