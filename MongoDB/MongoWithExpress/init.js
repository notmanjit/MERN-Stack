// Sample data for testing

const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
    .then(() => {
        console.log("connected sucessfully");
    })
    .catch((err) => {
        console.log(err);
    })

let allChats = [
    {
        from: "Maya",
        to: "Govind",
        message: "I am studying",
        created_at: new Date()
    },
    {
        from: "Sohan",
        to: "Rahul",
        message: "Where are you?",
        created_at: new Date()
    },
    {
        from: "Neha",
        to: "Vikram",
        message: "May I help you?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Aman",
        message: "Send me today notes",
        created_at: new Date()
    },
    {
        from: "Rohan",
        to: "Shyam",
        message: "Call me later",
        created_at: new Date()
    },
    {
        from: "Adil",
        to: "Sumit",
        message: "I am busy in my work",
        created_at: new Date()
    },
]

Chat.insertMany(allChats);