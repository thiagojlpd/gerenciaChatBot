import { useEffect, useState } from 'react';

export default function ChamadosPage() {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/processar-chamados');
      const data = await res.json();
      setResultado(data);
    };
    fetchData();
  }, []);

  if (!resultado) return <div>Loading...</div>;

  return (
    <div>
      <h1>Resultado dos Chamados</h1>
      <h2>Chamados Processados</h2>
      <pre>{JSON.stringify(resultado.chamadosProcessados, null, 2)}</pre>
      <h2>Clusters K-Means</h2>
      <pre>{JSON.stringify(resultado.clusterKMeans, null, 2)}</pre>
      <h2>Tópicos Identificados</h2>
      <pre>{JSON.stringify(resultado.topicos, null, 2)}</pre>
    </div>
  );
}
