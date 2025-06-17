import { QRCodeGenerator } from "@/pages/qrcode-generator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/qrcode-generator")({
  component: QRCodeGenerator,
});
