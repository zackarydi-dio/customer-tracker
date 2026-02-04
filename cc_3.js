// Step 2: Create Customer Records
const customers = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Maria Lopez",
    email: "maria.lopez@email.com",
    purchases: ["Phone Case"]
  },
  {
    name: "David Kim",
    email: "david.kim@email.com",
    purchases: ["Headphones", "Keyboard", "Monitor"]
  }
];

// Step 3: Add and Remove Data
customers.push({
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  purchases: ["Tablet"]
});

customers.shift(); // Removes the first customer

// Step 4: Update Customer Info
customers[0].email = "maria.newemail@email.com";
customers[1].purchases.push("Webcam");

// Step 5: Display Customer Information
customers.forEach(customer => {
  console.log(
    `${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});
