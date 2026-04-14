# 📸 Carolina Alves Fotografia | Landing Page Profissional

![Landing Page Preview](./preview/preview.png)

Landing page de alta performance desenvolvida para a fotógrafa **Carolina Alves**, baseada em Campo Grande - MS. O projeto foca em uma experiência de usuário (UX) sensível e fluida, aliada a uma arquitetura técnica otimizada para SEO e conversão.

---

## ✨ Funcionalidades e Diferenciais

### 📱 Experiência do Usuário (UX/UI)

- **Design Responsivo Premium:** Layout adaptável para qualquer dispositivo (Desktop, Tablet e Mobile) utilizando **CSS Grid e Flexbox**.
- **Navegação Inteligente:** Menu fixo (`sticky`) para acesso rápido e Menu Mobile (Hambúrguer) totalmente funcional em Vanilla JS.
- **Carrosséis de Portfólio:** Galerias de imagens interativas implementadas sem dependências externas para garantir leveza e velocidade.
- **Micro-interações:** Animações de _Scroll Reveal_ (elementos surgindo suavemente) utilizando a **Intersection Observer API** para máxima performance.

### 🔍 SEO Técnico & Performance

- **SEO On-Page:** Uso de tags semânticas, meta descrições otimizadas e tag **Canonical** para evitar conteúdo duplicado.
- **Structured Data (JSON-LD):** Implementação de Schema.org (`PhotographyBusiness`) para que o Google exiba _rich snippets_ e entenda melhor o negócio local.
- **Indexação:** Projeto inclui arquivos `robots.txt` e `sitemap.xml` configurados para facilitar a leitura pelos motores de busca.
- **Google Search Console:** Verificação de propriedade configurada via meta-tag para monitoramento de tráfego.
- **Performance Otimizada:** Implementação de `loading="lazy"` em imagens de alta resolução para melhorar o tempo de carregamento inicial (LCP).

---

## 🚀 Tecnologias Utilizadas

### Core

- **HTML5 Semântico:** Estrutura focada em acessibilidade e relevância para o Google.
- **CSS3 Modular:** Organização por componentes (`header.css`, `home.css`, `footer.css`) para facilitar a manutenção e escalabilidade.
- **JavaScript (Vanilla JS):** Lógica pura para manipulação de DOM e animações, eliminando a necessidade de frameworks pesados.

### Bibliotecas & APIs

- **Intersection Observer API:** Para o controle inteligente de animações no scroll.
- **Font Awesome:** Iconografia profissional para redes sociais e interface.
- **Google Fonts:** Tipografia selecionada para reforçar o branding (Montserrat e Playfair Display).

---

## 🛠 Estrutura do Projeto

A arquitetura modular permite que cada seção do site seja estilizada de forma independente:

```text
/src
├── /images          # Ativos de mídia, ícones e favicons
├── footer.css       # Estilos específicos do rodapé e redes sociais
├── header.css       # Estilos de navegação e menu mobile
├── home.css         # Estilização da Hero Section e Portfólio
├── testimonials.css # Layout da seção de depoimentos e avatares
├── style.css        # Configurações globais e importação dos módulos
├── index.html       # Estrutura principal e tags de SEO
├── script.js        # Lógica de interatividade e observadores
├── sitemap.xml      # Mapa do site para indexação
└── robots.txt       # Instruções para rastreadores do Google
```

✍️ Autor
Desenvolvido por José William.

GitHub: @JoseWilliamRF

Localização: Campo Grande - MS
