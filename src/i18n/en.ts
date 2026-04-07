export const en = {
  // ─── Navigation ────────────────────────────────────────────────
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.team': 'Our Team',
  'nav.about': 'About Us',
  'nav.contact': 'Contact',
  'nav.book': 'Book Appointment',
  'nav.lang': 'Español',

  // ─── Hero Section ──────────────────────────────────────────────
  'hero.title': 'Compassionate Care for Every Pet',
  'hero.subtitle': 'Traditional and holistic veterinary medicine in Chino, CA. Open every day, emergencies welcome.',
  'hero.cta.primary': 'Book an Appointment',
  'hero.cta.secondary': 'Our Services',
  'hero.badge': 'Mon–Fri 9AM–7PM · Weekends 24hr Emergency',

  // ─── Services Section ──────────────────────────────────────────
  'services.title': 'Our Services',
  'services.subtitle': 'Comprehensive veterinary care with a holistic approach.',
  'services.emergency.title': 'Emergency Care',
  'services.emergency.description': 'Emergencies welcome every day of the year. Your pet\'s health is our priority.',
  'services.wellness.title': 'Wellness & Prevention',
  'services.wellness.description': 'Vaccinations, annual exams, and preventive care to keep your pet healthy.',
  'services.surgery.title': 'Surgery',
  'services.surgery.description': 'Soft tissue surgery performed by our experienced team.',
  'services.holistic.title': 'Holistic Medicine',
  'services.holistic.description': 'Acupuncture, alternative therapies, and integrative care.',
  'services.dental.title': 'Dentistry',
  'services.dental.description': 'Full dental care including cleanings, extractions, and oral health.',
  'services.exotic.title': 'Exotic Animals',
  'services.exotic.description': 'Specialized care for exotic pets and non-traditional animals.',

  // ─── About / Team Section ──────────────────────────────────────
  'team.title': 'Meet Our Team',
  'team.subtitle': 'Dedicated professionals who love animals as much as you do.',
  'team.dr_sanchez.name': 'Dr. Darlene O. Sanchez, DVM',
  'team.dr_sanchez.title': 'Veterinarian & President',
  'team.dr_sanchez.specialties': 'Exotic Medicine · Acupuncture · Feline Medicine · Critical Care · Surgery · Dentistry',

  // ─── Why Choose Us ─────────────────────────────────────────────
  'why.title': 'Why Choose Loving Hands?',
  'why.hours.title': 'Open Mon – Fri',
  'why.hours.description': 'General veterinary care Monday through Friday, 9:00 AM to 7:00 PM. No appointment needed for urgent cases.',
  'why.holistic.title': 'Holistic Approach',
  'why.holistic.description': 'We combine traditional medicine with holistic therapies for whole-body wellness.',
  'why.emergency.title': 'Weekend Emergency Hospital',
  'why.emergency.description': 'Open 24 hours Saturday and Sunday. No appointment needed — walk in and we will take care of your pet.',
  'why.quality.title': 'High-Quality Medicine',
  'why.quality.description': 'State-of-the-art equipment and evidence-based treatments.',

  // ─── Contact Section ───────────────────────────────────────────
  'contact.title': 'Get in Touch',
  'contact.subtitle': 'We\'re here for you and your pet.',
  'contact.address.label': 'Address',
  'contact.address.value': '4108 Edison Ave. Suite 111, Chino, CA 91710',
  'contact.phone.label': 'Phone',
  'contact.phone.value': '(909) 591-CARE (2273)',
  'contact.text.label': 'Text Us',
  'contact.text.value': '(909) 270-7277',
  'contact.email.label': 'Email',
  'contact.email.value': 'lovinghandsanimalhospital@gmail.com',
  'contact.hours.label': 'Hours',
  'contact.hours.value': 'Mon–Fri 9:00 AM–7:00 PM · Sat–Sun 24hr Emergency',

  // ─── Footer ────────────────────────────────────────────────────
  'footer.tagline': 'High Quality Medicine · Compassionate Care · Superb Customer Service',
  'footer.copyright': '© {year} Loving Hands Animal Hospital. All rights reserved.',
  'footer.social.facebook': 'Facebook',
  'footer.developed_by': 'Developed by',
  'footer.services.title': 'Our Services',
  'footer.hours.title': 'Hours',

  // ─── SEO / Meta ────────────────────────────────────────────────
  'meta.home.title': 'Loving Hands Animal Hospital | Veterinary Care in Chino, CA',
  'meta.home.description': 'Full-service veterinary hospital in Chino, CA. Mon–Fri 9am–7pm. Weekend 24-hour emergency hospital. Traditional & holistic medicine. Call (909) 591-2273.',

  // ─── Emergency Banner ──────────────────────────────────────────
'emergency.banner.text': 'Weekend Emergency Hospital',
'emergency.banner.sub': 'Open Sat & Sun · 24 Hours · No Appointment Needed',
'emergency.banner.cta': 'Call Now',

// ─── Hours (updated) ───────────────────────────────────────────
'hours.weekday.label': 'Mon – Fri',
'hours.weekday.value': '9:00 AM – 7:00 PM',
'hours.weekend.label': 'Sat – Sun',
'hours.weekend.value': '24-Hour Emergency',

// ─── Testimonials ──────────────────────────────────────────────
'testimonials.title': 'What Our Clients Say',
'testimonials.subtitle': 'Real reviews from real pet owners in Chino, CA.',
'testimonials.yelp_cta': 'Read more reviews on Yelp →',




} as const;

export type TranslationKey = keyof typeof en;
