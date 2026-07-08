# Workshop: O Que Um Gestor de Marketplace Faz

Landing page com checkout integrado para workshop de marketplace.

**Evento:** 16 de julho às 18h30  
**Valor:** R$ 27,00  
**Duração:** 1 noite online

## Características

- Landing page responsiva (design original)
- Countdown regressivo
- Checkout via API da InfinitePay
- Página de confirmação
- Integração com WhatsApp
- Deploy na Vercel

## Estrutura

```
├── index.html              (Landing page)
├── confirmado.html         (Página de confirmação)
├── css/                    (Estilos)
├── js/                     (JavaScript)
├── api/
│   ├── create-checkout.js  (Criar checkout)
│   └── payment-check.js    (Verificar pagamento)
├── assets/
│   └── foto-time.jpg       (Foto)
├── package.json
├── vercel.json
└── .gitignore
```

## Deploy

1. Push para GitHub
2. Vercel → Add New Project
3. Selecione este repositório
4. Deploy automático

## Customização

**Link do WhatsApp:** Edite `confirmado.html`, linha ~33

**Preço:** Edite `api/create-checkout.js`, linha ~9
