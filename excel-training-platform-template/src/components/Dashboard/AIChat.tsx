import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AI_SYSTEM = `Sen faqat Microsoft Excel bo'yicha yordam beradigan AI yordamchisan. Sening isming "Excel Ustasi". Faqat O'zbek tilida javob ber. Faqat Excel, formulalar, VBA, Pivot Table haqida gapir. Formulalarni rus tilida yoz (СУММ, ЕСЛИ, ВПР, СРЗНАЧ va hokazo). Boshqa mavzularda: "❌ Men faqat Excel bo'yicha yordam bera olaman."`;

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Array<{ role: string; content: string }>>([
    { role: 'system', content: AI_SYSTEM }
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    // Add user message
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Update history
    const newHistory = [...history, { role: 'user', content: text }];
    if (newHistory.length > 22) {
      newHistory.splice(1, newHistory.length - 21);
    }
    setHistory(newHistory);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: newHistory,
          temperature: 0.7,
          max_tokens: 1024
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]?.message?.content) {
        const answer = data.choices[0].message.content;
        const assistantMsg: Message = { role: 'assistant', content: answer };
        setMessages(prev => [...prev, assistantMsg]);
        setHistory(prev => [...prev, { role: 'assistant', content: answer }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Javob kelmadi. Qayta urining.' }]);
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Internet xatosi. Qayta urining.' }]);
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* FAB Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-7 right-7 w-15 h-15 rounded-full bg-gradient-to-br from-[var(--acc)] to-[var(--acc2)] text-white text-[28px] flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(108,92,231,0.4)] z-[1000] transition-transform hover:scale-105"
      >
        🤖
      </div>

      {/* Chat Window */}
      <div className={`fixed bottom-[100px] right-7 w-[340px] max-w-[calc(100vw-48px)] h-[480px] bg-[var(--bg2)] border border-[var(--bdr2)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[1000] flex flex-col overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-[var(--bg3)] px-4 py-4 border-b border-[var(--bdr)] font-bold flex items-center gap-2.5 font-syne">
          <span className="text-xl">👑</span>
          AI Yordamchi
        </div>

        {/* Messages */}
        <div ref={bodyRef} className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
          {/* Default message */}
          {messages.length === 0 && (
            <div className="bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.2)] text-[var(--txt)] px-3.5 py-2.5 rounded-xl rounded-bl-sm text-[0.85rem] leading-relaxed">
              Salom! Excel bo'yicha qanday savolingiz bor?
            </div>
          )}
          
          {messages.map((msg, i) => (
            <div 
              key={i}
              className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[0.85rem] leading-relaxed ${
                msg.role === 'assistant' 
                  ? 'bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.2)] text-[var(--txt)] self-start rounded-bl-sm' 
                  : 'bg-[var(--acc)] text-white self-end rounded-br-sm'
              }`}
            >
              {msg.content.split('\n').map((line, li) => (
                <p key={li} style={{ margin: line.trim() ? '3px 0' : '0' }}>{line}</p>
              ))}
            </div>
          ))}

          {/* Loading */}
          {isLoading && (
            <div className="bg-[rgba(108,92,231,0.1)] border border-[rgba(108,92,231,0.2)] text-[var(--txt)] px-3.5 py-2.5 rounded-xl rounded-bl-sm self-start">
              <span style={{ letterSpacing: '4px', opacity: 0.6 }}>● ● ●</span>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-[var(--bdr)] flex gap-2 bg-[var(--bg3)]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            disabled={isLoading}
            placeholder="Savol yozing..."
            className="flex-1 bg-[var(--bg)] border border-[var(--bdr2)] px-3.5 py-2.5 rounded-lg text-[var(--txt)] text-[0.85rem] outline-none focus:border-[var(--acc)] disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className="bg-[var(--acc)] border-none text-white w-10 rounded-lg cursor-pointer font-bold disabled:opacity-50"
          >
            ↗
          </button>
        </div>
      </div>
    </>
  );
}
