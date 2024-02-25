import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sem Título",
    description: "Nenhuma descrição fornecida",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumo",
      info: "Informação",
      todo: "Para fazer",
      tip: "Dica",
      success: "Sucesso",
      question: "Pergunta",
      warning: "Alerta",
      failure: "Falha",
      danger: "Perigo",
      bug: "Bug",
      example: "Exemplo",
      quote: "Citação",
    },
    backlinks: {
      title: "Links de Retorno",
      noBacklinksFound: "Nenhum link de retorno encontrado",
    },
    themeToggle: {
      lightMode: "Modo claro",
      darkMode: "Modo escuro",
    },
    explorer: {
      title: "Explorer",
    },
    footer: {
      createdWith: "Criado com",
    },
    graph: {
      title: "Visualização de Gráfico",
    },
    recentNotes: {
      title: "Notas Recentes",
      seeRemainingMore: ({ remaining }) => `Veja ${remaining} mais →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transcluído de ${targetSlug}`,
      linkToOriginal: "Link para o original",
    },
    search: {
      title: "Search",
      searchBarPlaceholder: "Digite para procurar o que deseja",
    },
    tableOfContents: {
      title: "Tabela de Conteúdos",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min para ler`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas Recentes",
      lastFewNotes: ({ count }) => `Últimas ${count} notas`,
    },
    error: {
      title: "Não Encontrado",
      notFound: "Esta página é privada ou não existe.",
    },
    folderContent: {
      folder: "Pasta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "Há 1 item nesta pasta." : `Há ${count} items nesta pasta.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Índice de Tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} items com esta tag.`,
      showingFirst: ({ count }) => `Mostrando as primeiras ${count} tags.`,
      totalTags: ({ count }) => `Foram encontradas ${count} tags no total.`,
    },
  },
} as const satisfies Translation
