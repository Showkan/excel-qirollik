export default async function handler(req, res) {
  // Faqat POST so'rovlarga ruxsat
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Faqat POST ruxsat etilgan' });
  }

  // Key serverda — foydalanuvchi ko'ra olmaydi
  const GROQ_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_KEY) {
    return res.status(500).json({ error: 'API key sozlanmagan' });
  }

  try {
    const { messages } = req.body;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_KEY
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        max_tokens: 400,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (e) {
    return res.status(500).json({ error: 'Server xatosi: ' + e.message });
  }
}
