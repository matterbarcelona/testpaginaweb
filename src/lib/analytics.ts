// Analytics tracking utilities for Matter Group

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }
  
  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, eventData);
  }
  
  console.log('Analytics Event:', eventName, eventData);
};

export const analyticsEvents = {
  ctaSolicitarMuestra: (location: string) => 
    trackEvent('cta_solicitar_muestra', { location }),
  
  ctaReservarVisita: (location: string) => 
    trackEvent('cta_reservar_visita', { location }),
  
  ctaSolicitarPresupuesto: (location: string) => 
    trackEvent('cta_solicitar_presupuesto', { location }),
  
  formSubmitSuccess: (formType: string, userType?: string) => 
    trackEvent('form_submit_success', { form_type: formType, user_type: userType }),
  
  bibliotecaBusqueda: (query: string, filters?: Record<string, any>) => 
    trackEvent('biblioteca_busqueda', { query, ...filters }),
  
  scroll75: (page: string) => 
    trackEvent('scroll_75', { page }),
  
  leadTag: (userType: 'prescriptor' | 'fabricante' | 'comprador') => 
    trackEvent('lead_tag', { user_type: userType }),
  
  journalFilterClick: (category: string) => 
    trackEvent('journal_filter_click', { category }),
  
  journalArticleClick: (articleSlug: string, category: string) => 
    trackEvent('journal_article_click', { article_slug: articleSlug, category }),
  
  journalMaterialClick: (materialName: string, articleSlug: string) => 
    trackEvent('journal_material_click', { material: materialName, article_slug: articleSlug }),
  
  newsletterSubmit: (location: string) => 
    trackEvent('newsletter_submit', { location }),
};
