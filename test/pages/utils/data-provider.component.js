class DataProviderComponent {
  get randomLetter() {
    const alphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return alphabeth[Math.floor(Math.random() * alphabeth.length)];
  }
}

export default new DataProviderComponent();
