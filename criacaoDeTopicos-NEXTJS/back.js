import natural from 'natural';
import stopword from 'stopword';
import cosineSimilarity from 'cosine-similarity';
import lda from 'lda';
import { KMeans } from 'ml5';

export default async function handler(req, res) {
  const chamados = [
    "Erro ao acessar o sistema: credenciais inválidas",
    "Sistema retornou erro de autenticação ao tentar login",
    "Falha ao salvar registro: campo obrigatório não preenchido",
    "Erro 500 ao tentar salvar formulário",
    "Sistema apresentou erro de conexão ao carregar dados"
  ];

  // npm install natural stopword cosine-similarity ml5 lda

  // Pré-processamento de texto
  const preprocessarTexto = (texto) => {
    texto = texto.toLowerCase(); // Converte para minúsculas
    texto = texto.replace(/\d+/g, ''); // Remove números
    texto = texto.replace(/[^\w\s]/g, ''); // Remove pontuações
    let palavras = texto.split(' '); // Tokeniza
    palavras = stopword.removeStopwords(palavras, 'pt'); // Remove stopwords
    const stemmer = natural.PorterStemmerPt;
    palavras = palavras.map((palavra) => stemmer.stem(palavra)); // Stemming
    return palavras.join(' ');
  };

  const chamadosProcessados = chamados.map(preprocessarTexto);

  // Vetorização TF-IDF
  const tfidf = new natural.TfIdf();
  chamadosProcessados.forEach(texto => tfidf.addDocument(texto));
  
  // Aplicando K-Means para agrupamento
  const kmeans = new KMeans();
  kmeans.train(tfidf.listTerms(0).map(term => term.tfidf));
  const labelsKMeans = kmeans.predict(tfidf.listTerms(0).map(term => term.tfidf));

  // Calculando Similaridade com Distância de Coseno
  const similaridade = cosineSimilarity(tfidf.listTerms(0).map(term => term.tfidf));

  // Gerando tópicos com LDA
  const resultLDA = lda(chamadosProcessados, 2, 5);
  const topicos = resultLDA.map((topic, index) => {
    return `Tópico ${index}: ${topic.map(word => word.term).join(', ')}`;
  });

  // Organizando os resultados
  res.status(200).json({
    chamadosOriginal: chamados,
    chamadosProcessados,
    clusterKMeans: labelsKMeans,
    similaridade,
    topicos
  });
}
