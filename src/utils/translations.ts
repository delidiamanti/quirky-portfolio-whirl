export const translations = {
  el: {
    nav: {
      home: 'Αρχική',
      about: 'Σχετικά',
      portfolio: 'Χαρτοφυλάκιο',
      contact: 'Επικοινωνία',
    },
    about: {
      title: 'Σχετικά με εμάς',
      description: 'Η Φανή Δελιδιαμάντη είναι μια ταλαντούχα σχεδιάστρια εσωτερικών χώρων με πάθος για τη δημιουργία μοναδικών και λειτουργικών χώρων. Με την προσοχή της στη λεπτομέρεια και την καινοτόμο προσέγγισή της, μετατρέπει κάθε χώρο σε ένα αριστούργημα που αντανακλά την προσωπικότητα και το όραμα του πελάτη.',
    },
    contact: {
      title: 'Επικοινωνήστε μαζί μας',
      description: 'Ας συζητήσουμε για το επόμενο έργο σας. Είτε πρόκειται για ανακαίνιση σπιτιού είτε για σχεδιασμό ξενοδοχείου, είμαστε εδώ για να βοηθήσουμε να πραγματοποιήσετε το όραμά σας.',
      form: {
        name: 'Όνομα',
        email: 'Email',
        message: 'Μήνυμα',
        submit: 'Αποστολή Μηνύματος',
      },
      contactInfo: {
        title: 'Στοιχεία Επικοινωνίας',
        location: 'Τοποθεσία',
        email: 'Email',
      },
      success: 'Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε σύντομα μαζί σας!',
    },
    footer: {
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      contact: 'Επικοινωνία',
      rights: 'Με επιφύλαξη παντός δικαιώματος.',
      description: 'Σχεδιασμός Εσωτερικών Χώρων & Διαχείριση Έργων στη Σαντορίνη',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    about: {
      title: 'About Us',
      description: 'Fani Delidiamanti is a talented interior designer with a passion for creating unique and functional spaces. With her attention to detail and innovative approach, she transforms every space into a masterpiece that reflects the client\'s personality and vision.',
    },
    contact: {
      title: 'Get in Touch',
      description: 'Let\'s discuss your next project. Whether it\'s a home renovation or a hotel design, we\'re here to help bring your vision to life.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
      contactInfo: {
        title: 'Contact Information',
        location: 'Location',
        email: 'Email',
      },
      success: 'Thank you for your message. We\'ll get back to you soon!',
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      description: 'Interior Design & Project Management in Santorini',
    },
  },
};

export type Language = keyof typeof translations;