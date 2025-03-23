// Frases de treino
const treinamento = [
  { frase: "como funciona o serviço", intencao: "duvida" },
  { frase: "quais são os documentos necessários", intencao: "duvida" },
  { frase: "como faço uma requisição de serviço?", intencao: "duvida" },
  { frase: "onde posso solicitar um novo serviço?", intencao: "duvida" },
  { frase: "como acompanho o andamento da minha solicitação?", intencao: "duvida" },
  { frase: "existe um prazo para resposta da requisição?", intencao: "duvida" },
  { frase: "como sei se meu pedido foi aprovado?", intencao: "duvida" },
  { frase: "onde vejo o histórico das minhas requisições?", intencao: "duvida" },
  { frase: "posso cancelar uma requisição feita?", intencao: "duvida" },
  { frase: "como edito um pedido já feito?", intencao: "duvida" },
  { frase: "quem analisa as requisições enviadas?", intencao: "duvida" },
  { frase: "tem como imprimir o comprovante da requisição?", intencao: "duvida" },
  { frase: "quais serviços estão disponíveis para requisição?", intencao: "duvida" },
  { frase: "preciso de login para acompanhar os serviços?", intencao: "duvida" },
  { frase: "como recupero minha senha de acesso ao sistema?", intencao: "duvida" },
  { frase: "onde encontro o protocolo da minha solicitação?", intencao: "duvida" },
  { frase: "o sistema envia notificação de atualização do serviço?", intencao: "duvida" },
  { frase: "como sei em qual etapa está minha requisição?", intencao: "duvida" },
  { frase: "qual o prazo médio de atendimento dos serviços?", intencao: "duvida" },
  { frase: "tem como alterar os dados do meu pedido?", intencao: "duvida" },
  { frase: "onde consulto o status da solicitação?", intencao: "duvida" },
  { frase: "como faço o primeiro acesso ao sistema?", intencao: "duvida" },
  { frase: "o sistema é disponível 24 horas?", intencao: "duvida" },
  { frase: "posso acompanhar mais de uma requisição ao mesmo tempo?", intencao: "duvida" },
  { frase: "onde vejo os serviços já concluídos?", intencao: "duvida" },
  { frase: "há suporte para dúvidas no sistema?", intencao: "duvida" },
  { frase: "como preencho corretamente o formulário de requisição?", intencao: "duvida" },
  { frase: "como anexo documentos no pedido?", intencao: "duvida" },
  { frase: "existe um manual de uso do sistema?", intencao: "duvida" },
  { frase: "onde vejo os detalhes da minha requisição?", intencao: "duvida" },
  { frase: "o sistema envia e-mail com atualizações?", intencao: "duvida" },
  { frase: "quem pode fazer solicitações no sistema?", intencao: "duvida" },
  { frase: "preciso autenticar algum documento?", intencao: "duvida" },
  { frase: "como faço um agendamento pelo sistema?", intencao: "duvida" },
  { frase: "qual o horário de atendimento dos serviços?", intencao: "duvida" },
  { frase: "onde informo os dados do solicitante?", intencao: "duvida" },
  { frase: "posso acompanhar o atendimento pelo celular?", intencao: "duvida" },
  { frase: "é possível compartilhar o acompanhamento com terceiros?", intencao: "duvida" },
  { frase: "como faço uma solicitação urgente?", intencao: "duvida" },
  { frase: "qual o canal para dúvidas técnicas do sistema?", intencao: "duvida" },
  { frase: "como sei se meu pedido foi encaminhado?", intencao: "duvida" },
  { frase: "o sistema exige autenticação digital?", intencao: "duvida" },
  { frase: "como atualizo meus dados no sistema?", intencao: "duvida" },
  { frase: "quais são as etapas do processo de requisição?", intencao: "duvida" },
  { frase: "como incluir mais informações na solicitação?", intencao: "duvida" },
  { frase: "posso editar uma requisição depois de enviada?", intencao: "duvida" },
  { frase: "há limite de requisições por pessoa?", intencao: "duvida" },
  { frase: "como reabrir uma solicitação encerrada?", intencao: "duvida" },
  { frase: "o sistema registra todas as interações?", intencao: "duvida" },
  { frase: "como enviar uma mensagem complementar?", intencao: "duvida" },
  { frase: "quais são os tipos de documentos aceitos?", intencao: "duvida" },
  { frase: "tem como adicionar comentários ao processo?", intencao: "duvida" },
  { frase: "como saberei quando o serviço for finalizado?", intencao: "duvida" },
  { frase: "onde faço a avaliação do serviço prestado?", intencao: "duvida" },
  { frase: "como corrigir informações na requisição?", intencao: "duvida" },
  { frase: "o sistema gera protocolo de atendimento?", intencao: "duvida" },
  { frase: "tem como visualizar requisições anteriores?", intencao: "duvida" },
  { frase: "como reenviar documentos que não foram aceitos?", intencao: "duvida" },
  { frase: "quem recebe minha solicitação?", intencao: "duvida" },
  { frase: "há confirmação de leitura da requisição?", intencao: "duvida" },
  { frase: "como acesso a central de acompanhamento?", intencao: "duvida" },
  { frase: "quais campos são obrigatórios no formulário?", intencao: "duvida" },
  { frase: "tem como anexar vários arquivos de uma vez?", intencao: "duvida" },
  { frase: "qual o tamanho máximo dos arquivos?", intencao: "duvida" },
  { frase: "como acompanho o prazo de atendimento?", intencao: "duvida" },
  { frase: "como confirmo o recebimento da minha solicitação?", intencao: "duvida" },
  { frase: "tem como exportar o histórico de requisições?", intencao: "duvida" },
  { frase: "quais serviços estão em análise?", intencao: "duvida" },
  { frase: "onde vejo os detalhes do atendimento?", intencao: "duvida" },
  { frase: "como saberei se houve pendências?", intencao: "duvida" },
  { frase: "o sistema envia alerta por celular?", intencao: "duvida" },
  { frase: "o sistema aceita assinatura eletrônica?", intencao: "duvida" },
  { frase: "o que acontece após a aprovação da solicitação?", intencao: "duvida" },
  { frase: "como fazer uma nova requisição igual à anterior?", intencao: "duvida" },
  { frase: "como acompanho o fluxo da requisição?", intencao: "duvida" },
  { frase: "é possível visualizar as etapas do processo?", intencao: "duvida" },
  { frase: "tem como salvar um modelo de requisição?", intencao: "duvida" },
  { frase: "o sistema mostra a previsão de conclusão?", intencao: "duvida" },
  { frase: "onde vejo se há comentários no processo?", intencao: "duvida" },
  { frase: "como editar documentos já anexados?", intencao: "duvida" },
  { frase: "é possível adicionar observações ao pedido?", intencao: "duvida" },
  { frase: "posso delegar a requisição a outro usuário?", intencao: "duvida" },
  { frase: "como ativar notificações do sistema?", intencao: "duvida" },
  { frase: "como acessar o painel de solicitações?", intencao: "duvida" },
  { frase: "qual o caminho para abrir uma nova requisição?", intencao: "duvida" },
  { frase: "como acompanho a resposta da análise?", intencao: "duvida" },
  { frase: "o sistema informa motivos de indeferimento?", intencao: "duvida" },
  { frase: "como faço para contestar a decisão?", intencao: "duvida" },
  { frase: "o que acontece após o encerramento do processo?", intencao: "duvida" },
  { frase: "como saber se preciso enviar mais documentos?", intencao: "duvida" },
  { frase: "posso filtrar minhas requisições por status?", intencao: "duvida" },
  { frase: "o sistema indica pendências?", intencao: "duvida" },
  { frase: "há como receber cópia por e-mail da solicitação?", intencao: "duvida" },
  { frase: "tem como marcar serviços como prioritários?", intencao: "duvida" },
  { frase: "o sistema envia relatório de acompanhamento?", intencao: "duvida" },
  { frase: "quero agendar uma consulta", intencao: "agendamento" },
  { frase: "como marcar atendimento", intencao: "agendamento" },
  { frase: "preciso marcar um horário", intencao: "agendamento" },
  { frase: "como agendar um serviço", intencao: "agendamento" },
  { frase: "posso marcar para amanhã?", intencao: "agendamento" },
  { frase: "quero marcar um horário disponível", intencao: "agendamento" },
  { frase: "como vejo os horários disponíveis?", intencao: "agendamento" },
  { frase: "tem agenda para hoje?", intencao: "agendamento" },
  { frase: "qual a disponibilidade para agendamento?", intencao: "agendamento" },
  { frase: "posso remarcar meu horário?", intencao: "agendamento" },
  { frase: "quero agendar agora", intencao: "agendamento" },
  { frase: "como faço para reservar um horário?", intencao: "agendamento" },
  { frase: "tem vagas para atendimento presencial?", intencao: "agendamento" },
  { frase: "como agendar um retorno?", intencao: "agendamento" },
  { frase: "preciso reagendar", intencao: "agendamento" },
  { frase: "quero reservar para semana que vem", intencao: "agendamento" },
  { frase: "onde marco meu atendimento?", intencao: "agendamento" },
  { frase: "como faço agendamento pelo sistema?", intencao: "agendamento" },
  { frase: "tem opção de agendar pelo site?", intencao: "agendamento" },
  { frase: "preciso reservar um horário urgente", intencao: "agendamento" },
  { frase: "quero marcar meu atendimento online", intencao: "agendamento" },
  { frase: "qual o prazo para agendar?", intencao: "agendamento" },
  { frase: "como escolher data e horário?", intencao: "agendamento" },
  { frase: "quero ser atendido ainda essa semana", intencao: "agendamento" },
  { frase: "consigo agendar hoje?", intencao: "agendamento" },
  { frase: "tem agendamento disponível segunda-feira?", intencao: "agendamento" },
  { frase: "onde faço agendamento?", intencao: "agendamento" },
  { frase: "quero reagendar minha visita", intencao: "agendamento" },
  { frase: "tem como agendar por telefone?", intencao: "agendamento" },
  { frase: "o sistema permite agendamento automático?", intencao: "agendamento" },
  { frase: "como remarcar meu agendamento anterior?", intencao: "agendamento" },
  { frase: "desejo marcar um novo atendimento", intencao: "agendamento" },
  { frase: "marcar visita técnica", intencao: "agendamento" },
  { frase: "como verificar agendamento?", intencao: "agendamento" },
  { frase: "quero garantir um horário", intencao: "agendamento" },
  { frase: "tem como antecipar o agendamento?", intencao: "agendamento" },
  { frase: "como confirmo o agendamento?", intencao: "agendamento" },
  { frase: "quero reservar um atendimento", intencao: "agendamento" },
  { frase: "desejo marcar horário para atendimento", intencao: "agendamento" },
  { frase: "como posso confirmar o agendamento?", intencao: "agendamento" },
  { frase: "quero marcar reunião", intencao: "agendamento" },
  { frase: "posso alterar o horário agendado?", intencao: "agendamento" },
  { frase: "preciso reagendar para outro dia", intencao: "agendamento" },
  { frase: "qual o próximo horário disponível?", intencao: "agendamento" },
  { frase: "quero ser atendido na próxima semana", intencao: "agendamento" },
  { frase: "como vejo os horários livres?", intencao: "agendamento" },
  { frase: "posso escolher horário pelo sistema?", intencao: "agendamento" },
  { frase: "tem como escolher o atendente no agendamento?", intencao: "agendamento" },
  { frase: "quero programar um atendimento futuro", intencao: "agendamento" },
  { frase: "tive um problema no sistema", intencao: "reclamacao" },
  { frase: "quero reclamar de um erro", intencao: "reclamacao" },
  { frase: "tive um problema no sistema", intencao: "reclamacao" },
  { frase: "quero reclamar de um erro", intencao: "reclamacao" },
  { frase: "o site está fora do ar", intencao: "reclamacao" },
  { frase: "não estou conseguindo acessar minha conta", intencao: "reclamacao" },
  { frase: "o sistema está muito lento", intencao: "reclamacao" },
  { frase: "não estou recebendo os e-mails de confirmação", intencao: "reclamacao" },
  { frase: "o atendimento foi ruim", intencao: "reclamacao" },
  { frase: "o sistema apresentou uma falha", intencao: "reclamacao" },
  { frase: "não consegui finalizar o cadastro", intencao: "reclamacao" },
  { frase: "há um erro na página de login", intencao: "reclamacao" },
  { frase: "não consigo enviar meus documentos", intencao: "reclamacao" },
  { frase: "o formulário não funciona corretamente", intencao: "reclamacao" },
  { frase: "o sistema caiu durante o processo", intencao: "reclamacao" },
  { frase: "o botão de envio não está funcionando", intencao: "reclamacao" },
  { frase: "recebi uma mensagem de erro", intencao: "reclamacao" },
  { frase: "o site está instável", intencao: "reclamacao" },
  { frase: "o sistema trava toda hora", intencao: "reclamacao" },
  { frase: "o atendimento demorou demais", intencao: "reclamacao" },
  { frase: "o agendamento não foi concluído", intencao: "reclamacao" },
  { frase: "não consegui acessar o serviço", intencao: "reclamacao" },
  { frase: "o sistema apresentou erro inesperado", intencao: "reclamacao" },
  { frase: "o processo está com falhas", intencao: "reclamacao" },
  { frase: "houve um problema no cadastro", intencao: "reclamacao" },
  { frase: "a plataforma não está funcionando direito", intencao: "reclamacao" },
  { frase: "não consegui fazer o login", intencao: "reclamacao" },
  { frase: "tentei várias vezes e não consegui acessar", intencao: "reclamacao" },
  { frase: "há erros constantes no sistema", intencao: "reclamacao" },
  { frase: "estou enfrentando dificuldades com o site", intencao: "reclamacao" },
  { frase: "o atendimento foi insatisfatório", intencao: "reclamacao" },
  { frase: "o sistema não reconhece meus dados", intencao: "reclamacao" },
  { frase: "não consigo atualizar minhas informações", intencao: "reclamacao" },
  { frase: "o sistema não salva os dados corretamente", intencao: "reclamacao" },
  { frase: "houve falha ao enviar o formulário", intencao: "reclamacao" },
  { frase: "tive problemas com o preenchimento do cadastro", intencao: "reclamacao" },
  { frase: "o atendimento automático não resolve meu problema", intencao: "reclamacao" },
  { frase: "o sistema apresenta bugs com frequência", intencao: "reclamacao" },
  { frase: "não consigo recuperar minha senha", intencao: "reclamacao" },
  { frase: "a página de recuperação de senha não funciona", intencao: "reclamacao" },
  { frase: "não consigo anexar os arquivos", intencao: "reclamacao" },
  { frase: "a interface está confusa", intencao: "reclamacao" },
  { frase: "houve erro na emissão do comprovante", intencao: "reclamacao" },
  { frase: "o atendimento foi demorado e ineficiente", intencao: "reclamacao" },
  { frase: "não fui bem atendido pelo suporte", intencao: "reclamacao" },
  { frase: "o sistema não responde", intencao: "reclamacao" },
  { frase: "a plataforma não é intuitiva", intencao: "reclamacao" },
  { frase: "o erro persiste mesmo após tentar novamente", intencao: "reclamacao" },
  { frase: "o sistema não valida os dados corretamente", intencao: "reclamacao" },
  { frase: "os dados sumiram depois que salvei", intencao: "reclamacao" },
  { frase: "não estou satisfeito com o serviço", intencao: "reclamacao" }
];

// Frequência de palavras por intenção
const frequencias = {};
const totalPorIntencao = {};

// Pré-processamento
treinamento.forEach(item => {
  const palavras = item.frase.toLowerCase().split(" ");
  const intencao = item.intencao;

  if (!frequencias[intencao]) {
    frequencias[intencao] = {};
    totalPorIntencao[intencao] = 0;
  }

  palavras.forEach(palavra => {
    frequencias[intencao][palavra] = (frequencias[intencao][palavra] || 0) + 1;
    totalPorIntencao[intencao]++;
  });
});

// Função para classificar nova frase
function classificar(fraseEntrada) {
  const palavras = fraseEntrada.toLowerCase().split(" ");
  const resultados = {};

  for (let intencao in frequencias) {
    let probabilidade = 1;

    palavras.forEach(palavra => {
      const freq = frequencias[intencao][palavra] || 0;
      const totalPalavras = totalPorIntencao[intencao];
      const vocabSize = Object.keys(frequencias[intencao]).length;
      // Laplace smoothing
      const probPalavra = (freq + 1) / (totalPalavras + vocabSize);
      probabilidade *= probPalavra;
    });

    resultados[intencao] = probabilidade;
  }

  // Seleciona a intenção com maior probabilidade
  const melhor = Object.entries(resultados).sort((a, b) => b[1] - a[1])[0];
  return melhor[0];
}

// 🔍 Testando a classificação
const novaFrase = "quero marcar atendimento";
const resultado = classificar(novaFrase);
console.log("Intenção detectada:", resultado);

