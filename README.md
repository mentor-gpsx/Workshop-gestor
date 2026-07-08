# Workshop: O Que Um Gestor de Marketplace Faz

Landing page com checkout integrado para workshop de marketplace.

**Data:** 16 de julho às 18h30  
**Valor:** R$ 27,00  
**Formato:** Online ao vivo

## ✨ Características

- ✅ Landing page responsiva (design original)
- ✅ Countdown regressivo
- ✅ Checkout via API InfinitePay
- ✅ Página de confirmação
- ✅ Integração com WhatsApp
- ✅ Deploy automático na Vercel

## 📁 Estrutura

```
├── index.html              (Landing page)
├── confirmado.html         (Página de confirmação)
├── api/
│   ├── create-checkout.js  (Criar checkout)
│   └── payment-check.js    (Verificar pagamento)
├── assets/
├── css/
├── js/
├── package.json
├── vercel.json
└── .gitignore
```

## 🚀 Deploy na Vercel

1. Push para GitHub
2. Vercel → Add New Project
3. Selecione este repositório
4. Deploy automático

## 📝 Customização

**Link WhatsApp:** Edite `confirmado.html` (linha ~56)

**Preço:** Edite `api/create-checkout.js` (linha ~9)
