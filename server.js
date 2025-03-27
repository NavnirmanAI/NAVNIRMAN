const express = require('express');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, set, get } = require('firebase/database');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtOWJd8duOmOctCfEQQESRY817v5dRH1k",
    authDomain: "navnirmanai-1a761.firebaseapp.com",
    databaseURL: "https://navnirmanai-1a761-default-rtdb.firebaseio.com",
    projectId: "navnirmanai-1a761",
    storageBucket: "navnirmanai-1a761.firebasestorage.app",
    messagingSenderId: "569693452065",
    appId: "1:569693452065:web:01f06b5440983539bb060",
    measurementId: "G-5D326KJ51W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Chat Routes
app.post('/api/start-conversation', async (req, res) => {
    try {
        const { user_id } = req.body;
        
        // Create a new conversation in Firebase
        const conversationsRef = ref(database, 'conversations');
        const newConversationRef = push(conversationsRef);
        
        // Store conversation data
        await set(newConversationRef, {
            user_id: user_id,
            created_at: new Date().toISOString()
        });
        
        res.json({ conversation_id: newConversationRef.key });
    } catch (error) {
        console.error('Error creating conversation:', error);
        res.status(500).json({ error: 'Failed to create conversation' });
    }
});

app.post('/api/chat', async (req, res) => {
    try {
        const { conversation_id, message } = req.body;
        
        // Store user message
        const messagesRef = ref(database, `conversations/${conversation_id}/messages`);
        const newMessageRef = push(messagesRef);
        
        await set(newMessageRef, {
            message: message,
            sender: 'user',
            timestamp: new Date().toISOString()
        });
        
        // Generate bot response (you can integrate with your chatbot logic here)
        const botResponse = "I'm Navie, your e-waste recycling assistant. I can help you with information about e-waste recycling, pricing estimates, and our collection process. What would you like to know?";
        
        // Store bot response
        const botMessageRef = push(messagesRef);
        await set(botMessageRef, {
            message: botResponse,
            sender: 'bot',
            timestamp: new Date().toISOString()
        });
        
        res.json({ response: botResponse });
    } catch (error) {
        console.error('Error handling chat:', error);
        res.status(500).json({ error: 'Failed to process message' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});