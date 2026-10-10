export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 28px",
        borderRadius: 50,
        fontSize: 14,
        fontWeight: 600,
        zIndex: 999,
        boxShadow: "0 8px 32px rgba(0,0,0,.12)",
        background:
          toast.type === "success"
            ? "#EBF2ED"
            : "#FDE8E0",
        color:
          toast.type === "success"
            ? "#2D5A3D"
            : "#C0392B",
      }}
    >
      {toast.type === "success" ? "✅" : "❌"} {toast.msg}
    </div>
  );
}