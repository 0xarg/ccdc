import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What programs do you offer?",
  "How do I apply?",
  "Tell me about financial aid",
  "ESL program details",
];

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm Columbia College DC's virtual assistant. How can I help you today? Ask me about our programs, admissions, financial aid, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const responses: Record<string, string> = {
        "What programs do you offer?": "We offer a variety of programs including Associate Degrees in Dental Laboratory Technology, Culinary Arts, Cosmetology, and Business Administration. We also have comprehensive ESL programs and certificate courses. Would you like details about any specific program?",
        "How do I apply?": "Applying to Columbia College DC is easy! You can start your application online at our admissions portal. You'll need to submit your transcripts, complete the application form, and meet with an admissions counselor. Would you like me to guide you through the process?",
        "Tell me about financial aid": "We offer various financial aid options including federal grants, scholarships, and payment plans. Many of our students qualify for FAFSA assistance. Our financial aid office can help you explore all available options to make your education affordable.",
        "ESL program details": "Our ESL (English as a Second Language) programs are designed to help international students achieve fluency. We offer multiple levels from beginner to advanced, with both in-person and online options. Classes focus on reading, writing, speaking, and listening skills.",
      };

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[text] || "Thank you for your question! Our admissions team would be happy to help you with more specific information. You can reach us at admissions@ccdc.edu or call (202) 555-0100. Is there anything else I can help you with?",
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-elegant-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isOpen && "scale-0 opacity-0"
        )}
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-card animate-pulse" style={{ backgroundColor: 'hsl(160, 84%, 39%)' }} />
      </button>

      {/* Chat Dialog */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)] bg-card border border-border rounded-2xl shadow-elegant-lg flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Columbia Assistant</h3>
              <p className="text-white/70 text-xs">AI-powered help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                    message.role === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSend(question)}
                  className="text-xs bg-secondary hover:bg-secondary/80 text-foreground px-3 py-1.5 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary"
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSend()}
              size="icon"
              className="bg-primary hover:bg-primary-dark text-white shrink-0"
              disabled={!input.trim() || isLoading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Powered by AI • May occasionally make mistakes
          </p>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
