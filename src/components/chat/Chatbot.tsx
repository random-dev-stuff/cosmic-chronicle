import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `👋 Hello! I'm your AI guide to the cosmos.

I can help you with:
- **Space tourism** questions
- **Article recommendations**
- **Space exploration** topics
- **Future travel** information

What would you like to know about space?`,
};

// Mock responses for demonstration - will be replaced with real AI when Cloud is enabled
const getMockResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('expensive')) {
    return `Great question! Space tourism pricing varies significantly:

• **Suborbital flights** (Virgin Galactic, Blue Origin): $250,000 - $450,000
• **Orbital stays** (SpaceX): Starting around $55 million
• **Future orbital hotels**: Expected to be $1-5 million per week

The good news is that prices are trending downward as technology improves! 🚀`;
  }
  
  if (lowerMessage.includes('safe') || lowerMessage.includes('danger') || lowerMessage.includes('risk')) {
    return `Safety is a top priority for space tourism companies:

• **Training programs** prepare passengers for all scenarios
• **Redundant systems** ensure multiple backup options
• **Experienced crews** guide every mission
• **Continuous monitoring** throughout the journey

While space travel inherently carries risks, modern spacecraft are designed with extensive safety measures. The industry has an excellent safety record! 🛡️`;
  }
  
  if (lowerMessage.includes('when') || lowerMessage.includes('book') || lowerMessage.includes('reserve')) {
    return `You can book space travel experiences right now!

• **Virgin Galactic**: Accepting reservations for suborbital flights
• **Blue Origin**: Ticket sales available
• **SpaceX**: Private missions can be arranged
• **Axiom Space**: Booking ISS visits

The wait times vary from months to years depending on the experience. Early booking is recommended! 📅`;
  }
  
  if (lowerMessage.includes('mars') || lowerMessage.includes('moon') || lowerMessage.includes('planet')) {
    return `Exciting developments in deep space tourism:

**Moon Tourism** 🌙
SpaceX's dearMoon project plans to send civilians around the Moon. Commercial lunar landings are expected by 2030.

**Mars** 🔴
While Mars tourism is further out (2040s+), SpaceX is actively developing Starship for Mars colonization, which could eventually include tourism.

The future of space travel is incredibly exciting!`;
  }
  
  return `That's a great topic! Here's what I can share:

Space tourism is evolving rapidly. We have several articles covering various aspects of space travel, from commercial flights to future destinations.

Some popular topics you might explore:
- The latest in commercial spaceflight
- What to expect as a space tourist
- Future space destinations
- The science behind space travel

Would you like me to recommend a specific article, or do you have another question? 🌟`;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getMockResponse(userMessage.content),
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-aurora flex items-center justify-center shadow-glow transition-opacity ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-cosmic-gold rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)] glass-card-elevated flex flex-col overflow-hidden shadow-elevated"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-aurora flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">Cosmos AI</h3>
                  <p className="text-xs text-muted-foreground">Your space guide</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-secondary/50 rounded-bl-md'
                    }`}
                  >
                    <div className="prose prose-sm dark:prose-invert prose-p:leading-relaxed prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary/50 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/50 bg-background/50">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about space tourism..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 text-primary-foreground" />
                </motion.button>
              </div>
             
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
