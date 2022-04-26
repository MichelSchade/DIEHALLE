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
        description: 'Wenn du keine Cookies aktivierst, sammeln wir auch keine Daten über dich. Datenschutz steht bei uns an erster Stelle.',
      },
      ganalytics: {
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
    }
  ],
};
