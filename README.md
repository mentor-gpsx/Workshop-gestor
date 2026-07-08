# 🎉 Workshop: O Que Um Gestor de Marketplace Faz

Landing page + checkout automático para o workshop em **16 de julho às 18h30**.

**Valor:** R$ 27,00  
**Duração:** 1 noite (ao vivo)  
**Local:** Online

---

## 🚀 Sobre

Esta é uma landing page profissional com integração de checkout via **API da InfinitePay**.

### Características

✅ Landing page responsiva (mobile + desktop)  
✅ Contador regressivo em tempo real  
✅ Checkout via API (sem link fixo)  
✅ Redirecionamento automático para pagamento  
✅ Página de confirmação elegante  
✅ Integração com grupo WhatsApp  
✅ Funções serverless (Node.js)  
✅ Deploy automático (Vercel)

---

## 📁 Estrutura

```
.
├── index.html              # Landing page
├── confirmado.html         # Página de confirmação
├── css/style.css          # Estilos (dark + cyan)
├── js/main.js             # JavaScript (countdown + checkout)
├── api/
│   ├── create-checkout.js # Cria checkout na InfinitePay
│   └── payment-check.js   # Verifica pagamento
├── assets/foto-time.jpg   # Foto do time
├── vercel.json            # Config Vercel
└── package.json           # Node.js
```

---

## 🔧 Configuração

### Link do WhatsApp

Edite `confirmado.html`, linha ~60:
```javascript
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/SEU_LINK";
```

---

## 📊 Fluxo

```
Clique → POST /api/create-checkout → InfinitePay → Pagamento → Confirmação → WhatsApp
```

---

## 🚀 Deploy na Vercel

1. Push para GitHub
2. Vercel → Add New Project
3. Selecione este repositório
4. Deploy automático

---

## 🛠️ Local

```bash
python3 -m http.server 8000
# Acessa: http://localhost:8000
# (API só funciona na Vercel)
```

---

**Pronto!** 🎉
