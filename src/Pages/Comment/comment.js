// App.js
import { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, orderBy, query, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { auth, app } from './firebase';
import './comment.css';

const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp()
    });
    setNewMessage('');
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="forum-title">Discussion Forum</h1>
      <div className="chat-container">
        {/* Chatting */}
        <div className="chat-section">
          {/* Chat List */}
          <div className="chat-list">
            {/* Existing messages go here */}
            {messages.map((msg) => (
              <div className="chat-message" key={msg.id}>
                <div className="chat-info">
                  <img src={msg.data.photoURL} alt="User Avatar" className="avatar" />
                  <div className="message-details">
                    <div className="user-name">{msg.data.displayName}</div>
                    <div className="message-text">{msg.data.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <div className="message-input">
            <input
              className="input-field"
              type="text"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="send-button" onClick={sendMessage}>Send</button>
          </div>
        </div>
        {/* Login/Logout Buttons */}
        <div className="auth-buttons">
          {user ? (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-button" onClick={handleGoogleLogin}>Login with Google</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
