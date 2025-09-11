/**
 * Serviço para encurtamento de URLs usando TinyURL
 * 
 * Esta função encurta URLs usando a API do TinyURL.
 * 
 * @param longUrl - A URL longa a ser encurtada
 * @returns Promise com a URL encurtada ou a URL original em caso de erro
 */
export async function shortenUrlWithTinyURL(longUrl: string): Promise<string> {
  try {
    // Endpoint da API do TinyURL para encurtar URLs
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
    
    // Fazer requisição para encurtar a URL
    const response = await fetch(apiUrl);
    
    // Verificar se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Obter a URL encurtada da resposta
    const shortenedUrl = await response.text();
    
    // Validar se a resposta é uma URL válida
    try {
      new URL(shortenedUrl);
      return shortenedUrl;
    } catch {
      throw new Error('Resposta inválida da API do TinyURL');
    }
  } catch (error) {
    console.error('Erro ao encurtar URL com TinyURL:', error);
    // Em caso de erro, retornar a URL original
    return longUrl;
  }
}

/**
 * Função wrapper que tenta encurtar uma URL e fornece um fallback
 * 
 * @param longUrl - A URL longa a ser encurtada
 * @param maxRetries - Número máximo de tentativas em caso de falha
 * @returns Promise com a URL encurtada ou a URL original em caso de erro persistente
 */
export async function shortenUrl(longUrl: string, maxRetries: number = 3): Promise<string> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await shortenUrlWithTinyURL(longUrl);
      
      // Se o resultado for diferente da URL original, significa que funcionou
      if (result !== longUrl) {
        return result;
      }
      
      // Se ainda for a URL original, pode ser um erro silencioso
      // Tentar novamente até o máximo de tentativas
    } catch (error) {
      console.warn(`Tentativa ${attempt} falhou:`, error);
      
      // Se for a última tentativa, retornar a URL original
      if (attempt === maxRetries) {
        return longUrl;
      }
      
      // Esperar um pouco antes de tentar novamente
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  
  // Se todas as tentativas falharem, retornar a URL original
  return longUrl;
}