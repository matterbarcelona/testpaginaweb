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
};
