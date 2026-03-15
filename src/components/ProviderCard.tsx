import { useNavigate } from "react-router-dom";
import type { Provider } from "../types/provider";

function ProviderCard({ provider }: { provider: Provider }) {
  const navigate = useNavigate();

  const formatPrice = () => {
    if (!provider.priceAmount) return "Price not specified";

    const type =
      provider.priceType
        ? provider.priceType.charAt(0).toUpperCase() +
          provider.priceType.slice(1)
        : "";

    return `₹${provider.priceAmount.toLocaleString()}${
      type ? ` / ${type}` : ""
    }`;
  };

  const formatRating = () => {
    return typeof provider.averageRating === "number"
      ? provider.averageRating.toFixed(1)
      : "N/A";
  };

  const photo =
    provider.profilePhoto ||
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 16,
        marginTop: 12,
        display: "flex",
        gap: 16,
        alignItems: "center",
        background: "#fff",
      }}
    >
      {/* Provider Photo */}
      <img
        src={photo}
        alt={provider.userId?.name}
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      {/* Provider Info */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>{provider.userId?.name ?? "Unknown"}</h3>

        <p style={{ margin: "4px 0" }}>{provider.category}</p>

        <p style={{ margin: "4px 0", color: "#666" }}>
          {provider.area}, {provider.city}
        </p>

        <p style={{ margin: "4px 0" }}>{formatPrice()}</p>

        <p style={{ margin: "4px 0" }}>⭐ {formatRating()}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(`/provider/${provider._id}`)}
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>
    </div>
  );
}

export default ProviderCard;