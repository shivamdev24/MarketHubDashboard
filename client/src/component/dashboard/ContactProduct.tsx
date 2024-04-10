import React from "react";

const generateRandomProductName = (): string => {
  const adjectives = [
    "Amazing",
    "Incredible",
    "Fantastic",
    "Awesome",
    "Superb",
    "Marvelous",
  ];
  const nouns = [
    "Product",
    "Item",
    "Creation",
    "Innovation",
    "Invention",
    "Solution",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
};

const generateRandomMessage = (): string => {
  const productName = generateRandomProductName();
  const productPrice = Math.floor(Math.random() * 9001) + 1000; // Random number between 1000 and 10000

  const greetings = [
    "Hi there!",
    "Hello!",
    "Hey!",
    "Greetings!",
    "Hi friend!",
    "Good day!",
  ];

  const productBenefits = [
    `I wanted to let you know about our new product, ${productName}. It's fantastic!`,
    `Have you seen our latest product, ${productName}? It's a game-changer!`,
    `Exciting news! We just released ${productName}, and it's incredible!`,
    `You won't believe the features of our new product, ${productName}. Check it out!`,
    `I'm thrilled to introduce you to ${productName}. It's perfect for you!`,
  ];

  const priceOffer = [
    `And guess what? It's available at an unbeatable price of ₹${productPrice}!`,
    `You'll love the price too. Just ₹${productPrice} for ${productName}!`,
    `We're offering ${productName} at an introductory price of just ₹${productPrice}.`,
    `Don't miss out! ${productName} is now only ₹${productPrice}.`,
    `For a limited time, you can get ${productName} for only ₹${productPrice}!`,
  ];

  // Randomly select a greeting
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  // Randomly select a product benefit message
  const randomProductBenefit =
    productBenefits[Math.floor(Math.random() * productBenefits.length)];

  // Randomly select a price offer message
  const randomPriceOffer =
    priceOffer[Math.floor(Math.random() * priceOffer.length)];

  // Concatenate the messages
  const message = `${randomGreeting} ${randomProductBenefit} ${randomPriceOffer}`;

  return message;
};

const Message: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="bg-indigo-100 border w-96 hover:bg-indigo-500 hover:text-white duration-500 text-indigo-700 border-indigo-300 rounded p-4 mb-4">
      <p className="text-lg font-semibold mb-2 ">{message}</p>
    </div>
  );
};

const ProductMessages: React.FC<{ numMessages: number }> = ({
  numMessages,
}) => {
  const messages = Array.from({ length: numMessages }, () =>
    generateRandomMessage()
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Random Product Messages</h1>
      <div className="flex flex-wrap gap-4">
        {messages.map((message, index) => (
          <div key={index} className=" ">
            <Message message={message} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMessages;
