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
      title: "Backlinks",
      noBacklinksFound: "Nenhum backlinks encontrado",
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
      title: "Graph View",
    },
    recentNotes: {
      title: "Notas Recentes",
      seeRemainingMore: ({ remaining }) => `Veja ${remaining} mais →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude de ${targetSlug}`,
      linkToOriginal: "Link para o original",
    },
    search: {
      title: "Search",
      searchBarPlaceholder: "Procure por algo",
    },
    tableOfContents: {
      title: "Tabela de Conteúdos",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min de leitura`,
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
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
