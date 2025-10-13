# Analytics Setup Guide for Matter Group

## Overview
This site includes comprehensive analytics tracking for Google Analytics 4 and Meta Pixel. All tracking events are implemented using the `analyticsEvents` utility in `src/lib/analytics.ts`.

## Tracked Events

### 1. CTA Events
- `cta_solicitar_muestra` - Tracks "Solicitar muestra" button clicks
- `cta_reservar_visita` - Tracks "Reservar visita" button clicks
- `cta_solicitar_presupuesto` - Tracks "Solicitar presupuesto" button clicks

### 2. Form Events
- `form_submit_success` - Tracks successful form submissions with form type and user type

### 3. Search & Filter Events
- `biblioteca_busqueda` - Tracks searches and filters in the materials library

### 4. Engagement Events
- `scroll_75` - Tracks when users scroll to 75% of page depth
- `lead_tag` - Tracks lead type classification (prescriptor, fabricante, comprador)

## Installation

### Google Analytics 4
1. Create a GA4 property in Google Analytics
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Open `public/analytics.html`
4. Replace `GA_MEASUREMENT_ID` with your actual measurement ID
5. Copy the script tags to your `index.html` <head> section

### Meta Pixel
1. Create a Meta Pixel in Facebook Business Manager
2. Get your Pixel ID
3. Open `public/analytics.html`
4. Replace `YOUR_PIXEL_ID` with your actual pixel ID
5. Copy the script tags to your `index.html` <head> section

## Custom Events Configuration

All events are pre-configured to work automatically. The tracking happens via:
- Button onClick handlers with `analyticsEvents.ctaSolicitarMuestra(location)`
- Form submission with `analyticsEvents.formSubmitSuccess(formType, userType)`
- Scroll tracking hook `useScrollTracking(pageName)`
- Search/filter interactions with `analyticsEvents.bibliotecaBusqueda(query, filters)`

## Dashboard Metrics

Recommended metrics to track in your GA4 dashboard:
1. **Conversion Rate by Page** - Track which pages convert best
2. **Scroll Depth** - Monitor user engagement (75% milestone)
3. **Time on Page** - Understand content effectiveness
4. **Forms Completed** - Track lead generation success
5. **CTA Performance** - Compare different CTA effectiveness
6. **User Type Distribution** - Understand audience composition

## Testing

Before going live:
1. Install Google Tag Assistant Chrome extension
2. Enable debug mode in GA4
3. Test all CTAs and forms
4. Verify events appear in GA4 DebugView within 5-10 seconds
5. Check Meta Events Manager for pixel events

## Privacy & GDPR

The contact form includes:
- RGPD checkbox (required)
- Privacy policy link
- Clear consent collection

Update your privacy policy to include:
- Google Analytics 4 data collection
- Meta Pixel tracking
- Cookie usage
- User rights (access, deletion, portability)

## Support

For tracking issues:
1. Check browser console for tracking logs
2. Verify analytics scripts are loaded
3. Confirm IDs are correctly configured
4. Review GA4 DebugView for event data
