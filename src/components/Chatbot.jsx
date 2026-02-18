import { useState, useEffect } from 'react';
import styles from './Chatbot.module.css';

const RESPONSES = {
  greetings: {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: 'Hello! Welcome to Elite Cycle Homes. How can we assist you today?'
  },
  properties: {
    keywords: ['properties', 'houses', 'homes', 'listings', 'what do you have', 'available', 'models'],
    response: 'We offer premium residential properties at Elite Cycle Homes Estate. Visit our Explore Listings page to see all available house models and features. We have locations in prime areas with modern amenities.'
  },
  price: {
    keywords: ['price', 'cost', 'how much', 'payment', 'affordable', 'rate', 'financing', 'pricing', 'houses cost', 'property price'],
    response: `🏠 **OUR PROPERTY PRICES:**

**IDU BY TRAIN STATION**
• 150 SQM - 3 Bed Terrace Duplex: ₦5M - ₦7M
• 250 SQM - 4 Bed Terrace Duplex: ₦8M - ₦10M
• 300 SQM - 4 Bed Semi-Detached: ₦10M - ₦16M
• 500 SQM - 5 Bed Fully Detached: ₦16M - ₦21M
• 1000 SQM - 8 Units Block of Flats: ₦32M - ₦41M

**KUBWA EXPRESSWAY/KATAMPE EXT. (HILLTOP)**
• 150 SQM - 3 Bed Terrace Duplex: ₦2.5M
• 250 SQM - 4 Bed Terrace Duplex: ₦3.5M
• 300 SQM - 4 Bed Semi-Detached: ₦4.5M
• 500 SQM - 5 Bed Fully Detached: ₦6.5M
• 1000 SQM - Block of Apartments: ₦12.5M

**KUBWA EXPRESSWAY/KATAMPE EXT. (PREMIUM)**
• 400 SQM - 5 Bed Detached Duplex: ₦25M - ₦30M
• 4 Bed Terrace Duplex: ₦22.5M
• 5 Bed Fully Detached: ₦50M - ₦100M
• Block of Apartments: ₦27M - ₦90M

**APO**
• 150 SQM - 3 Bed Terrace Duplex: ₦8M
• 250 SQM - 4 Bed Terrace Duplex: ₦12.5M

💡 **Special Offer:** Turn your rent into land with just ₦4M initial deposit at Elite Heaven IDU!`
  },
  features: {
    keywords: ['features', 'amenities', 'facilities', 'what is included', 'what comes with'],
    response: 'Our estate features include gated security, 24/7 power supply, excellent drainage systems, modern architecture, and a serene environment. Visit our Estate Features page for more details.'
  },
  location: {
    keywords: ['location', 'where', 'address', 'site', 'locations', 'areas', 'idu', 'kubwa', 'katampe', 'apo'],
    response: 'Elite Cycle Homes has premium locations:\n📍 IDU BY TRAIN STATION\n📍 KUBWA EXPRESSWAY/KATAMPE EXT. (HILLTOP)\n📍 APO\n\nCheck our Locations page to explore all site details and amenities.'
  },
  contact: {
    keywords: ['contact', 'call', 'phone', 'email', 'reach', 'how to contact', 'contact us'],
    response: 'You can reach us at:\n📞 Phone: 0707 274 4865\n📧 Email: elitecyclehomesltd@gmail.com\n📍 Office: NOVARE CENTRAL WUSE ZONE 5, ABUJA\n\nOr fill out the contact form on our Contact page.'
  },
  team: {
    keywords: ['team', 'who are you', 'about you', 'staff', 'management'],
    response: 'Elite Cycle Homes is led by experienced professionals in real estate and construction. Meet our expert team on the About page, including our CEO, Head of Sites, Head of Sales, and Head of Digital Marketing.'
  },
  help: {
    keywords: ['help', 'assist', 'support', 'can you help', 'need help'],
    response: 'Of course! I can help you with information about our properties, locations, features, pricing, contact details, and more. Feel free to ask any questions!'
  },
  default: 'Thanks for your question! For more detailed information, please contact us at 0707 274 4865 or visit our Contact page.'
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! 👋 How can we be of help today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, data] of Object.entries(RESPONSES)) {
      if (key !== 'default') {
        if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
          return data.response;
        }
      }
    }
    return RESPONSES.default;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = findResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsLoading(false);
    }, 500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.chatbot}>
          <div className={styles.header}>
            <h3>Elite Cycle Homes</h3>
            <button onClick={toggleChat} className={styles.closeBtn} aria-label="Minimize chat">
              ✕
            </button>
          </div>
          
          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${styles[msg.type]}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <p>
                  <span className={styles.typing}></span>
                  <span className={styles.typing}></span>
                  <span className={styles.typing}></span>
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button onClick={toggleChat} className={styles.floatingBtn} aria-label="Open chat">
          💬 Chat with us
        </button>
      )}
    </>
  );
}

export default Chatbot;
