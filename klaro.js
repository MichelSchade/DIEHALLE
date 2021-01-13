var klaroConfig = {
  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'Parkour Creation e.V. Cookies',
  cookieExpiresAfterDays: 30,
  privacyPolicy: 'https://www.diehalle.hamburg/impressum',
  default: false,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: true,
  lang: 'de',
  translations: {
    de: {
      consentModal: {
        title: 'Cookies',
        description: 'Hier kannst du einsehen und anpassen, welche Information wir über dich sammeln.',
      },
      memberstack: {
        description: 'Mitgliederdaten',
      },
      ganalytics: {
        description: 'Echtzeit-Benutzeranalyse',
      },
      tagmanager: {
        description: 'Echtzeit-Benutzeranalyse',
      },
      hotjar: {
        description: 'Echtzeit-Benutzeranalyse',
      },
      fpixel: {
        description: 'Echtzeit-Benutzeranalyse',
      },
      purposes: {
        analytics: 'Besucher-Statistiken',
        security: 'Sicherheit',
        styling: 'Styling',
      },
    },   
  },
  apps: [
    {
      name: 'hotjar',
      default: false,
      title: 'Hotjar',
      purposes: ['analytics'],
      cookies: ['external-tracker'],
      callback: function(consent, app) {
        console.log(
          'User consent for app ' + app.name + ': consent=' + consent
        );
      },
      required: false,
      optOut: false,
      onlyOnce: true,
    },
    {
      name: 'ganalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['external-tracker'],
      callback: function(consent, app) {
        console.log(
          'User consent for app ' + app.name + ': consent=' + consent
        );
      },
      optOut: false,
    },
    {
      name: 'fpixel',
      title: 'Facebook Pixel',
      purposes: ['analytics'],
      cookies: ['external-tracker'],
      callback: function(consent, app) {
        if (consent == true ) { 
          fbq('consent', 'grant');
          fbq('track', 'PageView');
          window.localStorage.setItem('fbGrantConsent', 'true');
        } else {
          fbq('consent', 'revoke');
          window.localStorage.setItem('fbGrantConsent', 'false');
        };
        console.log(
          'User consent for app ' + app.name + ': consent=' + consent
        );
      },
      optOut: false,
    },
    {
      name: 'memberstack',
      title: 'Memberstack',
      purposes: ['security'],
      cookies: ['external-tracker'],
      callback: function(consent, app) {
        console.log(
          'User consent for app ' + app.name + ': consent=' + consent
        );
      },
      optOut: false,
    },
    {
      name: 'tagmanager',
      title: 'Google Tag Manager',
      purposes: ['analytics'],
      cookies: ['external-tracker'],
      callback: function(consent, app) {
        if (consent !== false) {
          dataLayer.push({'event' : 'loadgtm-analytics'});
        }
        console.log(
          'User consent for app ' + app.name + ': consent=' + consent
        );
      },
      optOut: false,
    },
  ],
};
