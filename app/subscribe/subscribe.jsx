"use client";

import React from "react";

const Checkout = ({ product }) => {
  const checkout = async () => {
    const data = {
      id: `${product.id}-${Date.now()}`,
      productName: product.name,
      price: product.price,
      quantity: 1,
    };

    try {
      const response = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(response.statusText);

      const { token } = await response.json();
      window.snap.pay(token, {
        onSuccess: function () {
          window.location.href = "http://localhost:3000?status=success";
        },
        onPending: function () {
          window.location.href = "http://localhost:3000?status=pending";
        },
        onError: function () {
          alert("Terjadi kesalahan dalam pembayaran. Silakan coba lagi.");
        },
        onClose: function () {
          console.log("Payment popup closed");
        },
      });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <button
      className="rounded bg-indigo-500 p-4 text-sm font-medium text-white transition hover:scale-105"
      onClick={checkout}
    >
      Subscribe
    </button>
  );
};

export default Checkout;
