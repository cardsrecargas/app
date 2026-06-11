/* =========================================================
   CARDS RECARGAS — CONFIGURAÇÃO DA PÁGINA PORTEIRA
   =========================================================
   Quando um domínio for bloqueado, é SÓ MEXER AQUI:

   1) Coloque o domínio ATIVO em PRIMEIRO na lista.
   2) Deixe os antigos / reservas embaixo (a porteira tenta
      um por um e manda o cliente pro primeiro que estiver no ar).
   3) Regras do endereço: comece com  https://  e NÃO ponha
      barra "/" no final.
   4) Salve. Em ~1 minuto a porteira já está usando o novo.
   ========================================================= */
window.CR_CONFIG = {

  domains: [
    "https://unitvmensal.com"
    // , "https://cardsrecargas.com"      // <- exemplo de reserva (descomente quando registrar)
    // , "https://cardsrecargas.com.br"   // <- exemplo de reserva
  ],

  whatsapp: "https://wa.me/5541987316829",
  whatsappNumber: "(41) 98731-6829",

  // Plano B: se NENHUM domínio responder, a porteira oferece este link
  // (seu Linktree tem WhatsApp + APKs + Loja, e fica num endereço que não é bloqueado).
  linktree: "https://linktr.ee/appcard"
};
