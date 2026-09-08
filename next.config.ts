import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the LAN hostname used to preview this site on mobile devices.
  allowedDevOrigins: ["192.168.0.32"],
};

export default nextConfig;
