const getSites = (category) =>
  ({
    selfHarm: [
      {
        domain: 'suicidepreventionlifeline.org',
        url: 'https://suicidepreventionlifeline.org/',
        phone: '18002738255',
      },
    ],
    mentalHealth: [
      {
        domain: 'psychologytoday.org/us/therapists',
        url: 'https://www.psychologytoday.com/us/therapists',
      },
    ],
    lgbtqiaPlus: [
      {
        domain: 'thetrevorproject.org',
        url: 'https://www.thetrevorproject.org/',
      },
    ],
  }[category] || [])

export { getSites }
