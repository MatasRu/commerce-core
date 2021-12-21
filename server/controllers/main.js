const PRODUCTS = [
  { value: "1x", name: "CoreProduct® ", price: " $19.99" },
  { value: "2x", name: "CoreProduct® ", price: " $29.99" },
  { value: "3x", name: "CoreProduct® ", price: " $39.99" },
];

module.exports = {
  products: async (req, res) => {
    res.send({ success: true, PRODUCTS });
  },

  getUserOrder: async (req, res) => {
    const { getInputs } = req.body;

    console.log(getInputs);

    if (getInputs.cardInfo.cardNumber.length !== 16) {
      return res.send({
        success: false,
        message: "Credit Card should have 16 numbers",
      });
    }
    if (getInputs.cardInfo.cvv < 100) {
      return res.send({
        success: false,
        message: "Bad Credit Card check CVV and try again",
      });
    }
    res.send({ success: true, message: "Your order is complete" });
  },
};
