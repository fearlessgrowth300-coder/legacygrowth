// Centralized WhatsApp configuration
export const WHATSAPP_NUMBER = "18029097468";

export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
};
