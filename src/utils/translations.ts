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
  },
};

export type Language = keyof typeof translations;