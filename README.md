# 🚀 Smart RH - Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Sistema de Gestão de Recursos Humanos - Interface Web**

[Demo](#) | [Documentação](./docs) | [Reportar Bug](../../issues) | [Solicitar Funcionalidade](../../issues)

</div>

---

## 📋 Sobre o Projeto

O **Smart RH Frontend** é uma aplicação web moderna e intuitiva desenvolvida para facilitar a gestão de Recursos Humanos. Construída com **React**, oferece uma interface responsiva e dinâmica para gerenciar departamentos, colaboradores e processos de RH.

A aplicação se integra perfeitamente com a API RESTful do Smart RH, proporcionando:
- ✅ Gestão completa de departamentos e colaboradores
- ✅ Cálculo automático de salário líquido
- ✅ Interface responsiva e amigável
- ✅ Sistema de autenticação seguro
- ✅ Dashboard com métricas em tempo real

---

## 🎯 Funcionalidades

### 🏠 Página Home
- Página inicial com apresentação do sistema
- Acesso rápido às funcionalidades principais
- Interface intuitiva e moderna

### 🏢 Gestão de Departamentos
- **Cadastrar Departamentos**: Criação de novos departamentos
- **Listar Departamentos**: Visualização de todos os departamentos cadastrados

### 👥 Gestão de Colaboradores
- **Cadastrar Colaboradores**: Registro de novos colaboradores com todos os dados necessários
- **Listar Colaboradores**: Visualização de todos os colaboradores cadastrados
- **Editar Colaboradores**: Atualização de dados cadastrais dos colaboradores
- **Calcular Salário**: Cálculo automático de salário líquido considerando INSS, IRRF e dependentes



---

## 🛠️ Tecnologias Utilizadas

### Core
- **[React](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Linguagem de programação
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[Node.js](https://nodejs.org/)** - Ambiente de execução

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Estilização customizada

### Bibliotecas
- **[React Router DOM](https://reactrouter.com/)** - Roteamento de páginas
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notificações toast
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

### DevTools
- **[ESLint](https://eslint.org/)** - Linter JavaScript
- **[Prettier](https://prettier.io/)** - Formatador de código

---

## 📁 Estrutura do Projeto

```
Smart-Rh-Frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layout/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── context/
│   ├── routes/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 16.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Backend do Smart RH rodando (veja [aqui](https://github.com/TechBloom-GrupoE/Smart_RH-Backend))

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/TechBloom-GrupoE/Smart_RH-Frontend.git
cd Smart_RH-Frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
VITE_API_URL=http://localhost:8080
VITE_API_TIMEOUT=30000
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

---

## 📝 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera build de produção
npm run build

# Visualiza o build de produção localmente
npm run preview

# Executa o linter
npm run lint

# Corrige problemas do linter automaticamente
npm run lint:fix

# Formata o código com Prettier
npm run format
```

---

## 🔗 Integração com Backend

A aplicação se comunica com o backend através dos seguintes endpoints:

### Departamentos
```
GET    /departamentos              - Lista todos os departamentos
GET    /departamentos/{id}         - Busca departamento por ID
POST   /departamentos              - Cria novo departamento
```

### Colaboradores
```
GET    /colaboradores              - Lista todos os colaboradores
GET    /colaboradores/{id}         - Busca colaborador por ID
POST   /colaboradores              - Cria novo colaborador
PUT    /colaboradores/{id}         - Atualiza colaborador
```

### Autenticação
```
POST   /usuarios/logar      - Realiza login
```

**URL Base da API:** `http://localhost:8080`

---

## 💡 Como Usar

### Cadastrar Departamento
1. Na página inicial, clique em "Departamentos"
2. Clique em "Cadastrar Departamento"
3. Preencha o campo "Descrição"
4. Clique em "Salvar"

### Listar Departamentos
1. Acesse o menu "Departamentos"
2. Visualize a lista completa de departamentos cadastrados

### Cadastrar Colaborador
1. Na página inicial, clique em "Colaboradores"
2. Clique em "Cadastrar Colaborador"
3. Preencha os dados:
   - Nome completo
   - E-mail
   - Cargo
   - Salário bruto
   - Horas mensais
   - Número de dependentes
   - Departamento
   - Foto (URL)
4. Clique em "Salvar"

### Listar Colaboradores
1. Acesse o menu "Colaboradores"
2. Visualize a lista completa de colaboradores cadastrados

### Editar Colaborador
1. Na lista de colaboradores, clique no botão "Editar"
2. Atualize os dados desejados
3. Clique em "Salvar Alterações"

### Calcular Salário Líquido
1. Acesse a funcionalidade "Calcular Salário"
2. Selecione ou preencha os dados do colaborador
3. O sistema calculará automaticamente:
   - Desconto de INSS
   - Desconto de IRRF
   - Adicional de horas extras (se houver)
   - Salário líquido final
4. Visualize o resultado detalhado

---

## 🧮 Cálculo de Salário Líquido

O sistema calcula automaticamente o salário líquido considerando:

### Fórmula
```
Salário Líquido = Salário Bruto + Horas Extras - INSS - IRRF
```

### Descontos Aplicados
- **INSS**: Calculado de forma progressiva
- **IRRF**: Calculado com dedução por dependente
- **Horas Extras**: Adicional calculado sobre horas que excedem 160h/mês

### Exemplo
```javascript
Salário Bruto: R$ 5.000,00
Horas Mensais: 180h
Dependentes: 2

INSS: R$ 570,00
IRRF: R$ 350,00
Horas Extras: R$ 312,50

Salário Líquido: R$ 4.392,50
```

---

## 🎨 Padrões de Código

### Componentes
```javascript
// Componente funcional com destructuring de props
const MeuComponente = ({ titulo, children, onClick }) => {
  return (
    <div className="container">
      <h1>{titulo}</h1>
      {children}
      <button onClick={onClick}>Clique</button>
    </div>
  );
};

export default MeuComponente;
```

### Hooks Personalizados
```javascript
// Hook customizado seguindo convenção use*
export const useDepartamentos = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // ... lógica do hook
  
  return { departamentos, loading, /* métodos */ };
};
```

### Nomenclatura
- **Componentes**: `PascalCase` (Ex: `CardColaborador.jsx`)
- **Funções**: `camelCase` (Ex: `handleSubmit`)
- **Constantes**: `UPPER_SNAKE_CASE` (Ex: `API_URL`)
- **Arquivos CSS**: `kebab-case` (Ex: `card-colaborador.css`)

---

## 📱 Responsividade

O sistema é totalmente responsivo e foi desenvolvido com abordagem **mobile-first**:

| Dispositivo | Largura | Layout |
|-------------|---------|--------|
| 📱 Mobile | < 768px | 1 coluna, menu hambúrguer |
| 📱 Tablet | 768px - 1024px | 2 colunas, menu lateral |
| 💻 Desktop | > 1024px | Múltiplas colunas, menu fixo |

---

## 🚢 Deploy

### Build de Produção
```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados para produção.

### Variáveis de Ambiente de Produção
Crie um arquivo `.env.production`:
```env
VITE_API_URL=https://sua-api.com
VITE_API_TIMEOUT=30000
```

### Deploy na Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy na Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrão de Commits
Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas gerais

---

## 🐛 Reportar Problemas

Encontrou um bug? [Abra uma issue](../../issues/new) descrevendo:
- Descrição do problema
- Passos para reproduzir
- Comportamento esperado
- Screenshots (se aplicável)
- Ambiente (navegador, SO, etc.)

---

## 📊 Status do Projeto

🚧 **Em desenvolvimento ativo** 🚧

### Próximas Funcionalidades
- [ ] Excluir departamentos
- [ ] Excluir colaboradores
- [ ] Filtros e busca avançada de colaboradores
- [ ] Dashboard com gráficos e métricas
- [ ] Sistema de permissões (admin, RH, usuário)
- [ ] Modo escuro (dark theme)
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Notificações em tempo real
- [ ] Histórico de alterações
- [ ] Sistema de cadastro de usuários

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

**TechBloom - Grupo E**

| Membro | GitHub |
|--------|--------|
| Andressa Funes | [@andressa-funes](https://github.com/andressa-funes) |
| Bianca da Silva | [@bianca-silva](https://github.com/bianca-silva) |
| Geovana Cazali | [@geovana-cazali](https://github.com/geovana-cazali) |
| Priscila Lins | [@priscila-lins](https://github.com/priscila-lins) |
| Rayssa Ferraz | [@rayssa-ferraz](https://github.com/rayssa-ferraz) |
| Sofia de Araújo | [@sofia-araujo](https://github.com/sofia-araujo) |
| Thuany da Silva | [@thuany-silva](https://github.com/ThuanyAline) |

---

## 🎓 Agradecimentos

Este projeto foi desenvolvido como parte do bootcamp da [Generation Brasil](https://brazil.generation.org/).

Agradecimentos especiais:
- Instrutores da Generation Brasil
- Colegas de turma
- Comunidade React

---

## 📞 Contato

- **Email**: techbloom.grupoe@gmail.com
- **GitHub**: [TechBloom-GrupoE](https://github.com/TechBloom-GrupoE)
- **LinkedIn**: [Generation Brasil](https://www.linkedin.com/school/generationbrasil/)

---

## 🔗 Links Úteis

- [Documentação do Backend](https://github.com/TechBloom-GrupoE/Smart_RH-Backend)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Axios Documentation](https://axios-http.com/docs/intro)

---

<div align="center">

**Desenvolvido com ❤️ por TechBloom - Grupo E**

⭐ Se este projeto foi útil para você, considere dar uma estrela!

</div>
