// lib/declaracoes.ts — Configuração completa dos 5 tipos de declaração

export interface Campo {
  id: string;
  label: string;
  placeholder: string;
  tipo: 'text' | 'date' | 'textarea';
  obrigatorio: boolean;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface TipoDeclaracao {
  slug: string;
  titulo: string;
  descricao: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  campos: Campo[];
  template: string;
  faq: FaqItem[];
  icone: 'home' | 'wallet' | 'calendar' | 'scale' | 'heart';
  cor: string;
}

export const declaracoes: TipoDeclaracao[] = [
  {
    slug: 'declaracao-de-residencia',
    titulo: 'Declaração de Residência',
    descricao: 'Comprove seu endereço gratuitamente para bancos, escolas e órgãos públicos.',
    metaTitle: 'Declaração de Residência Grátis — Modelo Pronto para Imprimir',
    metaDescription: 'Gere sua declaração de residência em segundos. Modelo completo e gratuito, sem cadastro, pronto para imprimir. Aceito por bancos, INSS e órgãos públicos.',
    keywords: 'declaração de residência, modelo declaração residência, declaração de residência grátis, declaração de residência modelo word, comprovante de residência declaração',
    icone: 'home',
    cor: '#4F46E5',
    campos: [
      { id: 'nome',     label: 'Nome Completo',       placeholder: 'Seu nome completo',                   tipo: 'text', obrigatorio: true  },
      { id: 'cpf',      label: 'CPF',                 placeholder: '000.000.000-00',                       tipo: 'text', obrigatorio: true  },
      { id: 'endereco', label: 'Endereço Completo',   placeholder: 'Rua, número, bairro, complemento',     tipo: 'text', obrigatorio: true  },
      { id: 'cidade',   label: 'Cidade / Estado',     placeholder: 'Ex: São Paulo / SP',                   tipo: 'text', obrigatorio: true  },
      { id: 'data',     label: 'Data da Declaração',  placeholder: 'Ex: 26 de maio de 2026',               tipo: 'text', obrigatorio: true  },
    ],
    template: `DECLARAÇÃO DE RESIDÊNCIA


Eu, {{nome}}, portador(a) do CPF nº {{cpf}}, declaro para os devidos fins que sou residente e domiciliado(a) no seguinte endereço: {{endereco}}, na cidade de {{cidade}}.

Declaro ainda que as informações aqui prestadas são verdadeiras e assumo total responsabilidade civil e criminal pelas mesmas, nos termos da lei.

Por ser expressão da verdade, firmo a presente declaração.


{{cidade}}, {{data}}.



________________________________________
{{nome}}
CPF: {{cpf}}`,
    faq: [
      {
        pergunta: 'A declaração de residência tem validade jurídica?',
        resposta: 'Sim. Uma declaração de residência assinada pelo próprio declarante tem validade como documento informal. Para uso em processos judiciais ou órgãos que exijam reconhecimento de firma, é recomendável autenticar em cartório.'
      },
      {
        pergunta: 'Preciso reconhecer firma em cartório?',
        resposta: 'Depende do órgão solicitante. Para fins cadastrais em bancos, escolas e prefeituras, geralmente não é necessário. Para uso em processos judiciais ou no DETRAN, verifique a exigência específica do local.'
      },
      {
        pergunta: 'Posso usar esta declaração para o INSS?',
        resposta: 'Em alguns casos sim, especialmente quando outros comprovantes não estão disponíveis. O INSS aceita declaração de residência assinada como documento auxiliar. Confirme com a agência local antes de apresentar.'
      },
      {
        pergunta: 'Qual a validade da declaração?',
        resposta: 'Não há prazo de validade legal estabelecido, mas muitos órgãos aceitam apenas documentos com até 90 dias de emissão. Recomendamos gerar uma nova declaração quando necessário.'
      },
      {
        pergunta: 'A declaração substitui o comprovante de residência?',
        resposta: 'Pode substituir em muitos casos, principalmente quando o solicitante não dispõe de conta de água, luz ou gás em seu nome. Consulte o órgão solicitante para confirmar a aceitação.'
      },
    ],
  },

  {
    slug: 'declaracao-de-renda',
    titulo: 'Declaração de Renda',
    descricao: 'Comprove sua renda como autônomo ou informal para financiamentos e cadastros.',
    metaTitle: 'Declaração de Renda de Autônomo Grátis — Modelo Pronto | DeclaraFácil',
    metaDescription: 'Crie sua declaração de renda para autônomo grátis. Modelo simples e completo, sem cadastro, pronto para imprimir. Ideal para financiamentos, aluguel e cadastros.',
    keywords: 'declaração de renda, declaração de renda autônomo grátis, declaração de renda informal, modelo declaração renda, comprovante de renda autônomo',
    icone: 'wallet',
    cor: '#059669',
    campos: [
      { id: 'nome',      label: 'Nome Completo',        placeholder: 'Seu nome completo',              tipo: 'text', obrigatorio: true  },
      { id: 'cpf',       label: 'CPF',                  placeholder: '000.000.000-00',                  tipo: 'text', obrigatorio: true  },
      { id: 'profissao', label: 'Profissão / Atividade', placeholder: 'Ex: Autônomo, Vendedor, Pintor', tipo: 'text', obrigatorio: true  },
      { id: 'renda',     label: 'Renda Mensal Estimada (R$)', placeholder: 'Ex: 3.500,00',              tipo: 'text', obrigatorio: true  },
      { id: 'cidade',    label: 'Cidade / Estado',      placeholder: 'Ex: São Paulo / SP',              tipo: 'text', obrigatorio: true  },
      { id: 'data',      label: 'Data da Declaração',   placeholder: 'Ex: 26 de maio de 2026',          tipo: 'text', obrigatorio: true  },
    ],
    template: `DECLARAÇÃO DE RENDA


Eu, {{nome}}, portador(a) do CPF nº {{cpf}}, que exerce a atividade de {{profissao}}, residente na cidade de {{cidade}}, declaro para os devidos fins que minha renda mensal estimada é de R$ {{renda}} (valor por extenso conforme descrito).

Declaro ainda que as informações aqui prestadas são verdadeiras e assumo total responsabilidade civil e criminal pelas mesmas, estando ciente das penalidades previstas em lei para declarações falsas.

Por ser expressão da verdade, firmo a presente declaração.


{{cidade}}, {{data}}.



________________________________________
{{nome}}
CPF: {{cpf}}
Profissão: {{profissao}}`,
    faq: [
      {
        pergunta: 'A declaração de renda para autônomo é aceita em bancos?',
        resposta: 'Sim, a maioria dos bancos aceita declaração de renda assinada como comprovante para autônomos, microempreendedores e trabalhadores informais, geralmente junto a outros documentos como extratos bancários.'
      },
      {
        pergunta: 'Posso declarar renda variável?',
        resposta: 'Sim. Use o campo de renda para informar uma média mensal estimada com base nos últimos meses de trabalho. Seja realista e conservador no valor declarado.'
      },
      {
        pergunta: 'Esta declaração substitui o Imposto de Renda?',
        resposta: 'Não. Esta declaração é um documento informal para comprovação de renda. Ela não substitui a Declaração de Imposto de Renda (DIRPF) enviada à Receita Federal, que é obrigatória para quem possui renda acima do limite legal.'
      },
      {
        pergunta: 'Preciso de contador para assinar?',
        resposta: 'Não é obrigatório para esta declaração simples. O próprio trabalhador pode assinar. Para declarações com maior valor probatório, como financiamentos imobiliários de alto valor, um contador pode ser exigido.'
      },
      {
        pergunta: 'Posso usar para financiamento imobiliário?',
        resposta: 'Depende da política de cada instituição financeira. Muitos bancos aceitam declaração de renda para autônomos como complemento a outros documentos como extratos e comprovantes de pagamento de clientes.'
      },
    ],
  },

  {
    slug: 'declaracao-de-comparecimento',
    titulo: 'Declaração de Comparecimento',
    descricao: 'Comprove presença em consultas, audiências, reuniões e atendimentos.',
    metaTitle: 'Declaração de Comparecimento Grátis — Modelo Pronto para Imprimir',
    metaDescription: 'Gere uma declaração de comparecimento grátis para consultas médicas, audiências e visitas. Modelo completo, sem cadastro, pronto para assinar em segundos.',
    keywords: 'declaração de comparecimento, modelo declaração comparecimento, declaração de comparecimento médico, declaração de presença, declaração de comparecimento trabalho',
    icone: 'calendar',
    cor: '#0EA5E9',
    campos: [
      { id: 'nome',        label: 'Nome do Comparecente',  placeholder: 'Nome completo de quem compareceu', tipo: 'text', obrigatorio: true  },
      { id: 'cpf',         label: 'CPF do Comparecente',   placeholder: '000.000.000-00',                   tipo: 'text', obrigatorio: true  },
      { id: 'local',       label: 'Local do Comparecimento', placeholder: 'Ex: Hospital Santa Casa, Clínica X', tipo: 'text', obrigatorio: true  },
      { id: 'finalidade',  label: 'Finalidade / Motivo',   placeholder: 'Ex: consulta médica, audiência, reunião', tipo: 'text', obrigatorio: true  },
      { id: 'dataHora',    label: 'Data e Hora',           placeholder: 'Ex: 26 de maio de 2026, às 14h30', tipo: 'text', obrigatorio: true  },
      { id: 'cidade',      label: 'Cidade / Estado',       placeholder: 'Ex: São Paulo / SP',               tipo: 'text', obrigatorio: true  },
      { id: 'data',        label: 'Data da Declaração',    placeholder: 'Ex: 26 de maio de 2026',           tipo: 'text', obrigatorio: true  },
      { id: 'responsavel', label: 'Nome do Responsável que Declara', placeholder: 'Quem está emitindo esta declaração', tipo: 'text', obrigatorio: true  },
      { id: 'cargo',       label: 'Cargo / Função (opcional)', placeholder: 'Ex: Recepcionista, Gerente', tipo: 'text', obrigatorio: false },
    ],
    template: `DECLARAÇÃO DE COMPARECIMENTO


Declaro, para os devidos fins, que {{nome}}, portador(a) do CPF nº {{cpf}}, esteve presente em {{local}}, no dia e horário: {{dataHora}}, para fins de {{finalidade}}.

A presente declaração é emitida a pedido do(a) interessado(a) para que produza os efeitos legais e de direito.

Por ser expressão da verdade, firmo a presente declaração.


{{cidade}}, {{data}}.



________________________________________
{{responsavel}}{{cargo}}`,
    faq: [
      {
        pergunta: 'Quem deve assinar a declaração de comparecimento?',
        resposta: 'O responsável pelo local onde ocorreu o comparecimento — geralmente um funcionário, recepcionista, gerente ou médico. A pessoa que compareceu não deve assinar como declarante, apenas como beneficiária.'
      },
      {
        pergunta: 'A declaração precisa de CNPJ ou carimbo?',
        resposta: 'Não é obrigatório por lei, mas muitas empresas optam por incluir carimbo com CNPJ para dar maior credibilidade ao documento. Verifique se o órgão solicitante exige isso.'
      },
      {
        pergunta: 'Posso emitir para comparecimento médico?',
        resposta: 'Sim. A declaração de comparecimento pode ser usada para consultas médicas, exames laboratoriais, atendimentos de saúde mental e outros procedimentos. Diferente do atestado, ela apenas confirma a presença, sem mencionar o diagnóstico.'
      },
      {
        pergunta: 'A declaração substitui o atestado médico?',
        resposta: 'Não. Um atestado médico é emitido por profissional habilitado e pode indicar período de afastamento do trabalho. A declaração de comparecimento confirma apenas a presença no local, sem validade para justificar faltas no trabalho.'
      },
    ],
  },

  {
    slug: 'declaracao-de-hipossuficiencia',
    titulo: 'Declaração de Hipossuficiência',
    descricao: 'Declare incapacidade financeira para acesso à justiça gratuita com linguagem jurídica correta.',
    metaTitle: 'Declaração de Hipossuficiência Grátis — Modelo Jurídico | DeclaraFácil',
    metaDescription: 'Baixe modelo de declaração de hipossuficiência grátis. Linguagem jurídica correta para requerer justiça gratuita, sem cadastro, pronto para imprimir.',
    keywords: 'declaração de hipossuficiência, modelo declaração hipossuficiência, declaração de pobreza, justiça gratuita declaração, declaração hipossuficiência econômica',
    icone: 'scale',
    cor: '#7C3AED',
    campos: [
      { id: 'nome',      label: 'Nome Completo',           placeholder: 'Seu nome completo',            tipo: 'text', obrigatorio: true  },
      { id: 'cpf',       label: 'CPF',                     placeholder: '000.000.000-00',                tipo: 'text', obrigatorio: true  },
      { id: 'profissao', label: 'Profissão / Estado Civil', placeholder: 'Ex: autônomo(a), solteiro(a)', tipo: 'text', obrigatorio: true  },
      { id: 'renda',     label: 'Renda Mensal Aproximada (R$)', placeholder: 'Ex: 1.800,00',            tipo: 'text', obrigatorio: true  },
      { id: 'cidade',    label: 'Cidade / Estado',         placeholder: 'Ex: São Paulo / SP',            tipo: 'text', obrigatorio: true  },
      { id: 'data',      label: 'Data da Declaração',      placeholder: 'Ex: 26 de maio de 2026',        tipo: 'text', obrigatorio: true  },
    ],
    template: `DECLARAÇÃO DE HIPOSSUFICIÊNCIA ECONÔMICA


Eu, {{nome}}, portador(a) do CPF nº {{cpf}}, {{profissao}}, residente e domiciliado(a) na cidade de {{cidade}}, DECLARO, sob as penas da lei, que não possuo condições financeiras de arcar com as custas processuais e os honorários advocatícios sem prejuízo do próprio sustento e de minha família, uma vez que minha renda mensal é de aproximadamente R$ {{renda}}.

Declaro ainda que as informações aqui prestadas são verdadeiras e que estou ciente das penalidades legais decorrentes de declaração falsa, previstas no artigo 299 do Código Penal Brasileiro, que tipifica o crime de falsidade ideológica, com pena de reclusão de 1 (um) a 3 (três) anos, e multa.

Por ser expressão da verdade, firmo a presente declaração para que produza todos os efeitos legais, especialmente para fins de concessão do benefício da JUSTIÇA GRATUITA, nos termos do artigo 98 e seguintes do Código de Processo Civil.


{{cidade}}, {{data}}.



________________________________________
{{nome}}
CPF: {{cpf}}`,
    faq: [
      {
        pergunta: 'O que é hipossuficiência jurídica?',
        resposta: 'É a condição de quem não possui condições financeiras de arcar com as custas e honorários de um processo judicial sem prejuízo do próprio sustento. A declaração permite requerer a justiça gratuita prevista no art. 98 do Código de Processo Civil.'
      },
      {
        pergunta: 'Esta declaração garante a justiça gratuita automaticamente?',
        resposta: 'Não automaticamente. A declaração gera presunção de hipossuficiência, mas o juiz pode indeferir o pedido se houver evidências contrárias. Em regra, porém, o juiz concede o benefício com base na declaração assinada pela parte.'
      },
      {
        pergunta: 'O que acontece se a declaração for falsa?',
        resposta: 'Declaração falsa configura crime de falsidade ideológica previsto no art. 299 do Código Penal, com pena de 1 a 3 anos de reclusão. Além disso, o benefício é cassado e o declarante pode ser condenado a pagar as custas em dobro.'
      },
      {
        pergunta: 'Preciso de advogado para usar esta declaração?',
        resposta: 'Sim. A declaração de hipossuficiência é apresentada em processos judiciais junto ao seu advogado ou defensor público. Sem um processo judicial, ela não tem efeito prático imediato.'
      },
      {
        pergunta: 'Qual o limite de renda para ser considerado hipossuficiente?',
        resposta: 'Não há limite fixo em lei. O juiz analisa o caso concreto. Em geral, renda familiar de até 3 salários mínimos é amplamente aceita, mas rendas maiores podem ser aceitas dependendo das despesas e contexto familiar.'
      },
    ],
  },

  {
    slug: 'declaracao-de-uniao-estavel',
    titulo: 'Declaração de União Estável',
    descricao: 'Declare a convivência em união estável para planos de saúde, previdência e benefícios.',
    metaTitle: 'Declaração de União Estável Grátis — Modelo Pronto para Imprimir',
    metaDescription: 'Gere sua declaração de união estável grátis. Modelo completo para os dois companheiros, sem cadastro, pronto para assinar. Válida para planos de saúde e previdência.',
    keywords: 'declaração de união estável, modelo declaração união estável, união estável declaração grátis, declaração de companheiros, modelo união estável simples',
    icone: 'heart',
    cor: '#DB2777',
    campos: [
      { id: 'nome1',        label: 'Nome do(a) 1º Companheiro(a)',  placeholder: 'Nome completo',           tipo: 'text', obrigatorio: true  },
      { id: 'cpf1',         label: 'CPF do(a) 1º Companheiro(a)',   placeholder: '000.000.000-00',           tipo: 'text', obrigatorio: true  },
      { id: 'nome2',        label: 'Nome do(a) 2º Companheiro(a)',  placeholder: 'Nome completo',           tipo: 'text', obrigatorio: true  },
      { id: 'cpf2',         label: 'CPF do(a) 2º Companheiro(a)',   placeholder: '000.000.000-00',           tipo: 'text', obrigatorio: true  },
      { id: 'dataInicio',   label: 'Data de Início da União',       placeholder: 'Ex: janeiro de 2020',     tipo: 'text', obrigatorio: true  },
      { id: 'enderecoComum',label: 'Endereço Comum',               placeholder: 'Rua, número, bairro',     tipo: 'text', obrigatorio: true  },
      { id: 'cidade',       label: 'Cidade / Estado',              placeholder: 'Ex: São Paulo / SP',       tipo: 'text', obrigatorio: true  },
      { id: 'data',         label: 'Data da Declaração',           placeholder: 'Ex: 26 de maio de 2026',  tipo: 'text', obrigatorio: true  },
    ],
    template: `DECLARAÇÃO DE UNIÃO ESTÁVEL


Nós, {{nome1}}, portador(a) do CPF nº {{cpf1}}, e {{nome2}}, portador(a) do CPF nº {{cpf2}}, declaramos para os devidos fins que vivemos em união estável desde {{dataInicio}}, residindo no endereço: {{enderecoComum}}, na cidade de {{cidade}}.

Declaramos ainda que a presente união é pública, contínua e duradoura, com o objetivo de constituição de família, nos termos do artigo 1.723 do Código Civil Brasileiro (Lei nº 10.406/2002).

Por ser expressão da verdade, firmamos a presente declaração.


{{cidade}}, {{data}}.


________________________________________     ________________________________________
{{nome1}}                                    {{nome2}}
CPF: {{cpf1}}                               CPF: {{cpf2}}`,
    faq: [
      {
        pergunta: 'A declaração de união estável tem valor legal?',
        resposta: 'Sim, é um documento válido para fins como inclusão em planos de saúde, previdência social e benefícios trabalhistas. Para efeitos de herança, partilha de bens e registro em cartório, recomenda-se formalizar com contrato registrado em tabelionato.'
      },
      {
        pergunta: 'Precisa de testemunhas na declaração?',
        resposta: 'Não é legalmente obrigatório para uma declaração simples. Porém, alguns órgãos solicitam a assinatura de uma ou duas testemunhas. Para contratos formais de união estável em cartório, a presença de testemunhas é necessária.'
      },
      {
        pergunta: 'Qual a diferença entre união estável e casamento?',
        resposta: 'A união estável é uma entidade familiar reconhecida legalmente sem cerimônia civil obrigatória. Diferentemente do casamento, não exige registro em cartório, mas pode ser registrada voluntariamente. O casamento tem rito formal e gera certidão oficial.'
      },
      {
        pergunta: 'A declaração pode ser feita sem advogado?',
        resposta: 'Sim. Esta declaração simples pode ser assinada pelos próprios companheiros sem necessidade de advogado. Para contratos formais de união estável com cláusulas sobre regime de bens, recomenda-se assessoria jurídica.'
      },
      {
        pergunta: 'Posso usar para incluir dependente no plano de saúde?',
        resposta: 'Sim. A maioria das operadoras de planos de saúde aceita declaração de união estável assinada pelos companheiros para inclusão de dependente. Verifique os documentos específicos exigidos pela sua operadora.'
      },
    ],
  },
];
