import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  fetchCustomers,
  createCustomer as createCustomerApi,
  updateCustomer as updateCustomerApi,
} from "../services/customerApi";

import {
  fetchPurchases,
  createPurchase,
} from "../services/purchaseApi";

import {
  fetchRewards,
  redeemReward,
} from "../services/rewardApi";

const CustomerContext = createContext(null);

function normalizeCustomer(customer) {
  return {
    ...customer,

    dob: customer.dob || "",
    anniversary: customer.anniversary || "",
    gender: customer.gender || "",
    address: customer.address || "",

    visits:
      Number(
        customer.totalVisits ?? customer.visits
      ) || 0,

    totalVisits:
      Number(
        customer.totalVisits ?? customer.visits
      ) || 0,

    stamps: Number(customer.stamps) || 0,
    totalSpend: Number(customer.totalSpend) || 0,

    status: customer.status || "Active",
  };
}

function normalizePurchase(purchase) {
  return {
    ...purchase,

    purchaseAmount:
      Number(purchase.purchaseAmount) || 0,

    stampEarned:
      Boolean(purchase.stampEarned),

    date:
      purchase.purchaseDate ||
      purchase.date ||
      "",

    time:
      purchase.purchaseTime ||
      purchase.time ||
      "",

    createdAt:
      purchase.createdAt || "",
  };
}

function normalizeReward(reward) {
  return {
    ...reward,

    gift:
      reward.giftName ||
      reward.gift ||
      "Free Gift",

    giftName:
      reward.giftName ||
      reward.gift ||
      "Free Gift",

    giftValue:
      Number(reward.giftValue) || 0,

    date:
      reward.redemptionDate ||
      reward.date ||
      "",

    time:
      reward.redemptionTime ||
      reward.time ||
      "",

    status:
      reward.status || "Redeemed",

    createdAt:
      reward.createdAt || "",
  };
}

function sortNewestFirst(entries) {
  return [...entries].sort((a, b) => {
    const firstDate = new Date(
      a.createdAt || 0
    ).getTime();

    const secondDate = new Date(
      b.createdAt || 0
    ).getTime();

    return secondDate - firstDate;
  });
}

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [purchaseHistory, setPurchaseHistory] =
    useState([]);
  const [rewardHistory, setRewardHistory] =
    useState([]);

  const [loading, setLoading] = useState(true);
  const [contextError, setContextError] =
    useState("");

  const refreshData = useCallback(async () => {
    try {
      setLoading(true);
      setContextError("");

      const [
        customerData,
        purchaseData,
        rewardData,
      ] = await Promise.all([
        fetchCustomers(),
        fetchPurchases(),
        fetchRewards(),
      ]);

      setCustomers(
        Array.isArray(customerData)
          ? customerData.map(normalizeCustomer)
          : []
      );

      setPurchaseHistory(
        Array.isArray(purchaseData)
          ? purchaseData.map(normalizePurchase)
          : []
      );

      setRewardHistory(
        Array.isArray(rewardData)
          ? rewardData.map(normalizeReward)
          : []
      );
    } catch (error) {
      console.error(
        "Unable to load customer data:",
        error
      );

      setContextError(
        error.message ||
          "Unable to load customer information."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const mobileExists = (
    mobile,
    ignoredCustomerId = null
  ) => {
    const normalizedMobile = String(
      mobile || ""
    ).trim();

    return customers.some((customer) => {
      return (
        String(customer.mobile).trim() ===
          normalizedMobile &&
        String(customer.id) !==
          String(ignoredCustomerId)
      );
    });
  };

  const addCustomer = async (customerData) => {
    const normalizedName = String(
      customerData?.name || ""
    ).trim();

    const normalizedMobile = String(
      customerData?.mobile || ""
    ).trim();

    if (!normalizedName || !normalizedMobile) {
      return {
        success: false,
        message:
          "Name and mobile number are required.",
      };
    }

    if (!/^[0-9]{10}$/.test(normalizedMobile)) {
      return {
        success: false,
        message:
          "Enter a valid 10-digit mobile number.",
      };
    }

    if (mobileExists(normalizedMobile)) {
      return {
        success: false,
        message:
          "A customer with this mobile number already exists.",
      };
    }

    try {
      const savedCustomer =
        await createCustomerApi({
          ...customerData,
          name: normalizedName,
          mobile: normalizedMobile,
        });

      const normalizedCustomer =
        normalizeCustomer(savedCustomer);

      setCustomers((currentCustomers) => [
        normalizedCustomer,
        ...currentCustomers,
      ]);

      return {
        success: true,
        customer: normalizedCustomer,
        message: "Customer added successfully.",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.message ||
          "Unable to create customer.",
      };
    }
  };

  const updateCustomer = async (
    customerId,
    updates
  ) => {
    const normalizedName = String(
      updates?.name || ""
    ).trim();

    const normalizedMobile = String(
      updates?.mobile || ""
    ).trim();

    if (!normalizedName || !normalizedMobile) {
      return {
        success: false,
        message:
          "Name and mobile number are required.",
      };
    }

    if (!/^[0-9]{10}$/.test(normalizedMobile)) {
      return {
        success: false,
        message:
          "Enter a valid 10-digit mobile number.",
      };
    }

    if (
      mobileExists(
        normalizedMobile,
        customerId
      )
    ) {
      return {
        success: false,
        message:
          "A customer with this mobile number already exists.",
      };
    }

    try {
      const savedCustomer =
        await updateCustomerApi(
          customerId,
          {
            ...updates,
            name: normalizedName,
            mobile: normalizedMobile,
          }
        );

      const normalizedCustomer =
        normalizeCustomer(savedCustomer);

      setCustomers((currentCustomers) =>
        currentCustomers.map((customer) =>
          String(customer.id) ===
          String(customerId)
            ? normalizedCustomer
            : customer
        )
      );

      return {
        success: true,
        customer: normalizedCustomer,
        message:
          "Customer updated successfully.",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.message ||
          "Unable to update customer.",
      };
    }
  };

  const getCustomerById = (customerId) => {
    return customers.find(
      (customer) =>
        String(customer.id) ===
        String(customerId)
    );
  };

  const getPurchaseHistoryByCustomerId = (
    customerId
  ) => {
    return sortNewestFirst(
      purchaseHistory.filter(
        (purchase) =>
          String(purchase.customerId) ===
          String(customerId)
      )
    );
  };

  const stampHistory = useMemo(() => {
    return purchaseHistory
      .filter(
        (purchase) => purchase.stampEarned
      )
      .map((purchase) => ({
        id: `stamp-${purchase.id}`,
        customerId: purchase.customerId,
        billNumber: purchase.billNumber,
        purchaseAmount:
          Number(purchase.purchaseAmount) || 0,
        cashierName:
          purchase.cashierName || "",
        type: "Stamp Added",
        transactionType: "Stamp Added",
        date:
          purchase.purchaseDate ||
          purchase.date ||
          "",
        time:
          purchase.purchaseTime ||
          purchase.time ||
          "",
        createdAt:
          purchase.createdAt || "",
      }));
  }, [purchaseHistory]);

  const getStampHistoryByCustomerId = (
    customerId
  ) => {
    return sortNewestFirst(
      stampHistory.filter(
        (entry) =>
          String(entry.customerId) ===
          String(customerId)
      )
    );
  };

  const getRewardHistoryByCustomerId = (
    customerId
  ) => {
    return sortNewestFirst(
      rewardHistory.filter(
        (reward) =>
          String(reward.customerId) ===
          String(customerId)
      )
    );
  };

  /*
   * Compatibility method for the Billing page.
   * Saves through POST /api/purchases.
   */
  const addStamp = async (
    customerId,
    details
  ) => {
    try {
      const result = await createPurchase({
        customerId,
        billNumber: details?.billNumber,
        purchaseAmount:
          Number(details?.purchaseAmount),
        cashierName: details?.cashierName,
      });

      await refreshData();

      return result;
    } catch (error) {
      return {
        success: false,
        message:
          error.message ||
          "Unable to save purchase.",
      };
    }
  };

  /*
   * Compatibility method for the Loyalty page.
   * Saves through POST /api/rewards/redeem.
   */
  const redeemGift = async (
    customerId,
    details
  ) => {
    try {
      const result = await redeemReward({
        customerId,
        giftName: details?.giftName,
        giftValue:
          Number(details?.giftValue),
        redeemedBy: details?.redeemedBy,
      });

      await refreshData();

      return result;
    } catch (error) {
      return {
        success: false,
        message:
          error.message ||
          "Unable to redeem gift.",
      };
    }
  };

  const value = {
    customers,
    purchaseHistory,
    stampHistory,
    rewardHistory,

    loading,
    customersLoading: loading,
    contextError,
    customersError: contextError,

    addCustomer,
    updateCustomer,
    addStamp,
    redeemGift,

    getCustomerById,
    getPurchaseHistoryByCustomerId,
    getStampHistoryByCustomerId,
    getRewardHistoryByCustomerId,

    mobileExists,
    refreshData,
    refreshCustomers: refreshData,
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