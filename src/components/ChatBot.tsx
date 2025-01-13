import {
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  ChevronRight,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';

import { CONTACT_INFO } from '../constants/contact';
import { services } from '../data/services';
import { CallbackForm } from './CallbackForm';

interface Message {
  text: string;
  isBot: boolean;
  options?: {
    text: string;
    action: () => void;
  }[];
  form?: 'callback';
  userSelection?: string;
}

interface ChatData {
  name: string;
  phone: string;
  preferredTime: string;
  interests: string[];
  conversation: Message[];
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [userInterests, setUserInterests] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setTimeout(() => {
        addMessage({
          text: "👋 Hi! I'm here to help you with your solar maintenance needs. What would you like to know about?",
          isBot: true,
          options: [
            {
              text: "View Services",
              action: () => suggestServices()
            },
            {
              text: "Calculate Savings",
              action: () => suggestROICalculator()
            },
            {
              text: "Check System Health",
              action: () => suggestHealthCheck()
            },
            {
              text: "Talk to an Expert",
              action: () => suggestCall()
            }
          ]
        });
      }, 500);
      setHasGreeted(true);
    }
  }, [isOpen]);

  const addMessage = (message: Message) => {
    if (!message.isBot && message.text) {
      setUserInterests(prev => [...prev, message.text]);
    }
    setMessages(prev => [...prev, message]);
  };

  const suggestServices = () => {
    addMessage({
      text: "I'm interested in services",
      isBot: false,
      userSelection: "Services"
    });

    addMessage({
      text: "I'd be happy to tell you about our services! Here are our main offerings:",
      isBot: true
    });

    setTimeout(() => {
      addMessage({
        text: services.map(s => `• ${s.name}`).join('\n'),
        isBot: true,
        options: [
          {
            text: "Schedule Service",
            action: () => suggestCall()
          },
          {
            text: "See Pricing",
            action: () => window.location.href = '/pricing'
          }
        ]
      });
    }, 500);
  };

  const suggestROICalculator = () => {
    addMessage({
      text: "I want to calculate savings",
      isBot: false,
      userSelection: "ROI Calculator"
    });

    addMessage({
      text: "Would you like to see how much you could save with proper solar maintenance? Our ROI calculator can help!",
      isBot: true,
      options: [
        {
          text: "Calculate Savings",
          action: () => window.location.href = '/roi-calculator'
        },
        {
          text: "Talk to an Expert",
          action: () => suggestCall()
        }
      ]
    });
  };

  const suggestHealthCheck = () => {
    addMessage({
      text: "I want to check system health",
      isBot: false,
      userSelection: "Health Check"
    });

    addMessage({
      text: "Let's check your system's health! Our quick assessment can identify potential issues.",
      isBot: true,
      options: [
        {
          text: "Start Health Check",
          action: () => window.location.href = '/system-health'
        },
        {
          text: "Get Professional Inspection",
          action: () => suggestCall()
        }
      ]
    });
  };

  const suggestCall = () => {
    addMessage({
      text: "I'd like to talk to someone",
      isBot: false,
      userSelection: "Contact Request"
    });

    addMessage({
      text: `Would you like us to call you back, or would you prefer to call us now at ${CONTACT_INFO.phone}?`,
      isBot: true,
      options: [
        {
          text: "Request Callback",
          action: () => showCallbackForm()
        },
        {
          text: "Call Now",
          action: () => window.location.href = `tel:${CONTACT_INFO.phone}`
        }
      ]
    });
  };

  const showCallbackForm = () => {
    addMessage({
      text: "Please fill out this quick form and we'll call you back:",
      isBot: true,
      form: 'callback'
    });
  };

  const handleCallbackSubmit = async (data: { name: string; phone: string; preferredTime: string }) => {
    // Collect all chat data
    const chatData: ChatData = {
      ...data,
      interests: userInterests,
      conversation: messages.map(msg => ({
        text: msg.text,
        isBot: msg.isBot,
        userSelection: msg.userSelection
      }))
    };

    try {
      // Submit the data to your server
      const response = await fetch('/api/submit-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chatData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit chat data');
      }

      // Show success message
      addMessage({
        text: `Thanks ${data.name}! We'll call you back at ${data.phone} during the ${data.preferredTime} hours. We've also saved your chat history to provide better assistance when we call.`,
        isBot: true,
        options: [
          {
            text: "Need Something Else?",
            action: () => resetChat()
          }
        ]
      });
    } catch (error) {
      console.error('Error submitting chat data:', error);
      addMessage({
        text: "I apologize, but we had trouble submitting your information. Please try calling us directly or try again later.",
        isBot: true,
        options: [
          {
            text: "Call Now",
            action: () => window.location.href = `tel:${CONTACT_INFO.phone}`
          },
          {
            text: "Try Again",
            action: () => showCallbackForm()
          }
        ]
      });
    }
  };

  const resetChat = () => {
    setMessages([]);
    setHasGreeted(false);
    setUserInterests([]);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Call Button */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="fixed top-20 right-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Chat Bot */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-lg shadow-xl mb-4 w-80 max-h-[500px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
                <span className="font-semibold">Solar Support</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`rounded-lg p-3 max-w-[80%] ${
                      message.isBot ? 'bg-gray-100' : 'bg-blue-600 text-white'
                    }`}>
                      <p className="whitespace-pre-line">{message.text}</p>
                      {message.form === 'callback' && (
                        <CallbackForm
                          onSubmit={handleCallbackSubmit}
                          onCancel={() => suggestCall()}
                        />
                      )}
                      {message.options && (
                        <div className="mt-2 space-y-2">
                          {message.options.map((option, idx) => (
                            <button
                              key={idx}
                              onClick={option.action}
                              className="block w-full text-left px-3 py-2 rounded bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              <span className="flex items-center">
                                <ChevronRight className="w-4 h-4 mr-1" />
                                {option.text}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
