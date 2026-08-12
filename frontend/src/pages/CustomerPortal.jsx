import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function CustomerPortal() {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [customerData, setCustomerData] =
    useState(null);

  const [offers, setOffers] = useState([]);
  const [offersLoading, setOffersLoading] =
    useState(true);

  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = async () => {
    try {
      setOffersLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/offers/public"
      );

      const result = await response.json();

      if (result.success) {
        setOffers(result.offers || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setOffersLoading(false);
    }
  };

  const checkRewards = async () => {
    const cleanMobile = mobile.trim();

    if (!/^\d{10}$/.test(cleanMobile)) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      setCustomerData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setCustomerData(null);

      const response = await fetch(
        `http://localhost:5000/api/customer-portal/${cleanMobile}`
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to check loyalty status."
        );
      }

      setCustomerData(result);
    } catch (err) {
      setError(
        err.message ||
          "Unable to check loyalty status."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkRewards();
    }
  };

  const openGoogleReview = () => {
    window.open(
      "https://search.google.com/local/writereview?placeid=ChIJ562ftvWlIjoRIwVZQdNYads",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FA",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 4,
          }}
        >
          <CardContent>
            <Stack spacing={3}>
              {/* HEADER */}
              <Box
  sx={{
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="#0D3B66"
                >
                  Dhanalaxmi Mart
                </Typography>

                <Typography
                  sx={{
                    color: "#B38728",
                    fontWeight: 600,
                  }}
                >
                  Save More Every Day!
                </Typography>
              </Box>
{/* HERO BANNER */}
<Card
  sx={{
    borderRadius: 4,
    background:
      "linear-gradient(135deg,#0D2747,#163F68)",
    color: "#fff",
    overflow: "hidden",
  }}
>
  <CardContent
    sx={{
      textAlign: "center",
      py: 3,
    }}
  >
    <Typography
      variant="h5"
      fontWeight={800}
      gutterBottom
    >
      🎁 Loyalty Rewards Program
    </Typography>

    <Typography
      sx={{
        color: "#D4AF37",
        fontWeight: 700,
        mb: 2,
      }}
    >
      Shop More. Collect Stamps. Get Free Gifts!
    </Typography>

    <Stack
  direction="row"
  sx={{
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
  }}
>
      <Box
  sx={{
    textAlign: "center",
  }}
>
        <Typography
          variant="h6"
          fontWeight={800}
        >
          ₹600+
        </Typography>
        <Typography variant="caption">
          Purchase
        </Typography>
      </Box>

      <Typography
        sx={{ color: "#D4AF37" }}
      >
        →
      </Typography>

      <Box
  sx={{
    textAlign: "center",
  }}
>
        <Typography
          variant="h6"
          fontWeight={800}
        >
          1 Stamp
        </Typography>
        <Typography variant="caption">
          Per Day
        </Typography>
      </Box>

      <Typography
        sx={{ color: "#D4AF37" }}
      >
        →
      </Typography>

      <Box
  sx={{
    textAlign: "center",
  }}
>
        <Typography
          variant="h6"
          fontWeight={800}
        >
          5 Stamps
        </Typography>
        <Typography variant="caption">
          Collect
        </Typography>
      </Box>

      <Typography
        sx={{ color: "#D4AF37" }}
      >
        →
      </Typography>

      <Box
  sx={{
    textAlign: "center",
  }}
>
        <Typography
          variant="h6"
          fontWeight={800}
        >
          FREE Gift
        </Typography>
        <Typography variant="caption">
          Reward
        </Typography>
      </Box>
    </Stack>
  </CardContent>
</Card>
              {/* MOBILE SEARCH */}
              <TextField
                label="Mobile Number"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10)
                  )
                }
                onKeyDown={handleKeyDown}
                fullWidth
              />

              <Button
                variant="contained"
                size="large"
                onClick={checkRewards}
                disabled={loading}
                sx={{
                  bgcolor: "#0D3B66",
                }}
              >
                {loading ? (
                  <CircularProgress
                    size={22}
                    color="inherit"
                  />
                ) : (
                  "Check My Rewards"
                )}
              </Button>

              {error && (
                <Alert severity="error">
                  {error}
                </Alert>
              )}

              {customerData && (
                <>
                  {/* CUSTOMER */}
                  <Card variant="outlined">
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                      >
                        Welcome,{" "}
                        {
                          customerData.customer
                            .name
                        }
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        Mobile:{" "}
                        {
                          customerData.customer
                            .mobile
                        }
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        Visits:{" "}
                        {
                          customerData.customer
                            .totalVisits
                        }
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* LOYALTY CARD */}
                  <Card
                    sx={{
                      borderRadius: 4,
                      background:
                        "linear-gradient(135deg,#0D2747,#163F68)",
                      color: "#fff",
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2}>
                        <Box
  sx={{
    textAlign: "center",
  }}
>
                          <Typography
                            variant="h6"
                            fontWeight={800}
                          >
                            DHANALAXMI MART
                          </Typography>

                          <Typography
                            sx={{
                              color: "#D4AF37",
                            }}
                          >
                            Shop More. Collect
                            Stamps. Get Free Gifts!
                          </Typography>
                        </Box>

                        <Stack
                          direction="row"
                          justifyContent="center"
                          spacing={1}
                        >
                          {Array.from({
                            length:
                              customerData.loyalty
                                .stampsRequired,
                          }).map((_, index) => {
                            const earned =
                              index <
                              customerData.loyalty
                                .currentStamps;

                            return (
                              <Box
                                key={index}
                                sx={{
                                  width: 50,
                                  height: 50,
                                  borderRadius:
                                    "50%",
                                  border:
                                    "2px solid #D4AF37",
                                  display:
                                    "flex",
                                  alignItems:
                                    "center",
                                  justifyContent:
                                    "center",
                                  bgcolor:
                                    earned
                                      ? "#D4AF37"
                                      : "transparent",
                                  color:
                                    earned
                                      ? "#0D2747"
                                      : "#D4AF37",
                                  fontWeight:
                                    700,
                                }}
                              >
                                {earned
                                  ? "★"
                                  : index + 1}
                              </Box>
                            );
                          })}
                        </Stack>

                        <Typography
                          align="center"
                          variant="h4"
                          fontWeight={800}
                        >
                          {
                            customerData.loyalty
                              .currentStamps
                          }
                          /
                          {
                            customerData.loyalty
                              .stampsRequired
                          }
                        </Typography>

                        <Typography
                          align="center"
                          variant="caption"
                        >
                          Maximum 1 Stamp per Day
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* REWARD STATUS */}
                  <Card variant="outlined">
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                      >
                        Reward Status
                      </Typography>

                      {customerData.loyalty
                        .rewardEligible ? (
                        <Typography color="success.main">
                          🎉 Your FREE Gift is
                          ready for collection.
                        </Typography>
                      ) : (
                        <Typography color="text.secondary">
                          Need{" "}
                          {
                            customerData.loyalty
                              .remainingStamps
                          }{" "}
                          more stamp(s) to receive
                          your FREE Gift.
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </>
              )}

              {/* OFFERS */}
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                  >
                    🔥 Today's Offers ({offers.length})
                  </Typography>

                  {offersLoading ? (
                    <Typography color="text.secondary">
                      Loading offers...
                    </Typography>
                  ) : offers.length === 0 ? (
                    <Typography color="text.secondary">
                      No active offers available.
                    </Typography>
                  ) : (
                    <Stack spacing={2}>
                      {offers.map((offer) => (
                        <Box
  key={offer.id}
  sx={{
    p: 2,
    borderRadius: 2,
    bgcolor: "#F5F7FA",
    textAlign: "center",
  }}
>
{offer.imageUrl && (
  <Box
    component="img"
    src={`http://localhost:5000${offer.imageUrl}`}
    alt={offer.title}
    sx={{
      width: "100%",
      maxHeight: 260,
      objectFit: "cover",
      borderRadius: 2,
      mb: 2,
      display: "block",
    }}
  />
)}
                          <Typography
                            fontWeight={700}
                          >
                            {offer.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {
                              offer.description
                            }
                          </Typography>

                          <Typography
                            variant="caption"
                            sx={{
                              color:
                                "#B38728",
                              display:
                                "block",
                              mt: 1,
                            }}
                          >
                            Valid Till: {
  new Date(
    offer.endDate
  ).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  )
}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </Card>
              {/* STORE INFORMATION */}
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    align="center"
                  >
                    🏪 Store Information
                  </Typography>

                  <Stack
  spacing={1.2}
  sx={{
    alignItems: "center",
    textAlign: "center",
  }}
>
                    <Typography fontWeight={700}>
                      Dhanalaxmi Mart
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      📍 College Square, Polasara,
                      Ganjam, Odisha
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      🕘 Open Daily: 9:00 AM – 9:00 PM
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      🌐 www.dhanalaxmimart.com
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      📞 9777790769 / 9861268068
                    </Typography>
                  </Stack>

                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={1.2}
                    sx={{
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        window.location.href =
                          "tel:+919777790769";
                      }}
                      sx={{
                        bgcolor: "#0D3B66",
                        "&:hover": {
                          bgcolor: "#092E50",
                        },
                      }}
                    >
                      📞 Call Now
                    </Button>

                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps/search/?api=1&query=Dhanalaxmi+Mart+College+Square+Polasara+Ganjam",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      📍 Directions
                    </Button>
                  </Stack>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 1.2,
                    }}
                    onClick={() =>
                      window.open(
                        "https://wa.me/919777790769",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    💬 WhatsApp Us
                  </Button>
                </CardContent>
              </Card>

              {/* GOOGLE REVIEW */}
              <Button
                variant="contained"
                fullWidth
                onClick={openGoogleReview}
                sx={{
                  bgcolor: "#D4AF37",
                  color: "#0D2747",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#C39A28",
                  },
                }}
              >
                ⭐ Leave a Google Review
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  textAlign: "center",
                }}
              >
                Dhanalaxmi Mart • College Square,
                Polasara, Ganjam
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}