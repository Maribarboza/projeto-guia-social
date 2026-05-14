# 📱 Guia Social Mobile - Setup Guide

## 🚀 Como Criar o Novo Repositório Mobile

Este é um guia passo a passo para criar o repositório `guia-social-mobile`.

### Opção 1: Criar manualmente no GitHub (5 min)

1. Acesse https://github.com/new
2. **Repository name:** `guia-social-mobile`
3. **Description:** `App mobile para encontrar projetos sociais e ONGs - React Native + Expo`
4. **Public** ✅
5. **Add a README file** ✅
6. **Create repository**

### Opção 2: Usar GitHub CLI (recomendado)

```bash
gh repo create guia-social-mobile \
  --public \
  --description "App mobile para encontrar projetos sociais e ONGs - React Native + Expo" \
  --source=.
```

---

## 📦 Estrutura do Projeto

Após criar o repositório, clone-o e use esta estrutura:

```
guia-social-mobile/
├── app.json
├── package.json
├── .gitignore
├── README.md
├── src/
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   ├── SearchScreen.jsx
│   │   ├── ProjectDetailScreen.jsx
│   │   └── CategoriesScreen.jsx
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Header.jsx
│   │   └── NavigationBar.jsx
│   ├── services/
│   │   ├── api.js
│   │   └── mockData.js
│   ├── styles/
│   │   └── theme.js
│   └── App.jsx
└── assets/
    └── (imagens, ícones, fontes)
```

---

## 🔧 Instalação e Setup

### 1. Clone o repositório
```bash
git clone https://github.com/Maribarboza/guia-social-mobile.git
cd guia-social-mobile
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Inicie o Expo
```bash
npx expo start
```

### 4. Teste no seu celular
- **iOS:** Escaneie o QR code com a câmera
- **Android:** Use o Expo Go app para escanear

---

## 📚 Dependências Principais

```json
{
  "dependencies": {
    "react": "~18.2.0",
    "react-native": "0.73.0",
    "expo": "~50.0.0",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "expo-constants": "~15.4.0",
    "axios": "^1.6.0"
  }
}
```

---

## 🎨 Paleta de Cores (Do seu projeto web)

```javascript
const COLORS = {
  primary: '#0044cc',
  dark: '#002d8a',
  light: '#f4f7f6',
  accent: '#ffcc00',
  white: '#ffffff',
  text: '#333333',
  textLight: '#666666',
  border: '#eeeeee'
};
```

---

## ✨ Funcionalidades Iniciais

- [x] Home com listagem de projetos
- [x] Busca por nome
- [x] Filtro por categoria
- [x] Detalhes do projeto
- [x] Navegação por abas
- [ ] Favoritos
- [ ] Autenticação (futura)
- [ ] Mapa (futura)

---

## 📖 Próximos Passos

1. Criar o repositório
2. Estruturar as pastas
3. Implementar as telas principais
4. Adicionar navegação
5. Integrar dados reais
6. Deploy (Expo Hosting ou EAS)

---

## 🤝 Links Úteis

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

---

Boa sorte! 🚀
