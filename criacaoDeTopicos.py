import re
import nltk
import spacy
import pandas as pd
from nltk.corpus import stopwords
from nltk.stem import RSLPStemmer, WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans, DBSCAN
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import LatentDirichletAllocation

# Baixar recursos necessários
nltk.download('stopwords')
nltk.download('rslp')
nltk.download('wordnet')

# Carregar modelo de NLP para NER (Reconhecimento de Entidades)
nlp = spacy.load("pt_core_news_sm")

# Instanciar ferramentas de processamento de texto
stop_words = set(stopwords.words('portuguese'))
stemmer = RSLPStemmer()
lemmatizer = WordNetLemmatizer()

# Exemplo de chamados
chamados = [
    "Erro ao acessar o sistema: credenciais inválidas",
    "Sistema retornou erro de autenticação ao tentar login",
    "Falha ao salvar registro: campo obrigatório não preenchido",
    "Erro 500 ao tentar salvar formulário",
    "Sistema apresentou erro de conexão ao carregar dados"
]

# Função para pré-processamento do texto
def preprocessar_texto(texto):
    texto = texto.lower()  # Converte para minúsculas
    texto = re.sub(r'\d+', '', texto)  # Remove números
    texto = re.sub(r'[^\w\s]', '', texto)  # Remove pontuações
    palavras = texto.split()  # Tokeniza
    palavras = [p for p in palavras if p not in stop_words]  # Remove stopwords
    palavras = [stemmer.stem(p) for p in palavras]  # Stemming
    palavras = [lemmatizer.lemmatize(p) for p in palavras]  # Lematização
    return ' '.join(palavras)

# Aplicando pré-processamento nos chamados
chamados_processados = [preprocessar_texto(chamado) for chamado in chamados]

# Função para extrair entidades nomeadas (NER)
def extrair_entidades(texto):
    doc = nlp(texto)
    return [(ent.text, ent.label_) for ent in doc.ents]

# Vetorização TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(chamados_processados)

# Aplicando K-Means para agrupamento
num_clusters = 2  # Ajuste conforme necessário
kmeans = KMeans(n_clusters=num_clusters, random_state=42)
labels_kmeans = kmeans.fit_predict(X)

# Aplicando DBSCAN como alternativa
dbscan = DBSCAN(eps=0.5, min_samples=2, metric='cosine')
labels_dbscan = dbscan.fit_predict(X)

# Calculando similaridade com Distância de Coseno
similaridade = cosine_similarity(X)

# Geração de tópicos com LDA
lda = LatentDirichletAllocation(n_components=2, random_state=42)
lda.fit(X)

# Palavras-chave de cada tópico
terms = vectorizer.get_feature_names_out()
topicos = []
for index, topic in enumerate(lda.components_):
    palavras_topico = [terms[i] for i in topic.argsort()[-5:]]
    topicos.append(f"Tópico {index}: {', '.join(palavras_topico)}")

# Criar DataFrame com os resultados
df_resultado = pd.DataFrame({
    "Chamado Original": chamados,
    "Chamado Processado": chamados_processados,
    "Cluster K-Means": labels_kmeans,
    "Cluster DBSCAN": labels_dbscan
})

print(df_resultado)
print("\nTópicos Identificados:")
for t in topicos:
    print(t)

print("\nSimilaridade entre chamados:")
print(similaridade)







""" Explicação das Funcionalidades

    Pré-processamento de texto

        Remove stopwords, números e pontuação.

        Aplica stemming e lematização para normalizar palavras.

    Extração de palavras-chave com TF-IDF

        Identifica os termos mais importantes em cada chamado.

    Named Entity Recognition (NER)

        Identifica entidades como nomes de sistema, erros e ações.

    Agrupamento de chamados

        K-Means: Cria clusters fixos.

        DBSCAN: Detecta padrões sem definir um número fixo de grupos.

    Medição de similaridade entre chamados

        Usa Distância de Coseno para calcular quão parecidos são os chamados.

    Geração de tópicos automaticamente com LDA

        Encontra temas recorrentes nos chamados e gera rótulos automáticos. """

""" ✅ Agrupa chamados semelhantes automaticamente.
✅ Gera rótulos de erros automaticamente com LDA.
✅ Mede a similaridade entre chamados para detectar duplicados.
✅ Funciona para qualquer lista de chamados, basta mudar os exemplos. """