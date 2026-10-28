window.JOURNAL_CONFIG={
  "id": "ow-hero-journal",
  "title": "OW Hero Journal",
  "titleField": "hero",
  "groupFields": [
    "hero"
  ],
  "groupLabel": "Reflexões por herói",
  "metric": null,
  "fields": [
    {
      "key": "hero",
      "label": "Herói",
      "type": "text",
      "required": true,
      "maxLength": 50,
      "placeholder": "Ex.: Ana"
    },
    {
      "key": "map",
      "label": "Mapa",
      "type": "text",
      "required": true,
      "maxLength": 60,
      "placeholder": "Ex.: King's Row"
    },
    {
      "key": "role",
      "label": "Função",
      "type": "select",
      "options": [
        "Tanque",
        "Dano",
        "Suporte"
      ]
    },
    {
      "key": "result",
      "label": "Resultado",
      "type": "select",
      "options": [
        "Vitória",
        "Derrota",
        "Treino"
      ]
    },
    {
      "key": "decision",
      "label": "Tipo de decisão",
      "type": "select",
      "options": [
        "Posicionamento",
        "Habilidades",
        "Comunicação",
        "Seleção de alvos",
        "Outro"
      ]
    },
    {
      "key": "observation",
      "label": "O que aconteceu?",
      "type": "textarea",
      "required": true,
      "maxLength": 500,
      "placeholder": "Descreva uma escolha e seu contexto"
    },
    {
      "key": "exercise",
      "label": "Próximo exercício",
      "type": "textarea",
      "required": true,
      "maxLength": 300,
      "placeholder": "Uma ação concreta para praticar"
    },
    {
      "key": "date",
      "label": "Data da anotação",
      "type": "date",
      "required": true
    }
  ],
  "demo": [
    {
      "hero": "Ana",
      "map": "King's Row",
      "role": "Suporte",
      "result": "Treino",
      "decision": "Posicionamento",
      "observation": "Exemplo fictício: fiquei exposto ao avançar sem cobertura.",
      "exercise": "Rever linhas de visão antes de cada avanço.",
      "date": "2026-10-27"
    },
    {
      "hero": "D.Va",
      "map": "Lijiang Tower",
      "role": "Tanque",
      "result": "Vitória",
      "decision": "Habilidades",
      "observation": "Exemplo fictício: uso defensivo da matriz sem coordenação.",
      "exercise": "Comunicar o uso da matriz antes da luta.",
      "date": "2026-10-27"
    }
  ]
};
