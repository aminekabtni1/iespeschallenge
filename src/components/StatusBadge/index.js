import VuiBadge from "components/VuiBadge";
export default function StatusBadge({ label, color }) {
  const value = label.toLowerCase();
  const tone =
    color ||
    (value.includes("finalized") || ["normal", "approved", "low"].includes(value)
      ? "success"
      : value.includes("validation") || ["medium", "pending review", "uncertain"].includes(value)
        ? "warning"
        : ["high", "rejected"].includes(value)
          ? "error"
          : value === "future phase"
            ? "primary"
            : value === "planned"
              ? "secondary"
              : "info");
  return (
    <VuiBadge
      badgeContent={label}
      color={tone}
      variant="contained"
      container
      sx={{
        "& .MuiBadge-badge": {
          margin: 0,
          whiteSpace: "normal",
          lineHeight: 1.5,
          textAlign: "left",
        },
      }}
    />
  );
}
