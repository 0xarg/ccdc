import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  onComplete,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayText("");
    setIsTyping(true);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex < text.length) {
        setDisplayText(text.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
        
        if (loop) {
          timeout = setTimeout(() => {
            startTyping();
          }, 2000);
        }
      }
    };

    timeout = setTimeout(() => {
      setIsTyping(true);
      typeNextChar();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, loop, onComplete, startTyping]);

  return { displayText, isTyping, isComplete };
}

// Rotating typewriter for multiple phrases
interface UseRotatingTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useRotatingTypewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseRotatingTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
