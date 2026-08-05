import {
  createContext,
  useContext,
  useState,
} from "react";

const CustomerContext = createContext(null);

const initialCustomers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    mobile: "9876543210",
    dob: "",
    anniversary: "",
    gender: "",
    address: "",
    visits: 18,
    stamps: 4,
    status: "Active",
    totalSpend: 18450,
  },
  {
    id: 2,
    name: "Sita Devi",
    mobile: "9123456780",
    dob: "",
    anniversary: "",
    gender: "",
    address: "",
    visits: 9,
    stamps: 2,
    status: "Active",
    totalSpend: 8950,
  },
  {
    id: 3,
    name: "Rahul Das",
    mobile: "9988776655",
    dob: "",
    anniversary: "",
    gender: "",
    address: "",
    visits: 3,
    stamps: 1,
    status: "Inactive",
    totalSpend: 2100,
  },
];

const initialPurchaseHistory = [];
const initialStampHistory = [];
const initialRewardHistory = [];

function loadData(storageKey, fallbackValue) {
  try {
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      if (Array.isArray(parsedData)) {
        return parsedData;
      }
    }
  } catch (error) {
    console.error(`Unable to load ${storageKey}:`, error);
  }

  return fallbackValue;
}

function loadPurchaseHistory() {
  const savedPurchases = loadData(
    "dhanalaxmi-purchase-history",
    null
  );

  if (Array.isArray(savedPurchases)) {
    return savedPurchases;
  }

  // One-time migration: old stamp entries also represent purchases.
  const legacyStampHistory = loadData(
    "dhanalaxmi-stamp-history",
    []
  );

  return legacyStampHistory.map((entry) => ({
    id: entry.id,
    customerId: entry.customerId,
    date: entry.date,
    time: entry.time,
    billNumber: entry.billNumber,
    purchaseAmount: Number(entry.purchaseAmount) || 0,
    cashierName: entry.cashierName || "",
    stampEarned: true,
    stampReason: "Eligible purchase",
    createdAt: entry.createdAt || entry.id || Date.now(),
  }));
}

function getLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getLocalTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState(() =>
    loadData("dhanalaxmi-customers", initialCustomers)
  );

  const [purchaseHistory, setPurchaseHistory] = useState(() =>
    loadPurchaseHistory()
  );

  const [stampHistory, setStampHistory] = useState(() =>
    loadData(
      "dhanalaxmi-stamp-history",
      initialStampHistory
    )
  );

  const [rewardHistory, setRewardHistory] = useState(() =>
    loadData(
      "dhanalaxmi-reward-history",
      initialRewardHistory
    )
  );

  const saveCustomers = (updatedCustomers) => {
    setCustomers(updatedCustomers);

    try {
      localStorage.setItem(
        "dhanalaxmi-customers",
        JSON.stringify(updatedCustomers)
      );
    } catch (error) {
      console.error("Unable to save customers:", error);
    }
  };

  const savePurchaseHistory = (updatedHistory) => {
    setPurchaseHistory(updatedHistory);

    try {
      localStorage.setItem(
        "dhanalaxmi-purchase-history",
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error(
        "Unable to save purchase history:",
        error
      );
    }
  };

  const saveStampHistory = (updatedHistory) => {
    setStampHistory(updatedHistory);

    try {
      localStorage.setItem(
        "dhanalaxmi-stamp-history",
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error(
        "Unable to save stamp history:",
        error
      );
    }
  };

  const saveRewardHistory = (updatedHistory) => {
    setRewardHistory(updatedHistory);

    try {
      localStorage.setItem(
        "dhanalaxmi-reward-history",
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.error(
        "Unable to save reward history:",
        error
      );
    }
  };

  const mobileExists = (
    mobile,
    ignoredCustomerId = null
  ) => {
    const normalizedMobile = String(mobile).trim();

    return customers.some((customer) => {
      return (
        String(customer.mobile).trim() ===
          normalizedMobile &&
        String(customer.id) !== String(ignoredCustomerId)
      );
    });
  };

  const addCustomer = ({
    name,
    mobile,
    dob = "",
    anniversary = "",
    gender = "",
    address = "",
  }) => {
    const normalizedName = String(name).trim();
    const normalizedMobile = String(mobile).trim();

    if (!normalizedName || !normalizedMobile) {
      return {
        success: false,
        message: "Name and mobile number are required.",
      };
    }

    if (!/^[0-9]{10}$/.test(normalizedMobile)) {
      return {
        success: false,
        message: "Enter a valid 10-digit mobile number.",
      };
    }

    if (mobileExists(normalizedMobile)) {
      return {
        success: false,
        message:
          "A customer with this mobile number already exists.",
      };
    }

    const newCustomer = {
      id: Date.now(),
      name: normalizedName,
      mobile: normalizedMobile,
      dob: String(dob || ""),
      anniversary: String(anniversary || ""),
      gender: String(gender || ""),
      address: String(address || "").trim(),
      visits: 0,
      stamps: 0,
      status: "Active",
      totalSpend: 0,
    };

    saveCustomers([newCustomer, ...customers]);

    return {
      success: true,
      customer: newCustomer,
      message: "Customer added successfully.",
    };
  };

  const updateCustomer = (customerId, updates) => {
    const normalizedName = String(
      updates?.name || ""
    ).trim();

    const normalizedMobile = String(
      updates?.mobile || ""
    ).trim();

    if (!normalizedName || !normalizedMobile) {
      return {
        success: false,
        message: "Name and mobile number are required.",
      };
    }

    if (!/^[0-9]{10}$/.test(normalizedMobile)) {
      return {
        success: false,
        message: "Enter a valid 10-digit mobile number.",
      };
    }

    if (mobileExists(normalizedMobile, customerId)) {
      return {
        success: false,
        message:
          "A customer with this mobile number already exists.",
      };
    }

    let updatedCustomer = null;

    const updatedCustomers = customers.map((customer) => {
      if (String(customer.id) !== String(customerId)) {
        return customer;
      }

      updatedCustomer = {
        ...customer,
        name: normalizedName,
        mobile: normalizedMobile,
        dob: String(updates?.dob || ""),
        anniversary: String(
          updates?.anniversary || ""
        ),
        gender: String(updates?.gender || ""),
        address: String(updates?.address || "").trim(),
      };

      return updatedCustomer;
    });

    if (!updatedCustomer) {
      return {
        success: false,
        message: "Customer could not be found.",
      };
    }

    saveCustomers(updatedCustomers);

    return {
      success: true,
      customer: updatedCustomer,
      message: "Customer updated successfully.",
    };
  };

  const getCustomerById = (customerId) => {
    return customers.find(
      (customer) =>
        String(customer.id) === String(customerId)
    );
  };

  const getPurchaseHistoryByCustomerId = (customerId) => {
    return purchaseHistory
      .filter(
        (entry) =>
          String(entry.customerId) === String(customerId)
      )
      .sort(
        (a, b) =>
          Number(b.createdAt || 0) -
          Number(a.createdAt || 0)
      );
  };

  const getStampHistoryByCustomerId = (customerId) => {
    return stampHistory
      .filter(
        (entry) =>
          String(entry.customerId) === String(customerId)
      )
      .sort(
        (a, b) =>
          Number(b.createdAt || 0) -
          Number(a.createdAt || 0)
      );
  };

  const getRewardHistoryByCustomerId = (customerId) => {
    return rewardHistory
      .filter(
        (entry) =>
          String(entry.customerId) === String(customerId)
      )
      .sort(
        (a, b) =>
          Number(b.createdAt || 0) -
          Number(a.createdAt || 0)
      );
  };

  const addStamp = (customerId, details) => {
    const customer = getCustomerById(customerId);

    if (!customer) {
      return {
        success: false,
        message: "Customer could not be found.",
      };
    }

    const billNumber = String(
      details?.billNumber || ""
    ).trim();

    const cashierName = String(
      details?.cashierName || ""
    ).trim();

    const purchaseAmount = Number(details?.purchaseAmount);

    if (
      !billNumber ||
      !cashierName ||
      !Number.isFinite(purchaseAmount) ||
      purchaseAmount <= 0
    ) {
      return {
        success: false,
        message:
          "Bill number, valid purchase amount, and cashier name are required.",
      };
    }

    const duplicateBill = purchaseHistory.some(
      (entry) =>
        String(entry.billNumber).trim().toLowerCase() ===
        billNumber.toLowerCase()
    );

    if (duplicateBill) {
      return {
        success: false,
        message: "This bill number has already been recorded.",
      };
    }

    const today = getLocalDate();
    const now = Date.now();
    const currentStamps = Number(customer.stamps) || 0;

    const alreadyStampedToday = stampHistory.some(
      (entry) =>
        String(entry.customerId) === String(customerId) &&
        entry.date === today
    );

    let stampEarned = false;
    let stampReason = "";

    if (purchaseAmount < 600) {
      stampReason = "Purchase amount is below ₹600.";
    } else if (currentStamps >= 5) {
      stampReason =
        "Customer already has 5 stamps. Redeem the gift first.";
    } else if (alreadyStampedToday) {
      stampReason =
        "Customer has already received one stamp today.";
    } else {
      stampEarned = true;
      stampReason = "Eligible purchase";
    }

    const purchaseEntry = {
      id: now,
      customerId: customer.id,
      date: today,
      time: getLocalTime(),
      billNumber,
      purchaseAmount,
      cashierName,
      stampEarned,
      stampReason,
      createdAt: now,
    };

    const updatedCustomers = customers.map((item) => {
      if (String(item.id) !== String(customerId)) {
        return item;
      }

      return {
        ...item,
        stamps:
          (Number(item.stamps) || 0) +
          (stampEarned ? 1 : 0),
        visits: (Number(item.visits) || 0) + 1,
        totalSpend:
          (Number(item.totalSpend) || 0) + purchaseAmount,
        status: "Active",
      };
    });

    saveCustomers(updatedCustomers);
    savePurchaseHistory([
      purchaseEntry,
      ...purchaseHistory,
    ]);

    if (stampEarned) {
      const stampEntry = {
        id: now + 1,
        customerId: customer.id,
        date: today,
        time: purchaseEntry.time,
        type: "Stamp Added",
        billNumber,
        purchaseAmount,
        cashierName,
        createdAt: now + 1,
      };

      saveStampHistory([stampEntry, ...stampHistory]);

      return {
        success: true,
        purchaseSaved: true,
        stampAwarded: true,
        message: "Purchase saved and stamp added successfully.",
      };
    }

    return {
      success: true,
      purchaseSaved: true,
      stampAwarded: false,
      message: `Purchase saved. No stamp awarded: ${stampReason}`,
    };
  };

  const redeemGift = (customerId, details) => {
    const customer = getCustomerById(customerId);

    if (!customer) {
      return {
        success: false,
        message: "Customer could not be found.",
      };
    }

    const giftName = String(
      details?.giftName || ""
    ).trim();

    const redeemedBy = String(
      details?.redeemedBy || ""
    ).trim();

    const giftValue = Number(details?.giftValue);

    if (
      !giftName ||
      !redeemedBy ||
      !Number.isFinite(giftValue) ||
      giftValue < 0
    ) {
      return {
        success: false,
        message:
          "Gift name, valid internal gift value, and staff name are required.",
      };
    }

    const currentStamps = Number(customer.stamps) || 0;

    if (currentStamps < 5) {
      return {
        success: false,
        message:
          "At least 5 stamps are required to redeem the free gift.",
      };
    }

    const updatedCustomers = customers.map((item) => {
      if (String(item.id) !== String(customerId)) {
        return item;
      }

      return {
        ...item,
        stamps: 0,
      };
    });

    const now = Date.now();

    const rewardEntry = {
      id: now,
      customerId: customer.id,
      gift: giftName,
      giftValue,
      redeemedBy,
      stampsUsed: 5,
      date: getLocalDate(),
      time: getLocalTime(),
      status: "Redeemed",
      createdAt: now,
    };

    saveCustomers(updatedCustomers);
    saveRewardHistory([
      rewardEntry,
      ...rewardHistory,
    ]);

    return {
      success: true,
      message:
        "Free gift redeemed successfully. Stamps have been reset to 0.",
    };
  };

  const value = {
    customers,
    purchaseHistory,
    stampHistory,
    rewardHistory,
    addCustomer,
    updateCustomer,
    addStamp,
    redeemGift,
    getCustomerById,
    getPurchaseHistoryByCustomerId,
    getStampHistoryByCustomerId,
    getRewardHistoryByCustomerId,
    mobileExists,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomers() {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error(
      "useCustomers must be used inside CustomerProvider"
    );
  }

  return context;
}